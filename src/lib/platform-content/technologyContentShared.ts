import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { SystemCapabilityItem } from "@/components/Services/WebDevelopment/SystemCapability";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";
import { getFrontendSeed } from "@/lib/platform-content/frontendRoutes";
import { getFullstackSeed } from "@/lib/platform-content/fullstackRoutes";

export type PlatformTechnologyPageContent = {
  title: string;
  hero: {
    subtitle: string;
    body: string;
  };
  summary: {
    label: string;
    value: string;
    caption: string;
  };
  sections: {
    systemCapability: {
      ariaLabel: string;
      title: string;
      items: SystemCapabilityItem[];
    };
    deliveryStack: {
      title: string;
    };
  };
};
export type PlatformTechnologyContent = {
  locale: string;
  page: PlatformTechnologyPageContent;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
};

const PLATFORM_TECHNOLOGY_STACK_KEYS = {
  frontEnd: ["nextjs", "react", "typescript"],
  fullStack: ["python", "nodejs", "go"],
} as const;

const technologyContentCache = new Map<string, Promise<PlatformTechnologyPageContent>>();

type StackSection<TStack> = {
  stacks: TStack[];
};

function isTechnologyStack(value: unknown): value is {
  title: string;
  link: string;
} {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string" &&
    "link" in value &&
    typeof value.link === "string"
  );
}

function stackMatchesKey(stack: unknown, key: string): boolean {
  if (!isTechnologyStack(stack)) {
    return false;
  }

  const normalizedKey = key.toLowerCase();
  const normalizedLink = stack.link.toLowerCase();
  const normalizedTitle = stack.title.toLowerCase().replace(/[^a-z0-9]/g, "");

  return normalizedLink.includes(`/${normalizedKey}`) || normalizedTitle === normalizedKey;
}

function selectTechnologyStacks<TStack>(
  section: StackSection<TStack>,
  keys: readonly string[],
): TStack[] {
  const sectionByKey = section as Record<string, unknown>;
  const keyedStacks = keys
    .map((key) => sectionByKey[key])
    .filter(isTechnologyStack) as TStack[];

  if (keyedStacks.length === keys.length) {
    return keyedStacks;
  }

  const fallbackStacks = keys
    .map((key) => section.stacks.find((stack) => stackMatchesKey(stack, key)))
    .filter(Boolean) as TStack[];

  return fallbackStacks.length === keys.length ? fallbackStacks : section.stacks;
}

function normalizeStackSection<TSection extends StackSection<TStack>, TStack>(
  section: TSection,
  keys: readonly string[],
): TSection {
  return {
    ...section,
    stacks: selectTechnologyStacks(section, keys),
  };
}

async function getTechnologyPageContent(locale = "en"): Promise<PlatformTechnologyPageContent> {
  const cachedContent = technologyContentCache.get(locale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<PlatformTechnologyPageContent>(`/technology/${locale}.json`).catch((error) => {
    technologyContentCache.delete(locale);

    if (locale !== "en") {
      return getTechnologyPageContent("en");
    }

    throw error;
  });
  technologyContentCache.set(locale, contentPromise);

  return contentPromise;
}

export async function getNormalizedPlatformTechnologyContent(
  locale = "en",
): Promise<PlatformTechnologyContent> {
  const [page, frontendSeed, fullstackSeed] = await Promise.all([
    getTechnologyPageContent(locale),
    getFrontendSeed("en"),
    getFullstackSeed("en"),
  ]);
  const frontEnd = frontendSeed.frontEnd as IFrontEnd;
  const fullStack = fullstackSeed.fullStack as IFullStack;

  return {
    locale,
    page,
    frontEnd: normalizeStackSection<IFrontEnd, IFrontEndStack>(
      frontEnd,
      PLATFORM_TECHNOLOGY_STACK_KEYS.frontEnd,
    ),
    fullStack: normalizeStackSection<IFullStack, IFullStackStack>(
      fullStack,
      PLATFORM_TECHNOLOGY_STACK_KEYS.fullStack,
    ),
  };
}
