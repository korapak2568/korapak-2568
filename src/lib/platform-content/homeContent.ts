import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

export type PlatformLocale = SiteLocale;
export type PlatformRouteKey =
  | "home"
  | "about"
  | "history"
  | "world"
  | "outfit"
  | "media"
  | "commerce"
  | "smart-food"
  | "luxury";

export type PlatformImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformImage = PlatformImageGenerationSize & {
  src: string;
  alt: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
};

export type PlatformCard = {
  category: string;
  title: string;
  description: string;
  image: PlatformImage;
  tags: string[];
  cta: string;
  href: string;
};

export type PlatformCircularItem = {
  title: string;
  description: string;
  link: string;
  image: PlatformImage;
};

export type PlatformCircularContent = {
  title: string;
  span: string;
  description: string;
  categories: PlatformCircularItem[];
};

export type PlatformSection = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  layout: "featured" | "grid" | "compact";
  cards: PlatformCard[];
};

export type PlatformHomeContent = {
  sections: PlatformSection[];
  circular: PlatformCircularContent;
};

export type PlatformTextBlock = {
  title: string;
  body: string;
  tags?: string[];
  link?: string;
};

export type PlatformStoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: PlatformImage;
  blocks: PlatformTextBlock[];
};

export type PlatformChannelContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: PlatformImage;
  cards: PlatformCard[];
};

type PlatformMeta = {
  title: string;
  description: string;
};

type PlatformContent = {
  meta: Partial<Record<PlatformRouteKey, PlatformMeta>>;
  home: PlatformHomeContent;
  about: PlatformStoryContent;
  history?: PlatformStoryContent;
  channels: Partial<
    Record<
      Exclude<PlatformRouteKey, "home" | "about" | "history">,
      PlatformChannelContent
    >
  >;
};

type PlatformContentInput = Partial<
  Omit<PlatformContent, "meta" | "channels">
> & {
  meta?: Partial<Record<PlatformRouteKey, PlatformMeta>>;
  channels?: PlatformContent["channels"];
};

const contentCache = new Map<PlatformLocale, Promise<PlatformContentInput>>();

function resolvePlatformLocale(locale?: string | null): PlatformLocale {
  return LOCALES.includes(locale as SiteLocale) ? (locale as SiteLocale) : DEFAULT_LOCALE;
}

async function getPlatformContentSeed(locale: PlatformLocale): Promise<PlatformContentInput> {
  const cachedContent = contentCache.get(locale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<PlatformContentInput>(`/home/${locale}.json`);
  contentCache.set(locale, contentPromise);

  return contentPromise;
}

async function getDefaultPlatformContent(): Promise<PlatformContent> {
  return (await getPlatformContentSeed(DEFAULT_LOCALE)) as PlatformContent;
}

export async function getPlatformContent(locale: string): Promise<PlatformContent> {
  const resolvedLocale = resolvePlatformLocale(locale);
  const [defaultContent, localeContent] = await Promise.all([
    getDefaultPlatformContent(),
    getPlatformContentSeed(resolvedLocale),
  ]);

  return {
    ...defaultContent,
    ...localeContent,
    meta: {
      ...defaultContent.meta,
      ...(localeContent.meta ?? {}),
    },
    channels: {
      ...defaultContent.channels,
      ...(localeContent.channels ?? {}),
    },
  } as PlatformContent;
}

export async function getPlatformChannelContent(
  locale: string,
  routeKey: Exclude<PlatformRouteKey, "home" | "about" | "history">,
): Promise<PlatformChannelContent> {
  const [content, defaultContent] = await Promise.all([
    getPlatformContent(locale),
    getDefaultPlatformContent(),
  ]);

  return content.channels[routeKey] ?? defaultContent.channels[routeKey]!;
}