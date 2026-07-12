/**
 * Type-safe validation core, shared by the contact form (client) and the
 * contact server action. Pure functions only — no IO, no framework imports —
 * so every rule lives in exactly one place and is trivially testable.
 */

// --- Result type ----------------------------------------------------------

export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export const ok = <T>(value: T): Result<T, never> => ({ ok: true, value });
export const err = <E>(error: E): Result<never, E> => ({ ok: false, error });

// --- Contact form domain --------------------------------------------------

export type ContactSubmission = {
  company: string;
  email: string;
  inquiryType: string;
  message: string;
  name: string;
  phone: string;
  productFamily: string;
  quantity: string;
};

export type ContactField = keyof ContactSubmission;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9()\-\s.]{7,20}$/;

// --- Field validators (pure) ----------------------------------------------

export function validateName(value: string): Result<string, string> {
  const trimmed = value.trim();

  if (!trimmed) {
    return err("Please enter your name.");
  }

  return ok(trimmed);
}

export function validateCompany(value: string): Result<string, string> {
  const trimmed = value.trim();

  if (!trimmed) {
    return err("Please enter your company name.");
  }

  return ok(trimmed);
}

export function validateEmail(value: string): Result<string, string> {
  const trimmed = value.trim();

  // Email is optional when a phone number is provided; the cross-field rule
  // lives in validateContactSubmission.
  if (!trimmed) {
    return ok("");
  }

  if (!EMAIL_PATTERN.test(trimmed)) {
    return err("Please enter a valid email address.");
  }

  return ok(trimmed);
}

export function validatePhone(value: string): Result<string, string> {
  const trimmed = value.trim();

  if (!trimmed) {
    return ok("");
  }

  if (!PHONE_PATTERN.test(trimmed)) {
    return err("Please enter a valid phone number.");
  }

  return ok(trimmed);
}

export function validateMessage(value: string): Result<string, string> {
  const trimmed = value.trim();

  if (!trimmed) {
    return err("Please describe your requirement.");
  }

  if (trimmed.length < 10) {
    return err("Please add a little more detail (at least 10 characters).");
  }

  return ok(trimmed);
}

// --- Whole-form validation --------------------------------------------------

export function validateContactSubmission(
  raw: ContactSubmission,
): Result<ContactSubmission, ContactFieldErrors> {
  const errors: ContactFieldErrors = {};

  const name = validateName(raw.name);
  if (!name.ok) errors.name = name.error;

  const company = validateCompany(raw.company);
  if (!company.ok) errors.company = company.error;

  const email = validateEmail(raw.email);
  if (!email.ok) errors.email = email.error;

  const phone = validatePhone(raw.phone);
  if (!phone.ok) errors.phone = phone.error;

  const message = validateMessage(raw.message);
  if (!message.ok) errors.message = message.error;

  // Cross-field rule: at least one contact method.
  const hasEmail = email.ok && email.value.length > 0;
  const hasPhone = phone.ok && phone.value.length > 0;
  if (!hasEmail && !hasPhone && !errors.email && !errors.phone) {
    errors.email = "Provide an email address or a phone / WhatsApp number.";
    errors.phone = "Provide an email address or a phone / WhatsApp number.";
  }

  if (Object.keys(errors).length > 0) {
    return err(errors);
  }

  return ok({
    name: name.ok ? name.value : "",
    company: company.ok ? company.value : "",
    email: email.ok ? email.value : "",
    phone: phone.ok ? phone.value : "",
    inquiryType: raw.inquiryType.trim(),
    productFamily: raw.productFamily.trim(),
    quantity: raw.quantity.trim(),
    message: message.ok ? message.value : "",
  });
}
