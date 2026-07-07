import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import { getFutureSolutions } from "@/lib/future-solutions/futureSolutionsContent";
import {
  getFutureRoadmapEras,
  getFutureRoadmapFeaturedItems,
  type FutureRoadmapEraMeta,
  type FutureRoadmapItem,
} from "@/lib/platform-content/futureRoadmapContent";

const CGD_LOCALE = DEFAULT_LOCALE;
const DATA_DIR = path.join(process.cwd(), "data");

export type CgdPageType =
  | "industry-problem"
  | "business-opportunity"
  | "future-solution";

export type CgdPageIndexRecord = {
  id: string;
  pageType: CgdPageType;
  locale: string;
  route: string;
  canonicalId: string;
  source: {
    node_id?: string;
    sub_node_id?: string;
    problem_id?: string;
    business_opportunity_id?: string;
    era_id?: string;
    era_slug?: string;
    era_item_id?: string;
    era_item_slug?: string;
  };
  seo: {
    priority: number;
    changeFrequency: string;
    isIndexable: boolean;
  };
};

export type CgdSearchIndexRecord = {
  id: string;
  route: string;
  pageType: CgdPageType;
  title: string;
  description: string;
  tags: string[];
  source: CgdPageIndexRecord["source"];
};
export type CgdNode = {
  id: string;
  name: string;
  sub_nodes: Array<{
    id: string;
    name: string;
  }>;
};

export type CgdProblemGroup = {
  id: string;
  problems: Array<{
    id: string;
    name: string;
  }>;
};


export type CgdBusinessOpportunity = {
  id: string;
  name: string;
  sub_node_id: string;
  era_id: string;
};

export type CgdEra = {
  id: string;
  slug: string;
  title: string;
};

export type CgdBusinessGroup = {
  node_id: string;
  business_opportunities: CgdBusinessOpportunity[];
};

type CgdBusinessOpportunityWithEraTitle = CgdBusinessOpportunity & {
  era_title: string;
};

type CgdLinkThumbnail = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

type CgdInternalLink = {
  label: string;
  href: string;
  thumbnail?: CgdLinkThumbnail;
};

export type RoadmapItemRef = {
  era: FutureRoadmapEraMeta;
  item: FutureRoadmapItem;
  url: string;
};

export type IndustryProblemPageData = {
  page: CgdPageIndexRecord;
  search?: CgdSearchIndexRecord;
  node: CgdNode;
  subNode: CgdNode["sub_nodes"][number];
  problem: CgdProblemGroup["problems"][number];
  solutionItems: RoadmapItemRef[];
  businessOpportunities: CgdBusinessOpportunityWithEraTitle[];
  relatedProblems: CgdProblemGroup["problems"];
  relatedIndustries: CgdNode[];
  relatedTechnologies: string[];
  internalLinks: CgdInternalLink[];
};

export type BusinessOpportunityPageData = {
  page: CgdPageIndexRecord;
  search?: CgdSearchIndexRecord;
  node: CgdNode;
  subNode: CgdNode["sub_nodes"][number];
  opportunity: CgdBusinessOpportunity;
  roadmapItems: RoadmapItemRef[];
  relatedProblems: CgdProblemGroup["problems"];
  relatedTechnologies: string[];
  relatedBusinessOpportunities: CgdBusinessOpportunityWithEraTitle[];
  internalLinks: CgdInternalLink[];
};

export type FutureSolutionRelations = {
  solvedProblems: Array<{
    node: CgdNode;
    subNode: CgdNode["sub_nodes"][number];
    problem: CgdProblemGroup["problems"][number];
    url: string;
  }>;
  businessOpportunities: Array<{
    node: CgdNode;
    opportunity: CgdBusinessOpportunity;
    url: string;
  }>;
  relatedSubNodes: Array<CgdNode["sub_nodes"][number] & { node_id: string }>;
};

function readJson<T>(...segments: string[]): T {
  const sourcePath = path.join(DATA_DIR, ...segments);
  const rawContent = fs.readFileSync(sourcePath, "utf8").replace(/^\uFEFF/, "");

  return JSON.parse(rawContent) as T;
}

function readLocalizedJson<T>(
  segments: string[],
  locale = CGD_LOCALE,
  fallbackLocale = CGD_LOCALE,
): T {
  try {
    return readJson<T>(...segments.map((segment) => segment.replace("{locale}", locale)));
  } catch (error) {
    if (locale !== fallbackLocale) {
      return readJson<T>(
        ...segments.map((segment) => segment.replace("{locale}", fallbackLocale)),
      );
    }

    throw error;
  }
}
export function routeSegment(id: string): string {
  return id.replace(/_/g, "-");
}

