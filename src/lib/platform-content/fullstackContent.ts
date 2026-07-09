import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import { getFrontendSeed } from "@/lib/platform-content/frontendRoutes";
import {
  getFullstackRoutes,
  getFullstackSeed,
  type FullstackRouteConfig,
} from "@/lib/platform-content/fullstackRoutes";
import type { PlatformTechnicalExpertiseSchema } from "@/lib/platform-content/frontendContent";

export type PlatformFullstackContent = {
  locale: string;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
  fullstackRoutes: FullstackRouteConfig[];
  fullstackPage: {
    schema: PlatformTechnicalExpertiseSchema;
  };
};

export async function getPlatformFullstackContent(
  locale: string,
): Promise<PlatformFullstackContent> {
  const [frontendSeed, fullstackSeed, fullstackRoutes] = await Promise.all([
    getFrontendSeed(locale),
    getFullstackSeed(locale),
    getFullstackRoutes(locale),
  ]);

  return {
    locale,
    frontEnd: frontendSeed.frontEnd,
    fullStack: fullstackSeed.fullStack,
    fullstackRoutes,
    fullstackPage: {
      schema: fullstackSeed.schema,
    },
  };
}
