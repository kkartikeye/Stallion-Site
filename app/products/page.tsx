import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BusFront, Factory, TrainFront, Truck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { productFamilies } from "@/lib/product-families";

export const metadata = createPageMetadata({
  title: "Product Families",
  description:
    "Browse Stallion Auto Parts product families across steering systems, lever assemblies, driveline parts, clutch-side components, engine pulleys, related hardware, and CNC-machined products.",
  path: "/products",
  image: "/images/Steering-Column-Assemblies..jpg",
});

const applicationAreas = [
  {
    title: "Truck Programs",
    description:
      "Component support across steering, clutch, lever, hub, and drivetrain-related heavy-duty vehicle parts.",
    icon: Truck,
  },
  {
    title: "Bus Programs",
    description:
      "Assemblies and fabricated parts suited to bus steering, pedal, hinge, and control-side applications.",
    icon: BusFront,
  },
  {
    title: "Rail-Linked Engineering",
    description:
      "Manufacturing support for broader transport and engineering programs where drawing-led production is critical.",
    icon: TrainFront,
  },
  {
    title: "OEM And Industrial Supply",
    description:
      "Repeat manufacturing support for customers who need dependable quality, production discipline, and commercial continuity.",
    icon: Factory,
  },
];

const pageSignals = [
  {
    value: "6",
    label: "Product families",
  },
  {
    value: "Shafts, Flanges, Rollers",
    label: "Added product breadth",
  },
  {
    value: "Machining + Fabrication + Finishing",
    label: "Production model",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        description="Representative product families across steering systems, lever assemblies, crown wheels, clutch-side parts, engine pulleys, related hardware, and CNC-machined components for OEM and engineering programs."
        imageSrc="/images/Steering-Column-Assemblies..jpg"
        imageAlt="Representative steering column assemblies manufactured by Stallion Auto Parts"
        imageLegend="Representative Product Range"
      />

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Product Overview"
              title="A product structure built around real manufacturing families rather than one long catalog list."
              description="Each family groups related parts and manufacturing routes together, so buyers can understand the product breadth without having to scan one long undifferentiated page."
            />
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Stallion’s representative range spans steering-side assemblies, lever systems,
              drivetrain components, clutch-side parts, engine pulleys and related hardware, and broader CNC
              machined items produced for automotive and engineering use.
            </p>
            <p>
              The range now reflects a wider part mix that includes valve bodies, machined
              flanges, shafts, precision turned parts, track rollers, spring hanger brackets, and
              other component types already present in Stallion’s manufacturing profile.
            </p>
            <p>
              Each family page groups representative products, application context, and useful
              technical details in a more readable format, while keeping the overview page clean
              and easier to scan.
            </p>
          </div>
        </div>

        <div className="container-site mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {applicationAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </div>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="container-site mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {pageSignals.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-5"
            >
              <div className="text-2xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Product Families"
            title="Choose a product family to see the detailed products, specs, and representative images."
            description="This structure keeps the overview page cleaner and gives each family enough room for visual context and product-level information."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {productFamilies.map((family) => (
              <div
                key={family.slug}
                className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={family.heroImageSrc}
                    alt={family.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                    <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                      {family.heroLegend}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                        {family.eyebrow}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        {family.overviewTitle}
                      </h2>
                    </div>
                    <div className="w-fit rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-left sm:text-right">
                      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        Detail Page
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-950">
                        Available
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {family.overviewDescription}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {family.highlights.slice(0, 2).map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm font-medium leading-6 text-slate-900">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {family.representativeParts.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-slate-500">
                      {family.details.length} representative products
                    </div>
                    <Link
                      href={`/products/${family.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition group-hover:-translate-y-0.5 sm:w-auto"
                    >
                      View Product Family
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
