import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import {
  getSmartMobilityChiangMaiActionsFromJson,
  getSmartMobilityChiangMaiDefaultSlug,
  getSmartMobilityChiangMaiMetadataFromJson,
  getSmartMobilityChiangMaiRouteLabels,
  getSmartMobilityChiangMaiSlugs as getSmartMobilityChiangMaiContentSlugs,
  isSmartMobilityChiangMaiContentSlug,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import type { SmartMobilityMtsDetailAction } from "@/lib/platform-content/smartMobilityContent";

export const SMART_MOBILITY_CHIANG_MAI_DEFAULT_SLUG =
  getSmartMobilityChiangMaiDefaultSlug();

export type SmartMobilityChiangMaiSlug = string;

export type SmartMobilityChiangMaiAction = SmartMobilityMtsDetailAction & {
  slug?: SmartMobilityChiangMaiSlug;
};

export const SMART_MOBILITY_CHIANG_MAI_ROUTE_LABELS =
  getSmartMobilityChiangMaiRouteLabels();

export function isSmartMobilityChiangMaiSlug(
  slug: string,
): slug is SmartMobilityChiangMaiSlug {
  return isSmartMobilityChiangMaiContentSlug(slug);
}

export function getSmartMobilityChiangMaiSlugs(): SmartMobilityChiangMaiSlug[] {
  return getSmartMobilityChiangMaiContentSlugs();
}

function getSmartMobilityChiangMaiSlugFromHref(
  href: string,
): SmartMobilityChiangMaiSlug | undefined {
  return getSmartMobilityChiangMaiSlugs().find((slug) =>
    href.includes(`/smart-mobility/chiang-mai/${slug}/`),
  );
}

export function getSmartMobilityChiangMaiActions(): SmartMobilityChiangMaiAction[] {
  const actionsByHref = new Map<string, SmartMobilityChiangMaiAction>();

  for (const action of getSmartMobilityChiangMaiActionsFromJson()) {
    actionsByHref.set(action.href, {
      ...action,
      slug: getSmartMobilityChiangMaiSlugFromHref(action.href),
    });
  }

  return [...actionsByHref.values()];
}

export async function generateSmartMobilityChiangMaiMetadata(
  slug: SmartMobilityChiangMaiSlug,
  locale: string,
): Promise<Metadata> {
  const metadata = getSmartMobilityChiangMaiMetadataFromJson(slug);

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
