"use client";

import { useActionState, useState } from "react";
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
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState(defaultValues?.phone ?? "");

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <p className="text-xs text-slate-500">Fields marked with * are required.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Your Name <span aria-hidden="true" className="text-rose-500">*</span>
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
            Company Name <span aria-hidden="true" className="text-rose-500">*</span>
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
          Email <span className="font-normal text-slate-400">(email or phone)</span>
        </span>
        <input
          name="email"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          placeholder="Email"
          autoComplete="email"
          type="email"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
          required={!phoneValue.trim()}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Phone / WhatsApp <span className="font-normal text-slate-400">(email or phone)</span>
          </span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
            placeholder="+91 ..."
            autoComplete="tel"
            value={phoneValue}
            onChange={(event) => setPhoneValue(event.target.value)}
            required={!emailValue.trim()}
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
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
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
          Requirement Details <span aria-hidden="true" className="text-rose-500">*</span>
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
