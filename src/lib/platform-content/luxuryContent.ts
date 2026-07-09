import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

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

const contentCache = new Map<SiteLocale, Promise<AiLuxuryContent>>();

function resolveLuxuryLocale(locale?: string | null): SiteLocale {
  return LOCALES.includes(locale as SiteLocale) ? (locale as SiteLocale) : DEFAULT_LOCALE;
}

async function getAiLuxuryContentSeed(locale: SiteLocale): Promise<AiLuxuryContent> {
  const cachedContent = contentCache.get(locale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<AiLuxuryContent>(`/luxury/${locale}.json`);
  contentCache.set(locale, contentPromise);

  return contentPromise;
}

export async function getAiLuxuryContent(locale: string): Promise<AiLuxuryContent> {
  return getAiLuxuryContentSeed(resolveLuxuryLocale(locale));
}