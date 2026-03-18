import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProductBySlugs,
  getProductSlug,
  productFamilies,
} from "@/lib/product-families";

type ProductPageProps = {
  params: Promise<{
    productSlug: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return productFamilies.flatMap((family) =>
    family.details.map((product) => ({
      productSlug: getProductSlug(product.name),
      slug: family.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug, slug } = await params;
  const data = getProductBySlugs(slug, productSlug);

  if (!data) {
    return {};
  }

  return createPageMetadata({
    title: data.product.name,
    description: data.product.description,
    path: `/products/${data.family.slug}/${productSlug}`,
    image: data.product.imageSrc ?? data.family.heroImageSrc,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug, slug } = await params;
  const data = getProductBySlugs(slug, productSlug);

  if (!data) {
    notFound();
  }

  const { family, product } = data;

  return (
    <>
      <PageHero
        title={product.name}
        description={product.description}
        imageSrc={product.imageSrc ?? family.heroImageSrc}
        imageLegend={family.eyebrow}
      />

      <section className="section-space">
        <div className="container-site">
          <Link
            href={`/products/${family.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {family.eyebrow}
          </Link>
        </div>

        <div className="container-site mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={family.eyebrow}
              title={product.name}
              description={product.description}
            />
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {spec.label}
                  </div>
                  <div className="mt-2 text-base font-medium leading-7 text-slate-950">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {product.imageSrc ? (
          <div className="container-site mt-10">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/8] bg-slate-100">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt ?? product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <section className="bg-slate-50 section-space">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Inquiry"
              title="Discuss this product directly with the team."
              description="Use the inquiry path below to start a product-specific RFQ or sourcing conversation with the family and product already identified."
            />
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Selected Product
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {product.name}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/contact?inquiryType=${encodeURIComponent("Request a Quote")}&productFamily=${encodeURIComponent(family.eyebrow)}&product=${encodeURIComponent(product.name)}&message=${encodeURIComponent(`I would like to discuss ${product.name}.`)}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Request a Product Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/contact?inquiryType=${encodeURIComponent("Product Discussion")}&productFamily=${encodeURIComponent(family.eyebrow)}&product=${encodeURIComponent(product.name)}&message=${encodeURIComponent(`I would like to discuss ${product.name} for our application.`)}`}
                className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Start Product Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
