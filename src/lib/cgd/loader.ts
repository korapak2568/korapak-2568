import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";
import { getFutureSolutions } from "@/lib/future-solutions/futureSolutionsContent";
import {
  getFutureRoadmapEras,
  getFutureRoadmapFeaturedItems,
  type FutureRoadmapEraMeta,
  type FutureRoadmapItem,
} from "@/lib/platform-content/futureRoadmapContent";

const CGD_LOCALE = DEFAULT_LOCALE;
const remoteDataCache = new Map<string, Promise<unknown>>();

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

function readRemoteJson<T>(jsonPath: string): Promise<T> {
  const cachedData = remoteDataCache.get(jsonPath);

  if (cachedData) {
    return cachedData as Promise<T>;
  }

  const dataPromise = fetchData<T>(jsonPath);
  remoteDataCache.set(jsonPath, dataPromise as Promise<unknown>);

  return dataPromise;
}

async function readLocalizedRemoteJson<T>(
  pathTemplate: string,
  locale = CGD_LOCALE,
  fallbackLocale = CGD_LOCALE,
): Promise<T> {
  try {
    return await readRemoteJson<T>(pathTemplate.replace("{locale}", locale));
  } catch (error) {
    if (locale !== fallbackLocale) {
      return readRemoteJson<T>(pathTemplate.replace("{locale}", fallbackLocale));
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

export function getCgdPageIndex(): Promise<CgdPageIndexRecord[]> {
  return readRemoteJson<CgdPageIndexRecord[]>(
    "/civilization-graph/pages/page-index.json",
  );
}

export function getCgdSearchIndex(locale = CGD_LOCALE): Promise<CgdSearchIndexRecord[]> {
  return readLocalizedRemoteJson<CgdSearchIndexRecord[]>(
    "/civilization-graph/search/{locale}.search-index.json",
    locale,
  );
}

export async function getCgdSearchRecordByRoute(
  route: string,
  pageType: CgdPageType,
  locale = CGD_LOCALE,
): Promise<CgdSearchIndexRecord | undefined> {
  const normalizedRoute = normalizeRoute(route);

  return (await getCgdSearchIndex(locale)).find(
    (page) => page.pageType === pageType && page.route === normalizedRoute,
  );
}
export function getCgdNodes(locale = CGD_LOCALE): Promise<CgdNode[]> {
  return readLocalizedRemoteJson<CgdNode[]>("/node/{locale}.node.json", locale);
}

export function getCgdProblemGroups(locale = CGD_LOCALE): Promise<CgdProblemGroup[]> {
  return readLocalizedRemoteJson<CgdProblemGroup[]>("/problem/{locale}.problem.json", locale);
}


export function getCgdBusinessGroups(locale = CGD_LOCALE): Promise<CgdBusinessGroup[]> {
  return readLocalizedRemoteJson<CgdBusinessGroup[]>(
    "/business_opportunities/{locale}.business.json",
    locale,
  );
}

export function getCgdEras(locale = CGD_LOCALE): Promise<CgdEra[]> {
  return readLocalizedRemoteJson<CgdEra[]>("/era/{locale}.era.json", locale);
}

export async function getCgdPageByRoute(
  route: string,
  pageType: CgdPageType,
): Promise<CgdPageIndexRecord | undefined> {
  const normalizedRoute = normalizeRoute(route);

  return (await getCgdPageIndex()).find(
    (page) => page.pageType === pageType && page.route === normalizedRoute,
  );
}

export async function getCgdStaticParams(pageType: CgdPageType) {
  return (await getCgdPageIndex())
    .filter((page) => page.pageType === pageType)
    .map((page) => page.route.split("/").filter(Boolean));
}

async function getNode(nodeId: string, locale = CGD_LOCALE): Promise<CgdNode | undefined> {
  return (await getCgdNodes(locale)).find((node) => node.id === nodeId);
}

function getSubNode(node: CgdNode, subNodeId: string) {
  return node.sub_nodes.find((subNode) => subNode.id === subNodeId);
}

async function getProblem(nodeId: string, problemId: string, locale = CGD_LOCALE) {
  return (await getCgdProblemGroups(locale))
    .find((group) => group.id === nodeId)
    ?.problems.find((problem) => problem.id === problemId);
}

async function getFutureSolutionRecordsForProblem(
  nodeId: string,
  subNodeId: string,
  problemId: string,
) {
  return (await getFutureSolutions()).filter((solution) =>
    solution.current_problems_addressed.some(
      (problem) =>
        problem.node_id === nodeId &&
        problem.sub_node_id === subNodeId &&
        problem.problem_id === problemId,
    ),
  );
}

async function getFutureSolutionRecordsForSubNode(nodeId: string, subNodeId: string) {
  return (await getFutureSolutions()).filter((solution) =>
    solution.current_problems_addressed.some(
      (problem) => problem.node_id === nodeId && problem.sub_node_id === subNodeId,
    ),
  );
}

async function getFutureSolutionRecordByRoadmapItem(eraId: string, eraItemId: string) {
  return (await getFutureSolutions()).find(
    (solution) => solution.era_id === eraId && solution.era_item_id === eraItemId,
  );
}
async function getRoadmapItemById(eraItemId: string): Promise<RoadmapItemRef | undefined> {
  for (const { era, items } of await getFutureRoadmapEras(CGD_LOCALE)) {
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

async function getRoadmapItemsByEra(eraId: string, limit = 8): Promise<RoadmapItemRef[]> {
  const roadmapEra = (await getFutureRoadmapEras(CGD_LOCALE)).find(
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

async function getFutureCivilizationLandingThumbnail(locale = CGD_LOCALE) {
  const eras = await getFutureRoadmapEras(locale);
  const signalCount = eras.reduce(
    (totalSignals, roadmapEra) => totalSignals + roadmapEra.items.length,
    0,
  );
  const heroItem = getMixedRoadmapItems(
    await getFutureRoadmapFeaturedItems(signalCount, locale),
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

export async function getIndustryProblemPageData(
  nodeSlug: string,
  subNodeSlug: string,
  problemSlug: string,
  locale = CGD_LOCALE,
): Promise<IndustryProblemPageData | undefined> {
  const route = `/industries/${nodeSlug}/${subNodeSlug}/${problemSlug}/`;
  const [page, search] = await Promise.all([
    getCgdPageByRoute(route, "industry-problem"),
    getCgdSearchRecordByRoute(route, "industry-problem", locale),
  ]);

  if (!page?.source.node_id || !page.source.sub_node_id || !page.source.problem_id) {
    return undefined;
  }

  const node = await getNode(page.source.node_id, locale);
  const subNode = node ? getSubNode(node, page.source.sub_node_id) : undefined;
  const problem = await getProblem(page.source.node_id, page.source.problem_id, locale);

  if (!node || !subNode || !problem) {
    return undefined;
  }

  const solutionItems = uniqueBy(
    (
      await Promise.all(
        (await getFutureSolutionRecordsForProblem(
          page.source.node_id,
          page.source.sub_node_id,
          page.source.problem_id,
        )).map((solution) => getRoadmapItemById(solution.era_item_id)),
      )
    ).filter((item): item is RoadmapItemRef => Boolean(item)),
    ({ item }) => item.id,
  );
  const [eras, businessGroups] = await Promise.all([
    getCgdEras(locale),
    getCgdBusinessGroups(locale),
  ]);
  const eraTitleById = new Map(eras.map((era) => [era.id, era.title]));
  const businessOpportunities =
    businessGroups
      .find((group) => group.node_id === node.id)
      ?.business_opportunities.filter(
        (opportunity) => opportunity.sub_node_id === subNode.id,
      )
      .map((opportunity) => ({
        ...opportunity,
        era_title: eraTitleById.get(opportunity.era_id) ?? opportunity.era_id,
      })) ?? [];
  const relatedProblems =
    (await getCgdProblemGroups(locale))
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
    relatedIndustries: (await getCgdNodes(locale)).filter((candidate) => candidate.id !== node.id).slice(0, 6),
    relatedTechnologies,
    internalLinks: [
      {
        label: "Future Civilization Roadmap",
        href: "/future-civilization/",
        thumbnail: await getFutureCivilizationLandingThumbnail(locale),
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

export async function getBusinessOpportunityPageData(
  nodeSlug: string,
  businessSlug: string,
  locale = CGD_LOCALE,
): Promise<BusinessOpportunityPageData | undefined> {
  const route = `/business-opportunities/${nodeSlug}/${businessSlug}/`;
  const [page, search] = await Promise.all([
    getCgdPageByRoute(route, "business-opportunity"),
    getCgdSearchRecordByRoute(route, "business-opportunity", locale),
  ]);

  if (
    !page?.source.node_id ||
    !page.source.sub_node_id ||
    !page.source.business_opportunity_id ||
    !page.source.era_id
  ) {
    return undefined;
  }

  const [eras, businessGroups] = await Promise.all([
    getCgdEras(locale),
    getCgdBusinessGroups(locale),
  ]);
  const node = await getNode(page.source.node_id, locale);
  const subNode = node ? getSubNode(node, page.source.sub_node_id) : undefined;
  const opportunity = businessGroups
    .find((group) => group.node_id === page.source.node_id)
    ?.business_opportunities.find(
      (candidate) => candidate.id === page.source.business_opportunity_id,
    );

  if (!node || !subNode || !opportunity) {
    return undefined;
  }

  const roadmapItems = await getRoadmapItemsByEra(opportunity.era_id, 8);
  const relatedProblems = uniqueBy(
    (
      await Promise.all(
        (await getFutureSolutionRecordsForSubNode(node.id, opportunity.sub_node_id))
          .flatMap((solution) => solution.current_problems_addressed)
          .filter(
            (problem) =>
              problem.node_id === node.id && problem.sub_node_id === opportunity.sub_node_id,
          )
          .map((problem) => getProblem(problem.node_id, problem.problem_id, locale)),
      )
    ).filter((problem): problem is CgdProblemGroup["problems"][number] =>
      Boolean(problem),
    ),
    (problem) => problem.id,
  );
  const relatedTechnologies = uniqueBy(
    roadmapItems.flatMap(({ item }) => item.domains),
    (domain) => domain,
  ).slice(0, 10);
  const eraTitleById = new Map(eras.map((era) => [era.id, era.title]));
  const relatedBusinessOpportunities =
    businessGroups
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

export async function getFutureSolutionRelations(
  eraId: string,
  eraItemId: string,
): Promise<FutureSolutionRelations> {
  const nodes = await getCgdNodes();
  const solvedProblemLinks =
    (await getFutureSolutionRecordByRoadmapItem(eraId, eraItemId))?.current_problems_addressed ?? [];
  const solvedProblems = (
    await Promise.all(
      solvedProblemLinks.map(async (link) => {
        const node = nodes.find((candidate) => candidate.id === link.node_id);
        const subNode = node ? getSubNode(node, link.sub_node_id) : undefined;
        const problem = await getProblem(link.node_id, link.problem_id);

        return node && subNode && problem
          ? {
              node,
              subNode,
              problem,
              url: getIndustryProblemUrl(node.id, subNode.id, problem.id),
            }
          : undefined;
      }),
    )
  ).filter((item): item is FutureSolutionRelations["solvedProblems"][number] =>
    Boolean(item),
  );
  const businessOpportunities = (await getCgdBusinessGroups()).flatMap((group) => {
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

export async function getIndustryDirectoryData(locale = CGD_LOCALE): Promise<CgdIndustryDirectoryNode[]> {
  const [nodes, problemGroups] = await Promise.all([
    getCgdNodes(locale),
    getCgdProblemGroups(locale),
  ]);
  const industryPages = (await getCgdPageIndex()).filter(
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
      const problem = problemGroups
        .find((group) => group.id === node.id)
        ?.problems.find((candidate) => candidate.id === page.source.problem_id);

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

export async function getIndustryNodeDirectoryData(nodeSlug: string, locale = CGD_LOCALE) {
  return (await getIndustryDirectoryData(locale)).find(
    ({ node }) => routeSegment(node.id) === nodeSlug,
  );
}

export async function getBusinessOpportunityDirectoryData(
  locale = CGD_LOCALE,
): Promise<CgdBusinessDirectoryNode[]> {
  const [groups, eras] = await Promise.all([
    getCgdBusinessGroups(locale),
    getCgdEras(locale),
  ]);
  const nodes = await getCgdNodes(locale);
  const eraTitleById = new Map(eras.map((era) => [era.id, era.title]));

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

export async function getBusinessOpportunityNodeDirectoryData(
  nodeSlug: string,
  locale = CGD_LOCALE,
) {
  return (await getBusinessOpportunityDirectoryData(locale)).find(
    ({ node }) => routeSegment(node.id) === nodeSlug,
  );
}