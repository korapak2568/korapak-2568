import technicalExpertiseFrontendSeed from "@/data/technical-expertise/frontend/en.json";
import technicalExpertiseFullstackSeed from "@/data/technical-expertise/fullstack/en.json";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import { getFrontendRoutes, type FrontendRouteConfig } from "@/lib/platform-content/frontendRoutes";

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
  _locale: string,
): Promise<PlatformFrontendContent> {
  return {
    locale: "en",
    frontEnd: technicalExpertiseFrontendSeed.frontEnd as IFrontEnd,
    fullStack: technicalExpertiseFullstackSeed.fullStack as IFullStack,
    frontendRoutes: getFrontendRoutes(),
    frontendPage: {
      schema: technicalExpertiseFrontendSeed.schema,
    },
  };
}