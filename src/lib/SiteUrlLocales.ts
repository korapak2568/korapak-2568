export const SITE_URL = "https://www.chornplanet.com";

export const DEFAULT_LOCALE = "en";

export const LOCALES = [
    "en",
    "th",
    "zh",
    "ja",
    "ko",
    "id",
    "de",
    "fr",
    "ru",
    "vi",
] as const;

export type SiteLocale = (typeof LOCALES)[number];
