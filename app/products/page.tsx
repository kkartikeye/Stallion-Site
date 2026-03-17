import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { products } from "@/lib/site";
import { ContactCTA } from "@/components/contact-cta";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        description="Representative automotive components manufactured across machined, fabricated, and assembled categories."
        imageSrc="/images/Steering-Column-Assemblies..jpg"
        imageLegend="Representative Product Range"
      />

      <section className="section-space">
        <div className="container-site grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
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
                <div className="text-lg font-medium">{product.title}</div>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
