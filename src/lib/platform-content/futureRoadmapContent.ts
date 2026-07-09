import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { PlatformResponsiveImage } from "@/lib/platform-content/platformImageVariants";

const DEFAULT_FUTURE_ROADMAP_LOCALE = DEFAULT_LOCALE;
const FUTURE_ROADMAP_BASE_PATH = "/future-roadmap";

export type FutureRoadmapLayer = {
  id: string;
  title: string;
  description: string;
};

export type FutureRoadmapCategory = {
  id: string;
  title: string;
};

export type FutureRoadmapSubCategory = {
  id: string;
  title: string;
  layerId: string;
};

export type FutureRoadmapTaxonomy = {
  layers: FutureRoadmapLayer[];
  categories: FutureRoadmapCategory[];
  "sub-categories": FutureRoadmapSubCategory[];
  tags: string[];
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
  category: string;
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

export type FutureRoadmapManifest = {
  roadmapId: string;
  title: string;
  description: string;
  taxonomy: FutureRoadmapTaxonomy;
  eras: Array<{
    id: string;
    order: number;
    title: string;
    file: string;
  }>;
  ui: {
    navigation: {
      indexLabel: string;
      eraLabel: string;
    };
    actions: {
      viewSignal: string;
    };
    metadata: {
      siteName: string;
      titleSuffix: string;
      fallbackTitle: string;
    };
    landingHero: {
      eyebrow: string;
    };
    landingSignalGallery: {
      eyebrow: string;
      title: string;
      description: string;
    };
    homeHero: {
      eyebrow: string;
      title: string;
      description: string;
      actions: {
        openRoadmap: string;
        exploreRoadmap: string;
      };
      railAriaLabel: string;
      imageCaptionEyebrow: string;
    };
    homePreview: {
      eyebrow: string;
      title: string;
      description: string;
      actionLabel: string;
    };
    layersSection: {
      eyebrow: string;
      title: string;
    };
    eraPage: {
      summaryDescription: string;
      continueTimeline: {
        eyebrow: string;
        title: string;
      };
    };
    itemPage: {
      relatedSignals: {
        eyebrowPrefix: string;
        title: string;
        descriptionPrefix: string;
        descriptionSuffix: string;
      };
      detail: {
        timeframeLabel: string;
        layerLabel: string;
        impactLabel: string;
        maturityLabel: string;
        signalsTitle: string;
        implicationsTitle: string;
      };
    };
  };
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

export type FutureRoadmapLocaleContent = {
  manifest: FutureRoadmapManifest;
  eras: FutureRoadmapEra[];
};

function normalizeRoadmapLocale(locale?: string): string {
  return locale?.trim().toLowerCase() || DEFAULT_FUTURE_ROADMAP_LOCALE;
}

function getManifestPath(locale: string): string {
  return `${FUTURE_ROADMAP_BASE_PATH}/manifest/${locale}.json`;
}

function getRoadmapDataPath(filePath: string): string {
  return filePath
    .replace(/^\/content\/future-roadmap\//, `${FUTURE_ROADMAP_BASE_PATH}/`)
    .replace(/^future-roadmap\//, `${FUTURE_ROADMAP_BASE_PATH}/`);
}

async function fetchFutureRoadmapJson<T>(jsonPath: string): Promise<T> {
  try {
    return await fetchData<T>(jsonPath);
  } catch (error) {
    if (jsonPath.includes("/era01/")) {
      return fetchData<T>(jsonPath.replace("/era01/", "/era-01/"));
    }

    throw error;
  }
}

async function fetchFutureRoadmapContent(
  locale?: string,
): Promise<FutureRoadmapLocaleContent> {
  const normalizedLocale = normalizeRoadmapLocale(locale);
  const manifest = await fetchFutureRoadmapJson<FutureRoadmapManifest>(
    getManifestPath(normalizedLocale),
  );
  const eras = await Promise.all(
    manifest.eras.map((era) =>
      fetchFutureRoadmapJson<FutureRoadmapEra>(getRoadmapDataPath(era.file)),
    ),
  );

  return {
    manifest,
    eras: eras.sort((a, b) => a.era.order - b.era.order),
  };
}

const futureRoadmapContentCache = new Map<string, Promise<FutureRoadmapLocaleContent>>();

export function getFutureRoadmapContent(
  locale?: string,
): Promise<FutureRoadmapLocaleContent> {
  const normalizedLocale = normalizeRoadmapLocale(locale);
  const cachedContent = futureRoadmapContentCache.get(normalizedLocale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchFutureRoadmapContent(normalizedLocale);
  futureRoadmapContentCache.set(normalizedLocale, contentPromise);

  return contentPromise;
}

export async function getFutureRoadmapManifest(
  locale?: string,
): Promise<FutureRoadmapManifest> {
  return (await getFutureRoadmapContent(locale)).manifest;
}

export async function getFutureRoadmapTaxonomy(
  locale?: string,
): Promise<FutureRoadmapTaxonomy> {
  return (await getFutureRoadmapContent(locale)).manifest.taxonomy;
}

export async function getFutureRoadmapEras(
  locale?: string,
): Promise<FutureRoadmapEra[]> {
  return [...(await getFutureRoadmapContent(locale)).eras];
}

export async function getFutureRoadmapEraSummaries(
  locale?: string,
): Promise<FutureRoadmapEraSummary[]> {
  return (await getFutureRoadmapEras(locale)).map(({ era, items }) => ({
    ...era,
    coverItem: items[0],
    featuredItems: items.slice(0, 5),
  }));
}

export async function getFutureRoadmapEraBySlug(
  slug: string,
  locale?: string,
): Promise<FutureRoadmapEra | undefined> {
  return (await getFutureRoadmapEras(locale)).find(
    ({ era }) => era.slug === slug,
  );
}

export async function getFutureRoadmapFeaturedItems(
  count = 5,
  locale?: string,
): Promise<FutureRoadmapFeaturedItem[]> {
  return (await getFutureRoadmapActiveItems(locale)).slice(0, count);
}

export async function getFutureRoadmapActiveItems(
  locale?: string,
): Promise<FutureRoadmapFeaturedItem[]> {
  return (await getFutureRoadmapEras(locale))
    .filter(({ era }) => era.order >= 1 && era.order <= 8)
    .flatMap(({ era, items }) =>
      items.map((item) => ({
        ...item,
        era,
      })),
    );
}

export async function getFutureRoadmapItemBySlugs(
  eraSlug: string,
  itemSlug: string,
  locale?: string,
): Promise<FutureRoadmapItemDetail | undefined> {
  const roadmapEra = await getFutureRoadmapEraBySlug(eraSlug, locale);

  if (!roadmapEra) {
    return undefined;
  }

  const item = roadmapEra.items.find(
    (candidate) => candidate.slug === itemSlug,
  );

  if (!item) {
    return undefined;
  }

  return {
    era: roadmapEra.era,
    item,
    relatedItems: roadmapEra.items.filter(
      (candidate) => candidate.slug !== itemSlug,
    ),
  };
}

export async function getFutureRoadmapItemStaticParams(locale?: string) {
  return (await getFutureRoadmapEras(locale)).flatMap(({ era, items }) =>
    items.map((item) => ({
      eraSlug: era.slug,
      slug: item.slug,
    })),
  );
}

export async function getFutureRoadmapLayer(layerId: string, locale?: string) {
  return (await getFutureRoadmapTaxonomy(locale)).layers.find(
    (layer) => layer.id === layerId,
  );
}
