import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

export type PlatformStoryImageGenerationSize = {
  width: number;
  height: number;
  aspectRatio: string;
  positionKey: string;
};

export type PlatformStoryImage = {
  src: string;
  alt: string;
  aspectRatio?: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
};

export type PlatformStoryCard = {
  title: string;
  description: string;
  image: PlatformStoryImage;
  imageGenerationSize: PlatformStoryImageGenerationSize;
};

export type PlatformSofaCoupleStory = {
  title: string;
  story: string;
  imageLandscape: PlatformStoryImage;
  imagePortrait: PlatformStoryImage;
  openGraphImage: {
    src: string;
    imageGenerationSize: PlatformStoryImageGenerationSize;
  };
  tiktok: string;
  images: PlatformStoryCard[];
};

export type PlatformStoryHeaderCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PlatformStoryUiCopy = {
  intro: PlatformStoryHeaderCopy;
  backlinks: PlatformStoryHeaderCopy;
  featureEyebrow: string;
  openStoryLabel: string;
  circulatorySystemLabel: string;
  exploreOnTiktokLabel: string;
  stationCtaLabel: string;
};

export type PlatformStoryContent = {
  locale: string;
  sofaCoupleStory: PlatformSofaCoupleStory;
  uiCopy: PlatformStoryUiCopy;
};
