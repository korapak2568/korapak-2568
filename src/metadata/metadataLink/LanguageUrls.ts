import {LOCALES, SITE_URL} from "@/lib/SiteUrlLocales";

function ensureTrailingSlash(path: string): string {
    return path.endsWith("/") ? path : `${path}/`;
}

const LanguageUrl = (lang: string, canonical: string) => {
    const normalizedCanonical = canonical === "/" ? "/" : ensureTrailingSlash(canonical);

    return `${SITE_URL}/${lang}${normalizedCanonical}`;
}

const LanguageUrls = (canonical: string): Record<string, string> => {
    return Object.fromEntries(
        LOCALES.map((locale) => [locale, LanguageUrl(locale, canonical)]),
    );
}

export default LanguageUrls