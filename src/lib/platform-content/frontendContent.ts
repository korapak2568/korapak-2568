import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import {
  getFrontendRoutes,
  getFrontendSeed,
  type FrontendRouteConfig,
} from "@/lib/platform-content/frontendRoutes";
import { getFullstackSeed } from "@/lib/platform-content/fullstackRoutes";

export type PlatformTechnicalExpertiseSchema = {
  name: string;
  description: string;
  url: string;
};

export type PlatformFrontendContent = {
  locale: string;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
  frontendRoutes: FrontendRouteConfig[];
  frontendPage: {
    schema: PlatformTechnicalExpertiseSchema;
  };
};

export async function getPlatformFrontendContent(
  locale: string,
): Promise<PlatformFrontendContent> {
  const [frontendSeed, fullstackSeed, frontendRoutes] = await Promise.all([
    getFrontendSeed(locale),
    getFullstackSeed(locale),
    getFrontendRoutes(locale),
  ]);

  return {
    locale,
    frontEnd: frontendSeed.frontEnd,
    fullStack: fullstackSeed.fullStack,
    frontendRoutes,
    frontendPage: {
      schema: frontendSeed.schema,
    },
  };
}
