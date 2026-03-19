import { BusFront, Factory, TrainFront, Truck, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CapabilityServices } from "@/components/capability-services";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing Capabilities",
  description:
    "Explore Stallion Auto Parts capabilities across CNC machining, grinding, induction hardening, fabrication, finishing operations, and drawing-led manufacturing support.",
  path: "/capabilities",
  image: "/images/machine-shop.png",
});

const applicationCards: Array<{
  title: string;
  description: string;
  parts: string[];
  icon: LucideIcon;
}> = [
  {
    title: "Truck and heavy-duty vehicles",
    description:
      "Relevant for steering-side, clutch-side, driveline, and wheel-end components that need repeat manufacturing support.",
    parts: ["Steering columns", "Gear shift levers", "Crown wheels", "Wheel hubs"],
    icon: Truck,
  },
  {
    title: "Bus and passenger transport",
    description:
      "Supports column assemblies, pedal systems, housings, and support components used across bus programs.",
    parts: ["Steering assemblies", "Pedal levers", "Clutch housings", "Hinges"],
    icon: BusFront,
  },
  {
    title: "Rail and transport engineering",
    description:
      "Fits drawing-led machined and fabricated components for transport-linked programs that need dependable batch execution.",
    parts: ["Machined shafts", "Brackets", "Support parts", "Repeat batches"],
    icon: TrainFront,
  },
  {
    title: "OEM and industrial supply",
    description:
      "Suitable for build-to-print parts, buyer-specific CNC work, and export-linked production requirements.",
    parts: ["Valve bodies", "Machined flanges", "Stainless steel shafts", "Precision turned parts"],
    icon: Factory,
  },
];

const processShowcaseImages = [
  {
    src: "/images/agni-machine.jpg",
    alt: "Vertical machining centre on the Stallion Auto Parts shop floor",
    label: "In-House CNC Machine",
  },
  {
    src: "https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1800",
    alt: "Close-up of CNC machining in process",
    label: "Machining In Process",
  },
  {
    src: "/images/finished crown wheel.png",
    alt: "Finished crown wheel components",
    label: "Finished Crown Wheels",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        title="Capabilities"
        description="Machining, grinding, hardening, finishing, fabrication, and drawing-led support for steering, control-linkage, driveline, wheel-end, and buyer-specific CNC component programs."
        imageSrc="/images/machine-shop.png"
        imageAlt="Machine shop floor with CNC and production equipment at Stallion Auto Parts"
        imageLegend="Manufacturing Capabilities"
      />

      <section className="section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Capability Overview"
            title="Built around real manufacturing routes, not generic machine claims."
            description="The strongest fit is for steering-side, control-linkage, driveline, wheel-end, and build-to-print CNC components that need repeat production discipline."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:row-span-2">
              <div className="relative min-h-[320px] bg-slate-100 sm:min-h-[420px] lg:h-full lg:min-h-[560px]">
                <Image
                  src={processShowcaseImages[0].src}
                  alt={processShowcaseImages[0].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 sm:p-6">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                    {processShowcaseImages[0].label}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:row-span-2 lg:grid-rows-2">
              {processShowcaseImages.slice(1).map((image) => (
                <div
                  key={image.label}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative min-h-[220px] bg-slate-100 sm:min-h-[260px] lg:h-full">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                      <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                        {image.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CapabilityServices />

      <section className="section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Applications"
            title="Representative application areas."
            description="A quick view of where the current capability is most relevant across the existing product range."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {applicationCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  <div className="mt-5 grid gap-2">
                    {item.parts.map((part) => (
                      <div key={part} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{part}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
            >
              View Product Families
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
