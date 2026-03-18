import type { MetadataRoute } from "next";
import { getProductSlug, productFamilies } from "@/lib/product-families";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/capabilities",
  "/products",
  "/quality",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: new URL(path || "/", siteConfig.url).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...productFamilies.map((family) => ({
      url: new URL(`/products/${family.slug}`, siteConfig.url).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...productFamilies.flatMap((family) =>
      family.details.map((product) => ({
        url: new URL(
          `/products/${family.slug}/${getProductSlug(product.name)}`,
          siteConfig.url,
        ).toString(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
  ];
}
