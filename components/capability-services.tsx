"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, CircleDot, Gauge, Layers3, Settings, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CapabilityService = {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageFit?: "contain" | "cover";
  imageAnchor?: string;
  imageScaleClassName?: string;
  imageStageClassName?: string;
  imageBlendMode?: "multiply" | "normal";
  families: Array<{
    label: string;
    href: string;
  }>;
  icon: LucideIcon;
};

const services: CapabilityService[] = [
  {
    id: "cnc",
    tabLabel: "CNC Turning",
    title: "CNC turning and machining",
    description:
      "Supports repeat machining for steering-side parts, shafts, flanges, and buyer-specific CNC components built from drawings.",
    bullets: [
      "Used for steering columns, turning tubes, machined flanges, and valve bodies",
      "Fits repeat production where dimensional consistency matters",
      "Supports customer-specific machining routes and batch requirements",
    ],
    imageSrc: "/images/Precision-Turned-Components..jpg",
    imageAlt: "CNC machined components produced by Stallion Auto Parts",
    imageFit: "contain",
    imageAnchor: "object-center",
    imageScaleClassName: "scale-[1.12]",
    imageStageClassName:
      "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(235,241,247,0.88))]",
    imageBlendMode: "multiply",
    families: [
      { label: "Steering systems", href: "/products/steering-systems" },
      { label: "CNC components", href: "/products/cnc-machined-components" },
    ],
    icon: Settings,
  },
  {
    id: "grinding",
    tabLabel: "Grinding & Gauging",
    title: "Grinding and gauging",
    description:
      "Used where shaft geometry, finish control, and closer dimensional checks are more important than a standard machining route.",
    bullets: [
      "Relevant for gear shafts, ground shafts, and crown-wheel-side parts",
      "Adds closer finishing attention for turned and driveline components",
      "Supports programs where gauging and dimensional discipline are critical",
    ],
    imageSrc: "/images/Pinion-Ground-Shaft..jpg",
    imageAlt: "Ground shaft component produced by Stallion Auto Parts",
    imageFit: "contain",
    imageAnchor: "object-center",
    imageScaleClassName: "scale-[1.28]",
    imageStageClassName:
      "bg-[linear-gradient(180deg,rgba(241,245,249,0.9),rgba(226,232,240,0.72))]",
    imageBlendMode: "multiply",
    families: [
      { label: "Driveline components", href: "/products/crown-wheels-and-gears" },
      { label: "CNC components", href: "/products/cnc-machined-components" },
    ],
    icon: Gauge,
  },
  {
    id: "hardening",
    tabLabel: "Hardening & Finishing",
    title: "Induction hardening and secondary finishing",
    description:
      "Extends the route for gear-side and wear-facing parts that need harder surfaces, longer service life, or refined downstream finishing.",
    bullets: [
      "Used for crown wheels, gear blanks, shafts, and other wear-facing components",
      "Supports broaching, spline rolling, roller burnishing, and superfinishing",
      "Relevant when surface performance and downstream fit matter in service",
    ],
    imageSrc: "/images/Machined-Crown-Wheel..jpg",
    imageAlt: "Machined crown wheel component",
    imageFit: "contain",
    imageAnchor: "object-center",
    imageScaleClassName: "scale-[1.08]",
    imageStageClassName:
      "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(231,237,243,0.84))]",
    imageBlendMode: "multiply",
    families: [
      { label: "Driveline components", href: "/products/crown-wheels-and-gears" },
      { label: "Support components", href: "/products/hubs-pulleys-and-support-parts" },
    ],
    icon: Layers3,
  },
  {
    id: "fabrication",
    tabLabel: "Fabrication & Assemblies",
    title: "Fabricated parts and sub-assemblies",
    description:
      "Supports control-linkage, housing, and support-part programs that combine machining with fabrication, coating, or assembly work.",
    bullets: [
      "Used for pedal assemblies, clutch housings, brackets, and support components",
      "Fits programs that need more than a single machining operation",
      "Can be combined with supplied inputs such as castings, forgings, and sheet metal parts",
    ],
    imageSrc: "/images/clutch-brake-pedal.png",
    imageAlt: "Clutch and brake pedal assembly",
    imageFit: "contain",
    imageAnchor: "object-center",
    imageScaleClassName: "scale-[1.12]",
    imageStageClassName:
      "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(235,241,247,0.88))]",
    imageBlendMode: "multiply",
    families: [
      { label: "Lever and pedal systems", href: "/products/lever-and-pedal-systems" },
      { label: "Clutch housings", href: "/products/clutch-housings-and-actuation" },
      { label: "Support components", href: "/products/hubs-pulleys-and-support-parts" },
    ],
    icon: Wrench,
  },
  {
    id: "finishing",
    tabLabel: "Coating & Finishing",
    title: "Surface finishing and coating support",
    description:
      "Supports final-part requirements where finish, coating, corrosion resistance, or supplied surface condition are part of the delivered specification.",
    bullets: [
      "Supports polished, powder-coated, nickel-plated, and superfinished components",
      "Relevant for steering arms, gear shift levers, stainless steel shafts, and housings",
      "Useful when the part must arrive ready for assembly or service use",
    ],
    imageSrc: "/images/Automotive-Steering-Arms..jpg",
    imageAlt: "Automotive steering arms with finished surface",
    imageFit: "contain",
    imageAnchor: "object-center",
    imageScaleClassName: "scale-[1.12]",
    imageStageClassName:
      "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(235,241,247,0.88))]",
    imageBlendMode: "multiply",
    families: [
      { label: "Steering systems", href: "/products/steering-systems" },
      { label: "Lever and pedal systems", href: "/products/lever-and-pedal-systems" },
      { label: "CNC components", href: "/products/cnc-machined-components" },
    ],
    icon: CircleDot,
  },
];

