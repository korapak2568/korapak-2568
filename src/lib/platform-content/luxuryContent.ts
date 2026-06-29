import luxuryDeContent from "@/data/luxury/de.json";
import luxuryEnContent from "@/data/luxury/en.json";
import luxuryFrContent from "@/data/luxury/fr.json";
import luxuryIdContent from "@/data/luxury/id.json";
import luxuryJaContent from "@/data/luxury/ja.json";
import luxuryKoContent from "@/data/luxury/ko.json";
import luxuryRuContent from "@/data/luxury/ru.json";
import luxuryThContent from "@/data/luxury/th.json";
import luxuryViContent from "@/data/luxury/vi.json";
import luxuryZhContent from "@/data/luxury/zh.json";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";
import type { SiteLocale } from "@/lib/SiteUrlLocales";

export type AiLuxuryMetadataContent = {
  title: string;
  description: string;
  openGraphTitle: string;
  open_graph?: PlatformResponsiveImageVariant;
};

export type AiLuxuryImage = {
  src: string;
  alt: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
  open_graph?: PlatformResponsiveImageVariant;
  eyebrow?: string;
  title?: string;
  lead?: string;
  support?: string;
};

export type AiLuxurySizedImage = AiLuxuryImage & {
  width: number;
  height: number;
  sizes: string;
};

export type AiLuxuryAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type AiLuxuryHeroContent = {
  actionsLabel: string;
  actions: AiLuxuryAction[];
  signalsLabel: string;
  signals: string[];
};

export type AiLuxuryTextSection = {
  eyebrow: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
};

export type AiLuxurySizedCard = {
  title: string;
  text: string;
  image: AiLuxurySizedImage;
};

export type AiLuxurySignal = {
  title: string;
  text: string;
};

export type AiLuxuryContent = {
  metadata?: AiLuxuryMetadataContent;
  heroImage: AiLuxurySizedImage;
  heroContent: AiLuxuryHeroContent;
  readinessImage: AiLuxurySizedImage;
  ventureImage: AiLuxurySizedImage;
  readinessSection: AiLuxuryTextSection;
  segmentsSection: AiLuxuryTextSection;
  layersSection: AiLuxuryTextSection;
  businessSignalSection: AiLuxuryTextSection;
  premiumSegments: AiLuxurySizedCard[];
  platformLayers: AiLuxurySizedCard[];
  businessSignals: AiLuxurySignal[];
};

const contentByLocale: Record<SiteLocale, AiLuxuryContent> = {
  de: luxuryDeContent as AiLuxuryContent,
  en: luxuryEnContent as AiLuxuryContent,
  fr: luxuryFrContent as AiLuxuryContent,
  id: luxuryIdContent as AiLuxuryContent,
  ja: luxuryJaContent as AiLuxuryContent,
  ko: luxuryKoContent as AiLuxuryContent,
  ru: luxuryRuContent as AiLuxuryContent,
  th: luxuryThContent as AiLuxuryContent,
  vi: luxuryViContent as AiLuxuryContent,
  zh: luxuryZhContent as AiLuxuryContent,
};

export function getAiLuxuryContent(locale: string): AiLuxuryContent {
  return contentByLocale[locale as SiteLocale] ?? contentByLocale.en;
}
