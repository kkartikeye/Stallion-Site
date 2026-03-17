"use server";

import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const initialState: ContactFormState = {
  status: "idle",
};

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

async function saveSubmissionForDevelopment(payload: {
  company: string;
  email: string;
  message: string;
  name: string;
}) {
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
  const message = getFieldValue(formData, "message");
  const website = getFieldValue(formData, "website");

  if (website) {
    return initialState;
  }

  if (!name || !company || !email || !message) {
    return {
      status: "error",
      message: "Please complete all fields before submitting your inquiry.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const payload = {
    company,
    email,
    message,
    name,
  };

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (webhookUrl) {
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

      if (!response.ok) {
        return {
          status: "error",
          message:
            "Your inquiry could not be sent right now. Please try again or contact us directly.",
        };
      }

      return {
        status: "success",
        message:
          "Your inquiry has been sent. Our team will get back to you shortly.",
      };
    } catch {
      return {
        status: "error",
        message:
          "Your inquiry could not be sent right now. Please try again or contact us directly.",
      };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    await saveSubmissionForDevelopment(payload);

    return {
      status: "success",
      message:
        "Inquiry captured locally for development. Add CONTACT_FORM_WEBHOOK_URL to route submissions in production.",
    };
  }

  return {
    status: "error",
    message: `The contact form is not configured yet. Please email ${siteConfig.email} or call ${siteConfig.phone}.`,
  };
}