export function CapabilityServices() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((item) => item.id === activeId) ?? services[0];
  const Icon = active.icon;

  return (
    <section className="bg-slate-50 section-space">
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.2em]">
            Manufacturing Services
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            How Stallion supports the parts buyers actually source.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Select a core manufacturing route to see where it fits, which parts it supports, and
            which product families it connects to.
          </p>
        </div>

        <div className="mt-10 border-b border-slate-200">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-3" role="tablist" aria-label="Manufacturing services">
            {services.map((service) => {
              const TabIcon = service.icon;
              const isActive = service.id === active.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.id}`}
                  className={`inline-flex items-center gap-2 border-b-2 px-3 py-3 text-sm font-semibold transition sm:px-4 ${
                    isActive
                      ? "border-slate-950 text-slate-950"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <TabIcon className="h-4 w-4" strokeWidth={1.8} />
                  <span>{service.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="mt-8 grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.72fr_0.78fr_0.9fr] lg:items-center lg:p-8"
          role="tabpanel"
          id={`service-panel-${active.id}`}
          aria-labelledby={`service-tab-${active.id}`}
        >
          <div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              {active.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{active.description}</p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-950">
              {active.families.map((family) => (
                <Link
                  key={family.href}
                  href={family.href}
                  className="inline-flex items-center gap-1.5 transition hover:text-slate-600"
                >
                  {family.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {active.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-950">
                  <Check className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
            <div
              className={`relative min-h-[260px] sm:min-h-[320px] ${active.imageStageClassName ?? "bg-slate-100"}`}
            >
              <div className="absolute inset-5 rounded-[1.4rem] border border-white/70 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:inset-6" />
              <div className="absolute inset-6 sm:inset-8">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  className={`${active.imageFit === "contain" ? "object-contain" : "object-cover"} ${active.imageAnchor ?? "object-center"} ${active.imageScaleClassName ?? ""} ${active.imageBlendMode === "multiply" ? "mix-blend-multiply" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
