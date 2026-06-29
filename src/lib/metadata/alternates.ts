import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

function normalizeAlternateLocale(locale?: string): SiteLocale {
  return LOCALES.includes(locale as SiteLocale)
    ? (locale as SiteLocale)
    : DEFAULT_LOCALE;
}

export function getLocalizedAlternates(
  targetPath: string,
  activeLocale?: string,
): NonNullable<Metadata["alternates"]> {
  const normalizedPath = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;
  const canonicalLocale = normalizeAlternateLocale(activeLocale);
  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, `/${locale}${normalizedPath}`]),
  );

  return {
    canonical: `/${canonicalLocale}${normalizedPath}`,
    languages: {
      ...languages,
      "x-default": `/${DEFAULT_LOCALE}${normalizedPath}`,
    },
  };
}

export function withLocalizedAlternates<TMetadata extends Metadata>(
  metadata: TMetadata,
  targetPath: string,
  activeLocale?: string,
): TMetadata {
  return {
    ...metadata,
    alternates: getLocalizedAlternates(targetPath, activeLocale),
  };
}
