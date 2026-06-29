import type { Metadata } from "next";
import {
  getPlatformContent,
  type PlatformRouteKey,
} from "@/lib/platform-content/homeContent";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { getAiLuxuryContent } from "@/lib/platform-content/luxuryContent";
import { getSmartFoodAiStaticFallback } from "@/lib/smart-food-content/smartFoodStaticFallback";

const platformHomeOgImage =
  "/images-opengraph/images-platform/home/hero/youtube-banner-image.png";

const platformOpenGraphImages: Partial<
  Record<
    PlatformRouteKey,
    {
      url: string;
      width: number;
      height: number;
      alt: string;
    }
  >
> = {
  home: {
    url: platformHomeOgImage,
    width: 1200,
    height: 630,
    alt: "Chorn Planet platform homepage",
  },
  about: {
    url: "/images-opengraph/about/about-og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Chorn Planet platform about page",
  },
};

type PlatformMetadataSource = {
  title: string;
  description: string;
  openGraphTitle?: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

function loadSmartFoodMetadata(locale: string): PlatformMetadataSource {
  const content = getSmartFoodAiStaticFallback(locale);
  const openGraphImage = content.hero.visual.open_graph;

  return {
    title: content.metadata?.title ?? content.hero.title,
    description: content.metadata?.description ?? content.hero.lead,
    openGraphTitle: content.metadata?.openGraphTitle,
    image: openGraphImage
      ? {
          url: openGraphImage.src,
          width: openGraphImage.width,
          height: openGraphImage.height,
          alt: content.hero.visual.alt,
        }
      : undefined,
  };
}

function loadLuxuryMetadata(locale: string): PlatformMetadataSource {
  const content = getAiLuxuryContent(locale);
  const openGraphImage = content.metadata?.open_graph;

  return {
    title: content.metadata?.title ?? content.heroImage.title ?? "Chorn Planet",
    description: content.metadata?.description ?? content.heroImage.lead ?? "Chorn Planet platform.",
    openGraphTitle: content.metadata?.openGraphTitle ?? content.heroImage.title,
    image: openGraphImage
      ? {
          url: openGraphImage.src,
          width: openGraphImage.width,
          height: openGraphImage.height,
          alt: content.heroImage.alt,
        }
      : undefined,
  };
}

function loadDefaultPlatformMetadata(locale: string, routeKey: PlatformRouteKey): PlatformMetadataSource {
  const content = getPlatformContent(locale);
  const meta =
    content.meta[routeKey] ??
    getPlatformContent("en").meta[routeKey] ??
    getPlatformContent("en").meta.home;
  const resolvedMeta = meta ?? {
    title: "Chorn Planet",
    description: "Chorn Planet platform.",
  };
  const routeImage = platformOpenGraphImages[routeKey];

  return {
    ...resolvedMeta,
    image: routeImage,
  };
}

function loadRouteMetadata(locale: string, routeKey: PlatformRouteKey): PlatformMetadataSource {
  if (routeKey === "smart-food") {
    return loadSmartFoodMetadata(locale);
  }

  if (routeKey === "luxury") {
    return loadLuxuryMetadata(locale);
  }

  return loadDefaultPlatformMetadata(locale, routeKey);
}

export async function getPlatformMetadata(
  locale: string,
  routeKey: PlatformRouteKey,
): Promise<Metadata> {
  const targetPath = routeKey === "home" ? "/" : `/${routeKey}/`;
  const source = loadRouteMetadata(locale, routeKey);
  const imageMetadata = source.image ? { images: [source.image] } : {};
  const twitterImageMetadata = source.image ? { images: [source.image.url] } : {};
  const openGraphTitle = source.openGraphTitle ?? source.title;

  return {
    title: source.title,
    description: source.description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title: openGraphTitle,
      description: source.description,
      type: "website",
      ...imageMetadata,
    },
    twitter: {
      card: "summary_large_image",
      title: source.title,
      description: source.description,
      ...twitterImageMetadata,
    },
  };
}

