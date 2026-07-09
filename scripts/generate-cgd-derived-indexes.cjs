const fs = require("fs");
const path = require("path");

const root = process.cwd();
const read = (filePath) => JSON.parse(fs.readFileSync(path.join(root, filePath), "utf8"));
const write = (filePath, data) => {
  const target = path.join(root, filePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`);
};

const acronymLabels = new Map([
  ["ai", "AI"],
  ["api", "API"],
  ["bci", "BCI"],
  ["co2", "CO2"],
  ["gmo", "GMO"],
  ["2d", "2D"],
  ["3d", "3D"],
  ["vr", "VR"],
  ["xr", "XR"],
]);

const toCapitalCase = (value) =>
  String(value ?? "")
    .replace(/[_-]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const acronym = acronymLabels.get(word.toLowerCase());

      if (acronym) {
        return acronym;
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

const capitalizeFirstLetter = (value) =>
  String(value ?? "").replace(/^\s*([a-z])/, (match, firstLetter) =>
    match.replace(firstLetter, firstLetter.toUpperCase()),
  );

const futureRoadmapDir = path.join(root, "data", "future-roadmap");

if (!fs.existsSync(futureRoadmapDir)) {
  console.log(
    JSON.stringify(
      {
        skipped: true,
        reason: "data/future-roadmap is not present; using remote civilization-graph data",
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

const pageIndexPath = "data/civilization-graph/pages/page-index.json";
const pageIndex = read(pageIndexPath);
const eraSlugById = new Map();
const eraTitleById = new Map();
const itemByEraAndSlug = new Map();

for (let index = 1; index <= 8; index += 1) {
  const eraNumber = String(index).padStart(2, "0");
  const eraDoc = read(`data/future-roadmap/era${eraNumber}/en.json`);
  eraSlugById.set(eraDoc.era.id, eraDoc.era.slug);
  eraTitleById.set(eraDoc.era.id, eraDoc.era.title);

  for (const item of eraDoc.items) {
    itemByEraAndSlug.set(`${eraDoc.era.id}:${item.slug}`, item);
  }
}

const normalizedPageIndex = pageIndex.map((page) => {
  if (page.pageType !== "future-solution") {
    return page;
  }

  const eraId = page.source.era_id;
  const itemSlug = page.source.era_item_slug;
  const eraSlug = eraId ? eraSlugById.get(eraId) : undefined;

  if (!eraId || !itemSlug || !eraSlug) {
    throw new Error(`Cannot normalize future solution page: ${page.id}`);
  }

  return {
    ...page,
    route: `/future-civilization/${eraSlug}/${itemSlug}/`,
    source: {
      ...page.source,
      era_slug: eraSlug,
    },
  };
});

const routeSet = new Set();
for (const page of normalizedPageIndex) {
  if (routeSet.has(page.route)) {
    throw new Error(`Duplicate manifest route: ${page.route}`);
  }
  routeSet.add(page.route);
}

const sitemap = normalizedPageIndex
  .filter((page) => page.seo?.isIndexable)
  .map((page) => ({
    id: page.id,
    route: page.route,
    pageType: page.pageType,
    priority: page.seo.priority,
    changeFrequency: page.seo.changeFrequency,
  }));

const search = normalizedPageIndex.map((page) => {
  const source = page.source;
  let title = toCapitalCase(page.id);
  let description = `${toCapitalCase(page.pageType)} page generated from the Civilization Graph manifest.`;
  const tags = [page.pageType];

  if (page.pageType === "future-solution" && source.era_id && source.era_item_slug) {
    const item = itemByEraAndSlug.get(`${source.era_id}:${source.era_item_slug}`);
    if (item) {
      title = item.title;
      description = item.description;
      tags.push(item.category, ...item.domains);
    }
    const eraTitle = eraTitleById.get(source.era_id);
    if (eraTitle) {
      tags.push(eraTitle);
    }
  }

  if (page.pageType === "industry-problem") {
    title = [source.problem_id, source.sub_node_id, source.node_id]
      .filter(Boolean)
      .map(toCapitalCase)
      .join(" | ");
    tags.push(source.node_id, source.sub_node_id, source.problem_id);
  }

  if (page.pageType === "business-opportunity") {
    title = source.business_opportunity_id
      ? toCapitalCase(source.business_opportunity_id)
      : toCapitalCase(page.id);
    tags.push(source.node_id, source.sub_node_id, source.business_opportunity_id, source.era_id);
  }

  return {
    id: page.id,
    route: page.route,
    pageType: page.pageType,
    title: toCapitalCase(title),
    description: capitalizeFirstLetter(description),
    tags: [...new Set(tags.filter(Boolean))],
    source,
  };
});

write(pageIndexPath, normalizedPageIndex);
write("data/civilization-graph/sitemap/sitemap.json", sitemap);
write("data/civilization-graph/search/en.search-index.json", search);

console.log(
  JSON.stringify(
    {
      pages: normalizedPageIndex.length,
      sitemap: sitemap.length,
      search: search.length,
      futureSolutionRoutes: normalizedPageIndex.filter((page) => page.pageType === "future-solution").length,
    },
    null,
    2,
  ),
);