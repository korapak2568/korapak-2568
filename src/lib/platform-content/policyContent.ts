import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type { IPolicy } from "@/lib/model/IPolicy";
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from "@/lib/SiteUrlLocales";

export const PLATFORM_POLICY_TYPES = [
  "privacy-policy",
  "term-of-service",
  "workplace-policy",
] as const;

export type PlatformPolicyType = (typeof PLATFORM_POLICY_TYPES)[number];
export type PlatformPolicyContent = IPolicy;

const contentCache = new Map<string, Promise<PlatformPolicyContent>>();

function resolvePolicyLocale(locale?: string | null): SiteLocale {
  return LOCALES.includes(locale as SiteLocale)
    ? (locale as SiteLocale)
    : DEFAULT_LOCALE;
}

export function isPlatformPolicyType(value: string | null): value is PlatformPolicyType {
  return PLATFORM_POLICY_TYPES.includes(value as PlatformPolicyType);
}

export async function getPlatformPolicyContent(
  policyType: PlatformPolicyType,
  locale: string,
): Promise<PlatformPolicyContent> {
  const resolvedLocale = resolvePolicyLocale(locale);
  const objectKey = `/policy/${policyType}/${resolvedLocale}.json`;
  const cachedContent = contentCache.get(objectKey);

  if (cachedContent) {
    return cachedContent;
  }

  const contentPromise = fetchData<PlatformPolicyContent>(objectKey);
  contentCache.set(objectKey, contentPromise);

  return contentPromise;
}
