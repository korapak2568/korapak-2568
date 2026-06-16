import type { HomePageContentPayload } from "@/core/domain/homepage-content.entity";
import { getHomePageContentForPublicPage } from "@/lib/homepage-content/homePageContent.service";
import { hydratePlatformImageVariants } from "@/lib/platform-content/platformImageVariants";

export type PlatformSmartCityContent = HomePageContentPayload;

export async function getPlatformSmartCityContent(
  locale: string,
): Promise<PlatformSmartCityContent> {
  const content = await getHomePageContentForPublicPage(locale);

  return hydratePlatformImageVariants(content);
}
