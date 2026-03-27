import {
  BadgeCheck,
  Boxes,
  Building2,
  Compass,
  Cog,
  Crosshair,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { KeyedImage } from "@/components/keyed-image";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Stallion Auto Parts",
  description:
    "Learn about Stallion Auto Parts, its manufacturing base in Lucknow, quality-led operating approach, and long-term OEM supply focus.",
  path: "/about",
  image: "/images/workforce-thumbsup.png",
});

const companyHighlights = [
  {
    value: "1995",
    label: "Established",
    icon: Building2,
  },
  {
    value: "5,200 m²",
    label: "Facility size",
    icon: Boxes,
  },
  {
    value: "200+",
    label: "Employees",
    icon: Users,
  },
  {
    value: "ISO 9001:2015 and IATF 16949-aligned",
    label: "Quality discipline",
    icon: Cog,
  },
];

const operatingStrengths = [
  {
    title: "Precision manufacturing",
    description:
      "CNC machining, fabrication, grinding, induction hardening, and sub-assembly support come together to deliver consistent component quality.",
    icon: Cog,
  },
  {
    title: "Practical production discipline",
    description:
      "The operating approach reflects structured process control, kanban-led supply thinking, and continuous-improvement habits on the shop floor.",
    icon: BadgeCheck,
  },
  {
    title: "Customer-specific execution",
    description:
      "The business is set up to adapt products, tooling, and manufacturing methods around customer drawings, requirements, and volume needs.",
    icon: Users,
  },
];

const coreValues = [
  {
    title: "Engineering Discipline",
    icon: Cog,
  },
  {
    title: "Customer Trust",
    icon: HeartHandshake,
  },
  {
    title: "Continuous Improvement",
    icon: TrendingUp,
  },
  {
    title: "Responsible Partnership",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Precision manufacturing from Lucknow, India for OEM, industrial, and export customers."
        imageSrc="/images/workforce-thumbsup.png"
        imageAlt="Stallion Auto Parts team members standing together at the facility"
        imageLegend="Stallion Team"
        tertiaryAction={{
          href: `tel:${siteConfig.phoneHref}`,
          label: "Call Sales",
          icon: "phone",
        }}
      />

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              An engineering-led manufacturing business built for consistency, responsiveness, and long-term supply support.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              The overview below brings together Stallion&apos;s operating scale, manufacturing
              profile, and quality-led orientation at a glance.
            </p>

            <div className="mt-8 flex justify-start">
              <KeyedImage
                src="/images/make_in_india_logo_clean.png"
                alt="Make in India"
                className="block h-auto w-[240px] sm:w-[300px] lg:w-[340px]"
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="min-w-0 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white sm:mb-4 sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <div className="break-words text-lg font-semibold leading-tight tracking-tight text-slate-950 sm:text-xl">
                      {item.value}
                    </div>
                    <div className="mt-1 break-words text-xs font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 md:text-lg lg:pt-20 xl:pt-24">
            <p>
              Stallion Auto Parts was established in 1995 with the aim of building a serious
              Indian manufacturing business for precision automotive and engineering components.
              Over time, the company has developed into a dependable production partner for
              customers who value repeatability, practical problem-solving, and long-term supply
              confidence.
            </p>
            <p>
              The business manufactures machined components, fabricated parts, and sub-assemblies
              for automotive and allied engineering applications. Its operating model combines
              in-house machining capability with a disciplined production setup and carefully
              managed supplier relationships for supporting broader assembly and component needs.
            </p>
            <p>
              Today, Stallion continues to serve customers looking for a manufacturing partner that
              can respond to drawings, development requirements, repeat production, and commercial
              supply expectations with consistency and accountability.
            </p>

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Compass className="h-4 w-4" strokeWidth={1.9} />
                </div>
                <div className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  Vision
                </div>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  To be the manufacturing partner customers rely on for precision components,
                  disciplined execution, and dependable long-term supply.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Crosshair className="h-4 w-4" strokeWidth={1.9} />
                </div>
                <div className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  Mission
                </div>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  To manufacture precision components with consistent quality, strengthen
                  production capability through continuous improvement, and support customers with
                  responsive, reliable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              How We Operate
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Manufacturing capability supported by process control, design thinking, and practical execution.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              From CNC machining and grinding to induction hardening, tooling support, and
              customer-specific process adaptation, Stallion is built to translate engineering
              requirements into reliable production output.
            </p>
            <div className="mt-6">
              <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                Core Values
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {coreValues.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800"
                  >
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <item.icon className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                    <div>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {operatingStrengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-7"
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

      <section className="bg-slate-950 section-space text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Leadership Approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Leadership shaped by engineering judgment, manufacturing discipline, and long-term customer relationships.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Stallion&apos;s leadership approach reflects practical decision-making, production
              discipline, and a steady commitment to dependable customer support. The company
              continues to build on foundations shaped by Late V.K. Khanna&apos;s engineering-led
              outlook and long-view approach to manufacturing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:h-28 sm:w-24 sm:shrink-0">
                  <Image
                    src="/images/bharat-khanna.jpeg"
                    alt="Bharat Khanna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                    Managing Director
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    Bharat Khanna
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    As Managing Director, he continues the company&apos;s focus on disciplined
                    manufacturing, practical execution, and long-term customer relationships built
                    on consistency and trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                  Founder Legacy
                </div>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  Late V.K. Khanna&apos;s engineering background helped shape the company&apos;s
                  long-standing focus on practical manufacturing capability and disciplined growth.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                  Leadership Focus
                </div>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  The emphasis remains on building dependable customer relationships through steady
                  execution, clear communication, and long-term manufacturing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
