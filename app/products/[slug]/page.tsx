import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  BusFront,
  CarFront,
  Cog,
  Droplets,
  Factory,
  Ruler,
  Shield,
  TrainFront,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProductFamily,
  getProductSlug,
  productFamilies,
  type ProductSpec,
} from "@/lib/product-families";

type VisualBadge = {
  icon: LucideIcon;
  label: string;
};

function getReferenceBadgesFromText(text: string): VisualBadge[] {
  const normalizedText = text.toLowerCase();
  const badges: VisualBadge[] = [];

  const addBadge = (label: string, icon: LucideIcon) => {
    if (!badges.some((badge) => badge.label === label)) {
      badges.push({ label, icon });
    }
  };

  if (normalizedText.includes("truck")) {
    addBadge("Truck", Truck);
  }

  if (normalizedText.includes("bus")) {
    addBadge("Bus", BusFront);
  }

  if (
    normalizedText.includes("auto") ||
    normalizedText.includes("automobile") ||
    normalizedText.includes("4 wheeler")
  ) {
    addBadge("Auto", CarFront);
  }

  if (normalizedText.includes("heavy-duty")) {
    addBadge("Heavy Duty", Shield);
  }

  if (
    normalizedText.includes("rail") ||
    normalizedText.includes("train") ||
    normalizedText.includes("railway") ||
    normalizedText.includes("coach")
  ) {
    addBadge("Rail", TrainFront);
  }

  if (
    normalizedText.includes("program") ||
    normalizedText.includes("drawing-led") ||
    normalizedText.includes("oem") ||
    normalizedText.includes("export")
  ) {
    addBadge("Program Supply", Factory);
  }

  if (normalizedText.includes("mechanical") || normalizedText.includes("engine")) {
    addBadge("Mechanical", Cog);
  }

  return (badges.length > 0 ? badges : [{ icon: Factory, label: "Engineering Supply" }]).slice(
    0,
    4,
  );
}

function getApplicationBadges(specs: ProductSpec[]): VisualBadge[] {
  const applicationText = specs
    .filter((spec) =>
      ["Application", "Vehicle type", "Usage", "System", "Production fit"].includes(spec.label),
    )
    .map((spec) => spec.value.toLowerCase())
    .join(" ");

  return getReferenceBadgesFromText(applicationText).slice(0, 3);
}

function getPrioritySpecs(specs: ProductSpec[]) {
  const priorityOrder = [
    "Application",
    "Vehicle type",
    "Part type",
    "Material",
    "Surface",
    "Finish",
    "Color",
    "Weight",
    "Load capacity",
    "Size",
    "Size range",
    "Lubrication",
    "Usage",
    "CNC",
    "System",
    "Support model",
  ];

  const prioritized = priorityOrder
    .map((label) => specs.find((spec) => spec.label === label))
    .filter((spec): spec is ProductSpec => Boolean(spec));

  const remaining = specs.filter(
    (spec) => !prioritized.some((prioritizedSpec) => prioritizedSpec.label === spec.label),
  );

  return [...prioritized, ...remaining].slice(0, 4);
}

function getSpecIcon(spec: ProductSpec): LucideIcon {
  const label = spec.label.toLowerCase();

  if (label.includes("application") || label.includes("usage")) {
    return Factory;
  }

  if (label.includes("vehicle")) {
    return Truck;
  }

  if (label.includes("material")) {
    return Boxes;
  }

  if (label.includes("surface") || label.includes("finish") || label.includes("color")) {
    return Wrench;
  }

  if (label.includes("lubrication")) {
    return Droplets;
  }

  if (label.includes("size")) {
    return Ruler;
  }

  if (label.includes("weight") || label.includes("load")) {
    return Shield;
  }

  return Cog;
}

type ProductFamilyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return productFamilies.map((family) => ({
    slug: family.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductFamilyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const family = getProductFamily(slug);

  if (!family) {
    return {};
  }

  return createPageMetadata({
    title: family.title,
    description: family.heroDescription,
    path: `/products/${family.slug}`,
    image: family.heroImageSrc,
  });
}

export default async function ProductFamilyPage({ params }: ProductFamilyPageProps) {
  const { slug } = await params;
  const family = getProductFamily(slug);

  if (!family) {
    notFound();
  }

  const familyReferenceBadges = getReferenceBadgesFromText(
    [
      family.title,
      family.heroDescription,
      family.overviewDescription,
      ...family.body,
      ...family.highlights.map((item) => item.value),
    ].join(" "),
  );

  const primarySummary = family.body[0] ?? family.overviewDescription;
  const summaryHighlights = family.highlights.filter(
    (item) => item.label !== "Representative parts",
  );
  const productsWithImages = family.details.filter((item) => Boolean(item.imageSrc));
  const productsWithoutImages = family.details.filter((item) => !item.imageSrc);

  return (
    <>
      <PageHero
        title={family.title}
        description={family.heroDescription}
        imageSrc={family.heroImageSrc}
        imageAlt={family.heroLegend}
        imageLegend={family.heroLegend}
      />

      <section className="section-space">
        <div className="container-site">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="container-site mt-8 grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.2em]">
              {family.eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {family.overviewTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {primarySummary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700">
                {family.details.length} representative products
              </div>
              {familyReferenceBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={`${family.slug}-${badge.label}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {summaryHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-medium leading-7 text-slate-950 sm:text-base">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Representative Products
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Products within {family.eyebrow}
              </h2>
            </div>
            <div className="text-sm text-slate-500">{productsWithImages.length} product cards</div>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productsWithImages.map((item) => {
              const applicationBadges = getApplicationBadges(item.specs);
              const prioritySpecs = getPrioritySpecs(item.specs);

              return (
                <div
                  key={item.name}
                  className="flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm"
                >
                  {item.imageSrc ? (
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="min-w-0">
                      <div className="text-xl font-semibold tracking-tight text-slate-950 sm:min-h-[3.5rem]">
                        {item.name}
                      </div>

                      <div className="mt-4 flex min-h-11 flex-wrap items-start gap-2">
                        {applicationBadges.map((badge) => {
                          const Icon = badge.icon;

                          return (
                            <div
                              key={`${item.name}-${badge.label}`}
                              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                            >
                              <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                              <span>{badge.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-2">
                      {prioritySpecs.map((spec) => {
                        const Icon = getSpecIcon(spec);

                        return (
                          <div
                            key={`${item.name}-${spec.label}`}
                            className="flex h-full rounded-[1.2rem] border border-slate-200 bg-slate-50 p-3.5"
                          >
                            <div className="flex h-full items-start gap-3">
                              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                                <Icon className="h-4 w-4" strokeWidth={1.8} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                  {spec.label}
                                </div>
                                <div className="mt-1 text-sm font-medium leading-6 text-slate-900">
                                  {spec.value}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
                        <Link
                          href={`/products/${family.slug}/${getProductSlug(item.name)}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/contact?inquiryType=${encodeURIComponent("Request a Quote")}&productFamily=${encodeURIComponent(family.eyebrow)}&message=${encodeURIComponent(`I would like to request a quote for ${item.name}.`)}`}
                          className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                          Inquire About This Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {productsWithoutImages.length > 0 ? (
            <div className="mt-10 rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Additional Product Coverage
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Also supported within {family.eyebrow}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                These parts are part of the family range, but we are only showing products here
                where a dedicated reference image is available.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {productsWithoutImages.map((item) => (
                  <div
                    key={`${family.slug}-${item.name}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

    </>
  );
}
