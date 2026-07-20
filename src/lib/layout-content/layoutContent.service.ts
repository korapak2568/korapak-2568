import fs from "node:fs";
import path from "node:path";
import {unstable_cache} from "next/cache";
import {
    LayoutContentPayload,    normalizeLayoutContentLocale,} from "@/core/domain/layout-content.entity";
import {IFooter} from "@/lib/model/IFooter";
import {ILanguageOption} from "@/lib/model/ILanguage";

const LAYOUT_CONTENT_LIST_TAG = 'layout-content';
const LAYOUT_CONTENT_CACHE_VERSION = '2026-06-28-json-layout-source';
const NAVIGATION_CONTENT_DIR = path.join(process.cwd(), 'data', 'layout', 'navigation');
const FOOTER_CONTENT_DIR = path.join(process.cwd(), 'data', 'layout', 'footer');
const LANGUAGE_OPTIONS_CONTENT_PATH = path.join(process.cwd(), 'data', 'layout', 'languages', 'languages.json');
const REQUIRED_NAVIGATION_FIELDS = [
    'navbar',
    'consent',
] as const;
const REQUIRED_FOOTER_FIELDS = [
    'title',
    'link',
    'www',
    'description',
    'social',
    'important',
    'connect',
] as const;

type NavigationContentPayload = Omit<LayoutContentPayload, 'footer' | 'languageOptions'>;

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
    const hasProjects = content.projects !== undefined || content.project !== undefined;
    const hasPlatform = content.platform !== undefined || content.smartCity !== undefined;

    if (missingFields.length > 0 || !hasProjects || !hasPlatform) {
        const missingFooterFields = [
            ...missingFields,
            ...(hasProjects ? [] : ['projects']),
            ...(hasPlatform ? [] : ['platform']),
        ];

        throw new Error(
            `Layout footer content is incomplete for locale "${locale}". Missing fields: ${missingFooterFields.join(', ')}`
        );
    }

    return cloneJsonContent(content);
}

function assertCompleteLanguageOptionsContent(content: ILanguageOption[] | null): ILanguageOption[] {
    if (!Array.isArray(content) || content.length === 0) {
        throw new Error('Layout language options content is empty or invalid');
    }

    const incompleteOptions = content.filter(
        (option) => !option.language || !option.label || !option.locale,
    );

    if (incompleteOptions.length > 0) {
        throw new Error('Layout language options content has incomplete records');
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

function loadLanguageOptionsContent(): ILanguageOption[] {
    if (!fs.existsSync(LANGUAGE_OPTIONS_CONTENT_PATH)) {
        throw new Error(`Layout language options JSON does not exist: ${LANGUAGE_OPTIONS_CONTENT_PATH}`);
    }

    const content = JSON.parse(fs.readFileSync(LANGUAGE_OPTIONS_CONTENT_PATH, 'utf8')) as ILanguageOption[];

    return assertCompleteLanguageOptionsContent(content);
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
    const languageOptions = loadLanguageOptionsContent();

    return {
        ...navigationContent,
        footer,
        languageOptions,
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
