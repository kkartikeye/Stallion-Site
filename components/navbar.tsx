"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="Stallion Auto Parts Logo"
              className="h-12 w-auto shrink-0 object-contain md:h-[72px]"
            />
            <span className="line-clamp-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              Stallion Auto Parts
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition duration-300 hover:bg-slate-50 md:hidden"
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
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
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
