import {
  Boxes,
  Factory,
  Gauge,
  Globe2,
  Layers3,
  PenTool,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { ContactCTA } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const capabilityPillars = [
  {
    title: "CNC Turning And Machining Centers",
    description:
      "In-house CNC turning and machining-center capability supports repeatable production of automotive and engineering components with close dimensional control.",
    icon: Settings,
  },
  {
    title: "Grinding And Gauging Support",
    description:
      "Angular wheel head grinding backed by gauging discipline supports tighter finishing control where accuracy and consistency are critical.",
    icon: Gauge,
  },
  {
    title: "Induction Hardening",
    description:
      "Induction-hardening support strengthens the capability base for components that require surface-performance and durability improvements.",
    icon: Layers3,
  },
  {
    title: "Fabricated Parts And Sub-Assemblies",
    description:
      "Capability extends beyond machined items into fabricated parts and coordinated sub-assemblies that call for broader production support.",
    icon: Wrench,
  },
  {
    title: "Drawing-Led Development And Tooling",
    description:
      "Customer drawings, CAD-based development, and support for jigs and fixtures help adapt manufacturing around application-specific needs.",
    icon: PenTool,
  },
  {
    title: "Prototype To Production Support",
    description:
      "The setup is positioned to support early-stage prototype requirements as well as repeat production and bulk manufacturing programs.",
    icon: Globe2,
  },
];

const capabilitySignals = [
  {
    value: "Up to 400 mm",
    label: "Machining Capacity",
  },
  {
    value: "3,200 m²",
    label: "Manufacturing Footprint",
  },
  {
    value: "CNC + Grinding",
    label: "Core Process Base",
  },
  {
    value: "CAD + Fixtures",
    label: "Development Support",
  },
];

const supportAreas = [
  {
    title: "Tier-II And Supplier Coordination",
    description:
      "Programs can be supported through coordinated inputs from suppliers for castings, forgings, investment castings, and related component needs.",
    icon: Boxes,
  },
  {
    title: "Production Planning And Flow",
    description:
      "Capability is reinforced by organized production setup, planning discipline, and shop-floor practices that support repeat execution.",
    icon: Factory,
  },
  {
    title: "Customer-Specific Capability Response",
    description:
      "Manufacturing methods, tooling support, and execution approach can be adapted around customer drawings, requirements, and application needs.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        title="Capabilities"
        description="Capabilities across CNC machining, grinding, induction hardening, fabrication, sub-assemblies, and drawing-led manufacturing support."
        imageSrc="/images/machine-shop.png"
        imageLegend="Manufacturing Capabilities"
      />

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Capability Overview"
              title="Manufacturing capability spanning machining, finishing, fabrication, and coordinated program support."
              description="The capability base reflected in Stallion’s IndiaMART profile combines in-house machining strength with finishing processes, tooling support, fabrication, and linked supplier coordination."
            />
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The production setup is built to support customers who need machined and fabricated
              components produced with process discipline, flexibility around drawings, and
              readiness for repeat manufacturing over time.
            </p>
            <p>
              Core strengths include CNC turning and machining centers, angular grinding support,
              induction hardening, fabricated parts, sub-assembly coordination, and drawing-led
              adjustments through jigs, fixtures, and requirement-specific process development.
            </p>
            <p>
              In practice, this allows Stallion to support prototype requirements, repeat
              production, and broader customer programs that depend on both in-house capability
              and coordinated upstream support.
            </p>
          </div>
        </div>

        <div className="container-site mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilitySignals.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm"
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
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How Capability Extends"
              title="Capability at Stallion extends into production planning, supplier coordination, and customer-specific execution."
              description="Manufacturing programs often depend on more than machine capacity alone. Stallion’s operating model supports broader execution needs through organized planning, linked inputs, and practical response to customer requirements."
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

      <ContactCTA />
    </>
  );
}
