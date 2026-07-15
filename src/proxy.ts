// src/proxy.ts

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/SiteUrlLocales";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;
const RETIRED_LOCALES = new Set(["da", "fi", "nl"]);
const LEGACY_PATH_REDIRECTS = new Map<string, string>([
  ["/&/", `/${DEFAULT_LOCALE}/`],
  ["/about-chorn/", `/${DEFAULT_LOCALE}/about/`],
  ["/contact-chorn/", `/${DEFAULT_LOCALE}/contact/`],
  ["/ai-integration/", `/${DEFAULT_LOCALE}/ai-companions/fah/`],
  ["/smart-food-ai/", `/${DEFAULT_LOCALE}/smart-food/`],
  ["/ai-luxury/", `/${DEFAULT_LOCALE}/luxury/`],
  ["/ai-solutions/", `/${DEFAULT_LOCALE}/ai-companions/`],
  ["/e-commerce-development/", `/${DEFAULT_LOCALE}/technical-expertise/full-stack-developer/`],
  ["/chorn-services/", `/${DEFAULT_LOCALE}/technical-expertise/full-stack-developer/`],
  ["/world", `/${DEFAULT_LOCALE}/future-civilization/`],
  ["/world/", `/${DEFAULT_LOCALE}/future-civilization/`],
  ["/publicfi", `/${DEFAULT_LOCALE}/`],
  ["/publicfi/", `/${DEFAULT_LOCALE}/`],
  ["/smart-mobility/chiang-mai", `/${DEFAULT_LOCALE}/smart-mobility/chiang-mai/`],
  ["/smart-mobility/chiang-mai/", `/${DEFAULT_LOCALE}/smart-mobility/chiang-mai/`],
]);

const LEGACY_LOCALIZED_PATH_REDIRECTS = new Map<string, string>([
  ["404", ""],
  ["about-chorn", "about"],
  ["contact-chorn", "contact"],
  ["ai-integration", "ai-companions/fah"],
  ["smart-food-ai", "smart-food"],
  ["ai-luxury", "luxury"],
  ["ai-solutions", "ai-companions"],
  ["e-commerce-development", "technical-expertise/full-stack-developer"],
  ["outfit", "style"],
  ["technical-expertise/web-development", "technology"],
  ["technical-expertise/cloud-devops", "technology"],
  ["technical-expertise/cloud-devops/appium", "technology"],
  ["technical-expertise/cloud-devops/docker", "technology"],
  ["technical-expertise/cloud-devops/github", "technology"],
  ["technical-expertise/cloud-devops/gitlab", "technology"],
  ["technical-expertise/cloud-devops/jenkins", "technology"],
  ["technical-expertise/cloud-devops/kubernetes", "technology"],
  ["technical-expertise/cloud-devops/postman", "technology"],
  ["technical-expertise/cloud-devops/selenium", "technology"],
  ["technical-expertise/cloud-devops/soapui", "technology"],
  ["technical-expertise/cloud-infrastructure-systems-architecture", "technology"],
  ["technical-expertise/mobile-development", "technology"],
  ["technical-expertise/web3-blockchain-smart-contract-development", "technology"],
  ["technical-expertise/front-end-developer/angular-developer", "technical-expertise/front-end-developer"],
  ["technical-expertise/front-end-developer/css3-developer", "technical-expertise/front-end-developer"],
  ["technical-expertise/front-end-developer/html5-developer", "technical-expertise/front-end-developer"],
  ["technical-expertise/front-end-developer/javascript-developer", "technical-expertise/front-end-developer"],
  ["technical-expertise/front-end-developer/vue-developer", "technical-expertise/front-end-developer"],
  ["technical-expertise/full-stack-developer/dotnetcore-developer", "technical-expertise/full-stack-developer"],
  ["smart-city/city-systems/efficiency-and-rhythm", "smart-city/city-systems-efficiency-and-rhythm"],
  ["smart-city/editorial/system-before-technology", "smart-city/editorial-system-before-technology"],
  ["smart-city/global-patterns/urban-logistics", "smart-city/global-patterns-urban-logistics"],
  ["smart-city/system-explainers-mobility-coordination", "smart-city"],
  ["smart-city/system-explainers-public-space-orchestration", "smart-city"],
  ["smart-city/chiang-mai/life-beneath-the-route", "smart-city"],
  ["smart-city/chiang-mai/plaza-that-connects-the-hub", "smart-city"],
  ["smart-city/chiang-mai/vertiport-reflected-in-water", "smart-city"],
  ["smart-city/chiang-mai/when-human-flow-aligns-with-system-flow", "smart-city"],
]);
const PUBLIC_PATH_PREFIXES = [
  "/_next",
  "/api",
  "/sitemap",
  "/images",
  "/images-ai",
  "/images-platform",
  "/images-opengraph",
  "/open_graph",
  "/future-roadmap",
  "/chorn-images",
  "/internal-images",
  "/contracts",
  "/fonts",
];

