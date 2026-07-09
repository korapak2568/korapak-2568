import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";
import type { PlatformTechnicalExpertiseSchema } from "@/lib/platform-content/frontendContent";

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

export async function getFullstackSeed(locale = "en"): Promise<FullstackSeed> {
  const cachedSeed = fullstackSeedCache.get(locale);

  if (cachedSeed) {
    return cachedSeed;
  }

  const seedPromise = fetchData<FullstackSeed>(
    `/technical-expertise/fullstack/${locale}.json`,
  ).catch((error) => {
    fullstackSeedCache.delete(locale);

    if (locale !== "en") {
      return getFullstackSeed("en");
    }

    throw error;
  });
  fullstackSeedCache.set(locale, seedPromise);

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
