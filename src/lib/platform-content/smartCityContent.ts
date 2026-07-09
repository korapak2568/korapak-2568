import type { Metadata } from "next";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import type { SmartCityChiangMaiContentPayload } from "@/lib/model/ISmartCityChiangMai";
import type { ISmartCityItem } from "@/lib/model/ISmartCity";
import type { SmartCityLandingContentPayload } from "@/lib/model/ISmartCityLandingContent";
import type {
  ICitySystems,
  IEditorialPositioning,
  IGlobalPatterns,
  IHeroSection,
  IHumanDailyFlow,
  ILocalToGlobal,
  IMobilityFocus,
  ISmartCityResponsiveImage,
  ISystemExplainers,
  IUrbanSignals,
} from "@/lib/model/ISmartCityMedia";
import { hydratePlatformImageVariants } from "@/lib/platform-content/platformImageVariants";

type SmartCityLandingPageMetadata = {
  title: string;
  description: string;
  openGraphDescription?: string;
  twitterDescription?: string;
  image?: string;
  imageAlt?: string;
  type?: "article" | "website";
};

type SmartCityLandingPageContent = SmartCityLandingContentPayload["content"] & {
  metadata?: SmartCityLandingPageMetadata;
};

type SmartCityMainContent = {
  hero: {
    title: string;
    paragraphs: string[];
    cta: {
      label: string;
      href: string;
    };
    image: ISmartCityResponsiveImage;
  };
  navigation: {
    headline: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  };
};

export type PlatformSmartCityContent = {
  locale: string;
  metadata: {
    siteName: string;
    rootTitle: string;
    rootDescription: string;
    titleSuffix: string;
    rootOgAlt: string;
  };
  heroSection: IHeroSection;
  humanDailyFlow: IHumanDailyFlow;
  localToGlobal: ILocalToGlobal;
  systemExplainers: ISystemExplainers;
  mobilityFocus: IMobilityFocus;
  citySystems: ICitySystems;
  globalPatterns: IGlobalPatterns;
  urbanSignals: IUrbanSignals;
  editorialPositioning: IEditorialPositioning;
  smartCityMain: SmartCityMainContent;
  smartCityHighlight: ISmartCityItem;
  smartCityTags: string[];
};

type SmartCitySource = PlatformSmartCityContent;
type SmartCityLandingPagesSource = Record<string, SmartCityLandingPageContent>;

const DEFAULT_SMART_CITY_LOCALE = "en";
const smartCityContentCache = new Map<string, Promise<SmartCitySource>>();
const smartCityLandingPagesCache = new Map<string, Promise<SmartCityLandingPagesSource>>();

function resolveSmartCityLocale(locale?: string | null): string {
  return locale || DEFAULT_SMART_CITY_LOCALE;
}

async function readSmartCityContent(
  locale = DEFAULT_SMART_CITY_LOCALE,
): Promise<SmartCitySource> {
  const resolvedLocale = resolveSmartCityLocale(locale);
  const cachedContent = smartCityContentCache.get(resolvedLocale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<SmartCitySource>(
    `/smart-city/${resolvedLocale}.json`,
  ).catch((error) => {
    smartCityContentCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_SMART_CITY_LOCALE) {
      return readSmartCityContent(DEFAULT_SMART_CITY_LOCALE);
    }

    throw error;
  });
  smartCityContentCache.set(resolvedLocale, contentPromise);

  return contentPromise;
}

async function readSmartCityLandingPages(
  locale = DEFAULT_SMART_CITY_LOCALE,
): Promise<SmartCityLandingPagesSource> {
  const resolvedLocale = resolveSmartCityLocale(locale);
  const cachedContent = smartCityLandingPagesCache.get(resolvedLocale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<SmartCityLandingPagesSource>(
    `/smart-city/landing/${resolvedLocale}.json`,
  ).catch((error) => {
    smartCityLandingPagesCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_SMART_CITY_LOCALE) {
      return readSmartCityLandingPages(DEFAULT_SMART_CITY_LOCALE);
    }

    throw error;
  });
  smartCityLandingPagesCache.set(resolvedLocale, contentPromise);

  return contentPromise;
}

