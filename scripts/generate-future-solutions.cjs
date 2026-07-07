const fs = require("fs");
const path = require("path");

const root = process.cwd();
const readJson = (filePath) =>
  JSON.parse(fs.readFileSync(path.join(root, filePath), "utf8").replace(/^\uFEFF/, ""));

const records = readJson("data/future-solutions/en.future-solutions.json");
const roadmapItems = new Map();

for (let index = 1; index <= 8; index += 1) {
  const eraNumber = String(index).padStart(2, "0");
  const eraData = readJson(`data/future-roadmap/era${eraNumber}/en.json`);

  for (const item of eraData.items) {
    roadmapItems.set(item.id, { era: eraData.era, item });
  }
}

const errors = [];
const ids = new Set();

for (const record of records) {
  const source = roadmapItems.get(record.era_item_id);

  if (ids.has(record.id)) {
    errors.push(`Duplicate record id: ${record.id}`);
  }
  ids.add(record.id);

  if (!source) {
    errors.push(`Missing roadmap source for ${record.era_item_id}`);
    continue;
  }

  const roadmapUrl = `/en/future-civilization/${source.era.slug}/${source.item.slug}/`;
  const solutionUrl = `/en/future-solutions/${source.era.slug}/${source.item.slug}/`;

  if (record.era_id !== source.era.id) {
    errors.push(`Era mismatch for ${record.era_item_id}`);
  }
  if (record.era_item_slug !== source.item.slug) {
    errors.push(`Slug mismatch for ${record.era_item_id}`);
  }
  if (record.canonical?.roadmap_url !== roadmapUrl) {
    errors.push(`Roadmap canonical mismatch for ${record.era_item_id}`);
  }
  if (record.canonical?.solution_url !== solutionUrl) {
    errors.push(`Solution canonical mismatch for ${record.era_item_id}`);
  }
  if (!record.current_problems_addressed?.length) {
    errors.push(`Missing current problem links for ${record.era_item_id}`);
  }
  if (!record.industries_impacted?.length) {
    errors.push(`Missing industry links for ${record.era_item_id}`);
  }
}

if (records.length !== 400) {
  errors.push(`Expected 400 future solution records, found ${records.length}`);
}
if (roadmapItems.size !== 400) {
  errors.push(`Expected 400 roadmap source items, found ${roadmapItems.size}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      records: records.length,
      uniqueRecordIds: ids.size,
      sourceRoadmapItems: roadmapItems.size,
      validation: "passed",
    },
    null,
    2,
  ),
);
