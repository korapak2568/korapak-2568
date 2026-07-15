import type { AiCompanionsContentPayload } from "@/core/domain/ai-companions-content.entity";
import type { GalleryContentPayload } from "@/core/domain/gallery-content.entity";
import type { IAiDetail, IAiLanding } from "@/lib/model/IAi";
import type { IImageUnit } from "@/image/model/IImageUnit";
import { getAiCompanionsContentForPublicPage } from "@/lib/ai-companions-content/aiCompanionsContent.service";
import { getGalleryContentForPublicPage } from "@/lib/gallery-content/galleryContent.service";
import { CDN } from "@/lib/cdn";

function getImageAssetUrl(src: string): string {
  return src.startsWith("/images/") ? `${CDN}${src}` : src;
}

function getGalleryAssetUrl(src: string): string {
  return src.startsWith("/images/gallery/")
    ? `${CDN}${src.replace("/images", "")}`
    : src;
}

function normalizeImageUnit<TImage extends IImageUnit>(image: TImage): TImage {
  return {
    ...image,
    path: getImageAssetUrl(image.path),
  };
}

function normalizeGalleryImage<TImage extends { image375: string; image750: string; image1200: string; large?: string }>(
  image: TImage,
): TImage {
  return {
    ...image,
    image375: getGalleryAssetUrl(image.image375),
    image750: getGalleryAssetUrl(image.image750),
    image1200: getGalleryAssetUrl(image.image1200),
    large: image.large ? getGalleryAssetUrl(image.large) : image.large,
  };
}

function normalizeAiDetail(detail: IAiDetail): IAiDetail {
  return {
    ...detail,
    thumbnail: getImageAssetUrl(detail.thumbnail),
    pages: {
      ...detail.pages,
      home: {
        ...detail.pages.home,
        image: normalizeImageUnit(detail.pages.home.image),
      },
      landing: {
        ...detail.pages.landing,
        image: normalizeImageUnit(detail.pages.landing.image),
      },
    },
  };
}

function normalizeAiLanding(landing: IAiLanding): IAiLanding {
  return {
    ...landing,
    thumbnail: landing.thumbnail ? getImageAssetUrl(landing.thumbnail) : landing.thumbnail,
    pages: {
      ...landing.pages,
      landing: {
        ...landing.pages.landing,
        image: normalizeImageUnit(landing.pages.landing.image),
      },
    },
    relevants: landing.relevants.map(normalizeAiDetail),
  };
}

function normalizeAiCompanionsMedia(content: AiCompanionsContentPayload): AiCompanionsContentPayload {
  return {
    ...content,
    aiCompanions: {
      ...content.aiCompanions,
      fah: normalizeAiLanding(content.aiCompanions.fah),
      aom: normalizeAiLanding(content.aiCompanions.aom),
      ploy: normalizeAiLanding(content.aiCompanions.ploy),
    },
  };
}

function normalizeGalleryMedia(content: GalleryContentPayload): GalleryContentPayload {
  return {
    ...content,
    gallery: {
      ...content.gallery,
      slides: content.gallery.slides.map((slide) => ({
        ...slide,
        image: normalizeGalleryImage(slide.image),
      })),
    },
    media: {
      ...content.media,
      bottomSlides: content.media.bottomSlides.map(normalizeGalleryImage),
    },
  };
}

export type PlatformGalleryContent = {
  gallery: GalleryContentPayload;
  aiCompanions: AiCompanionsContentPayload;
};

export async function getPlatformGalleryContent(
  locale: string,
): Promise<PlatformGalleryContent> {
  const [gallery, aiCompanions] = await Promise.all([
    getGalleryContentForPublicPage(locale),
    getAiCompanionsContentForPublicPage(locale),
  ]);

  return {
    gallery: normalizeGalleryMedia(gallery),
    aiCompanions: normalizeAiCompanionsMedia(aiCompanions),
  };
}