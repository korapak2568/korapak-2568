import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

type PlatformMeta = {
  title: string;
  description: string;
};

export type PlatformOutfitLocale = SiteLocale;

export type PlatformOutfitLocalizedText =
  | string
  | (Partial<Record<PlatformOutfitLocale, string>> & { en: string });

export type PlatformOutfitImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformOutfitHeroImage = {
  slot: "primary" | "secondary" | "tertiary";
  src: string;
  alt: string;
  sizes: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
  imageGenerationSize?: PlatformOutfitImageGenerationSize;
};

export type PlatformOutfitImage = {
  src: string;
  alt: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
  open_graph?: PlatformResponsiveImageVariant;
};

export type PlatformOutfitDetailImage = {
  imageGenerationSize?: PlatformOutfitImageGenerationSize;
  image: PlatformOutfitImage;
};

export type PlatformOutfitHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  imageStrategy: string;
  images: PlatformOutfitHeroImage[];
};

export type PlatformOutfitLayoutSection = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type PlatformOutfitDetailPageContent = {
  tagListLabel: string;
  externalCta: string;
  relatedLabel: string;
  relatedTitle: string;
  relatedCardCta: string;
  metadataSuffix: string;
  notFoundTitle: string;
};

export type PlatformOutfitLandingPageContent = {
  subZoneRequiredLabel: string;
  zoneReadyLabel: string;
};

export type PlatformOutfitTranslation = {
  metadata: PlatformMeta;
  hero: PlatformOutfitHeroContent;
  layoutSections: PlatformOutfitLayoutSection[];
  detailPage: PlatformOutfitDetailPageContent;
  landingPage: Partial<PlatformOutfitLandingPageContent>;
  productionRules: string[];
  cta: {
    title: string;
    description: string;
    primary: string;
  };
};

export type PlatformOutfitSet = {
  id: string;
  order: number;
  title: string;
  audience: string;
  image: PlatformOutfitImage;
  imageGenerationSize?: PlatformOutfitImageGenerationSize;
  images: PlatformOutfitDetailImage[];
  story: string;
  tags: string[];
  tiktok_url: string;
  visualSummary: string;
  zoneCandidates?: string[];
  zoneDisplay?: string[];
  subZoneRequired?: boolean;
};

export type PlatformOutfitSeed = {
  locale: PlatformOutfitLocale;
  content: PlatformOutfitTranslation;
  outfitSets: PlatformOutfitSet[];
};

export type ResolvedPlatformOutfitContent = PlatformOutfitTranslation & {
  locale: PlatformOutfitLocale;
  outfitSets: PlatformOutfitSet[];
};

export const PLATFORM_OUTFIT_SUPPORTED_LOCALES = LOCALES;

export function isPlatformOutfitLocale(
  locale: string,
): locale is PlatformOutfitLocale {
  return PLATFORM_OUTFIT_SUPPORTED_LOCALES.includes(
    locale as PlatformOutfitLocale,
  );
}

export function resolvePlatformOutfitLocale(
  locale?: string | null,
): PlatformOutfitLocale {
  if (locale && isPlatformOutfitLocale(locale)) {
    return locale;
  }

  return DEFAULT_LOCALE;
}

export function getPlatformOutfitLocalizedText(
  text: PlatformOutfitLocalizedText,
  locale?: string | null,
): string {
  if (typeof text === "string") {
    return text;
  }

  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  return text[resolvedLocale] ?? text.en;
}