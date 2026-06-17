import type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";
import { normalizePlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";
import { getTechnicalExpertiseContentForPublicPage } from "@/lib/technical-expertise-content/technicalExpertiseContent.service";

export type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";

export async function getPlatformTechnologyContent(
  locale: string,
): Promise<PlatformTechnologyContent> {
  const content = await getTechnicalExpertiseContentForPublicPage(locale);
  return normalizePlatformTechnologyContent(content, locale);
}
