import type { Metadata } from "next";
import manifestSeed from "@/data/future-roadmap/manifest.json";
import taxonomySeed from "@/data/future-roadmap/taxonomy.json";
import era01Seed from "@/data/future-roadmap/en.era-01.json";
import era02Seed from "@/data/future-roadmap/en.era-02.json";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
  type PlatformResponsiveImage,
} from "@/lib/platform-content/platformImageVariants";

export type FutureRoadmapLayer = {
  id: string;
  title: string;
  description: string;
};

export type FutureRoadmapTimeframe = {
  label?: string;
  startYear: number;
  endYear: number;
  certainty?: string;
};

export type FutureRoadmapEraMeta = {
  id: string;
  order: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  timeframe: FutureRoadmapTimeframe;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
};

export type FutureRoadmapItem = {
  id: string;
  order: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  layerId: string;
  domains: string[];
  maturity: string;
  timeframe: {
    startYear: number;
    endYear: number;
  };
  impactLevel: string;
  civilizationImpact: string;
  signals: string[];
  implications: string[];
  image: PlatformResponsiveImage;
};

export type FutureRoadmapEra = {
  era: FutureRoadmapEraMeta;
  items: FutureRoadmapItem[];
};

export type FutureRoadmapEraSummary = FutureRoadmapEraMeta & {
  coverItem: FutureRoadmapItem;
  featuredItems: FutureRoadmapItem[];
};

export type FutureRoadmapFeaturedItem = FutureRoadmapItem & {
  era: FutureRoadmapEraMeta;
};

export type FutureRoadmapItemDetail = {
  era: FutureRoadmapEraMeta;
  item: FutureRoadmapItem;
  relatedItems: FutureRoadmapItem[];
};

const roadmapEras = [era01Seed, era02Seed] as FutureRoadmapEra[];

export const futureRoadmapManifest = manifestSeed;
export const futureRoadmapTaxonomy = taxonomySeed as {
  layers: FutureRoadmapLayer[];
};

export function getFutureRoadmapEras(): FutureRoadmapEra[] {
  return [...roadmapEras].sort((a, b) => a.era.order - b.era.order);
}

export function getFutureRoadmapEraSummaries(): FutureRoadmapEraSummary[] {
  return getFutureRoadmapEras().map(({ era, items }) => ({
    ...era,
    coverItem: items[0],
    featuredItems: items.slice(0, 5),
  }));
}

export function getFutureRoadmapEraBySlug(
  slug: string,
): FutureRoadmapEra | undefined {
  return getFutureRoadmapEras().find(({ era }) => era.slug === slug);
}

export function getFutureRoadmapFeaturedItems(
  count = 5,
): FutureRoadmapFeaturedItem[] {
  return getFutureRoadmapEras()
    .flatMap(({ era, items }) =>
      items.map((item) => ({
        ...item,
        era,
      })),
    )
    .slice(0, count);
}

export function getFutureRoadmapItemBySlugs(
  eraSlug: string,
  itemSlug: string,
): FutureRoadmapItemDetail | undefined {
  const roadmapEra = getFutureRoadmapEraBySlug(eraSlug);

  if (!roadmapEra) {
    return undefined;
  }

  const item = roadmapEra.items.find((candidate) => candidate.slug === itemSlug);

  if (!item) {
    return undefined;
  }

  return {
    era: roadmapEra.era,
    item,
    relatedItems: roadmapEra.items.filter((candidate) => candidate.slug !== itemSlug),
  };
}

export function getFutureRoadmapItemStaticParams() {
  return getFutureRoadmapEras().flatMap(({ era, items }) =>
    items.map((item) => ({
      eraSlug: era.slug,
      slug: item.slug,
    })),
  );
}

export function getFutureRoadmapLayer(layerId: string) {
  return futureRoadmapTaxonomy.layers.find((layer) => layer.id === layerId);
}

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

export function getFutureCivilizationMetadata(): Metadata {
  const title = "Future Civilization Roadmap | Chorn Planet";
  const openGraphImages = getFutureRoadmapEras()
    .map(({ era, items }) => {
      const coverImage = items[0]?.image;

      return coverImage
        ? getFutureRoadmapOpenGraphImageMetadata(coverImage, era.title)
        : undefined;
    })
    .filter((image): image is FutureRoadmapOpenGraphImage => Boolean(image));

  return {
    title,
    description: futureRoadmapManifest.description,
    alternates: {
      canonical: "/en/future-civilization/",
    },
    openGraph: {
      title,
      description: futureRoadmapManifest.description,
      type: "website",
      images: openGraphImages.length > 0 ? openGraphImages : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: futureRoadmapManifest.description,
      images: openGraphImages[0] ? [openGraphImages[0].url] : undefined,
    },
  };
}

export function getFutureCivilizationEraMetadata(eraSlug: string): Metadata {
  const era = getFutureRoadmapEraBySlug(eraSlug);

  if (!era) {
    return {
      title: "Future Civilization Roadmap | Chorn Planet",
      description: futureRoadmapManifest.description,
    };
  }

  const title =
    era.era.seo?.metaTitle ?? `${era.era.title} | Future Civilization Roadmap`;
  const description = era.era.seo?.metaDescription ?? era.era.description;
  const coverImage = era.items[0]?.image;
  const openGraphImage = coverImage
    ? getFutureRoadmapOpenGraphImageMetadata(coverImage, era.era.title)
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/en/future-civilization/${era.era.slug}/`,
    },
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
): Metadata {
  const detail = getFutureRoadmapItemBySlugs(eraSlug, itemSlug);

  if (!detail) {
    return {
      title: "Future Civilization Roadmap | Chorn Planet",
      description: futureRoadmapManifest.description,
    };
  }

  const { era, item } = detail;
  const title = `${item.title} | ${era.title}`;
  const openGraphImage = getFutureRoadmapOpenGraphImageMetadata(
    item.image,
    item.title,
  );

  return {
    title,
    description: item.description,
    alternates: {
      canonical: `/en/future-civilization/${era.slug}/${item.slug}/`,
    },
    openGraph: {
      title,
      description: item.description,
      type: "article",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.description,
      images: [openGraphImage.url],
    },
  };
}