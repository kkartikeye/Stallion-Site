import Image from "next/image";

type PageHeroProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  imageQuality?: number;
  imageLegend?: string;
};

export function PageHero({
  title,
  description,
  imageSrc,
  imageContainerClassName,
  imageClassName,
  imageQuality,
  imageLegend,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-white">
      <div className="container-site grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>

        <div
          className={`relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-slate-800 ${
            imageContainerClassName ?? ""
          }`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              quality={imageQuality}
              className={imageClassName ?? "object-cover"}
            />
          ) : null}
          {imageLegend ? (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-sm">
                {imageLegend}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
