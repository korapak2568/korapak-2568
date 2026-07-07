import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LOCALE } from "@/lib/SiteUrlLocales";

const DATA_DIR = path.join(process.cwd(), "data", "layer");
const DEFAULT_LAYER_LOCALE = DEFAULT_LOCALE;

type LayerRecord = {
  id: string;
  name: string;
};

type PageInfo = Record<string, unknown>;

type LayerContentSection = LayerRecord & {
  page_info?: PageInfo;
};

export type LayerContent = {
  layers: LayerRecord[];
  industries?: LayerContentSection;
  business_opportunities?: LayerContentSection;
  "future-solutions"?: LayerContentSection;
};

type LayerContentFile = LayerRecord[] | LayerContent;

function readLayerJson(locale = DEFAULT_LAYER_LOCALE): LayerContentFile {
  const requestedPath = path.join(DATA_DIR, `${locale}.layer.json`);
  const fallbackPath = path.join(DATA_DIR, `${DEFAULT_LAYER_LOCALE}.layer.json`);
  const sourcePath = fs.existsSync(requestedPath) ? requestedPath : fallbackPath;
  const rawContent = fs.readFileSync(sourcePath, "utf8").replace(/^\uFEFF/, "");

  return JSON.parse(rawContent) as LayerContentFile;
}

export function getLayerContent(locale = DEFAULT_LAYER_LOCALE): LayerContent {
  const content = readLayerJson(locale);

  if (Array.isArray(content)) {
    return { layers: content };
  }

  return content;
}

export function getLayers(locale = DEFAULT_LAYER_LOCALE): LayerRecord[] {
  return getLayerContent(locale).layers;
}

export function getLayerPageInfo<T extends PageInfo>(
  key: keyof Omit<LayerContent, "layers">,
  locale = DEFAULT_LAYER_LOCALE,
): T {
  return (getLayerContent(locale)[key]?.page_info ?? {}) as T;
}

export function formatPageInfoTemplate(
  template: string,
  values: Record<string, number | string>,
): string {
  return template.replace(/\{([a-zA-Z0-9_]+)\}/g, (match, key) => {
    const value = values[key];

    return value === undefined ? match : String(value);
  });
}