import type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";
import { getNormalizedPlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";

export type { PlatformTechnologyContent } from "@/lib/platform-content/technologyContentShared";

export async function getPlatformTechnologyContent(
  locale: string,
): Promise<PlatformTechnologyContent> {
  return getNormalizedPlatformTechnologyContent(locale);
}