import {
  Boxes,
  BusFront,
  CircleDot,
  ArrowRight,
  Factory,
  Gauge,
  Layers3,
  PenTool,
  Settings,
  ShieldCheck,
  TrainFront,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing Capabilities",
  description:
    "Explore Stallion Auto Parts capabilities across CNC machining, grinding, induction hardening, fabrication, drawing-led development, and coordinated supplier support.",
  path: "/capabilities",
  image: "/images/machine-shop.png",
});

const capabilityPillars = [
  {
    title: "CNC turning and machining",
    description:
      "Supports repeat production of steering, clutch-side, lever, and other engineering parts where dimensional control and process consistency matter.",
    icon: Settings,
  },
  {
    title: "Grinding and gauging",
    description:
      "Supports closer finishing control for shafts, crown-wheel-side parts, and other components where dimensional attention is more critical.",
    icon: Gauge,
  },
  {
    title: "Induction hardening",
    description:
      "Extends the route for components that need improved surface performance, durability, and wear resistance in service.",
    icon: Layers3,
  },
  {
    title: "Fabricated parts and sub-assemblies",
    description:
      "Relevant for pedal-side, hinge, housing, and other programs that need more than a single machining operation.",
    icon: Wrench,
  },
  {
    title: "Surface finishing and coating support",
    description:
      "Supports polished, coated, powder-coated, color-coated, and plated part requirements across multiple product families.",
    icon: CircleDot,
  },
  {
    title: "Drawing-led development, tooling, and prototype-to-production support",
    description:
      "Customer drawings, CAD-led development, jigs, fixtures, and route planning help move parts from early-stage development into repeat production.",
    icon: PenTool,
  },
];

const industriesServed = [
  {
    title: "Truck programs",
    description:
      "Steering, clutch, lever, hub, brake-drum, and driveline-side components for heavy-duty vehicle applications.",
    icon: Truck,
  },
  {
    title: "Bus programs",
    description:
      "Column assemblies, pedal-side parts, hinges, housings, and other vehicle-side components suited to bus applications.",
    icon: BusFront,
  },
  {
    title: "Rail-linked engineering",
    description:
      "Drawing-led component manufacturing for broader transport and engineering programs where repeatability and supply discipline matter.",
    icon: TrainFront,
  },
  {
    title: "OEM and industrial supply",
    description:
      "Repeat manufacturing support for OEM, industrial, and export customers that need continuity across parts, batches, and program cycles.",
    icon: Factory,
  },
];

const productCapabilityFit = [
  {
    eyebrow: "Machining Route",
    title: "Steering systems and related machined parts",
    icon: Settings,
    href: "/products/steering-systems",
    capabilities: [
      "CNC turning and machining",
      "Grinding and gauging",
      "Drawing-led tooling",
    ],
    products: [
      "Steering columns",
      "Steering spindles",
      "Steering arms",
      "Turning tubes",
    ],
  },
  {
    eyebrow: "Assembly Route",
    title: "Lever, pedal, and clutch-side systems",
    icon: Wrench,
    href: "/products/lever-and-pedal-systems",
    capabilities: [
      "Fabrication and sub-assemblies",
      "Surface finishing and coating",
      "Prototype to production support",
    ],
    products: [
      "Gear shift levers",
      "Clutch yokes",
      "Pedal levers",
      "Clutch housings",
    ],
  },
  {
    eyebrow: "Driveline Route",
    title: "Driveline, crown-wheel, and turned components",
    icon: Gauge,
    href: "/products/crown-wheels-and-gears",
    capabilities: [
      "CNC turning and machining",
      "Grinding and gauging",
      "Induction hardening",
    ],
    products: [
      "Crown wheels",
      "Gear blanks",
      "Pinion shafts",
      "Precision turned parts",
    ],
  },
  {
    eyebrow: "Support Parts Route",
    title: "Running and support components",
    icon: Boxes,
    href: "/products/hubs-pulleys-and-support-parts",
    capabilities: [
      "Machining of supplied inputs",
      "Surface finishing and coating",
      "Supplier coordination",
    ],
    products: [
      "Wheel hubs",
      "Brake drums",
      "Pulleys",
      "Hinges",
    ],
  },
];

const supportAreas = [
  {
    title: "Tier-II and supplier coordination",
    description:
      "Programs can be supported through coordinated supplier inputs for castings, forgings, investment castings, and other upstream component requirements.",
    icon: Boxes,
  },
  {
    title: "Production planning and shop-floor flow",
    description:
      "Capability is reinforced by organized production planning, process flow, and shop-floor discipline aimed at repeatable execution over time.",
    icon: Factory,
  },
  {
    title: "Customer-specific manufacturing response",
    description:
      "Manufacturing methods, tooling support, and execution approach can be adapted around customer drawings, application requirements, and volume needs.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        title="Capabilities"
        description="CNC machining, grinding, induction hardening, fabrication, sub-assemblies, and drawing-led manufacturing support for buyer-specific production requirements."
        imageSrc="/images/machine-shop.png"
        imageLegend="Manufacturing Capabilities"
      />

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Capability Overview"
              title="Manufacturing capability built around real product families, not abstract process claims."
              description="The strongest fit is for buyer-specific parts that need machining, fabrication, finishing, or coordinated program support tied back to actual vehicle-side and engineering components."
            />
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Stallion&apos;s manufacturing base is suited to customers who need machined,
              fabricated, or assembly-linked components produced against drawings with process
              discipline and repeatability over time.
            </p>
            <p>
              Core process capability includes CNC turning and machining centers, grinding and
              gauging support, induction hardening, fabricated parts, sub-assembly work, and
              drawing-led adaptation through CAD, jigs, and fixtures.
            </p>
            <p>
              The product range on this site, from steering systems and lever assemblies to crown
              wheels, clutch parts, hubs, drums, and pulleys, reflects where those capabilities
              are most relevant in practice.
            </p>
          </div>
        </div>

        <div className="container-site mt-12 grid items-start gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/quality-gate2.png"
                alt="Quality gate process at Stallion Auto Parts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                  Quality Gate
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src="/images/finished crown wheel.png"
                alt="Finished crown wheel components"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                  Finished Crown Wheels
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-site mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityPillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </div>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries Served"
            title="Capability aligned with the industries reflected in Stallion&apos;s current product range."
            description="Rather than listing unrelated sectors, this section stays tied to the applications already visible across the product families on the site."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industriesServed.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
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
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 xl:sticky xl:top-28">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Capability By Product Family
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Capability by product family
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each route below connects actual product families to the processes most relevant to
              making them.
            </p>

            <div className="mt-6 grid gap-3">
              {productCapabilityFit.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.eyebrow}
                      </div>
                      <div className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-slate-700"
            >
              View all product families
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {productCapabilityFit.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {item.eyebrow}
                        </div>
                        <h3 className="mt-1 text-[1.2rem] font-semibold leading-tight tracking-tight text-slate-950">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Core capabilities
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Representative products
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.products.map((product) => (
                          <div
                            key={product}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-slate-700"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Supporting Capabilities"
              title="Capability at Stallion extends into planning, supplier coordination, and customer-specific execution."
              description="This is where the operating model helps connect machine capability with broader program requirements."
            />
          </div>

          <div className="grid gap-5">
            {supportAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
