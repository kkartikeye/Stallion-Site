"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BadgeCheck, Factory, PhoneCall } from "lucide-react";
import { brandSignals, credibilityHighlights, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isProductRoute = pathname === "/products" || pathname.startsWith("/products/");

  const footerCta = isProductRoute
    ? {
        eyebrow: "Product RFQ",
        title: "Discuss a product family, drawing, or sourcing requirement.",
        button: "Request Product RFQ",
      }
    : {
        eyebrow: "Stallion Auto Parts",
        title: "Precision manufacturing support for OEM, industrial, and export programs.",
        button: "Start an RFQ",
      };

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-site py-12">
        {!isHomePage && !isContactPage ? (
          <div className="rounded-[1.6rem] bg-slate-950 px-5 py-6 text-white sm:rounded-[2rem] sm:px-8 sm:py-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.2em]">
                  {footerCta.eyebrow}
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                  {footerCta.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 sm:gap-x-6">
                  {brandSignals.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                {footerCta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}

        <div className={`${isHomePage ? "mt-0" : "mt-10"} grid gap-8 md:grid-cols-[0.95fr_0.75fr_0.9fr_1.15fr] md:gap-10`}>
          <div>
            <div className="text-lg font-semibold text-slate-950">{siteConfig.name}</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              OEM-grade machined components and sub-assemblies for global automotive supply chains.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 transition hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Credibility
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <div className="inline-flex items-center gap-2">
                <Factory className="h-4 w-4 text-slate-400" />
                Precision machining and fabrication
              </div>
              <div className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-slate-400" />
                OEM-ready quality discipline
              </div>
              <div className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-slate-400" />
                Direct RFQ and sourcing discussions
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {credibilityHighlights.map((item) => (
                <p key={item.label}>{item.value}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.address}</p>
              <p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition hover:text-slate-950"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-slate-950"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