function normalizeRoute(route: string): string {
  const normalizedRoute = route.startsWith("/") ? route : `/${route}`;

  return normalizedRoute.endsWith("/") ? normalizedRoute : `${normalizedRoute}/`;
}

export function getCgdPageIndex(): CgdPageIndexRecord[] {
  return readJson<CgdPageIndexRecord[]>(
    "civilization-graph",
    "pages",
    "page-index.json",
  );
}

export function getCgdSearchIndex(locale = CGD_LOCALE): CgdSearchIndexRecord[] {
  return readLocalizedJson<CgdSearchIndexRecord[]>([
    "civilization-graph",
    "search",
    "{locale}.search-index.json",
  ], locale);
}

export function getCgdSearchRecordByRoute(
  route: string,
  pageType: CgdPageType,
  locale = CGD_LOCALE,
): CgdSearchIndexRecord | undefined {
  const normalizedRoute = normalizeRoute(route);

  return getCgdSearchIndex(locale).find(
    (page) => page.pageType === pageType && page.route === normalizedRoute,
  );
}
export function getCgdNodes(): CgdNode[] {
  return readJson<CgdNode[]>("node", "en.node.json");
}

export function getCgdProblemGroups(): CgdProblemGroup[] {
  return readJson<CgdProblemGroup[]>("problem", "en.problem.json");
}


export function getCgdBusinessGroups(): CgdBusinessGroup[] {
  return readJson<CgdBusinessGroup[]>("business_opportunities", "en.business.json");
}

export function getCgdEras(locale = CGD_LOCALE): CgdEra[] {
  try {
    return readJson<CgdEra[]>("era", locale + ".era.json");
  } catch (error) {
    if (locale !== CGD_LOCALE) {
      return readJson<CgdEra[]>("era", CGD_LOCALE + ".era.json");
    }

    throw error;
  }
}

export function getCgdPageByRoute(
  route: string,
  pageType: CgdPageType,
): CgdPageIndexRecord | undefined {
  const normalizedRoute = normalizeRoute(route);

  return getCgdPageIndex().find(
    (page) => page.pageType === pageType && page.route === normalizedRoute,
  );
}

export function getCgdStaticParams(pageType: CgdPageType) {
  return getCgdPageIndex()
    .filter((page) => page.pageType === pageType)
    .map((page) => page.route.split("/").filter(Boolean));
}

function getNode(nodeId: string): CgdNode | undefined {
  return getCgdNodes().find((node) => node.id === nodeId);
}

function getSubNode(node: CgdNode, subNodeId: string) {
  return node.sub_nodes.find((subNode) => subNode.id === subNodeId);
}

function getProblem(nodeId: string, problemId: string) {
  return getCgdProblemGroups()
    .find((group) => group.id === nodeId)
    ?.problems.find((problem) => problem.id === problemId);
}

function getFutureSolutionRecordsForProblem(
  nodeId: string,
  subNodeId: string,
  problemId: string,
) {
  return getFutureSolutions().filter((solution) =>
    solution.current_problems_addressed.some(
      (problem) =>
        problem.node_id === nodeId &&
        problem.sub_node_id === subNodeId &&
        problem.problem_id === problemId,
    ),
  );
}

function getFutureSolutionRecordsForSubNode(nodeId: string, subNodeId: string) {
  return getFutureSolutions().filter((solution) =>
    solution.current_problems_addressed.some(
      (problem) => problem.node_id === nodeId && problem.sub_node_id === subNodeId,
    ),
  );
}

function getFutureSolutionRecordByRoadmapItem(eraId: string, eraItemId: string) {
  return getFutureSolutions().find(
    (solution) => solution.era_id === eraId && solution.era_item_id === eraItemId,
  );
}
function getRoadmapItemById(eraItemId: string): RoadmapItemRef | undefined {
  for (const { era, items } of getFutureRoadmapEras(CGD_LOCALE)) {
    const item = items.find((candidate) => candidate.id === eraItemId);

    if (item) {
      return {
        era,
        item,
        url: `/future-civilization/${era.slug}/${item.slug}/`,
      };
    }
  }

  return undefined;
}

