"use server";

import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";
import {
  type ContactFieldErrors,
  type ContactSubmission,
  validateContactSubmission,
} from "@/lib/validation";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string; reference: string }
  | { status: "error"; message: string; fieldErrors?: ContactFieldErrors };

type ContactSubmissionPayload = ContactSubmission;

const initialState: ContactFormState = {
  status: "idle",
};

function createSubmissionReference() {
  const now = new Date();
  const stamp = now.toISOString().slice(2, 10).replace(/-/g, "");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `SAP-${stamp}-${suffix}`;
}
const defaultContactRecipient = "stallionauto1@gmail.com";

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

// Strip CR/LF so submitter-controlled values can't be used for email header
// injection when interpolated into the subject line (defense in depth —
// nodemailer also encodes headers).
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function getClientKey() {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip")?.trim() ||
    "unknown";

  return `contact:${ip}`;
}

function getMailTransport() {
  const smtpUrl = process.env.SMTP_URL?.trim();

  if (smtpUrl) {
    return nodemailer.createTransport(smtpUrl);
  }

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    return null;
  }

  const parsedPort = Number(process.env.SMTP_PORT ?? "587");
  const port = Number.isFinite(parsedPort) ? parsedPort : 587;
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  return nodemailer.createTransport({
    auth: {
      pass,
      user,
    },
    host,
    port,
    secure,
  });
}

function buildSubmissionEmailText(payload: ContactSubmissionPayload) {
  const fieldValue = (value: string) => value || "Not provided";

  return [
    "New contact form submission from Stallion Auto Parts.",
    "",
    `Submitted at: ${new Date().toISOString()}`,
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${fieldValue(payload.email)}`,
    `Phone / WhatsApp: ${fieldValue(payload.phone)}`,
    `Inquiry Type: ${fieldValue(payload.inquiryType)}`,
    `Product Family: ${fieldValue(payload.productFamily)}`,
    `Estimated Quantity / Volume: ${fieldValue(payload.quantity)}`,
    "",
    "Requirement Details:",
    payload.message,
  ].join("\n");
}

async function sendSubmissionEmail(payload: ContactSubmissionPayload) {
  const transport = getMailTransport();

  if (!transport) {
    return false;
  }

  const from =
    process.env.CONTACT_FORM_FROM_EMAIL?.trim()
    || process.env.SMTP_USER?.trim()
    || defaultContactRecipient;
  const to =
    process.env.CONTACT_FORM_TO_EMAIL?.trim() || defaultContactRecipient;
  const inquiryLabel = sanitizeHeaderValue(payload.inquiryType || "Website Inquiry");
  const company = sanitizeHeaderValue(payload.company);

  await transport.sendMail({
    from,
    replyTo: payload.email || undefined,
    subject: `[Stallion Site] ${inquiryLabel} from ${company}`,
    text: buildSubmissionEmailText(payload),
    to,
  });

  return true;
}

async function saveSubmissionForDevelopment(payload: ContactSubmissionPayload) {
  const outputPath = join("/tmp", "stallion-contact-submissions.jsonl");

  await mkdir(dirname(outputPath), { recursive: true });
  await appendFile(
    outputPath,
    `${JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    })}\n`,
    "utf8",
  );
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = getFieldValue(formData, "name");
  const company = getFieldValue(formData, "company");
  const email = getFieldValue(formData, "email");
  const phone = getFieldValue(formData, "phone");
  const inquiryType = getFieldValue(formData, "inquiryType");
  const productFamily = getFieldValue(formData, "productFamily");
  const quantity = getFieldValue(formData, "quantity");
  const message = getFieldValue(formData, "message");
  const website = getFieldValue(formData, "website");

  if (website) {
    return initialState;
  }

  const rate = checkRateLimit(await getClientKey());
  if (!rate.allowed) {
    return {
      status: "error",
      message:
        "You've sent several inquiries in a short time. Please wait a moment and try again.",
    };
  }

  const validated = validateContactSubmission({
    company,
    email,
    inquiryType,
    message,
    name,
    phone,
    productFamily,
    quantity,
  });

  if (!validated.ok) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors: validated.error,
    };
  }

  const payload = validated.value;

  let delivered = false;
  let hasDeliveryTarget = false;
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  try {
    const mailSent = await sendSubmissionEmail(payload);

    if (mailSent) {
      delivered = true;
      hasDeliveryTarget = true;
    }
  } catch (error) {
    hasDeliveryTarget = true;
    console.error("Contact form email delivery failed", error);
  }

  if (webhookUrl) {
    hasDeliveryTarget = true;

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          source: "stallion-site-contact-form",
          submittedAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (response.ok) {
        delivered = true;
      } else {
        console.error("Contact form webhook delivery failed", response.status);
      }
    } catch (error) {
      console.error("Contact form webhook delivery failed", error);
    }
  }

  if (delivered) {
    return {
      status: "success",
      message:
        "Your inquiry has been sent. Our team will get back to you shortly.",
      reference: createSubmissionReference(),
    };
  }

  if (hasDeliveryTarget) {
    return {
      status: "error",
      message:
        "Your inquiry could not be sent right now. Please try again or contact us directly.",
    };
  }

  if (process.env.NODE_ENV !== "production") {
    await saveSubmissionForDevelopment(payload);

    return {
      status: "success",
      message:
        "Inquiry captured locally for development. Configure SMTP or CONTACT_FORM_WEBHOOK_URL to route submissions in production.",
      reference: createSubmissionReference(),
    };
  }

  return {
    status: "error",
    message: `The contact form is not configured for email delivery yet. Please email ${siteConfig.email} or call ${siteConfig.phone}.`,
  };
}
