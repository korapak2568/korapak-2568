import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import {
  getSmartMobilityChiangMaiDefaultSlug,
  getSmartMobilityChiangMaiMetadataFromJson,
  isSmartMobilityChiangMaiContentSlug,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import type { SmartMobilityNavigationAction } from "@/lib/platform-content/smartMobilityContent";

export type SmartMobilityChiangMaiSlug = string;
export type SmartMobilityChiangMaiAction = SmartMobilityNavigationAction;

export async function getSmartMobilityChiangMaiDefaultRouteSlug(
  locale: string,
): Promise<SmartMobilityChiangMaiSlug> {
  return getSmartMobilityChiangMaiDefaultSlug(locale);
}

export async function isSmartMobilityChiangMaiSlug(
  slug: string,
  locale: string,
): Promise<boolean> {
  return isSmartMobilityChiangMaiContentSlug(slug, locale);
}

export async function generateSmartMobilityChiangMaiMetadata(
  slug: SmartMobilityChiangMaiSlug,
  locale: string,
): Promise<Metadata> {
  const metadata = await getSmartMobilityChiangMaiMetadataFromJson(slug, locale);

  if (!metadata) {
    return { title: "Smart Mobility Chiang Mai page not found" };
  }

  const path = `/smart-mobility/chiang-mai/${slug}/`;
  const image = metadata.image
    ? [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.imageAlt ?? metadata.title,
        },
      ]
    : undefined;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: getLocalizedAlternates(path, locale),
    openGraph: {
      title: metadata.openGraphTitle ?? metadata.title,
      description: metadata.openGraphDescription ?? metadata.description,
      type: metadata.type ?? "website",
      url: `/${locale}${path}`,
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitterTitle ?? metadata.title,
      description: metadata.twitterDescription ?? metadata.description,
      images: metadata.image ? [metadata.image] : undefined,
    },
  };
}
