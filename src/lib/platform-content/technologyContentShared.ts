import technologyPageContent from "@/data/technology/en.technology.json";
import technologyPageContentTh from "@/data/technology/th.technology.json";
import type { TechnicalExpertiseContentPayload } from "@/core/domain/technical-expertise-content.entity";
import type { IDevOps, IDevOpsStack } from "@/lib/model/IDevOps";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";

export type PlatformTechnologyPageContent = typeof technologyPageContent;
export type PlatformTechnologyContent = TechnicalExpertiseContentPayload & {
  page: PlatformTechnologyPageContent;
};

const PLATFORM_TECHNOLOGY_STACK_KEYS = {
  frontEnd: ["nextjs", "react", "angular"],
  fullStack: ["python", "nodejs", "go"],
  devOps: ["docker", "kubernetes", "github"],
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

export function normalizePlatformTechnologyContent(
  content: TechnicalExpertiseContentPayload,
  locale = content.locale,
): PlatformTechnologyContent {
  return {
    ...content,
    page: locale === "th" ? technologyPageContentTh : technologyPageContent,
    frontEnd: normalizeStackSection<IFrontEnd, IFrontEndStack>(
      content.frontEnd,
      PLATFORM_TECHNOLOGY_STACK_KEYS.frontEnd,
    ),
    fullStack: normalizeStackSection<IFullStack, IFullStackStack>(
      content.fullStack,
      PLATFORM_TECHNOLOGY_STACK_KEYS.fullStack,
    ),
    devOps: normalizeStackSection<IDevOps, IDevOpsStack>(
      content.devOps,
      PLATFORM_TECHNOLOGY_STACK_KEYS.devOps,
    ),
  };
}
