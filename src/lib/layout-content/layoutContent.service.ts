import fs from "node:fs";
import path from "node:path";
import {unstable_cache} from "next/cache";
import {
    LayoutContentPayload,
    LayoutContentResponse,
    normalizeLayoutContentLocale,
    PartialLayoutContentPayload,
} from "@/core/domain/layout-content.entity";
import {IFooter} from "@/lib/model/IFooter";
import {LOCALES} from "@/lib/SiteUrlLocales";

const LAYOUT_CONTENT_LIST_TAG = 'layout-content';
const LAYOUT_CONTENT_CACHE_VERSION = '2026-06-28-json-layout-source';
const NAVIGATION_CONTENT_DIR = path.join(process.cwd(), 'data', 'layout', 'navigation');
const FOOTER_CONTENT_DIR = path.join(process.cwd(), 'data', 'layout', 'footer');
const REQUIRED_NAVIGATION_FIELDS = [
    'navbar',
    'consent',
    'languageOptions',
] as const;
const REQUIRED_FOOTER_FIELDS = [
    'title',
    'link',
    'www',
    'description',
    'social',
    'important',
    'project',
    'smartCity',
    'connect',
] as const;

type NavigationContentPayload = Omit<LayoutContentPayload, 'footer'>;

function getLayoutContentTag(locale: string) {
    return `layout-content:${LAYOUT_CONTENT_CACHE_VERSION}:${normalizeLayoutContentLocale(locale)}`;
}

function getNavigationContentPath(locale: string): string {
    return path.join(NAVIGATION_CONTENT_DIR, `${locale}.json`);
}

function getFooterContentPath(locale: string): string {
    return path.join(FOOTER_CONTENT_DIR, `${locale}.json`);
}

function cloneJsonContent<T>(content: T): T {
    return JSON.parse(JSON.stringify(content)) as T;
}

function assertCompleteNavigationContent(
    locale: string,
    content: NavigationContentPayload | null
): NavigationContentPayload {
    if (!content) {
        throw new Error(`Layout navigation content not found for locale "${locale}"`);
    }

    const missingFields = REQUIRED_NAVIGATION_FIELDS.filter((field) => content[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Layout navigation content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return cloneJsonContent({
        ...content,
        locale,
    });
}

function assertCompleteFooterContent(locale: string, content: IFooter | null): IFooter {
    if (!content) {
        throw new Error(`Layout footer content not found for locale "${locale}"`);
    }

    const missingFields = REQUIRED_FOOTER_FIELDS.filter((field) => content[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Layout footer content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return cloneJsonContent(content);
}

function loadJsonWithFallback<T>(
    locale: string,
    getContentPath: (locale: string) => string,
    assertComplete: (locale: string, content: T | null) => T,
    missingMessage: (path: string) => string,
): T {
    const normalizedLocale = normalizeLayoutContentLocale(locale);
    const contentPath = getContentPath(normalizedLocale);

    if (!fs.existsSync(contentPath)) {
        if (normalizedLocale !== 'en') {
            return loadJsonWithFallback('en', getContentPath, assertComplete, missingMessage);
        }

        throw new Error(missingMessage(contentPath));
    }

    const content = JSON.parse(fs.readFileSync(contentPath, 'utf8')) as T;

    return assertComplete(normalizedLocale, content);
}

function loadNavigationContent(locale: string): NavigationContentPayload {
    return loadJsonWithFallback(
        locale,
        getNavigationContentPath,
        assertCompleteNavigationContent,
        (contentPath) => `Layout navigation JSON does not exist: ${contentPath}`,
    );
}

function loadFooterContent(locale: string): IFooter {
    return loadJsonWithFallback(
        locale,
        getFooterContentPath,
        assertCompleteFooterContent,
        (contentPath) => `Layout footer JSON does not exist: ${contentPath}`,
    );
}

function loadLayoutContent(locale: string): LayoutContentPayload {
    const normalizedLocale = normalizeLayoutContentLocale(locale);
    const navigationContent = loadNavigationContent(normalizedLocale);
    const footer = loadFooterContent(normalizedLocale);

    return {
        ...navigationContent,
        footer,
    };
}

export async function getLayoutContent(locale: string): Promise<LayoutContentPayload> {
    const normalizedLocale = normalizeLayoutContentLocale(locale);

    if (process.env.NODE_ENV !== 'production') {
        return loadLayoutContent(normalizedLocale);
    }

    const getCachedContent = unstable_cache(
        async () => loadLayoutContent(normalizedLocale),
        ['layout-content-by-locale', LAYOUT_CONTENT_CACHE_VERSION, normalizedLocale],
        {
            revalidate: 3600,
            tags: [LAYOUT_CONTENT_LIST_TAG, getLayoutContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getLayoutContentForPublicPage(locale: string): Promise<LayoutContentPayload> {
    return getLayoutContent(locale);
}

export async function getAllLayoutContent(): Promise<LayoutContentResponse[]> {
    return Promise.all(
        LOCALES.map(async (locale) => {
            const content = await getLayoutContent(locale);

            return {
                ...content,
                id: locale,
            };
        })
    );
}

export async function upsertLayoutContent(
    content: PartialLayoutContentPayload
): Promise<LayoutContentResponse> {
    throw new Error(
        `Layout content is managed by data/layout/navigation/${normalizeLayoutContentLocale(content.locale)}.json and data/layout/footer/${normalizeLayoutContentLocale(content.locale)}.json`
    );
}

export async function deleteLayoutContent(locale: string): Promise<void> {
    throw new Error(
        `Layout content is managed by data/layout/navigation/${normalizeLayoutContentLocale(locale)}.json and data/layout/footer/${normalizeLayoutContentLocale(locale)}.json`
    );
}
