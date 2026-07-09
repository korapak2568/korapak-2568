import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";

type SmartMobilityChiangMaiSource = {
  locale: string;
  defaultSlug: string;
  routeLabels: Record<string, string>;
  actions: Array<{ label: string; href: string }>;
  pages: Record<string, SmartMobilityChiangMaiContentPayload & { metadata?: SmartMobilityChiangMaiMetadata }>;
};

export type SmartMobilityChiangMaiMetadata = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  image?: string;
  imageAlt?: string;
  type?: "article" | "website";
};

const DEFAULT_LOCALE = "en";
const sourceCache = new Map<string, Promise<SmartMobilityChiangMaiSource>>();

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export async function getSmartMobilityChiangMaiSource(
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityChiangMaiSource> {
  const cachedSource = sourceCache.get(locale);

  if (cachedSource) {
    return cachedSource;
  }

  const sourcePromise = fetchData<SmartMobilityChiangMaiSource>(
    `/smart-mobility/chaingmai/${locale}.json`,
  ).catch((error) => {
    sourceCache.delete(locale);

    if (locale !== DEFAULT_LOCALE) {
      return getSmartMobilityChiangMaiSource(DEFAULT_LOCALE);
    }

    throw error;
  });
  sourceCache.set(locale, sourcePromise);

  return sourcePromise;
}

export async function getSmartMobilityChiangMaiDefaultSlug(
  locale = DEFAULT_LOCALE,
): Promise<string> {
  return (await getSmartMobilityChiangMaiSource(locale)).defaultSlug;
}

export async function getSmartMobilityChiangMaiSlugs(
  locale = DEFAULT_LOCALE,
): Promise<string[]> {
  return Object.keys((await getSmartMobilityChiangMaiSource(locale)).pages);
}

export async function isSmartMobilityChiangMaiContentSlug(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<boolean> {
  return slug in (await getSmartMobilityChiangMaiSource(locale)).pages;
}

export async function getSmartMobilityChiangMaiRouteLabels(
  locale = DEFAULT_LOCALE,
): Promise<Record<string, string>> {
  return { ...(await getSmartMobilityChiangMaiSource(locale)).routeLabels };
}

export async function getSmartMobilityChiangMaiActionsFromJson(
  locale = DEFAULT_LOCALE,
): Promise<Array<{ label: string; href: string }>> {
  return (await getSmartMobilityChiangMaiSource(locale)).actions.map((action) => ({ ...action }));
}

export async function getSmartMobilityChiangMaiMetadataFromJson(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityChiangMaiMetadata | undefined> {
  const source = await getSmartMobilityChiangMaiSource(locale);

  return source.pages[slug]?.metadata ? clone(source.pages[slug].metadata) : undefined;
}

export async function getSmartMobilityChiangMaiContent(
  locale: string,
  slug: string,
): Promise<SmartMobilityChiangMaiContentPayload> {
  const source = await getSmartMobilityChiangMaiSource(locale || DEFAULT_LOCALE);
  const page = source.pages[slug];

  if (!page) {
    throw new Error(`Smart Mobility Chiang Mai content not found for slug "${slug}"`);
  }

  const { metadata: _metadata, ...content } = clone(page);

  return {
    ...content,
    locale: locale || source.locale,
    slug,
  };
}

export async function getSmartMobilityChiangMaiContentForPublicPage(
  locale: string,
  slug: string,
): Promise<SmartMobilityChiangMaiContentPayload> {
  return getSmartMobilityChiangMaiContent(locale, slug);
}

export async function getAllSmartMobilityChiangMaiContent(): Promise<SmartMobilityChiangMaiContentPayload[]> {
  const source = await getSmartMobilityChiangMaiSource();

  return Promise.all(
    Object.keys(source.pages).map((slug) =>
      getSmartMobilityChiangMaiContent(source.locale, slug),
    ),
  );
}
