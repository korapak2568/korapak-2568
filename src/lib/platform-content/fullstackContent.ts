import technicalExpertiseFrontendSeed from "@/data/technical-expertise/frontend/en.json";
import technicalExpertiseFullstackSeed from "@/data/technical-expertise/fullstack/en.json";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import {
  getFullstackRoutes,
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
  _locale: string,
): Promise<PlatformFullstackContent> {
  return {
    locale: "en",
    frontEnd: technicalExpertiseFrontendSeed.frontEnd as IFrontEnd,
    fullStack: technicalExpertiseFullstackSeed.fullStack as IFullStack,
    fullstackRoutes: getFullstackRoutes(),
    fullstackPage: {
      schema: technicalExpertiseFullstackSeed.schema,
    },
  };
}