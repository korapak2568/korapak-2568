import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import platformStyleEnSeed from "@/data/style/en.json";
import platformStyleThSeed from "@/data/style/th.json";
import platformStyleDeSeed from "@/data/style/de.json";
import platformStyleFrSeed from "@/data/style/fr.json";
import platformStyleIdSeed from "@/data/style/id.json";
import platformStyleJaSeed from "@/data/style/ja.json";
import platformStyleKoSeed from "@/data/style/ko.json";
import platformStyleRuSeed from "@/data/style/ru.json";
import platformStyleViSeed from "@/data/style/vi.json";
import platformStyleZhSeed from "@/data/style/zh.json";
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

export type PlatformOutfitImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
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

const styleSeeds = {
  en: platformStyleEnSeed,
  th: platformStyleThSeed,
  de: platformStyleDeSeed,
  fr: platformStyleFrSeed,
  id: platformStyleIdSeed,
  ja: platformStyleJaSeed,
  ko: platformStyleKoSeed,
  ru: platformStyleRuSeed,
  vi: platformStyleViSeed,
  zh: platformStyleZhSeed,
} as unknown as Partial<Record<PlatformOutfitLocale, PlatformOutfitSeed>>;
const defaultStyleSeed = styleSeeds.en as PlatformOutfitSeed;
const platformOutfitOgImage = "/assets/styles/01-rice-valley-couple-lanna.png";

function getPlatformOutfitOpenGraphImage(
  outfitSet?: Pick<PlatformOutfitSet, "image">,
): PlatformResponsiveImageVariant & { alt?: string } {
  return {
    src:
      outfitSet?.image.open_graph?.src ??
      outfitSet?.image.src ??
      platformOutfitOgImage,
    width: outfitSet?.image.open_graph?.width ?? 1200,
    height: outfitSet?.image.open_graph?.height ?? 630,
    quality: outfitSet?.image.open_graph?.quality ?? 82,
    alt: outfitSet?.image.alt,
  };
}

function getPlatformOutfitImageDimensions(
  outfitSet: Pick<PlatformOutfitSet, "image" | "imageGenerationSize">,
): Pick<PlatformOutfitImageGenerationSize, "width" | "height"> {
  const dimensions =
    outfitSet.imageGenerationSize ??
    outfitSet.image.desktop ??
    outfitSet.image.thumbnail ??
    outfitSet.image.mobile;

  return {
    width: dimensions?.width ?? 1600,
    height: dimensions?.height ?? 1000,
  };
}

function resolvePlatformOutfitContentSeed(
  seed: PlatformOutfitSeed,
): PlatformOutfitTranslation {
  const defaultContent = defaultStyleSeed.content;
  const content = seed.content;

  return {
    ...defaultContent,
    ...content,
    metadata: {
      ...defaultContent.metadata,
      ...content.metadata,
    },
    hero: {
      ...defaultContent.hero,
      ...content.hero,
      images: content.hero.images?.length
        ? content.hero.images
        : defaultContent.hero.images,
    },
    layoutSections: content.layoutSections?.length
      ? content.layoutSections
      : defaultContent.layoutSections,
    detailPage: {
      ...defaultContent.detailPage,
      ...content.detailPage,
    },
    landingPage: {
      ...defaultContent.landingPage,
      ...content.landingPage,
    },
    productionRules: content.productionRules?.length
      ? content.productionRules
      : defaultContent.productionRules,
    cta: {
      ...defaultContent.cta,
      ...content.cta,
    },
  };
}

function resolvePlatformOutfitDetailImages(
  outfitSet: PlatformOutfitSet,
  defaultOutfitSet?: PlatformOutfitSet,
): PlatformOutfitDetailImage[] {
  return outfitSet.images.map((detailImage, index) => {
    const defaultDetailImage = defaultOutfitSet?.images[index];

    return {
      ...defaultDetailImage,
      ...detailImage,
      image: {
        ...defaultDetailImage?.image,
        ...detailImage.image,
      },
    } as PlatformOutfitDetailImage;
  });
}

