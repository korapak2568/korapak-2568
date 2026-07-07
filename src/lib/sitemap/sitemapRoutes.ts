import fs from "node:fs";
import path from "node:path";
import type {MetadataRoute} from "next";
import {getLegacyPublicRedirects} from "../../../config/publicRedirects.mjs";
import {SITE_URL} from "@/lib/SiteUrlLocales";
import {
    getBusinessOpportunityDirectoryData,
    getCgdPageIndex,
    getIndustryDirectoryData,
} from "@/lib/cgd/loader";
import {
    getFutureSolutionEraSummaries,
    getFutureSolutionStaticParams,
} from "@/lib/future-solutions/futureSolutionsContent";
import {getPlatformOutfitSets} from "@/lib/platform-content/styleContent";
import {
    getFutureRoadmapEras,
    getFutureRoadmapItemStaticParams,
} from "@/lib/platform-content/futureRoadmapContent";
import {getSmartMobilityStations} from "@/lib/platform-content/smartMobilityContent";
import {getAllSmartCityChiangMaiContent} from "@/lib/smart-city-chiang-mai-content/smartCityChiangMaiContent.service";
import {getAllSmartCityLandingContent} from "@/lib/smart-city-landing-content/smartCityLandingContent.service";

type SitemapRoute = {
    path: string;
    sourceFile?: string;
};

type DynamicRouteResolver = () => Promise<SitemapRoute[]>;

const LOCALE_APP_DIR = path.join(process.cwd(), "src", "app", "[locale]");
const PAGE_FILE_NAME = "page.tsx";
const ROUTE_GROUP_PATTERN = /^\(.+\)$/;
const DYNAMIC_SEGMENT_PATTERN = /^\[.+\]$/;
const NON_INDEXABLE_STATIC_PATHS = new Set([
    "/404/",
    "/smart-mobility/mts/",
]);
const DYNAMIC_ROUTE_RESOLVERS: Record<string, DynamicRouteResolver> = {
    "/smart-city/[slug]/": async () => {
        const slugs = getUniqueSlugs(await getAllSmartCityLandingContent());
        const sourceFile = getSourceFileForRoute("/smart-city/[slug]/");

        return slugs.map((slug) => ({
            path: `/smart-city/${slug}/`,
            sourceFile,
        }));
    },
    "/smart-city/chiang-mai/[slug]/": async () => {
        const slugs = getUniqueSlugs(await getAllSmartCityChiangMaiContent());
        const sourceFile = getSourceFileForRoute("/smart-city/chiang-mai/[slug]/");

        return slugs.map((slug) => ({
            path: `/smart-city/chiang-mai/${slug}/`,
            sourceFile,
        }));
    },
    "/smart-mobility/mts/[slug]/": async () => {
        const sourceFile = getSourceFileForRoute("/smart-mobility/mts/[slug]/");

        return getSmartMobilityStations().map((station) => ({
            path: `/smart-mobility/mts/${station.slug}/`,
            sourceFile,
        }));
    },
    "/future-civilization/[eraSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/future-civilization/[eraSlug]/");

        return getFutureRoadmapEras().map(({era}) => ({
            path: `/future-civilization/${era.slug}/`,
            sourceFile,
        }));
    },
    "/future-civilization/[eraSlug]/[slug]/": async () => {
        const sourceFile = getSourceFileForRoute("/future-civilization/[eraSlug]/[slug]/");

        return getFutureRoadmapItemStaticParams().map(({eraSlug, slug}) => ({
            path: `/future-civilization/${eraSlug}/${slug}/`,
            sourceFile,
        }));
    },
    "/industries/[nodeSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/industries/[nodeSlug]/");

        return getIndustryDirectoryData().map((item) => ({
            path: item.url,
            sourceFile,
        }));
    },
    "/business-opportunities/[nodeSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/business-opportunities/[nodeSlug]/");

        return getBusinessOpportunityDirectoryData().map((item) => ({
            path: item.url,
            sourceFile,
        }));
    },
    "/industries/[nodeSlug]/[subNodeSlug]/[problemSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/industries/[nodeSlug]/[subNodeSlug]/[problemSlug]/");

        return getCgdPageIndex()
            .filter((page) => page.pageType === "industry-problem")
            .map((page) => ({
                path: page.route,
                sourceFile,
            }));
    },
    "/business-opportunities/[nodeSlug]/[businessSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/business-opportunities/[nodeSlug]/[businessSlug]/");

        return getCgdPageIndex()
            .filter((page) => page.pageType === "business-opportunity")
            .map((page) => ({
                path: page.route,
                sourceFile,
            }));
    },
    "/future-solutions/[eraSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/future-solutions/[eraSlug]/");

        return getFutureSolutionEraSummaries().map((era) => ({
            path: era.url,
            sourceFile,
        }));
    },
    "/future-solutions/[eraSlug]/[eraItemSlug]/": async () => {
        const sourceFile = getSourceFileForRoute("/future-solutions/[eraSlug]/[eraItemSlug]/");

        return getFutureSolutionStaticParams().map((item) => ({
            path: `/future-solutions/${item.eraSlug}/${item.eraItemSlug}/`,
            sourceFile,
        }));
    },
    "/style/[slug]/": async () => {
        const sourceFile = getSourceFileForRoute("/style/[slug]/");

        return getPlatformOutfitSets().map((outfitSet) => ({
            path: `/style/${outfitSet.id}/`,
            sourceFile,
        }));
    },
};

