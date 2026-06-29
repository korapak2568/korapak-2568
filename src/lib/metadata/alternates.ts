import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/SiteUrlLocales";

export function getLocalizedAlternates(
  targetPath: string,
): NonNullable<Metadata["alternates"]> {
  const normalizedPath = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;
  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, `/${locale}${normalizedPath}`]),
  );

  return {
    canonical: `/${DEFAULT_LOCALE}${normalizedPath}`,
    languages: {
      ...languages,
      "x-default": `/${DEFAULT_LOCALE}${normalizedPath}`,
    },
  };
}

export function withLocalizedAlternates<TMetadata extends Metadata>(
  metadata: TMetadata,
  targetPath: string,
): TMetadata {
  return {
    ...metadata,
    alternates: getLocalizedAlternates(targetPath),
  };
}