import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

const DEFAULT_LAYER_LOCALE = DEFAULT_LOCALE;
const layerContentCache = new Map<SiteLocale, Promise<LayerContentFile>>();

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

function resolveLayerLocale(locale = DEFAULT_LAYER_LOCALE): SiteLocale {
  return LOCALES.includes(locale as SiteLocale) ? (locale as SiteLocale) : DEFAULT_LAYER_LOCALE;
}

async function readLayerJson(locale = DEFAULT_LAYER_LOCALE): Promise<LayerContentFile> {
  const resolvedLocale = resolveLayerLocale(locale);
  const cachedContent = layerContentCache.get(resolvedLocale);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<LayerContentFile>(`/layer/${resolvedLocale}.layer.json`).catch((error) => {
    layerContentCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_LAYER_LOCALE) {
      return readLayerJson(DEFAULT_LAYER_LOCALE);
    }

    throw error;
  });
  layerContentCache.set(resolvedLocale, contentPromise);

  return contentPromise;
}

export async function getLayerContent(locale = DEFAULT_LAYER_LOCALE): Promise<LayerContent> {
  const content = await readLayerJson(locale);

  if (Array.isArray(content)) {
    return { layers: content };
  }

  return content;
}

export async function getLayers(locale = DEFAULT_LAYER_LOCALE): Promise<LayerRecord[]> {
  return (await getLayerContent(locale)).layers;
}

export async function getLayerPageInfo<T extends PageInfo>(
  key: keyof Omit<LayerContent, "layers">,
  locale = DEFAULT_LAYER_LOCALE,
): Promise<T> {
  return ((await getLayerContent(locale))[key]?.page_info ?? {}) as T;
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