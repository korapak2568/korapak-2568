import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import type { PlatformResponsiveImage } from "@/lib/platform-content/platformImageVariants";

const DEFAULT_FUTURE_ROADMAP_LOCALE = DEFAULT_LOCALE;
const FUTURE_ROADMAP_DATA_DIR = path.join(
  process.cwd(),
  "data",
  "future-roadmap",
);
const FUTURE_ROADMAP_ERA_DIRS = [
  "era01",
  "era02",
  "era03",
  "era04",
  "era05",
  "era06",
  "era07",
  "era08",
] as const;

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

type FutureRoadmapLocaleContent = {
  manifest: FutureRoadmapManifest;
  eras: FutureRoadmapEra[];
};

const localeContentCache = new Map<string, FutureRoadmapLocaleContent>();
const shouldUseFutureRoadmapCache = process.env.NODE_ENV === "production";

function normalizeRoadmapLocale(locale?: string): string {
  return locale?.trim().toLowerCase() || DEFAULT_FUTURE_ROADMAP_LOCALE;
}


function readFutureRoadmapJson<T>(segments: string[], locale?: string): T {
  const normalizedLocale = normalizeRoadmapLocale(locale);
  const requestedPath = path.join(
    FUTURE_ROADMAP_DATA_DIR,
    ...segments,
    `${normalizedLocale}.json`,
  );
  const fallbackPath = path.join(
    FUTURE_ROADMAP_DATA_DIR,
    ...segments,
    `${DEFAULT_FUTURE_ROADMAP_LOCALE}.json`,
  );
  const sourcePath = fs.existsSync(requestedPath) ? requestedPath : fallbackPath;
  const rawContent = fs.readFileSync(sourcePath, "utf8").replace(/^\uFEFF/, "");

  return JSON.parse(rawContent) as T;
}

export function getFutureRoadmapContent(
  locale?: string,
): FutureRoadmapLocaleContent {
  const normalizedLocale = normalizeRoadmapLocale(locale);
  const cachedContent = shouldUseFutureRoadmapCache
    ? localeContentCache.get(normalizedLocale)
    : undefined;

  if (cachedContent) {
    return cachedContent;
  }

  const content: FutureRoadmapLocaleContent = {
    manifest: readFutureRoadmapJson<FutureRoadmapManifest>(["manifest"], normalizedLocale),
    eras: FUTURE_ROADMAP_ERA_DIRS.map((eraDirectory) =>
      readFutureRoadmapJson<FutureRoadmapEra>([eraDirectory], normalizedLocale),
    ).sort((a, b) => a.era.order - b.era.order),
  };

  if (shouldUseFutureRoadmapCache) {
    localeContentCache.set(normalizedLocale, content);
  }

  return content;
}

export const futureRoadmapManifest = getFutureRoadmapContent().manifest;
export const futureRoadmapTaxonomy = getFutureRoadmapContent().manifest.taxonomy;

export function getFutureRoadmapManifest(locale?: string): FutureRoadmapManifest {
  return getFutureRoadmapContent(locale).manifest;
}

export function getFutureRoadmapTaxonomy(locale?: string): FutureRoadmapTaxonomy {
  return getFutureRoadmapContent(locale).manifest.taxonomy;
}

export function getFutureRoadmapEras(locale?: string): FutureRoadmapEra[] {
  return [...getFutureRoadmapContent(locale).eras];
}

export function getFutureRoadmapEraSummaries(
  locale?: string,
): FutureRoadmapEraSummary[] {
  return getFutureRoadmapEras(locale).map(({ era, items }) => ({
    ...era,
    coverItem: items[0],
    featuredItems: items.slice(0, 5),
  }));
}

export function getFutureRoadmapEraBySlug(
  slug: string,
  locale?: string,
): FutureRoadmapEra | undefined {
  return getFutureRoadmapEras(locale).find(({ era }) => era.slug === slug);
}

export function getFutureRoadmapFeaturedItems(
  count = 5,
  locale?: string,
): FutureRoadmapFeaturedItem[] {
  return getFutureRoadmapActiveItems(locale).slice(0, count);
}

export function getFutureRoadmapActiveItems(
  locale?: string,
): FutureRoadmapFeaturedItem[] {
  return getFutureRoadmapEras(locale)
    .filter(({ era }) => era.order >= 1 && era.order <= 8)
    .flatMap(({ era, items }) =>
      items.map((item) => ({
        ...item,
        era,
      })),
    );
}

export function getFutureRoadmapItemBySlugs(
  eraSlug: string,
  itemSlug: string,
  locale?: string,
): FutureRoadmapItemDetail | undefined {
  const roadmapEra = getFutureRoadmapEraBySlug(eraSlug, locale);

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

export function getFutureRoadmapItemStaticParams(locale?: string) {
  return getFutureRoadmapEras(locale).flatMap(({ era, items }) =>
    items.map((item) => ({
      eraSlug: era.slug,
      slug: item.slug,
    })),
  );
}

export function getFutureRoadmapLayer(layerId: string, locale?: string) {
  return getFutureRoadmapTaxonomy(locale).layers.find((layer) => layer.id === layerId);
}

