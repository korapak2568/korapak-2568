import type { Metadata } from "next";
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
import smartCityContent from "@/data/smart-city/en.json";
import smartCityLandingContent from "@/data/smart-city/landing/en.json";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
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

const sourceContent = smartCityContent as unknown as SmartCitySource;
const sourceLandingPages = smartCityLandingContent as unknown as SmartCityLandingPagesSource;

function cloneSmartCityContent(locale: string): PlatformSmartCityContent {
  return {
    ...JSON.parse(JSON.stringify(sourceContent)),
    locale,
  } as PlatformSmartCityContent;
}

function cloneSmartCityLandingPages(): SmartCityLandingPagesSource {
  return JSON.parse(JSON.stringify(sourceLandingPages)) as SmartCityLandingPagesSource;
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
  return hydratePlatformImageVariants(cloneSmartCityContent(locale)) as PlatformSmartCityContent;
}

export async function getPlatformSmartCityLandingPages(): Promise<SmartCityLandingPagesSource> {
  return hydratePlatformImageVariants(cloneSmartCityLandingPages()) as SmartCityLandingPagesSource;
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
  const landingPages = await getPlatformSmartCityLandingPages();
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
  const landingPages = await getPlatformSmartCityLandingPages();
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
  locale = "en",
): Promise<SmartCityLandingContentPayload[]> {
  const landingPages = await getPlatformSmartCityLandingPages();

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
  locale = "en",
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
