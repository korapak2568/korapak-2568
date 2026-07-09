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

export type PlatformStoryContent = {
  locale: string;
  sofaCoupleStory: PlatformSofaCoupleStory;
};