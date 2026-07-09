import type { Metadata } from "next";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import {
  getSmartMobilityChiangMaiActionsFromJson,
  getSmartMobilityChiangMaiSlugs,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

export type MtsStation = {
  type: "MTS";
  zone: "Coastal" | "Valley" | string;
  world_map: string;
  mts_line: string;
  mts_network: string;
  mts_station: string;
  slug: string;
  name: string;
  story: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    aspectRatio?: string;
    mobile?: PlatformResponsiveImageVariant;
    thumbnail?: PlatformResponsiveImageVariant;
    desktop?: PlatformResponsiveImageVariant;
    open_graph?: PlatformResponsiveImageVariant;
  };
};

export type MtsLine = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stations: MtsStation[];
};

export type SmartMobilityContent = {
  locale: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  signals: string[];
  lines: MtsLine[];
};

export type SmartMobilityMtsDetailAction = {
  label: string;
  href: string;
};

export type SmartMobilityNavigationAction = SmartMobilityMtsDetailAction & {
  slug?: string;
};

export type SmartMobilityLandingLine = Omit<MtsLine, "stations"> & {
  stations: MtsStation[];
};

export type SmartMobilityLandingContent = Omit<SmartMobilityContent, "lines"> & {
  heroStation: MtsStation;
  lines: SmartMobilityLandingLine[];
  navigationActions: SmartMobilityNavigationAction[];
};

export type SmartMobilityMtsDetailContent = {
  backLinkLabel: string;
  stationTagsAriaLabel: string;
  actions: SmartMobilityMtsDetailAction[];
  related: {
    eyebrow: string;
    title: string;
    description: string;
  };
  relatedCardCta: string;
};

export type SmartMobilityStationDetailContent = {
  detail: SmartMobilityMtsDetailContent;
  station: MtsStation;
  relatedStations: MtsStation[];
  navigationActions: SmartMobilityNavigationAction[];
};

const DEFAULT_LOCALE = "en";
const remoteContentCache = new Map<string, Promise<unknown>>();
const smartMobilityOgImage =
  "/images-opengraph/images-platform/smart-mobility/mts-coastal10-grand-coastal-terminal.png";

function resolveSmartMobilityLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

function readRemoteJson<T>(jsonPath: string): Promise<T> {
  const cachedContent = remoteContentCache.get(jsonPath);

  if (cachedContent) {
    return cachedContent as Promise<T>;
  }

  const contentPromise = fetchData<T>(jsonPath).catch((error) => {
    remoteContentCache.delete(jsonPath);
    throw error;
  });
  remoteContentCache.set(jsonPath, contentPromise as Promise<unknown>);

  return contentPromise;
}

function getSmartMobilityPath(path: string, locale = DEFAULT_LOCALE): string {
  return `/smart-mobility/${path}/${locale}.json`;
}

async function getCoastalStations(locale = DEFAULT_LOCALE): Promise<MtsStation[]> {
  return readRemoteJson<MtsStation[]>(getSmartMobilityPath("coastal", locale));
}

async function getValleyStations(locale = DEFAULT_LOCALE): Promise<MtsStation[]> {
  return readRemoteJson<MtsStation[]>(getSmartMobilityPath("valley", locale));
}

async function getMtsContent(
  locale = DEFAULT_LOCALE,
): Promise<{ detail: SmartMobilityMtsDetailContent }> {
  return readRemoteJson<{ detail: SmartMobilityMtsDetailContent }>(
    getSmartMobilityPath("mts", locale),
  );
}

function getSlugFromHref(href: string, slugs: string[]): string | undefined {
  return slugs.find((slug) => href.includes(`/smart-mobility/chiang-mai/${slug}/`));
}

export async function getSmartMobilityNavigationActions(
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityNavigationAction[]> {
  const [actions, slugs] = await Promise.all([
    getSmartMobilityChiangMaiActionsFromJson(locale),
    getSmartMobilityChiangMaiSlugs(locale),
  ]);
  const actionsByHref = new Map<string, SmartMobilityNavigationAction>();

  for (const action of actions) {
    actionsByHref.set(action.href, {
      ...action,
      slug: getSlugFromHref(action.href, slugs),
    });
  }

  return [...actionsByHref.values()];
}

export async function getAllSmartMobilityStations(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  const [coastalStations, valleyStations] = await Promise.all([
    getCoastalStations(locale),
    getValleyStations(locale),
  ]);

  return [...coastalStations, ...valleyStations];
}

export async function getSmartMobilityContent(
  locale?: string | null,
): Promise<SmartMobilityContent> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [coastalStations, valleyStations] = await Promise.all([
    getCoastalStations(resolvedLocale),
    getValleyStations(resolvedLocale),
  ]);

  return {
    locale: resolvedLocale,
    seo: {
      title: "MTS Future Civilization Platform | Chorn Planet",
      description:
        "Explore the Chorn Planet MTS future civilization network across coastal and valley mobility stations.",
    },
    hero: {
      eyebrow: "MTS Future Civilization",
      title: "MTS connects Chorn Planet into a living civilization network.",
      description:
        "Move from coastal terminals to alpine valleys through an intelligent mobility layer built for future tourism, smart infrastructure, emotional lifestyle stories and human-centered daily life.",
      primaryCta: "Explore Coastal Line",
      secondaryCta: "Explore Valley Line",
    },
    signals: [
      "Intelligent Mobility",
      "Future Tourism",
      "Smart Infrastructure",
      "Human-Centered Environments",
    ],
    lines: [
      {
        id: "coastal",
        eyebrow: "Coastal Line",
        title: "Ocean mobility districts for future tourism.",
        description:
          "Coastal stations connect beach gateways, marinas, lagoon systems, resort districts and terminal-scale movement into a premium waterfront civilization route.",
        stations: coastalStations,
      },
      {
        id: "valley",
        eyebrow: "Valley Line",
        title: "Alpine mobility environments for intelligent living.",
        description:
          "Valley stations move through floral valleys, waterfall districts, misty mountain points and alpine terminals designed as calm future infrastructure.",
        stations: valleyStations,
      },
    ],
  };
}

