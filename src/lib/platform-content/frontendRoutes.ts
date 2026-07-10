import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { PlatformTechnicalExpertiseSchema } from "@/lib/platform-content/frontendContent";
import { LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

export type FrontendStackKey = Exclude<
  keyof IFrontEnd,
  "title" | "span" | "subTitle" | "sideImages" | "stacks" | "services"
>;

export type FrontendMetadataKey = "nextjs" | "react" | "typescript";

export type FrontendRouteConfig = {
  slug: string;
  stackKey: FrontendStackKey;
  metadataKey: FrontendMetadataKey;
  schema: PlatformTechnicalExpertiseSchema;
};

export type FrontendSeed = {
  frontEnd: IFrontEnd;
  routes: FrontendRouteConfig[];
  schema: PlatformTechnicalExpertiseSchema;
};

const frontendSeedCache = new Map<string, Promise<FrontendSeed>>();

function requireFrontendLocale(locale: string): SiteLocale {
  if (!LOCALES.includes(locale as SiteLocale)) {
    throw new Error(`Unsupported Front End locale: ${locale}`);
  }

  return locale as SiteLocale;
}

export async function getFrontendSeed(locale = "en"): Promise<FrontendSeed> {
  const resolvedLocale = requireFrontendLocale(locale);
  const cachedSeed = frontendSeedCache.get(resolvedLocale);

  if (cachedSeed) {
    return cachedSeed;
  }

  const seedPromise = fetchData<FrontendSeed>(
    `/technical-expertise/frontend/${resolvedLocale}.json`,
  ).catch((error) => {
    frontendSeedCache.delete(resolvedLocale);
    throw error;
  });
  frontendSeedCache.set(resolvedLocale, seedPromise);

  return seedPromise;
}

export async function getFrontendRoutes(
  locale = "en",
): Promise<FrontendRouteConfig[]> {
  return (await getFrontendSeed(locale)).routes;
}

export async function getFrontendRouteBySlug(
  slug: string,
  locale = "en",
): Promise<FrontendRouteConfig | undefined> {
  return (await getFrontendRoutes(locale)).find((route) => route.slug === slug);
}

export function getFrontendStack(
  frontEnd: IFrontEnd,
  route: FrontendRouteConfig,
): IFrontEndStack {
  return frontEnd[route.stackKey] as IFrontEndStack;
}
