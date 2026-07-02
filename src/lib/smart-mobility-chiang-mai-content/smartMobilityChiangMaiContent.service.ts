import chiangMaiContent from "@/data/smart-mobility/chaingmai/en.json";
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

const source = chiangMaiContent as SmartMobilityChiangMaiSource;

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function getSmartMobilityChiangMaiSource(): SmartMobilityChiangMaiSource {
  return source;
}

export function getSmartMobilityChiangMaiDefaultSlug(): string {
  return source.defaultSlug;
}

export function getSmartMobilityChiangMaiSlugs(): string[] {
  return Object.keys(source.pages);
}

export function isSmartMobilityChiangMaiContentSlug(slug: string): boolean {
  return slug in source.pages;
}

export function getSmartMobilityChiangMaiRouteLabels(): Record<string, string> {
  return { ...source.routeLabels };
}

export function getSmartMobilityChiangMaiActionsFromJson(): Array<{ label: string; href: string }> {
  return source.actions.map((action) => ({ ...action }));
}

export function getSmartMobilityChiangMaiMetadataFromJson(
  slug: string,
): SmartMobilityChiangMaiMetadata | undefined {
  return source.pages[slug]?.metadata ? clone(source.pages[slug].metadata) : undefined;
}

export async function getSmartMobilityChiangMaiContent(
  locale: string,
  slug: string,
): Promise<SmartMobilityChiangMaiContentPayload> {
  const page = source.pages[slug];

  if (!page) {
    throw new Error(`Smart Mobility Chiang Mai content not found in data/smart-mobility/chaingmai/en.json for slug "${slug}"`);
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
  return Promise.all(
    getSmartMobilityChiangMaiSlugs().map((slug) =>
      getSmartMobilityChiangMaiContent(source.locale, slug),
    ),
  );
}
