"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { productFamilies } from "@/lib/product-families";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productNavLinks = productFamilies.map((family) => ({
    href: `/products/${family.slug}`,
    label: family.eyebrow,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site py-3 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 shrink-0 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="Stallion Auto Parts Logo"
              width={288}
              height={96}
              className="h-10 w-auto shrink-0 object-contain sm:h-12 md:h-[72px]"
            />
            <span className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-xl md:text-3xl">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) =>
              item.href === "/products" ? (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-lg font-medium text-slate-700 transition hover:text-slate-950"
                    aria-expanded={isProductsOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${isProductsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 mt-4 w-[320px] -translate-x-1/2 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl transition-all duration-200 ${
                      isProductsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <Link
                      href="/products"
                      className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      All Product Families
                    </Link>

                    <div className="mt-2 grid gap-1 border-t border-slate-200 pt-3">
                      {productNavLinks.map((productLink) => (
                        <Link
                          key={productLink.href}
                          href={productLink.href}
                          className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                          {productLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-slate-700 transition hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition duration-300 hover:bg-slate-50 md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 ease-out" strokeWidth={2} />
            ) : (
              <Menu
                className="h-5 w-5 transition-transform duration-300 ease-out"
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 ease-out ${
                isOpen
                  ? "translate-y-0 scale-100"
                  : "-translate-y-2 scale-[0.98] pointer-events-none"
              }`}
            >
              <nav className="grid gap-2">
                {navLinks.map((item) =>
                  item.href === "/products" ? (
                    <div key={item.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white sm:text-base"
                      >
                        {item.label}
                      </Link>

                      <div className="grid gap-1 pt-1">
                        {productNavLinks.map((productLink) => (
                          <Link
                            key={productLink.href}
                            href={productLink.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-2xl px-4 py-3 text-xs font-medium text-slate-700 transition hover:bg-white hover:text-slate-950 sm:text-sm"
                          >
                            {productLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 sm:text-base"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>

              <div className="mt-4 border-t border-slate-200 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-slate-900 px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-slate-800"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
