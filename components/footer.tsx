import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-site grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Stallion Auto Parts</div>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
            OEM-grade machined components and sub-assemblies for global
            automotive supply chains.
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
                className="text-sm text-slate-700 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </div>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.contactPerson}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}