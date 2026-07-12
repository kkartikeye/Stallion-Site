"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Loader2,
  Mail,
  PhoneCall,
} from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { productFamilies } from "@/lib/product-families";
import { siteConfig } from "@/lib/site";
import {
  type ContactField,
  type ContactFieldErrors,
  type Result,
  validateCompany,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "@/lib/validation";

const inquiryTypes = [
  "Request a Quote",
  "Pricing Inquiry",
  "Product Discussion",
  "Capability Discussion",
  "Export Inquiry",
  "General Inquiry",
];

const initialState: ContactFormState = {
  status: "idle",
};

type ContactFormProps = {
  defaultValues?: {
    inquiryType?: string;
    message?: string;
    phone?: string;
    productFamily?: string;
    quantity?: string;
  };
};

const fieldBaseClass =
  "w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900";

function fieldClass(hasError: boolean) {
  return `${fieldBaseClass} ${
    hasError
      ? "border-rose-400 bg-rose-50/40 focus:border-rose-500"
      : "border-slate-300"
  }`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-2 flex items-start gap-1.5 text-sm text-rose-600">
      <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Inquiry"
      )}
    </button>
  );
}

function SuccessPanel({
  message,
  reference,
}: {
  message: string;
  reference: string;
}) {
  return (
    <div className="rise-in mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            Inquiry received
          </h3>
          <p className="mt-1 text-sm leading-6 text-emerald-900/80">{message}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-emerald-700">
            Reference: {reference}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-emerald-200/70 pt-5">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
          What happens next
        </div>
        <ol className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
          <li>1. The team reviews your requirement and capability fit.</li>
          <li>2. You hear back — typically within 1 business day.</li>
          <li>3. The conversation moves to quoting or feasibility.</li>
        </ol>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="btn-press inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            <PhoneCall className="h-4 w-4" />
            Call for urgent requirements
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-press inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-medium text-emerald-900 transition hover:bg-emerald-50"
          >
            <Mail className="h-4 w-4" />
            Email a drawing
          </a>
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-emerald-900 transition hover:bg-emerald-100/60"
          >
            Browse product families
            <ArrowRight className="arrow-nudge h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ContactForm({ defaultValues }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState(defaultValues?.phone ?? "");
  const [clientErrors, setClientErrors] = useState<ContactFieldErrors>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  // Merge server-reported field errors (authoritative) over client ones.
  const serverErrors =
    state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const errors: ContactFieldErrors = { ...clientErrors, ...serverErrors };

  useEffect(() => {
    if (state.status === "error") {
      summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  if (state.status === "success") {
    return <SuccessPanel message={state.message} reference={state.reference} />;
  }

  const setFieldError = (field: ContactField, error: string | undefined) => {
    setClientErrors((prev) => {
      const next = { ...prev };

      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }

      return next;
    });
  };

  const validateOnBlur =
    (field: ContactField, validator: (value: string) => Result<string, string>) =>
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const result = validator(event.target.value);

      setFieldError(field, result.ok ? undefined : result.error);
    };

  return (
    <form action={formAction} className="mt-6 space-y-4" noValidate>
      <p className="text-xs text-slate-500">Fields marked with * are required.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Your Name <span aria-hidden="true" className="text-rose-500">*</span>
          </span>
          <input
            name="name"
            className={fieldClass(Boolean(errors.name))}
            placeholder="Your Name"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onBlur={validateOnBlur("name", validateName)}
          />
          <FieldError id="name-error" message={errors.name} />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Company Name <span aria-hidden="true" className="text-rose-500">*</span>
          </span>
          <input
            name="company"
            className={fieldClass(Boolean(errors.company))}
            placeholder="Company Name"
            autoComplete="organization"
            required
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            onBlur={validateOnBlur("company", validateCompany)}
          />
          <FieldError id="company-error" message={errors.company} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Email <span className="font-normal text-slate-400">(email or phone)</span>
        </span>
        <input
          name="email"
          className={fieldClass(Boolean(errors.email))}
          placeholder="Email"
          autoComplete="email"
          type="email"
          value={emailValue}
          onChange={(event) => {
            setEmailValue(event.target.value);

            if (errors.email) {
              const result = validateEmail(event.target.value);

              setFieldError("email", result.ok ? undefined : result.error);
            }
          }}
          onBlur={(event) => {
            const result = validateEmail(event.target.value);

            setFieldError("email", result.ok ? undefined : result.error);

            if (result.ok && event.target.value.trim()) {
              setFieldError("phone", undefined);
            }
          }}
          required={!phoneValue.trim()}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={errors.email} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Phone / WhatsApp <span className="font-normal text-slate-400">(email or phone)</span>
          </span>
          <input
            name="phone"
            className={fieldClass(Boolean(errors.phone))}
            placeholder="+91 ..."
            autoComplete="tel"
            value={phoneValue}
            onChange={(event) => {
              setPhoneValue(event.target.value);

              if (errors.phone) {
                const result = validatePhone(event.target.value);

                setFieldError("phone", result.ok ? undefined : result.error);
              }
            }}
            onBlur={(event) => {
              const result = validatePhone(event.target.value);

              setFieldError("phone", result.ok ? undefined : result.error);

              if (result.ok && event.target.value.trim()) {
                setFieldError("email", undefined);
              }
            }}
            required={!emailValue.trim()}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Inquiry Type
          </span>
          <select
            name="inquiryType"
            defaultValue={defaultValues?.inquiryType ?? ""}
            className={`${fieldBaseClass} border-slate-300 bg-white`}
          >
            <option value="">Select inquiry type</option>
            {inquiryTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="-mt-2 text-xs text-slate-500">
        Share at least one contact method: email or phone / WhatsApp.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Product Family
          </span>
          <select
            name="productFamily"
            defaultValue={defaultValues?.productFamily ?? ""}
            className={`${fieldBaseClass} border-slate-300 bg-white`}
          >
            <option value="">Select product family</option>
            {productFamilies.map((family) => (
              <option key={family.slug} value={family.eyebrow}>
                {family.eyebrow}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Estimated Quantity / Volume
          </span>
          <input
            name="quantity"
            className={`${fieldBaseClass} border-slate-300`}
            placeholder="Optional"
            defaultValue={defaultValues?.quantity}
          />
        </label>
      </div>

      <label className="hidden" aria-hidden="true">
        <span>Website</span>
        <input
          tabIndex={-1}
          name="website"
          autoComplete="off"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Requirement Details <span aria-hidden="true" className="text-rose-500">*</span>
        </span>
        <textarea
          name="message"
          className={`min-h-[180px] ${fieldClass(Boolean(errors.message))}`}
          placeholder="Tell us about your requirement, expected volumes, component type, drawing reference, material, or delivery needs"
          defaultValue={defaultValues?.message}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onBlur={validateOnBlur("message", validateMessage)}
        />
        <FieldError id="message-error" message={errors.message} />
      </label>

      {state.status === "error" ? (
        <div
          ref={summaryRef}
          role="alert"
          className="flex items-start gap-3 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {state.message}
        </div>
      ) : null}

      <SubmitButton />
    </form>
  );
}
