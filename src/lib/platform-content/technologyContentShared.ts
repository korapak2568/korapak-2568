import technologyPageContent from "@/data/technology/en.json";
import technicalExpertiseFrontendSeed from "@/data/technical-expertise/frontend/en.json";
import technicalExpertiseFullstackSeed from "@/data/technical-expertise/fullstack/en.json";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";

export type PlatformTechnologyPageContent = typeof technologyPageContent;
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

export function getNormalizedPlatformTechnologyContent(
  locale = "en",
): PlatformTechnologyContent {
  const frontEnd = technicalExpertiseFrontendSeed.frontEnd as IFrontEnd;
  const fullStack = technicalExpertiseFullstackSeed.fullStack as IFullStack;

  return {
    locale,
    page: technologyPageContent,
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