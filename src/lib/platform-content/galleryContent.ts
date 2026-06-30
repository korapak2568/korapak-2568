import type { AiCompanionsContentPayload } from "@/core/domain/ai-companions-content.entity";
import type { GalleryContentPayload } from "@/core/domain/gallery-content.entity";
import { getAiCompanionsContentForPublicPage } from "@/lib/ai-companions-content/aiCompanionsContent.service";
import { getGalleryContentForPublicPage } from "@/lib/gallery-content/galleryContent.service";

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
    gallery,
    aiCompanions,
  };
}