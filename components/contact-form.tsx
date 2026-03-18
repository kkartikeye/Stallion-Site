"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { productFamilies } from "@/lib/product-families";

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
    product?: string;
    productFamily?: string;
    quantity?: string;
  };
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Sending..." : "Send Inquiry"}
    </button>
  );
}

export function ContactForm({ defaultValues }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Your Name
          </span>
          <input
            name="name"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
            placeholder="Your Name"
            autoComplete="name"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Company Name
          </span>
          <input
            name="company"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
            placeholder="Company Name"
            autoComplete="organization"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          name="email"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          placeholder="Email"
          autoComplete="email"
          type="email"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Product / Part
        </span>
        <input
          name="product"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          placeholder="Optional"
          defaultValue={defaultValues?.product}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Phone / WhatsApp
          </span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
            placeholder="+91 ..."
            autoComplete="tel"
            defaultValue={defaultValues?.phone}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Inquiry Type
          </span>
          <select
            name="inquiryType"
            defaultValue={defaultValues?.inquiryType ?? ""}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Product Family
          </span>
          <select
            name="productFamily"
            defaultValue={defaultValues?.productFamily ?? ""}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          >
            <option value="">Select product family</option>
            {productFamilies.map((family) => (
              <option key={family.slug} value={family.eyebrow}>
                {family.eyebrow}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Estimated Quantity / Volume
          </span>
          <input
            name="quantity"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
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
          Requirement Details
        </span>
        <textarea
          name="message"
          className="min-h-[180px] w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          placeholder="Tell us about your requirement, expected volumes, component type, drawing reference, material, or delivery needs"
          defaultValue={defaultValues?.message}
          required
        />
      </label>

      {state.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
