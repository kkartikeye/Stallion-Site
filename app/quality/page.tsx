import {
  BadgeCheck,
  ClipboardCheck,
  Gauge,
  SearchCheck,
  Settings,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Quality Systems and Process Control",
  description:
    "See how Stallion Auto Parts approaches quality through process control, inspection discipline, continuous improvement, and OEM-ready manufacturing execution.",
  path: "/quality",
  image: "/images/shop-floor.jpg",
});

const qualityPrinciples = [
  {
    title: "Built Into The Process",
    description:
      "Quality is reinforced through process planning, machining discipline, tooling attention, and production control rather than being treated only as a final-stage activity.",
    icon: Settings,
  },
  {
    title: "Drawing-Led Verification",
    description:
      "Inspection practices are tied to customer drawings, defined checkpoints, and documented procedures to support dimensional conformity and repeatability.",
    icon: ClipboardCheck,
  },
  {
    title: "Continuous Improvement Habits",
    description:
      "Shop-floor routines are supported by Kanban thinking, Kaizen habits, and an operating mindset that looks for practical improvements over time.",
    icon: Workflow,
  },
  {
    title: "OEM And Export Readiness",
    description:
      "The quality approach is shaped to support customers who expect steady execution, specification control, and dependable long-term manufacturing support.",
    icon: ShieldCheck,
  },
];

const qualitySystems = [
  {
    title: "Quality System Alignment",
    description:
      "Operating practices aligned with ISO 9001:2015 and IATF 16949 quality expectations for automotive manufacturing.",
    icon: BadgeCheck,
  },
  {
    title: "Inspection Discipline",
    description:
      "Checks performed against product requirements, inspection points, and customer-specific expectations.",
    icon: SearchCheck,
  },
  {
    title: "Close-Tolerance Attention",
    description:
      "Precision machining and grinding processes supported by fixture care and dimensional control.",
    icon: Gauge,
  },
  {
    title: "Corrective Manufacturing Action",
    description:
      "Production issues are approached with practical problem-solving and process follow-through, not patchwork responses.",
    icon: Wrench,
  },
];

const executionPoints = [
  "Process planning and production discipline support repeatability across machined, fabricated, and assembled parts.",
  "Inspection practices are tied to drawings and test procedures to establish conformity against customer requirements.",
  "Continuous-improvement habits help strengthen shop-floor consistency, responsiveness, and execution stability.",
];

const qualityProcessImage = {
  src: "https://images.pexels.com/photos/8956445/pexels-photo-8956445.jpeg?cs=srgb&dl=pexels-daniel-smyth-83914874-8956445.jpg&fm=jpg",
  alt: "Close-up of CNC machining with coolant splashing during operation",
  label: "Process Control In Action",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality"
        description="Quality systems, inspection discipline, and process control designed to support consistent manufacturing and dependable supply."
        imageSrc="/images/shop-floor.jpg"
        imageAlt="Shop floor inside the Stallion Auto Parts manufacturing facility"
        imageClassName="object-cover object-center"
        imageQuality={100}
        imageLegend="Shop Floor"
      />

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Quality Approach"
              title="A quality system built around process control, inspection discipline, and repeatable execution."
              description="Stallion’s quality approach is shaped to support consistent manufacturing output through controlled methods, drawing-led verification, and steady shop-floor discipline."
            />
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Stallion’s quality approach is centered on maintaining control across manufacturing
              operations, with attention to drawings, process consistency, and product
              requirements from the start of production through dispatch readiness.
            </p>
            <p>
              The emphasis is on reducing variability, supporting dimensional accuracy, and
              maintaining dependable execution through machining discipline, inspection habits, and
              practical process follow-through on the shop floor.
            </p>
            <p>
              For OEM, industrial, and export customers, that means a manufacturing partner that
              treats quality as part of everyday operating discipline rather than a separate
              checkbox at the end of the line.
            </p>
          </div>
        </div>

        <div className="container-site mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {qualityPrinciples.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
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

        <div className="container-site mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-slate-100 sm:aspect-[16/8]">
              <Image
                src={qualityProcessImage.src}
                alt={qualityProcessImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 sm:p-6">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                  {qualityProcessImage.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What Supports It"
              title="The quality system is reinforced through inspection discipline, manufacturing control, and continuous improvement."
              description="A concise view of the working elements that help support repeatable output and long-term supply confidence."
            />

            <div className="mt-8 space-y-4">
              {executionPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {qualitySystems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
