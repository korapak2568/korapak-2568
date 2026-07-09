import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { getFutureRoadmapEras } from "@/lib/platform-content/futureRoadmapContent";
import type { PlatformResponsiveImage } from "@/lib/platform-content/platformImageVariants";

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

const eraRecordsCache = new Map<string, Promise<EraRecord[]>>();
const futureSolutionsCache = new Map<string, Promise<FutureSolutionRecord[]>>();

function getEraRecords(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE): Promise<EraRecord[]> {
  const cachedRecords = eraRecordsCache.get(locale);

  if (cachedRecords) {
    return cachedRecords;
  }

  const recordsPromise = fetchData<EraRecord[]>(`/era/${locale}.era.json`);
  eraRecordsCache.set(locale, recordsPromise);

  return recordsPromise;
}

async function getEraById(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE) {
  return new Map((await getEraRecords(locale)).map((era) => [era.id, era]));
}

async function getEraBySlug(locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE) {
  return new Map((await getEraRecords(locale)).map((era) => [era.slug, era]));
}

async function fetchFutureSolutions(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
): Promise<FutureSolutionRecord[]> {
  const [eraById, roadmapEras, records] = await Promise.all([
    getEraById(locale),
    getFutureRoadmapEras(locale),
    fetchData<Omit<FutureSolutionRecord, "era_slug" | "roadmap_image">[]>(
      `/future-solutions/${locale}.future-solutions.json`,
    ),
  ]);
  const roadmapImageBySlug = new Map(
    roadmapEras.flatMap(({ era, items }) =>
      items.map((item) => [`${era.slug}:${item.slug}`, item.image] as const),
    ),
  );

  return records.map((record) => {
    const eraSlug = eraById.get(record.era_id)?.slug ?? record.era_id;

    return {
      ...record,
      era_slug: eraSlug,
      roadmap_image: roadmapImageBySlug.get(`${eraSlug}:${record.era_item_slug}`),
    };
  });
}

export function getFutureSolutions(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
): Promise<FutureSolutionRecord[]> {
  const cachedSolutions = futureSolutionsCache.get(locale);

  if (cachedSolutions) {
    return cachedSolutions;
  }

  const solutionsPromise = fetchFutureSolutions(locale);
  futureSolutionsCache.set(locale, solutionsPromise);

  return solutionsPromise;
}

export async function getFutureSolutionEraSummaries(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
): Promise<FutureSolutionEraSummary[]> {
  const records = await getFutureSolutions(locale);
  const eraById = await getEraById(locale);
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

async function getEraIdFromSlug(
  eraSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  return (await getEraBySlug(locale)).get(eraSlug)?.id;
}

export async function getFutureSolutionEra(
  eraSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  const eraId = await getEraIdFromSlug(eraSlug, locale);

  if (!eraId) {
    return undefined;
  }

  const summary = (await getFutureSolutionEraSummaries(locale)).find((era) => era.era_id === eraId);

  if (!summary) {
    return undefined;
  }

  return {
    ...summary,
    solutions: (await getFutureSolutions(locale)).filter((solution) => solution.era_id === eraId),
  };
}

export async function getFutureSolutionBySlug(
  eraSlug: string,
  eraItemSlug: string,
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  const eraId = await getEraIdFromSlug(eraSlug, locale);

  if (!eraId) {
    return undefined;
  }

  const solutions = await getFutureSolutions(locale);
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

export async function getFutureSolutionStaticParams(
  locale = DEFAULT_FUTURE_SOLUTIONS_LOCALE,
) {
  return (await getFutureSolutions(locale)).map((solution) => ({
    eraSlug: solution.era_slug,
    eraItemSlug: solution.era_item_slug,
  }));
}