function resolvePlatformOutfitSet(
  outfitSet: PlatformOutfitSet,
): PlatformOutfitSet {
  const defaultOutfitSet = defaultStyleSeed.outfitSets.find(
    (defaultSet) => defaultSet.id === outfitSet.id,
  );

  return {
    ...defaultOutfitSet,
    ...outfitSet,
    image: {
      ...defaultOutfitSet?.image,
      ...outfitSet.image,
    },
    images: resolvePlatformOutfitDetailImages(outfitSet, defaultOutfitSet),
  } as PlatformOutfitSet;
}
export const PLATFORM_OUTFIT_SUPPORTED_LOCALES = LOCALES;

export function getPlatformOutfitMetadata(locale?: string | null): Metadata {
  const content = getPlatformOutfitContent(locale);
  const openGraphImage = getPlatformOutfitOpenGraphImage(
    getPlatformOutfitSetById("rice-valley-couple-lanna", "en"),
  );

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: getLocalizedAlternates("/style/"),
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: "website",
      images: [
        {
          url: openGraphImage.src,
          width: openGraphImage.width,
          height: openGraphImage.height,
          alt: openGraphImage.alt ?? "Rice Valley Couple Lanna",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: [openGraphImage.src],
    },
  };
}

export function getPlatformOutfitDetailMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Metadata {
  const content = getPlatformOutfitContent(locale);
  const outfitSet = getPlatformOutfitSetById(slug, locale);

  if (!outfitSet) {
    return {
      title: content.detailPage.notFoundTitle,
    };
  }

  const title = getPlatformOutfitLocalizedText(outfitSet.title, locale);
  const description = getPlatformOutfitLocalizedText(outfitSet.story, locale);
  const ogImageOutfitSet = getPlatformOutfitSetById(slug, "en") ?? outfitSet;
  const openGraphImage = getPlatformOutfitOpenGraphImage(ogImageOutfitSet);
  const ogImageDimensions =
    ogImageOutfitSet.image.open_graph ?? getPlatformOutfitImageDimensions(ogImageOutfitSet);

  return {
    title: `${title} | ${content.detailPage.metadataSuffix}`,
    description,
    alternates: getLocalizedAlternates(`/style/${outfitSet.id}/`),
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: openGraphImage.src,
          width: ogImageDimensions.width,
          height: ogImageDimensions.height,
          alt: ogImageOutfitSet.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.src],
    },
  };
}

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

function getPlatformOutfitSeed(locale?: string | null): PlatformOutfitSeed {
  return styleSeeds[resolvePlatformOutfitLocale(locale)] ?? defaultStyleSeed;
}

export function getPlatformOutfitContent(
  locale?: string | null,
): ResolvedPlatformOutfitContent {
  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  const seed = getPlatformOutfitSeed(resolvedLocale);
  const content = resolvePlatformOutfitContentSeed(seed);

  return {
    ...content,
    locale: resolvedLocale,
    outfitSets: getPlatformOutfitSets(resolvedLocale),
  };
}

export function getPlatformOutfitSets(
  locale?: string | null,
): PlatformOutfitSet[] {
  return getPlatformOutfitSeed(locale)
    .outfitSets.map(resolvePlatformOutfitSet)
    .sort((first, second) => first.order - second.order);
}

export function getPlatformOutfitSetById(
  id: string,
  locale?: string | null,
): PlatformOutfitSet | undefined {
  return getPlatformOutfitSets(locale).find((outfitSet) => outfitSet.id === id);
}

export function getPlatformOutfitSetsByZone(
  zoneFileName: string,
): PlatformOutfitSet[] {
  return getPlatformOutfitSets().filter(
    (outfitSet) => outfitSet.zoneCandidates?.includes(zoneFileName) ?? false,
  );
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

export function getPlatformOutfitExampleImagePath(
  outfitSet: Pick<PlatformOutfitSet, "image">,
): string {
  return outfitSet.image.src;
}

export { defaultStyleSeed as platformStyleSeed };
