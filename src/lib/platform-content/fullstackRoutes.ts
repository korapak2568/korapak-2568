import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";
import type { PlatformTechnicalExpertiseSchema } from "@/lib/platform-content/frontendContent";
import { LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

export type FullstackStackKey = Exclude<
  keyof IFullStack,
  "title" | "span" | "subTitle" | "sideImages" | "stacks" | "services"
>;

export type FullstackMetadataKey = "go" | "java" | "nodejs" | "php" | "python";

export type FullstackRouteConfig = {
  slug: string;
  stackKey: FullstackStackKey;
  metadataKey: FullstackMetadataKey;
  schema: PlatformTechnicalExpertiseSchema;
};

export type FullstackSeed = {
  fullStack: IFullStack;
  routes: FullstackRouteConfig[];
  schema: PlatformTechnicalExpertiseSchema;
};

const fullstackSeedCache = new Map<string, Promise<FullstackSeed>>();

function requireFullstackLocale(locale: string): SiteLocale {
  if (!LOCALES.includes(locale as SiteLocale)) {
    throw new Error(`Unsupported Full Stack locale: ${locale}`);
  }

  return locale as SiteLocale;
}

export async function getFullstackSeed(locale = "en"): Promise<FullstackSeed> {
  const resolvedLocale = requireFullstackLocale(locale);
  const cachedSeed = fullstackSeedCache.get(resolvedLocale);

  if (cachedSeed) {
    return cachedSeed;
  }

  const seedPromise = fetchData<FullstackSeed>(
    `/technical-expertise/fullstack/${resolvedLocale}.json`,
  ).catch((error) => {
    fullstackSeedCache.delete(resolvedLocale);
    throw error;
  });
  fullstackSeedCache.set(resolvedLocale, seedPromise);

  return seedPromise;
}

export async function getFullstackRoutes(
  locale = "en",
): Promise<FullstackRouteConfig[]> {
  return (await getFullstackSeed(locale)).routes;
}

export async function getFullstackRouteBySlug(
  slug: string,
  locale = "en",
): Promise<FullstackRouteConfig | undefined> {
  return (await getFullstackRoutes(locale)).find((route) => route.slug === slug);
}

export function getFullstackStack(
  fullStack: IFullStack,
  route: FullstackRouteConfig,
): IFullStackStack {
  return fullStack[route.stackKey] as IFullStackStack;
}
