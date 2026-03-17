import Link from "next/link";
import { navLinks } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <img
            src="/images/logo.png"
            alt="Stallion Auto Parts Logo"
            className="h-[72px] w-auto object-contain shrink-0"
          />
          <span className="text-3xl font-semibold tracking-tight text-slate-900">
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

        <Link
          href="/contact"
          className="rounded-xl bg-slate-900 px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}