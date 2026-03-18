import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { brandSignals, siteConfig } from "@/lib/site";

type HeroAction = {
  href: string;
  label: string;
  icon?: "arrow" | "mail" | "phone";
};

type PageHeroProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  imageQuality?: number;
  imageLegend?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  tertiaryAction?: HeroAction;
};

function ActionIcon({ icon }: { icon?: HeroAction["icon"] }) {
  if (icon === "mail") {
    return <Mail className="h-4 w-4" />;
  }

  if (icon === "phone") {
    return <PhoneCall className="h-4 w-4" />;
  }

  return <ArrowRight className="h-4 w-4" />;
}

function HeroActionLink({
  action,
  className,
}: {
  action: HeroAction;
  className: string;
}) {
  const content = (
    <>
      <span>{action.label}</span>
      <ActionIcon icon={action.icon} />
    </>
  );

  if (action.href.startsWith("/")) {
    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={action.href} className={className}>
      {content}
    </a>
  );
}

export function PageHero({
  title,
  description,
  imageSrc,
  imageContainerClassName,
  imageClassName,
  imageQuality,
  imageLegend,
  primaryAction = {
    href: "/contact",
    label: "Request a Quote",
    icon: "arrow",
  },
  secondaryAction = {
    href: `mailto:${siteConfig.email}`,
    label: "Email Sales",
    icon: "mail",
  },
  tertiaryAction,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(148,163,184,0.1),transparent_20%),linear-gradient(135deg,#020617_0%,#020617_40%,#0f172a_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="container-site relative grid gap-8 py-14 sm:gap-10 sm:py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h1 className="hero-fade-up hero-fade-up-delay-1 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="hero-fade-up hero-fade-up-delay-2 mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg md:text-xl md:leading-8">
            {description}
          </p>

          <div className="hero-fade-up hero-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <HeroActionLink
              action={primaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 sm:justify-start"
            />
            <HeroActionLink
              action={secondaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:justify-start"
            />
            {tertiaryAction ? (
              <HeroActionLink
                action={tertiaryAction}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:justify-start"
              />
            ) : null}
          </div>

          <div className="hero-fade-up hero-fade-up-delay-4 mt-8 space-y-4">
            <div className="h-px w-24 bg-gradient-to-r from-sky-300/70 to-transparent" />
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 sm:gap-x-6">
              {brandSignals.slice(0, 3).map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="hero-glow absolute -inset-3 hidden rounded-[2.5rem] bg-gradient-to-br from-sky-400/12 via-transparent to-white/5 blur-2xl sm:block sm:-inset-5" />
          <div className="hero-float absolute -right-4 -top-5 hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.04] blur-sm sm:block sm:h-24 sm:w-24" />
          <div
            className="hero-fade-up hero-fade-up-delay-3 relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5"
          >
            <div
              className={`relative min-h-[220px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-800 sm:min-h-[300px] sm:rounded-[1.5rem] ${
                imageContainerClassName ?? ""
              }`}
            >
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  quality={imageQuality}
                  className={`hero-image-pan ${imageClassName ?? "object-cover"}`}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/18 to-transparent" />
              {imageLegend ? (
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-100 backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                    {imageLegend}
                  </div>
                </div>
              ) : null}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
