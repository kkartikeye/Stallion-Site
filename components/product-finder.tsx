"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, PackageSearch, Search, X } from "lucide-react";

export type FinderProduct = {
  name: string;
  familyEyebrow: string;
  familySlug: string;
  productSlug: string;
  imageSrc?: string;
};

type ProductFinderProps = {
  products: FinderProduct[];
};

// Discriminated union keeps the filter state explicit and exhaustive.
type FamilyFilter =
  | { kind: "all" }
  | { kind: "family"; slug: string };

function matchesQuery(product: FinderProduct, query: string): boolean {
  if (!query) {
    return true;
  }

  const haystack = `${product.name} ${product.familyEyebrow}`.toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

function matchesFamily(product: FinderProduct, filter: FamilyFilter): boolean {
  switch (filter.kind) {
    case "all":
      return true;
    case "family":
      return product.familySlug === filter.slug;
  }
}

// Pure filter pipeline — trivially testable, no component state involved.
export function filterProducts(
  products: FinderProduct[],
  query: string,
  filter: FamilyFilter,
): FinderProduct[] {
  return products.filter(
    (product) => matchesFamily(product, filter) && matchesQuery(product, query),
  );
}

export function ProductFinder({ products }: ProductFinderProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FamilyFilter>({ kind: "all" });

  const families = useMemo(() => {
    const seen = new Map<string, string>();

    for (const product of products) {
      if (!seen.has(product.familySlug)) {
        seen.set(product.familySlug, product.familyEyebrow);
      }
    }

    return [...seen.entries()].map(([slug, eyebrow]) => ({ slug, eyebrow }));
  }, [products]);

  const results = useMemo(
    () => filterProducts(products, query, filter),
    [products, query, filter],
  );

  const isFiltering = query.trim().length > 0 || filter.kind !== "all";
  const visibleResults = isFiltering ? results : [];

  const chipClass = (active: boolean) =>
    `btn-press inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
      active
        ? "border-slate-950 bg-slate-950 text-white"
        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950"
    }`;

  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Product Finder
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            Search {products.length} representative products
          </h3>
        </div>

        <label className="relative block w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by part name or family..."
            aria-label="Search products"
            className="w-full rounded-2xl border border-slate-300 py-3 pl-11 pr-10 text-slate-900 outline-none transition focus:border-slate-900"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by product family">
        <button
          type="button"
          onClick={() => setFilter({ kind: "all" })}
          aria-pressed={filter.kind === "all"}
          className={chipClass(filter.kind === "all")}
        >
          All Families
        </button>
        {families.map((family) => {
          const active = filter.kind === "family" && filter.slug === family.slug;

          return (
            <button
              key={family.slug}
              type="button"
              onClick={() =>
                setFilter(
                  active ? { kind: "all" } : { kind: "family", slug: family.slug },
                )
              }
              aria-pressed={active}
              className={chipClass(active)}
            >
              {family.eyebrow}
            </button>
          );
        })}
      </div>

      {isFiltering ? (
        <div className="mt-6 border-t border-slate-200 pt-6" aria-live="polite">
          <div className="text-sm text-slate-500">
            {results.length === 0
              ? "No products match — try a different term or family."
              : `${results.length} matching product${results.length === 1 ? "" : "s"}`}
          </div>

          {results.length === 0 ? (
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-sm text-slate-600">
              <PackageSearch className="h-5 w-5 shrink-0 text-slate-400" />
              Can&apos;t find a specific part? Many drawing-led components aren&apos;t
              listed —{" "}
              <Link href="/contact" className="link-underline font-medium text-slate-900">
                send us your requirement
              </Link>
              .
            </div>
          ) : (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {visibleResults.map((product) => (
                <li key={`${product.familySlug}-${product.productSlug}`}>
                  <Link
                    href={`/products/${product.familySlug}/${product.productSlug}`}
                    className="group card-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 pr-4"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      {product.imageSrc ? (
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          fill
                          sizes="56px"
                          className="card-zoom-image object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-300">
                          <PackageSearch className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-slate-950">
                        {product.name}
                      </div>
                      <div className="mt-0.5 truncate text-xs text-slate-500">
                        {product.familyEyebrow}
                      </div>
                    </div>
                    <ArrowRight className="arrow-nudge h-4 w-4 shrink-0 text-slate-400" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
