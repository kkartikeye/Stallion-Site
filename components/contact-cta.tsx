import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { brandSignals, credibilityHighlights, siteConfig } from "@/lib/site";

type ContactCTAVariant = "compact" | "featured";

type ContactCTAProps = {
  variant?: ContactCTAVariant;
};

export function ContactCTA({ variant = "compact" }: ContactCTAProps) {
  if (variant === "compact") {
    return (
      <section className="section-space">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-950 px-5 py-8 text-white sm:rounded-[2rem] sm:px-8 sm:py-10 md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.15),_transparent_30%)]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  Get Started
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                  Start with an RFQ, sourcing requirement, or capability discussion.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Share your requirement and we will help move the conversation toward feasibility,
                  quoting, or production support.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                  {brandSignals.slice(0, 3).map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Email Us Directly
                </a>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 text-sm text-slate-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-950 px-5 py-8 text-white sm:rounded-[2rem] sm:px-8 sm:py-10 md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Get Started
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Start the conversation with an RFQ, sourcing requirement, or capability discussion.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Share your component requirement, target volumes, or program context and we will
                respond with the right next step for quoting, feasibility, or manufacturing fit.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 sm:w-auto sm:justify-start"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/capabilities"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Review Capabilities
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                {brandSignals.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                  Why buyers reach out
                </div>
                <div className="mt-4 grid gap-4">
                  {credibilityHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </div>
                      <div className="mt-2 text-base leading-7 text-slate-200">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                      Call
                    </div>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="mt-2 block text-lg font-semibold text-white"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                      Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-2 block break-all text-lg font-semibold text-white"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