function getRoadmapItemsByEra(eraId: string, limit = 8): RoadmapItemRef[] {
  const roadmapEra = getFutureRoadmapEras(CGD_LOCALE).find(
    ({ era }) => era.id === eraId,
  );

  if (!roadmapEra) {
    return [];
  }

  return roadmapEra.items.slice(0, limit).map((item) => ({
    era: roadmapEra.era,
    item,
    url: `/future-civilization/${roadmapEra.era.slug}/${item.slug}/`,
  }));
}

function uniqueBy<T>(items: T[], getKey: (item: T) => string): T[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = getKey(item);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function getStableItemScore(item: FutureRoadmapItem, salt: string) {
  const value = `${salt}:${item.id}:${item.slug}:${item.order}`;

  return Array.from(value).reduce(
    (score, character) => score + character.charCodeAt(0),
    0,
  );
}

function getMixedRoadmapItems(
  items: FutureRoadmapItem[],
  count: number,
  salt: string,
) {
  return [...items]
    .sort(
      (firstItem, secondItem) =>
        getStableItemScore(firstItem, salt) -
          getStableItemScore(secondItem, salt) ||
        firstItem.order - secondItem.order,
    )
    .slice(0, count);
}

function getRoadmapThumbnail(item?: FutureRoadmapItem): CgdLinkThumbnail | undefined {
  const thumbnail = item?.image.thumbnail;

  return thumbnail
    ? {
        alt: thumbnail.alt ?? item.image.alt ?? item.title,
        height: thumbnail.height,
        src: thumbnail.src,
        width: thumbnail.width,
      }
    : undefined;
}

function getFutureCivilizationLandingThumbnail(locale = CGD_LOCALE) {
  const eras = getFutureRoadmapEras(locale);
  const signalCount = eras.reduce(
    (totalSignals, roadmapEra) => totalSignals + roadmapEra.items.length,
    0,
  );
  const heroItem = getMixedRoadmapItems(
    getFutureRoadmapFeaturedItems(signalCount, locale),
    1,
    "landing-hero",
  )[0];

  return getRoadmapThumbnail(heroItem);
}
function getBusinessUrl(nodeId: string, businessId: string): string {
  return `/business-opportunities/${routeSegment(nodeId)}/${routeSegment(businessId)}/`;
}

function getIndustryProblemUrl(
  nodeId: string,
  subNodeId: string,
  problemId: string,
): string {
  return `/industries/${routeSegment(nodeId)}/${routeSegment(subNodeId)}/${routeSegment(
    problemId,
  )}/`;
}

export function getIndustryProblemPageData(
  nodeSlug: string,
  subNodeSlug: string,
  problemSlug: string,
  locale = CGD_LOCALE,
): IndustryProblemPageData | undefined {
  const route = `/industries/${nodeSlug}/${subNodeSlug}/${problemSlug}/`;
  const page = getCgdPageByRoute(route, "industry-problem");
  const search = getCgdSearchRecordByRoute(route, "industry-problem", locale);

  if (!page?.source.node_id || !page.source.sub_node_id || !page.source.problem_id) {
    return undefined;
  }

  const node = getNode(page.source.node_id);
  const subNode = node ? getSubNode(node, page.source.sub_node_id) : undefined;
  const problem = getProblem(page.source.node_id, page.source.problem_id);

  if (!node || !subNode || !problem) {
    return undefined;
  }

  const solutionItems = uniqueBy(
    getFutureSolutionRecordsForProblem(
      page.source.node_id,
      page.source.sub_node_id,
      page.source.problem_id,
    )
      .map((solution) => getRoadmapItemById(solution.era_item_id))
      .filter((item): item is RoadmapItemRef => Boolean(item)),
    ({ item }) => item.id,
  );
  const eraTitleById = new Map(getCgdEras(locale).map((era) => [era.id, era.title]));
  const businessOpportunities =
    getCgdBusinessGroups()
      .find((group) => group.node_id === node.id)
      ?.business_opportunities.filter(
        (opportunity) => opportunity.sub_node_id === subNode.id,
      )
      .map((opportunity) => ({
        ...opportunity,
        era_title: eraTitleById.get(opportunity.era_id) ?? opportunity.era_id,
      })) ?? [];
  const relatedProblems =
    getCgdProblemGroups()
      .find((group) => group.id === node.id)
      ?.problems.filter((candidate) => candidate.id !== problem.id)
      .slice(0, 6) ?? [];
  const relatedTechnologies = uniqueBy(
    solutionItems.flatMap(({ item }) => item.domains),
    (domain) => domain,
  ).slice(0, 10);

  return {
    page,
    search,
    node,
    subNode,
    problem,
    solutionItems,
    businessOpportunities,
    relatedProblems,
    relatedIndustries: getCgdNodes().filter((candidate) => candidate.id !== node.id).slice(0, 6),
    relatedTechnologies,
    internalLinks: [
      {
        label: "Future Civilization Roadmap",
        href: "/future-civilization/",
        thumbnail: getFutureCivilizationLandingThumbnail(locale),
      },
      ...solutionItems.slice(0, 5).map(({ item, url }) => ({
        label: item.shortTitle,
        href: url,
        thumbnail: getRoadmapThumbnail(item),
      })),
      ...businessOpportunities.slice(0, 5).map((opportunity) => ({
        label: opportunity.name,
        href: getBusinessUrl(node.id, opportunity.id),
      })),
    ],
  };
}

export function getBusinessOpportunityPageData(
  nodeSlug: string,
  businessSlug: string,
  locale = CGD_LOCALE,
): BusinessOpportunityPageData | undefined {
  const route = `/business-opportunities/${nodeSlug}/${businessSlug}/`;
  const page = getCgdPageByRoute(route, "business-opportunity");
  const search = getCgdSearchRecordByRoute(route, "business-opportunity", locale);

  if (
    !page?.source.node_id ||
    !page.source.sub_node_id ||
    !page.source.business_opportunity_id ||
    !page.source.era_id
  ) {
    return undefined;
  }

  const node = getNode(page.source.node_id);
  const subNode = node ? getSubNode(node, page.source.sub_node_id) : undefined;
  const opportunity = getCgdBusinessGroups()
    .find((group) => group.node_id === page.source.node_id)
    ?.business_opportunities.find(
      (candidate) => candidate.id === page.source.business_opportunity_id,
    );

  if (!node || !subNode || !opportunity) {
    return undefined;
  }

  const roadmapItems = getRoadmapItemsByEra(opportunity.era_id, 8);
  const relatedProblems = uniqueBy(
    getFutureSolutionRecordsForSubNode(node.id, opportunity.sub_node_id)
      .flatMap((solution) => solution.current_problems_addressed)
      .filter(
        (problem) => problem.node_id === node.id && problem.sub_node_id === opportunity.sub_node_id,
      )
      .map((problem) => getProblem(problem.node_id, problem.problem_id))
      .filter((problem): problem is CgdProblemGroup["problems"][number] =>
        Boolean(problem),
      ),
    (problem) => problem.id,
  );
  const relatedTechnologies = uniqueBy(
    roadmapItems.flatMap(({ item }) => item.domains),
    (domain) => domain,
  ).slice(0, 10);
  const eraTitleById = new Map(getCgdEras(locale).map((era) => [era.id, era.title]));
  const relatedBusinessOpportunities =
    getCgdBusinessGroups()
      .find((group) => group.node_id === node.id)
      ?.business_opportunities.filter((candidate) => candidate.id !== opportunity.id)
      .slice(0, 8)
      .map((candidate) => ({
        ...candidate,
        era_title: eraTitleById.get(candidate.era_id) ?? candidate.era_id,
      })) ?? [];

  return {
    page,
    search,
    node,
    subNode,
    opportunity,
    roadmapItems,
    relatedProblems,
    relatedTechnologies,
    relatedBusinessOpportunities,
    internalLinks: [
      ...roadmapItems.slice(0, 5).map(({ item, url }) => ({
        label: item.shortTitle,
        href: url,
      })),
      ...relatedProblems.slice(0, 5).map((problem) => ({
        label: problem.name,
        href: getIndustryProblemUrl(node.id, subNode.id, problem.id),
      })),
    ],
  };
}

export function getFutureSolutionRelations(
  eraId: string,
  eraItemId: string,
): FutureSolutionRelations {
  const nodes = getCgdNodes();
  const solvedProblems =
    getFutureSolutionRecordByRoadmapItem(eraId, eraItemId)?.current_problems_addressed
      .map((link) => {
        const node = nodes.find((candidate) => candidate.id === link.node_id);
        const subNode = node ? getSubNode(node, link.sub_node_id) : undefined;
        const problem = getProblem(link.node_id, link.problem_id);

        return node && subNode && problem
          ? {
              node,
              subNode,
              problem,
              url: getIndustryProblemUrl(node.id, subNode.id, problem.id),
            }
          : undefined;
      })
      .filter((item): item is FutureSolutionRelations["solvedProblems"][number] =>
        Boolean(item),
      ) ?? [];
  const businessOpportunities = getCgdBusinessGroups().flatMap((group) => {
    const node = nodes.find((candidate) => candidate.id === group.node_id);

    if (!node) {
      return [];
    }

    return group.business_opportunities
      .filter((opportunity) => opportunity.era_id === eraId)
      .slice(0, 3)
      .map((opportunity) => ({
        node,
        opportunity,
        url: getBusinessUrl(group.node_id, opportunity.id),
      }));
  });

  return {
    solvedProblems,
    businessOpportunities: businessOpportunities.slice(0, 8),
    relatedSubNodes: uniqueBy(
      solvedProblems.map(({ node, subNode }) => ({
        ...subNode,
        node_id: node.id,
      })),
      (subNode) => `${subNode.node_id}:${subNode.id}`,
    ),
  };
}

export type CgdIndustryDirectoryNode = {
  node: CgdNode;
  url: string;
  subNodeCount: number;
  linkedProblemCount: number;
  totalProblemCount: number;
  featuredProblems: Array<{
    problem: CgdProblemGroup["problems"][number];
    subNode: CgdNode["sub_nodes"][number];
    url: string;
  }>;
};

export type CgdBusinessDirectoryNode = {
  node: CgdNode;
  url: string;
  opportunityCount: number;
  subNodeCount: number;
  eraCount: number;
  featuredOpportunities: Array<
    CgdBusinessOpportunity & { era_title: string; url: string }
  >;
};

export function getIndustryDirectoryData(): CgdIndustryDirectoryNode[] {
  const nodes = getCgdNodes();
  const problemGroups = getCgdProblemGroups();
  const industryPages = getCgdPageIndex().filter(
    (page) => page.pageType === "industry-problem",
  );

  return nodes.map((node) => {
    const pages = industryPages.filter((page) => page.source.node_id === node.id);
    const featuredProblems = pages.slice(0, 4).flatMap((page) => {
      if (!page.source.sub_node_id || !page.source.problem_id) {
        return [];
      }

      const subNode = node.sub_nodes.find(
        (candidate) => candidate.id === page.source.sub_node_id,
      );
      const problem = getProblem(node.id, page.source.problem_id);

      return subNode && problem
        ? [{ problem, subNode, url: page.route }]
        : [];
    });

    return {
      node,
      url: `/industries/${routeSegment(node.id)}/`,
      subNodeCount: node.sub_nodes.length,
      linkedProblemCount: pages.length,
      totalProblemCount:
        problemGroups.find((group) => group.id === node.id)?.problems.length ?? 0,
      featuredProblems,
    };
  });
}

export function getIndustryNodeDirectoryData(nodeSlug: string) {
  return getIndustryDirectoryData().find(
    ({ node }) => routeSegment(node.id) === nodeSlug,
  );
}

export function getBusinessOpportunityDirectoryData(
  locale = CGD_LOCALE,
): CgdBusinessDirectoryNode[] {
  const nodes = getCgdNodes();
  const groups = getCgdBusinessGroups();
  const eraTitleById = new Map(getCgdEras(locale).map((era) => [era.id, era.title]));

  return nodes.map((node) => {
    const opportunities =
      groups.find((group) => group.node_id === node.id)?.business_opportunities ?? [];
    const subNodeIds = new Set(opportunities.map((opportunity) => opportunity.sub_node_id));
    const eraIds = new Set(opportunities.map((opportunity) => opportunity.era_id));

    return {
      node,
      url: `/business-opportunities/${routeSegment(node.id)}/`,
      opportunityCount: opportunities.length,
      subNodeCount: subNodeIds.size,
      eraCount: eraIds.size,
      featuredOpportunities: opportunities.map((opportunity) => ({
        ...opportunity,
        era_title: eraTitleById.get(opportunity.era_id) ?? opportunity.era_id,
        url: getBusinessUrl(node.id, opportunity.id),
      })),
    };
  });
}

export function getBusinessOpportunityNodeDirectoryData(
  nodeSlug: string,
  locale = CGD_LOCALE,
) {
  return getBusinessOpportunityDirectoryData(locale).find(
    ({ node }) => routeSegment(node.id) === nodeSlug,
  );
}
