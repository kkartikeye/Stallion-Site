import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { getProductFamily, getProductSlug, productFamilies } from "@/lib/product-families";

type ProductFamilyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return productFamilies.map((family) => ({
    slug: family.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductFamilyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const family = getProductFamily(slug);

  if (!family) {
    return {};
  }

  return createPageMetadata({
    title: family.title,
    description: family.heroDescription,
    path: `/products/${family.slug}`,
    image: family.heroImageSrc,
  });
}

export default async function ProductFamilyPage({ params }: ProductFamilyPageProps) {
  const { slug } = await params;
  const family = getProductFamily(slug);

  if (!family) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={family.title}
        description={family.heroDescription}
        imageSrc={family.heroImageSrc}
        imageLegend={family.heroLegend}
      />

      <section className="section-space">
        <div className="container-site">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="container-site mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={family.eyebrow}
              title={family.overviewTitle}
              description={family.overviewDescription}
            />
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {family.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="container-site mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {family.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </div>
              <div className="mt-2 text-base font-medium leading-7 text-slate-950">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Representative Parts"
              title="Product-level details within this family."
              description="Only the useful product information is carried forward here: application, material, finish, size or weight, and other details that help a buyer understand fit."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {family.representativeParts.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {family.details.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm"
              >
                {item.imageSrc ? (
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="p-6">
                  <div className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.name}
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {item.specs.map((spec) => (
                      <div key={`${item.name}-${spec.label}`}>
                        <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                          {spec.label}
                        </div>
                        <div className="mt-1 text-sm font-medium leading-6 text-slate-900">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
                    <Link
                      href={`/products/${family.slug}/${getProductSlug(item.name)}`}
                      className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/contact?inquiryType=${encodeURIComponent("Request a Quote")}&productFamily=${encodeURIComponent(family.eyebrow)}&product=${encodeURIComponent(item.name)}`}
                      className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      Inquire About This Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