export async function getSmartMobilityStations(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  return getAllSmartMobilityStations(locale);
}

export async function getSmartMobilityStationBySlug(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<MtsStation | undefined> {
  return (await getAllSmartMobilityStations(locale)).find(
    (station) => station.slug === slug,
  );
}

export async function getRelatedSmartMobilityStations(
  slug: string,
  limit = 9,
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  const allStations = await getAllSmartMobilityStations(locale);
  const current = allStations.find((station) => station.slug === slug);
  const sameLineStations = current
    ? allStations.filter(
        (station) =>
          station.slug !== slug && station.mts_line === current.mts_line,
      )
    : [];
  const otherStations = allStations.filter(
    (station) =>
      station.slug !== slug &&
      !sameLineStations.some((sameLine) => sameLine.slug === station.slug),
  );

  return [...sameLineStations, ...otherStations].slice(0, limit);
}

export async function getSmartMobilityStationDetailContent(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityStationDetailContent | undefined> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [station, mtsContent, navigationActions] = await Promise.all([
    getSmartMobilityStationBySlug(slug, resolvedLocale),
    getMtsContent(resolvedLocale),
    getSmartMobilityNavigationActions(resolvedLocale),
  ]);

  if (!station) {
    return undefined;
  }

  return {
    detail: mtsContent.detail,
    station,
    relatedStations: await getRelatedSmartMobilityStations(station.slug, 9, resolvedLocale),
    navigationActions,
  };
}

export async function getSmartMobilityMtsDetailActions(
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityMtsDetailAction[]> {
  return [...(await getMtsContent(locale)).detail.actions];
}

export function getRandomSmartMobilityStations(
  stations: MtsStation[],
  limit = 6,
): MtsStation[] {
  return [...stations]
    .map((station) => ({ station, sortKey: Math.random() }))
    .sort((first, second) => first.sortKey - second.sortKey)
    .slice(0, limit)
    .map(({ station }) => station);
}

export async function getRandomSmartMobilityStation(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation> {
  const allStations = await getAllSmartMobilityStations(locale);

  return allStations[Math.floor(Math.random() * allStations.length)] ?? allStations[0];
}

export async function getSmartMobilityLandingContent(
  locale?: string | null,
): Promise<SmartMobilityLandingContent> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [content, heroStation, navigationActions] = await Promise.all([
    getSmartMobilityContent(resolvedLocale),
    getRandomSmartMobilityStation(resolvedLocale),
    getSmartMobilityNavigationActions(resolvedLocale),
  ]);

  return {
    ...content,
    heroStation,
    navigationActions,
    lines: content.lines.map((line) => ({
      ...line,
      stations: getRandomSmartMobilityStations(line.stations, 6),
    })),
  };
}

export async function getSmartMobilityMetadata(
  locale?: string | null,
): Promise<Metadata> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const content = await getSmartMobilityContent(resolvedLocale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: getLocalizedAlternates("/smart-mobility/"),
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      url: `/${resolvedLocale}/smart-mobility/`,
      images: [
        {
          url: smartMobilityOgImage,
          width: 1536,
          height: 1024,
          alt: "MTS Coastal 10 Grand Coastal Terminal central mobility hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [smartMobilityOgImage],
    },
  };
}

export async function getSmartMobilityStationMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Promise<Metadata> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const station = await getSmartMobilityStationBySlug(slug, resolvedLocale);

  if (!station) {
    return {
      title: "MTS station not found",
    };
  }

  return {
    title: `${station.name} | Chorn Planet MTS`,
    description: station.story,
    alternates: getLocalizedAlternates(`/smart-mobility/mts/${station.slug}/`),
    openGraph: {
      title: station.name,
      description: station.story,
      type: "article",
      url: `/${resolvedLocale}/smart-mobility/mts/${station.slug}/`,
      images: [
        {
          url: station.image.open_graph?.src ?? station.image.src,
          width: station.image.open_graph?.width ?? station.image.width,
          height: station.image.open_graph?.height ?? station.image.height,
          alt: station.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: station.name,
      description: station.story,
      images: [station.image.open_graph?.src ?? station.image.src],
    },
  };
}
