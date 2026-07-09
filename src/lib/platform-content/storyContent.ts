import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type {
  PlatformSofaCoupleStory,
  PlatformStoryContent,
} from "@/lib/platform-content/storyShared";

const DEFAULT_LOCALE = "en";
const storyCache = new Map<string, Promise<PlatformSofaCoupleStory>>();

export type {
  PlatformSofaCoupleStory,
  PlatformStoryContent,
} from "@/lib/platform-content/storyShared";

export function resolvePlatformStoryLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

async function getSofaCoupleStory(locale = DEFAULT_LOCALE): Promise<PlatformSofaCoupleStory> {
  const resolvedLocale = resolvePlatformStoryLocale(locale);
  const cachedStory = storyCache.get(resolvedLocale);

  if (cachedStory) {
    return cachedStory;
  }

  const storyPromise = fetchData<PlatformSofaCoupleStory>(
    `/story/sofa-couple/${resolvedLocale}.sofa-couple.json`,
  ).catch((error) => {
    storyCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_LOCALE) {
      return getSofaCoupleStory(DEFAULT_LOCALE);
    }

    throw error;
  });
  storyCache.set(resolvedLocale, storyPromise);

  return storyPromise;
}

export async function getPlatformStoryContent(
  locale?: string | null,
): Promise<PlatformStoryContent> {
  const resolvedLocale = resolvePlatformStoryLocale(locale);

  return {
    locale: resolvedLocale,
    sofaCoupleStory: await getSofaCoupleStory(resolvedLocale),
  };
}