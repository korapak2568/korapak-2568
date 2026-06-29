import platformHomeDeSeed from "@/data/home/de.json";
import platformHomeEnSeed from "@/data/home/en.json";
import platformHomeFrSeed from "@/data/home/fr.json";
import platformHomeIdSeed from "@/data/home/id.json";
import platformHomeJaSeed from "@/data/home/ja.json";
import platformHomeKoSeed from "@/data/home/ko.json";
import platformHomeRuSeed from "@/data/home/ru.json";
import platformHomeThSeed from "@/data/home/th.json";
import platformHomeViSeed from "@/data/home/vi.json";
import platformHomeZhSeed from "@/data/home/zh.json";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

const platformContent = {
  de: platformHomeDeSeed,
  en: platformHomeEnSeed,
  fr: platformHomeFrSeed,
  id: platformHomeIdSeed,
  ja: platformHomeJaSeed,
  ko: platformHomeKoSeed,
  ru: platformHomeRuSeed,
  th: platformHomeThSeed,
  vi: platformHomeViSeed,
  zh: platformHomeZhSeed,
};

export type PlatformLocale = keyof typeof platformContent;
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

const contentByLocale = platformContent as unknown as Record<string, PlatformContentInput>;
const defaultContent = contentByLocale.en as PlatformContent;

export function getPlatformContent(locale: string): PlatformContent {
  const localeContent = contentByLocale[locale] ?? defaultContent;

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

export function getPlatformChannelContent(
  locale: string,
  routeKey: Exclude<PlatformRouteKey, "home" | "about" | "history">,
): PlatformChannelContent {
  const content = getPlatformContent(locale);
  return content.channels[routeKey] ?? defaultContent.channels[routeKey]!;
}