function getUniqueSlugs(items: Array<{ slug?: string }>): string[] {
    return Array.from(new Set(items.map((item) => item.slug).filter(Boolean))) as string[];
}

function normalizeRoutePath(routePath: string): string {
    if (!routePath || routePath === "/") {
        return "/";
    }

    return routePath.startsWith("/") ? routePath : `/${routePath}`;
}

function ensureTrailingSlash(routePath: string): string {
    const normalizedPath = normalizeRoutePath(routePath);

    return normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`;
}

function routeSourceToPath(source: string): string | null {
    if (source.includes(":path*")) {
        return null;
    }

    return ensureTrailingSlash(source.replace(/^\/:lang/, "") || "/");
}

function getRedirectedRoutePaths(): Set<string> {
    return new Set(
        getLegacyPublicRedirects()
            .map((redirect) => routeSourceToPath(redirect.source))
            .filter(Boolean) as string[],
    );
}

function routePathFromPageFile(pageFile: string): string {
    const relativeDirectory = path.relative(LOCALE_APP_DIR, path.dirname(pageFile));
    const segments = relativeDirectory
        .split(path.sep)
        .filter(Boolean)
        .filter((segment) => !ROUTE_GROUP_PATTERN.test(segment));

    return ensureTrailingSlash(segments.join("/"));
}

function hasDynamicSegment(routePath: string): boolean {
    return routePath
        .split("/")
        .filter(Boolean)
        .some((segment) => DYNAMIC_SEGMENT_PATTERN.test(segment));
}

function collectPageFiles(directory: string): string[] {
    if (!fs.existsSync(directory)) {
        return [];
    }

    const entries = fs.readdirSync(directory, {withFileTypes: true});
    const pageFiles: string[] = [];

    for (const entry of entries) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            pageFiles.push(...collectPageFiles(entryPath));
            continue;
        }

        if (entry.isFile() && entry.name === PAGE_FILE_NAME) {
            pageFiles.push(entryPath);
        }
    }

    return pageFiles;
}

function getSourceFileForRoute(routePath: string): string | undefined {
    const normalizedRoutePath = ensureTrailingSlash(routePath);

    return collectPageFiles(LOCALE_APP_DIR).find((pageFile) => {
        return routePathFromPageFile(pageFile) === normalizedRoutePath;
    });
}

async function getDiscoveredRoutes(): Promise<SitemapRoute[]> {
    const redirectedPaths = getRedirectedRoutePaths();
    const routes: SitemapRoute[] = [];

    for (const pageFile of collectPageFiles(LOCALE_APP_DIR)) {
        const routePath = routePathFromPageFile(pageFile);

        if (
            hasDynamicSegment(routePath) ||
            NON_INDEXABLE_STATIC_PATHS.has(routePath) ||
            redirectedPaths.has(routePath)
        ) {
            continue;
        }

        routes.push({
            path: routePath,
            sourceFile: pageFile,
        });
    }

    for (const resolver of Object.values(DYNAMIC_ROUTE_RESOLVERS)) {
        routes.push(...await resolver());
    }

    return dedupeRoutes(routes).sort((first, second) => first.path.localeCompare(second.path));
}

function dedupeRoutes(routes: SitemapRoute[]): SitemapRoute[] {
    const routeMap = new Map<string, SitemapRoute>();

    for (const route of routes) {
        routeMap.set(route.path, route);
    }

    return Array.from(routeMap.values());
}

function getLastModified(sourceFile?: string): Date | undefined {
    if (!sourceFile || !fs.existsSync(sourceFile)) {
        return undefined;
    }

    return fs.statSync(sourceFile).mtime;
}

function getLocalizedUrl(locale: string, routePath: string): string {
    return `${SITE_URL}/${locale}${routePath}`;
}

export async function getLocalizedSitemapEntries(locales: readonly string[]): Promise<MetadataRoute.Sitemap> {
    const routes = await getDiscoveredRoutes();
    const generatedAt = new Date();

    return routes.flatMap((route) => {
        const lastModified = getLastModified(route.sourceFile) ?? generatedAt;

        return locales.map((locale) => ({
            url: getLocalizedUrl(locale, route.path),
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        }));
    });
}
