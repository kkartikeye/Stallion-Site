import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Boxes,
  Factory,
  Globe2,
  RefreshCw,
  Ruler,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { capabilities, products, trustedPartners } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/section-heading";
import { ContactCTA } from "@/components/contact-cta";
import { TrustedPartnersRibbon } from "@/components/trusted-partners-ribbon";

export const metadata = createPageMetadata({
  title: "Precision Automotive Components for OEM and Export Supply",
  description:
    "Stallion Auto Parts manufactures precision-machined and fabricated automotive components for OEM, industrial, and export customers from Lucknow, India.",
  path: "/",
  image: "/images/stallion-mainImage.png",
});

const capabilityIcons = {
  "Precision CNC Machining": Settings,
  "Fabricated Components": Wrench,
  "Sub-Assembly Manufacturing": Boxes,
  "OEM Supply Support": Factory,
  "Export-Oriented Manufacturing": Globe2,
  "Quality System Discipline": BadgeCheck,
};

function getCapabilityIcon(title: string) {
  return capabilityIcons[title as keyof typeof capabilityIcons] ?? Settings;
}

const qualityHighlights = [
  {
    title: "ISO 9001:2015 and IATF 16949 mindset",
    description:
      "Quality practices aligned with recognized manufacturing standards and disciplined process expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Components up to 400 mm",
    description:
      "Production capability suited to a broad mix of machined and fabricated automotive components.",
    icon: Ruler,
  },
  {
    title: "3,200 sq. meter facility",
    description:
      "An organized manufacturing footprint that supports process flow, output planning, and scalable execution.",
    icon: Building2,
  },
  {
    title: "Kanban and Kaizen discipline",
    description:
      "Continuous-improvement and production-flow practices that help reinforce consistency and responsiveness.",
    icon: RefreshCw,
  },
];

const aboutHighlights = [
  {
    value: "1995",
    label: "Established",
    icon: Building2,
  },
  {
    value: "3,200 m²",
    label: "Manufacturing Footprint",
    icon: Boxes,
  },
  {
    value: "200+",
    label: "Employees",
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(148,163,184,0.12),transparent_22%),linear-gradient(135deg,#020617_0%,#020617_42%,#0f172a_100%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
            <Image
              src="/images/stallion-mainImage.png"
              alt="Stallion Auto Parts manufacturing facility"
              fill
              priority
              className="object-cover opacity-[0.14] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/20 via-slate-950/55 to-slate-950" />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <div className="container-site relative grid gap-10 py-16 sm:py-20 lg:min-h-[78vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="hero-fade-up inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold tracking-wide text-slate-200 backdrop-blur-sm sm:gap-4 sm:px-6 sm:py-3 sm:text-base">
              <span>OEM Manufacturing</span>
              <span className="text-slate-400">•</span>
              <span>Precision Machining</span>
              <span className="text-slate-400">•</span>
              <span>Global Export Supply</span>
            </div>

            <h1 className="hero-fade-up hero-fade-up-delay-1 mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Precision Automotive Components Built for Reliable Supply
            </h1>

            <p className="hero-fade-up hero-fade-up-delay-2 mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg md:text-xl md:leading-8">
              Stallion Auto Parts manufactures precision-machined and fabricated
              automotive components for OEMs, industrial buyers, and export
              customers who need dependable quality and responsive manufacturing.
            </p>

            <div className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>

              <Link
                href="/capabilities"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
              >
                View Capabilities
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="hero-glow absolute -inset-3 hidden rounded-[2.5rem] bg-gradient-to-br from-sky-400/12 via-transparent to-white/5 blur-2xl sm:block sm:-inset-5" />
            <div className="hero-float absolute -right-4 -top-5 hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.04] blur-sm sm:block sm:h-28 sm:w-28 sm:-right-6 sm:-top-8" />
            <div className="hero-fade-up hero-fade-up-delay-3 relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
              <div className="relative mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/40">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/machine-shop.png"
                    alt="Machine shop at Stallion Auto Parts"
                    fill
                    className="hero-image-pan object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-100 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
                    Machine Shop
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-2xl border border-white/10 bg-slate-950/65 px-3 py-2.5 text-right backdrop-blur-sm sm:bottom-4 sm:right-4 sm:px-4 sm:py-3">
                    <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                      Capability Base
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Precision Production
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-4 py-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.08] text-slate-100">
                    <Building2 className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Headquarters
                    </div>
                    <div className="mt-1 text-base font-medium text-slate-100">
                      Lucknow, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A precision manufacturing partner built for OEM consistency, scalable production, and dependable supply."
            />

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src="/images/stallion-entrance.png"
                  alt="Entrance view of Stallion Auto Parts facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                    Lucknow Manufacturing Base
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pt-20">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Founded in 1995, Stallion Auto Parts has grown into a trusted manufacturing
                partner for customers that value repeatability, responsiveness, and long-term
                supply confidence.
              </p>
              <p>
                The company combines precision machining, fabrication, and organized production
                practices to deliver automotive components that meet demanding quality and delivery
                expectations.
              </p>
              <p>
                Whether the requirement is for OEM programs, industrial buyers, or export supply,
                Stallion is positioned to support evolving volumes with practical manufacturing
                capability and a quality-focused operating mindset.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
              >
                Learn More
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <div className="text-xl font-semibold tracking-tight text-slate-950">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Capabilities"
            title="Built around precision, production discipline, and dependable customer support"
            description="Stallion brings together machining, fabrication, assembly, and supply support to serve OEM buyers, sourcing teams, and export customers with confidence."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = getCapabilityIcon(capability.title);

              return (
                <div
                  key={capability.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900">
                    {capability.title}
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Products"
            title="Representative automotive components across machining, fabrication, and assemblies"
            description="A sample of the component categories Stallion supports for OEM buyers, industrial customers, and export programs."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold tracking-tight text-slate-900">
                    {product.title}
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/products"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
            >
              Explore Product Range
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 section-space text-white">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Quality"
              title="Quality systems built to support repeatability, consistency, and buyer confidence"
              description="Stallion’s quality approach is shaped around process discipline, measurable manufacturing control, and steady support for OEM and export expectations."
            />
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              From documented operating practices to continuous improvement habits, the emphasis is
              on reducing execution risk and supporting dependable component supply over time.
            </p>

            <div>
              <Link
                href="/quality"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Learn About Quality
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {qualityHighlights.map((item) => {
              const Icon = item.icon;

              return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="text-lg font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionHeading
            eyebrow="Trusted By"
            title="Customers and industry relationships built over years of manufacturing support"
            description="A flowing snapshot of organizations associated with Stallion’s customer and partner network."
          />

          <TrustedPartnersRibbon partners={trustedPartners} />
        </div>
      </section>

      <ContactCTA variant="featured" />
    </>
  );
}