function redirectToPath(req: NextRequest, path: string) {
  const url = req.nextUrl.clone();
  url.pathname = path;
  url.search = "";
  return NextResponse.redirect(url, 308);
}

function getLegacyRedirectPath(remainder: string, locale: string) {
  const normalizedRemainder = remainder.replace(/^\/+|\/+$/g, "");
  const target = LEGACY_LOCALIZED_PATH_REDIRECTS.get(normalizedRemainder);

  return target === undefined ? null : `/${locale}/${target ? `${target}/` : ""}`;
}

function getLegacyLocalizedRedirectPath(pathname: string, locale: string) {
  const remainder = pathname.split("/").slice(2).join("/");

  return getLegacyRedirectPath(remainder, locale);
}

function shouldBypassLocaleRouting(pathname: string) {
  return (
    PUBLIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    PUBLIC_FILE_PATTERN.test(pathname) ||
    pathname === "/googleaa85449beb5ca13c.html" ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  );
}

function getDefaultLocaleRedirectPath(pathname: string, locale: string) {
  if (pathname === "/") {
    return `/${DEFAULT_LOCALE}/`;
  }

  if (RETIRED_LOCALES.has(locale)) {
    const remainder = pathname.split("/").slice(2).join("/");
    return (
      `/${DEFAULT_LOCALE}/${remainder}`.replace(/\/+$/, "/") ||
      `/${DEFAULT_LOCALE}/`
    );
  }

  return `/${DEFAULT_LOCALE}${pathname}`;
}

function isNextRscRequest(req: NextRequest) {
  return (
    req.headers.get("rsc") === "1" ||
    req.headers.has("next-router-state-tree") ||
    req.headers.has("next-router-prefetch")
  );
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host")?.toLowerCase();

  if (host === "chornplanet.com") {
    const url = req.nextUrl.clone();
    url.hostname = "www.chornplanet.com";
    return NextResponse.redirect(url, 308);
  }

  if ((req.nextUrl.searchParams.has("_rsc") || req.url.includes("_rsc=")) && !isNextRscRequest(req)) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("_rsc");
    return NextResponse.redirect(url, 308);
  }
  const legacyRedirectPath = LEGACY_PATH_REDIRECTS.get(pathname);

  if (legacyRedirectPath) {
    return redirectToPath(req, legacyRedirectPath);
  }

  if (pathname.startsWith("/zh-cn/")) {
    return redirectToPath(req, pathname.replace(/^\/zh-cn\//, "/zh/"));
  }
  if (pathname.startsWith("/content/future-roadmap/")) {
    return redirectToPath(req, `/${DEFAULT_LOCALE}/future-civilization/`);
  }

  const unlocalizedLegacyRedirectPath = getLegacyRedirectPath(pathname, DEFAULT_LOCALE);

  if (unlocalizedLegacyRedirectPath) {
    return redirectToPath(req, unlocalizedLegacyRedirectPath);
  }
  const cookie_consent: string =
    req.cookies.get("cookie_consent")?.value || "false";

  if (shouldBypassLocaleRouting(pathname)) {
    return NextResponse.next();
  }

  const pathnameParts = pathname.split("/");
  const locale = pathnameParts[1];

  const redirectLocale = RETIRED_LOCALES.has(locale) ? DEFAULT_LOCALE : locale;

  if (
    LOCALES.includes(locale as (typeof LOCALES)[number]) ||
    RETIRED_LOCALES.has(locale)
  ) {
    const localizedRedirectPath = getLegacyLocalizedRedirectPath(pathname, redirectLocale);

    if (localizedRedirectPath) {
      return redirectToPath(req, localizedRedirectPath);
    }
  }

  if (
    pathname === "/" ||
    !LOCALES.includes(locale as (typeof LOCALES)[number])
  ) {
    const url = new URL(
      getDefaultLocaleRedirectPath(pathname, locale),
      req.url,
    );
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-cookie-consent", cookie_consent);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", pathname);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  res.headers.set("x-cookie-consent", cookie_consent);
  res.headers.set("x-locale", locale);
  res.headers.set("x-pathname", pathname);
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
