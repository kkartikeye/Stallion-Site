import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Renders on a dark hero background when true. */
  tone?: "light" | "dark";
};

export function Breadcrumbs({ items, tone = "light" }: BreadcrumbsProps) {
  const linkClass =
    tone === "dark"
      ? "text-slate-400 transition hover:text-white"
      : "text-slate-500 transition hover:text-slate-950";
  const currentClass =
    tone === "dark" ? "font-medium text-slate-200" : "font-medium text-slate-900";
  const separatorClass = tone === "dark" ? "text-slate-600" : "text-slate-300";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className={`h-3.5 w-3.5 ${separatorClass}`} aria-hidden="true" />
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={`link-underline ${linkClass}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={currentClass}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
