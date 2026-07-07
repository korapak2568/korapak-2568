import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { getCgdSearchRecordByRoute } from "@/lib/cgd/loader";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
  type PlatformResponsiveImage,
} from "@/lib/platform-content/platformImageVariants";
import {
  getFutureRoadmapEraBySlug,
  getFutureRoadmapEras,
  getFutureRoadmapItemBySlugs,
  getFutureRoadmapManifest,
} from "@/lib/platform-content/futureRoadmapContent";

type FutureRoadmapOpenGraphImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

function getFutureRoadmapOpenGraphImageMetadata(
  image: PlatformResponsiveImage,
  fallbackAlt: string,
): FutureRoadmapOpenGraphImage {
  const openGraphImage = image.open_graph;

  return {
    url: getPlatformImageSrc(image, "open_graph"),
    width: openGraphImage?.width ?? 1200,
    height: openGraphImage?.height ?? 630,
    alt: getPlatformImageAlt(image, "open_graph") || fallbackAlt,
  };
}

export function getFutureCivilizationMetadata(locale?: string): Metadata {
  const manifest = getFutureRoadmapManifest(locale);
  const title = manifest.ui.metadata.fallbackTitle;
  const openGraphImages = getFutureRoadmapEras(locale)
    .map(({ era, items }) => {
      const coverImage = items[0]?.image;

      return coverImage
        ? getFutureRoadmapOpenGraphImageMetadata(coverImage, era.title)
        : undefined;
    })
    .filter((image): image is FutureRoadmapOpenGraphImage => Boolean(image));
  const targetPath = "/future-civilization/";

  return {
    title,
    description: manifest.description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description: manifest.description,
      type: "website",
      images: openGraphImages.length > 0 ? openGraphImages : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: manifest.description,
      images: openGraphImages[0] ? [openGraphImages[0].url] : undefined,
    },
  };
}

export function getFutureCivilizationEraMetadata(
  eraSlug: string,
  locale?: string,
): Metadata {
  const manifest = getFutureRoadmapManifest(locale);
  const era = getFutureRoadmapEraBySlug(eraSlug, locale);

  if (!era) {
    return {
      title: manifest.ui.metadata.fallbackTitle,
      description: manifest.description,
    };
  }

  const title =
    era.era.seo?.metaTitle ?? `${era.era.title} | ${manifest.ui.metadata.titleSuffix}`;
  const description = era.era.seo?.metaDescription ?? era.era.description;
  const coverImage = era.items[0]?.image;
  const openGraphImage = coverImage
    ? getFutureRoadmapOpenGraphImageMetadata(coverImage, era.era.title)
    : undefined;
  const targetPath = `/future-civilization/${era.era.slug}/`;

  return {
    title,
    description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description,
      type: "article",
      images: openGraphImage ? [openGraphImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: openGraphImage ? [openGraphImage.url] : undefined,
    },
  };
}

export function getFutureCivilizationItemMetadata(
  eraSlug: string,
  itemSlug: string,
  locale?: string,
): Metadata {
  const manifest = getFutureRoadmapManifest(locale);
  const detail = getFutureRoadmapItemBySlugs(eraSlug, itemSlug, locale);

  if (!detail) {
    return {
      title: manifest.ui.metadata.fallbackTitle,
      description: manifest.description,
    };
  }

  const { era, item } = detail;
  const targetPath = `/future-civilization/${era.slug}/${item.slug}/`;
  const search = getCgdSearchRecordByRoute(targetPath, "future-solution", locale);
  const title = search?.title ?? `${item.title} | ${era.title}`;
  const description = search?.description ?? item.description;
  const openGraphImage = getFutureRoadmapOpenGraphImageMetadata(
    item.image,
    item.title,
  );

  return {
    title,
    description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description,
      type: "article",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.url],
    },
  };
}