function getChiangMaiSlugFromUrl(url?: string): string | null {
  if (!url?.startsWith("/smart-city/chiang-mai/")) {
    return null;
  }

  return url.replace(/^\/smart-city\/chiang-mai\//, "").replace(/\/$/, "");
}

function toMetadata({
  lang,
  path,
  title,
  description,
  imageUrl,
  imageAlt,
  openGraphDescription,
  twitterDescription,
  type = "article",
}: {
  lang: string;
  path: string;
  title: string;
  description: string;
  openGraphDescription?: string;
  twitterDescription?: string;
  imageUrl?: string;
  imageAlt: string;
  type?: "article" | "website";
}): Metadata {
  const images = imageUrl
    ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: getLocalizedAlternates(path, lang),
    openGraph: {
      title,
      description: openGraphDescription ?? description,
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription ?? description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export async function getPlatformSmartCityContent(
  locale: string,
): Promise<PlatformSmartCityContent> {
  const resolvedLocale = resolveSmartCityLocale(locale);
  const content = await readSmartCityContent(resolvedLocale);

  return hydratePlatformImageVariants({
    ...content,
    locale: resolvedLocale,
  }) as PlatformSmartCityContent;
}

export async function getPlatformSmartCityLandingPages(
  locale = DEFAULT_SMART_CITY_LOCALE,
): Promise<SmartCityLandingPagesSource> {
  return hydratePlatformImageVariants(
    await readSmartCityLandingPages(locale),
  ) as SmartCityLandingPagesSource;
}

export async function getSmartCityRootMetadata(lang: string): Promise<Metadata> {
  const content = await getPlatformSmartCityContent(lang);

  return toMetadata({
    lang,
    path: "/smart-city/",
    title: content.metadata.rootTitle,
    description: content.metadata.rootDescription,
    imageUrl: content.heroSection.image.open_graph?.src ?? content.heroSection.image.src,
    imageAlt: content.metadata.rootOgAlt,
    type: "website",
  });
}

export async function getSmartCityLandingContentFromJson(
  locale: string,
  slug: string,
): Promise<SmartCityLandingContentPayload | null> {
  const landingPages = await getPlatformSmartCityLandingPages(locale);
  const landingPage = landingPages[slug];

  if (!landingPage) {
    return null;
  }

  const { metadata: _metadata, ...pageContent } = landingPage;

  return {
    locale,
    slug,
    content: pageContent,
  };
}

export async function getSmartCityLandingMetadataFromJson(
  lang: string,
  slug: string,
): Promise<Metadata | null> {
  const data = await getSmartCityLandingContentFromJson(lang, slug);
  if (!data?.content.heroObservation) {
    return null;
  }

  const content = await getPlatformSmartCityContent(lang);
  const landingPages = await getPlatformSmartCityLandingPages(lang);
  const hero = data.content.heroObservation;
  const landingMetadata = landingPages[slug]?.metadata;

  return toMetadata({
    lang,
    path: `/smart-city/${slug}/`,
    title: landingMetadata?.title ?? `${hero.headline}${content.metadata.titleSuffix}`,
    description: landingMetadata?.description ?? hero.paragraphs[0],
    openGraphDescription: landingMetadata?.openGraphDescription,
    twitterDescription: landingMetadata?.twitterDescription,
    imageUrl: hero.image?.open_graph?.src ?? landingMetadata?.image ?? hero.image?.src ?? hero.image?.url,
    imageAlt: landingMetadata?.imageAlt ?? hero.image?.alt ?? hero.headline,
    type: landingMetadata?.type,
  });
}

export async function getSmartCityChiangMaiContentFromJson(
  locale: string,
  slug: string,
): Promise<SmartCityChiangMaiContentPayload | null> {
  const content = await getPlatformSmartCityContent(locale);
  const item = content.smartCityHighlight as ISmartCityItem;
  const itemSlug = getChiangMaiSlugFromUrl(item.link);

  if (itemSlug !== slug) {
    return null;
  }

  return {
    locale,
    slug,
    item,
    relatedItems: [],
    bottomContent: {
      bottomCards: [],
    },
  };
}

export async function getSmartCityChiangMaiMetadataFromJson(
  lang: string,
  slug: string,
): Promise<Metadata | null> {
  const data = await getSmartCityChiangMaiContentFromJson(lang, slug);
  if (!data?.item) {
    return null;
  }

  const content = await getPlatformSmartCityContent(lang);
  const item = data.item;

  return toMetadata({
    lang,
    path: `/smart-city/chiang-mai/${slug}/`,
    title: `${item.title}${content.metadata.titleSuffix}`,
    description: item.description,
    imageUrl: item.media.image_url,
    imageAlt: item.title,
  });
}

export async function getAllSmartCityLandingContentFromJson(
  locale = DEFAULT_SMART_CITY_LOCALE,
): Promise<SmartCityLandingContentPayload[]> {
  const landingPages = await getPlatformSmartCityLandingPages(locale);

  return Object.entries(landingPages).map(([slug, landingPage]) => {
    const { metadata: _metadata, ...pageContent } = landingPage;

    return {
      locale,
      slug,
      content: pageContent,
    };
  });
}

export async function getAllSmartCityChiangMaiContentFromJson(
  locale = DEFAULT_SMART_CITY_LOCALE,
): Promise<SmartCityChiangMaiContentPayload[]> {
  const content = await getPlatformSmartCityContent(locale);
  const item = content.smartCityHighlight as ISmartCityItem;
  const slug = getChiangMaiSlugFromUrl(item.link);

  if (!slug) {
    return [];
  }

  return [
    {
      locale,
      slug,
      item,
      relatedItems: [],
      bottomContent: {
        bottomCards: [],
      },
    },
  ];
}
