import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Stallion Auto Parts",
  description:
    "Request a quote, discuss OEM manufacturing requirements, or contact Stallion Auto Parts directly by phone or email.",
  path: "/contact",
  image: "/images/stallion-entrance.png",
});

type ContactPageProps = {
  searchParams?: Promise<{
    inquiryType?: string;
    message?: string;
    phone?: string;
    product?: string;
    productFamily?: string;
    quantity?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const defaultValues = params
    ? {
        inquiryType: params.inquiryType,
        message: params.message,
        phone: params.phone,
        product: params.product,
        productFamily: params.productFamily,
        quantity: params.quantity,
      }
    : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(148,163,184,0.1),transparent_20%),linear-gradient(135deg,#020617_0%,#020617_40%,#0f172a_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        <div className="container-site relative py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="hero-fade-up hero-fade-up-delay-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <h1 className="hero-fade-up hero-fade-up-delay-1 mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Start with an RFQ, sourcing requirement, or product inquiry.
            </h1>
            <p className="hero-fade-up hero-fade-up-delay-2 mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Share your requirement and the team can respond with the right next step for
              quotation, capability fit, or manufacturing discussion.
            </p>

            <div className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                Call Sales
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <Link
                href="/products"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Review Product Families
              </Link>
            </div>

            <div className="hero-fade-up hero-fade-up-delay-4 mt-8 space-y-4">
              <div className="h-px w-24 bg-gradient-to-r from-sky-300/70 to-transparent" />
              <div className="inline-flex flex-wrap items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.08] text-slate-100">
                  <MapPin className="h-4.5 w-4.5" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Headquarters
                  </div>
                  <div className="mt-1 text-base font-medium text-slate-100">
                    Lucknow, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Contact Information</h2>

              <div className="mt-6 space-y-5 text-slate-700">
                <div>
                  <div className="text-sm text-slate-500">Company</div>
                  <div className="font-medium">Stallion Auto Parts Pvt. Ltd.</div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">GST Number</div>
                  <div className="font-medium">{siteConfig.gstNumber}</div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">Address</div>
                  <div>{siteConfig.address}</div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">Phone</div>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="font-medium text-slate-900 transition hover:text-slate-700"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-slate-900 transition hover:text-slate-700"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Inquiry Form</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Share your requirement and the team will respond with the next steps, capability
              fit, or quotation details.
            </p>

            <ContactForm defaultValues={defaultValues} />

            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                  <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  Call
                </div>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="mt-2 block text-sm font-semibold text-slate-950"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                  <Mail className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  Email
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-sm font-semibold text-slate-950"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                  <MapPin className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  Base
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">Lucknow, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
