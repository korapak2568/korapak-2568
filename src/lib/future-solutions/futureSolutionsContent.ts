import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import { getFutureRoadmapItemBySlugs } from "@/lib/platform-content/futureRoadmapContent";
import type { PlatformResponsiveImage } from "@/lib/platform-content/platformImageVariants";

const DATA_DIR = path.join(process.cwd(), "data");
const DEFAULT_FUTURE_SOLUTIONS_LOCALE = DEFAULT_LOCALE;

type EraRecord = {
  id: string;
  slug: string;
  title: string;
};

export type FutureSolutionRecord = {
  id: string;
  locale: string;
  era_id: string;
  era_slug: string;
  era_item_id: string;
  era_item_slug: string;
  title: string;
  short_title: string;
  summary: string;
  solution_lens: {
    problem_statement: string;
    future_solution: string;
    why_it_matters: string;
  };
  current_problems_addressed: Array<{
    node_id: string;
    sub_node_id: string;
    problem_id: string;
  }>;
  industries_impacted: Array<{
    node_id: string;
    sub_node_id: string;
  }>;
  business_opportunities: Array<{
    business_opportunity_id: string;
    node_id: string;
    sub_node_id: string;
  }>;
  readiness: {
    level: string;
    label: string;
    rationale: string;
  };
  timeline: {
    era_id: string;
    timeframe_label: string;
    expected_start_year: number;
    expected_end_year: number;
  };
  human_impact: {
    individual: string;
    business: string;
    society: string;
  };
  risks_and_challenges: string[];
  canonical: {
    roadmap_url: string;
    solution_url: string;
  };
  roadmap_image?: PlatformResponsiveImage;
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
};

export type FutureSolutionEraSummary = {
  era_id: string;
  era_slug: string;
  title: string;
  timeframe: string;
  url: string;
  count: number;
  featuredSolutions: FutureSolutionRecord[];
  industries: string[];
  readinessLevels: string[];
};

function readJson<T>(...segments: string[]): T {
  const sourcePath = path.join(DATA_DIR, ...segments);
  const rawContent = fs.readFileSync(sourcePath, "utf8").replace(/^\uFEFF/, "");

  return JSON.parse(rawContent) as T;
}

function getEraRecords(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE): EraRecord[] {
  return readJson<EraRecord[]>("era", `${locale}.era.json`);
}

function getEraById(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE) {
  return new Map(getEraRecords(locale).map((era) => [era.id, era]));
}

function getEraBySlug(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE) {
  return new Map(getEraRecords(locale).map((era) => [era.slug, era]));
}

export function getFutureSolutions(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
): FutureSolutionRecord[] {
  const eraById = getEraById(locale);

  return readJson<Omit<FutureSolutionRecord, "era_slug" | "roadmap_image">[]>(
    "future-solutions",
    `${locale}.future-solutions.json`,
  ).map((record) => {
    const eraSlug = eraById.get(record.era_id)?.slug ?? record.era_id;
    const roadmapImage = getFutureRoadmapItemBySlugs(
      eraSlug,
      record.era_item_slug,
      locale,
    )?.item.image;

    return {
      ...record,
      era_slug: eraSlug,
      roadmap_image: roadmapImage,
    };
  });
}

export function getFutureSolutionEraSummaries(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
): FutureSolutionEraSummary[] {
  const records = getFutureSolutions(locale);
  const eraById = getEraById(locale);
  const grouped = new Map<string, FutureSolutionRecord[]>();

  for (const record of records) {
    const items = grouped.get(record.era_id) ?? [];
    items.push(record);
    grouped.set(record.era_id, items);
  }

  return Array.from(grouped.entries()).map(([eraId, items]) => {
    const first = items[0];
    const era = eraById.get(eraId);
    const eraSlug = era?.slug ?? eraId;
    const industries = Array.from(
      new Set(items.flatMap((item) => item.industries_impacted.map((industry) => industry.node_id))),
    );
    const readinessLevels = Array.from(new Set(items.map((item) => item.readiness.label)));

    return {
      era_id: eraId,
      era_slug: eraSlug,
      title: era?.title ?? first.timeline.timeframe_label,
      timeframe: `${first.timeline.expected_start_year}-${first.timeline.expected_end_year}`,
      url: `/future-solutions/${eraSlug}/`,
      count: items.length,
      featuredSolutions: items.slice(0, 6),
      industries: industries.slice(0, 8),
      readinessLevels,
    };
  });
}

function getEraIdFromSlug(
  eraSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  return getEraBySlug(locale).get(eraSlug)?.id;
}

export function getFutureSolutionEra(
  eraSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  const eraId = getEraIdFromSlug(eraSlug, locale);

  if (!eraId) {
    return undefined;
  }

  const summary = getFutureSolutionEraSummaries(locale).find((era) => era.era_id === eraId);

  if (!summary) {
    return undefined;
  }

  return {
    ...summary,
    solutions: getFutureSolutions(locale).filter((solution) => solution.era_id === eraId),
  };
}

export function getFutureSolutionBySlug(
  eraSlug: string,
  eraItemSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  const eraId = getEraIdFromSlug(eraSlug, locale);

  if (!eraId) {
    return undefined;
  }

  const solutions = getFutureSolutions(locale);
  const solution = solutions.find(
    (record) => record.era_id === eraId && record.era_item_slug === eraItemSlug,
  );

  if (!solution) {
    return undefined;
  }

  const relatedSolutions = solutions
    .filter(
      (record) =>
        record.id !== solution.id &&
        (record.era_id === solution.era_id ||
          record.industries_impacted.some((industry) =>
            solution.industries_impacted.some(
              (target) => target.node_id === industry.node_id,
            ),
          )),
    )
    .slice(0, 8);

  return {
    solution,
    relatedSolutions,
  };
}

export function getFutureSolutionStaticParams(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  return getFutureSolutions(locale).map((solution) => ({
    eraSlug: solution.era_slug,
    eraItemSlug: solution.era_item_slug,
  }));
}