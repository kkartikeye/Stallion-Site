import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function toAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
