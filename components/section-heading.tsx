type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
  };
  
  export function SectionHeading({
    eyebrow,
    title,
    description,
  }: SectionHeadingProps) {
    return (
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        ) : null}
      </div>
    );
  }