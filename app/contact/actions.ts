"use server";

import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type ContactSubmissionPayload = {
  company: string;
  email: string;
  inquiryType: string;
  message: string;
  name: string;
  phone: string;
  productFamily: string;
  quantity: string;
};

const initialState: ContactFormState = {
  status: "idle",
};
const defaultContactRecipient = "stallionauto1@gmail.com";

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
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
  const inquiryLabel = payload.inquiryType || "Website Inquiry";

  await transport.sendMail({
    from,
    replyTo: payload.email || undefined,
    subject: `[Stallion Site] ${inquiryLabel} from ${payload.company}`,
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

  if (!name || !company || !message) {
    return {
      status: "error",
      message: "Please complete all required fields before submitting your inquiry.",
    };
  }

  if (!email && !phone) {
    return {
      status: "error",
      message: "Please provide either an email address or a phone / WhatsApp number.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const payload = {
    company,
    email,
    inquiryType,
    message,
    name,
    phone,
    productFamily,
    quantity,
  };

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
    };
  }

  return {
    status: "error",
    message: `The contact form is not configured for email delivery yet. Please email ${siteConfig.email} or call ${siteConfig.phone}.`,
  };
}
