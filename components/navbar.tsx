"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { productFamilies } from "@/lib/product-families";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const desktopNavItemClass =
    "relative inline-flex items-center rounded-full px-4 py-3 text-[1rem] font-medium leading-none tracking-normal transition";

  const productNavLinks = productFamilies.map((family) => ({
    href: `/products/${family.slug}`,
    label: family.eyebrow,
  }));

  const isNavItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isProductsActive = isNavItemActive("/products");

  return (
    <header className="sticky top-0 z-50">
      <div className="container-site py-3">
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/88 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-5 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-2.5 shrink-0 sm:gap-3">
              <Image
                src="/images/logo.png"
                alt="Stallion Auto Parts Logo"
                width={288}
                height={96}
                className="h-10 w-auto shrink-0 object-contain sm:h-11 lg:h-[64px]"
              />
              <span className="line-clamp-2 text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-[1.55rem]">
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1.5 lg:flex">
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
                      className={`${desktopNavItemClass} gap-2 ${
                        isProductsActive
                          ? "border border-slate-200 bg-white text-slate-950 shadow-sm"
                          : "text-slate-700 hover:bg-white hover:text-slate-950"
                      }`}
                      aria-expanded={isProductsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${isProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 rounded-[1.5rem] border border-slate-200/90 bg-white/96 p-3 shadow-[0_22px_48px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-200 ${
                        isProductsOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <Link
                        href="/products"
                        className={`block rounded-xl px-4 py-3 text-sm transition ${
                          isProductsActive
                            ? "border border-slate-200 bg-slate-50 font-semibold text-slate-950"
                            : "font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                        }`}
                      >
                        All Product Families
                      </Link>

                      <div className="mt-2 grid gap-1 border-t border-slate-200 pt-3">
                        {productNavLinks.map((productLink) => (
                          <Link
                            key={productLink.href}
                            href={productLink.href}
                            className={`rounded-xl px-4 py-3 text-sm transition ${
                              pathname === productLink.href
                                ? "border border-slate-200 bg-slate-50 font-semibold text-slate-950"
                                : "font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                            }`}
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
                    className={`group ${desktopNavItemClass} ${
                      isNavItemActive(item.href)
                        ? "border border-slate-200 bg-white text-slate-950 shadow-sm"
                        : "text-slate-700 hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 xl:px-7 xl:text-base"
              >
                Request a Quote
              </Link>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-slate-900 transition duration-300 hover:bg-slate-50 lg:hidden ${
                isOpen
                  ? "border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
                  : "border-slate-200 bg-white/90"
              }`}
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
            className={`grid transition-all duration-300 ease-out lg:hidden ${
              isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`rounded-[1.75rem] border border-slate-200/80 bg-white/96 p-4 shadow-[0_20px_44px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 ease-out ${
                  isOpen
                    ? "translate-y-0 scale-100"
                    : "-translate-y-2 scale-[0.98] pointer-events-none"
                }`}
              >
                <nav className="grid gap-2">
                  {navLinks.map((item) =>
                    item.href === "/products" ? (
                      <div
                        key={item.href}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-2"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-2xl px-4 py-3 text-sm transition sm:text-base ${
                            isProductsActive
                              ? "bg-white font-semibold text-slate-900"
                              : "font-semibold text-slate-900 hover:bg-white"
                          }`}
                        >
                          {item.label}
                        </Link>

                        <div className="grid gap-1 pt-1">
                          {productNavLinks.map((productLink) => (
                            <Link
                              key={productLink.href}
                              href={productLink.href}
                              onClick={() => setIsOpen(false)}
                              className={`rounded-2xl px-4 py-3 text-xs transition hover:bg-white hover:text-slate-950 sm:text-sm ${
                                pathname === productLink.href
                                  ? "bg-white font-semibold text-slate-950"
                                  : "font-medium text-slate-700"
                              }`}
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
                        className={`rounded-2xl px-4 py-3 text-sm transition sm:text-base ${
                          isNavItemActive(item.href)
                            ? "bg-slate-50 font-semibold text-slate-950"
                            : "font-medium text-slate-800 hover:bg-slate-50"
                        }`}
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
      </div>
    </header>
  );
}
