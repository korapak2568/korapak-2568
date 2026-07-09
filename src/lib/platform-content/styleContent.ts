import type { Metadata } from "next";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import {
  getPlatformOutfitLocalizedText,
  resolvePlatformOutfitLocale,
  type PlatformOutfitDetailImage,
  type PlatformOutfitImageGenerationSize,
  type PlatformOutfitSeed,
  type PlatformOutfitSet,
  type PlatformOutfitTranslation,
  type ResolvedPlatformOutfitContent,
} from "@/lib/platform-content/styleShared";

const styleSeedCache = new Map<string, Promise<PlatformOutfitSeed>>();
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
  defaultStyleSeed: PlatformOutfitSeed,
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
  defaultStyleSeed: PlatformOutfitSeed,
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

export async function getPlatformOutfitMetadata(locale?: string | null): Promise<Metadata> {
  const content = await getPlatformOutfitContent(locale);
  const openGraphImage = getPlatformOutfitOpenGraphImage(
    await getPlatformOutfitSetById("rice-valley-couple-lanna", "en"),
  );

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: getLocalizedAlternates("/style/", locale ?? undefined),
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

export async function getPlatformOutfitDetailMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Promise<Metadata> {
  const [content, outfitSet] = await Promise.all([
    getPlatformOutfitContent(locale),
    getPlatformOutfitSetById(slug, locale),
  ]);

  if (!outfitSet) {
    return {
      title: content.detailPage.notFoundTitle,
    };
  }

  const title = getPlatformOutfitLocalizedText(outfitSet.title, locale);
  const description = getPlatformOutfitLocalizedText(outfitSet.story, locale);
  const ogImageOutfitSet = (await getPlatformOutfitSetById(slug, "en")) ?? outfitSet;
  const openGraphImage = getPlatformOutfitOpenGraphImage(ogImageOutfitSet);
  const ogImageDimensions =
    ogImageOutfitSet.image.open_graph ?? getPlatformOutfitImageDimensions(ogImageOutfitSet);

  return {
    title: `${title} | ${content.detailPage.metadataSuffix}`,
    description,
    alternates: getLocalizedAlternates(`/style/${outfitSet.id}/`, locale ?? undefined),
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

async function getPlatformOutfitSeed(locale?: string | null): Promise<PlatformOutfitSeed> {
  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  const cachedSeed = styleSeedCache.get(resolvedLocale);

  if (cachedSeed) {
    return cachedSeed;
  }

  const seedPromise = fetchData<PlatformOutfitSeed>(`/style/${resolvedLocale}.json`).catch((error) => {
    styleSeedCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_LOCALE) {
      return getPlatformOutfitSeed(DEFAULT_LOCALE);
    }

    throw error;
  });
  styleSeedCache.set(resolvedLocale, seedPromise);

  return seedPromise;
}

async function getDefaultPlatformOutfitSeed(): Promise<PlatformOutfitSeed> {
  return getPlatformOutfitSeed(DEFAULT_LOCALE);
}

export async function getPlatformOutfitContent(
  locale?: string | null,
): Promise<ResolvedPlatformOutfitContent> {
  const resolvedLocale = resolvePlatformOutfitLocale(locale);
  const [seed, defaultStyleSeed] = await Promise.all([
    getPlatformOutfitSeed(resolvedLocale),
    getDefaultPlatformOutfitSeed(),
  ]);
  const content = resolvePlatformOutfitContentSeed(seed, defaultStyleSeed);

  return {
    ...content,
    locale: resolvedLocale,
    outfitSets: await getPlatformOutfitSets(resolvedLocale),
  };
}

export async function getPlatformOutfitSets(
  locale?: string | null,
): Promise<PlatformOutfitSet[]> {
  const [seed, defaultStyleSeed] = await Promise.all([
    getPlatformOutfitSeed(locale),
    getDefaultPlatformOutfitSeed(),
  ]);

  return seed.outfitSets
    .map((outfitSet) => resolvePlatformOutfitSet(outfitSet, defaultStyleSeed))
    .sort((first, second) => first.order - second.order);
}

export async function getPlatformOutfitSetById(
  id: string,
  locale?: string | null,
): Promise<PlatformOutfitSet | undefined> {
  return (await getPlatformOutfitSets(locale)).find((outfitSet) => outfitSet.id === id);
}

export async function getPlatformOutfitSetsByZone(
  zoneFileName: string,
): Promise<PlatformOutfitSet[]> {
  return (await getPlatformOutfitSets()).filter(
    (outfitSet) => outfitSet.zoneCandidates?.includes(zoneFileName) ?? false,
  );
}

export function getPlatformOutfitExampleImagePath(
  outfitSet: Pick<PlatformOutfitSet, "image">,
): string {
  return outfitSet.image.src;
}

