// src/proxy.ts

import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {DEFAULT_LOCALE, LOCALES} from "@/lib/SiteUrlLocales";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;
const RETIRED_LOCALES = new Set(['da', 'fi', 'nl']);
const PUBLIC_PATH_PREFIXES = [
    '/_next',
    '/api',
    '/sitemap',
    '/images',
    '/images-ai',
    '/images-platform',
    '/images-opengraph',
    '/future-roadmap',
    '/smart-city',
    '/smart-food',
    '/smart-mobility',
    '/chorn-images',
    '/internal-images',
    '/contracts',
    '/fonts',
];

function shouldBypassLocaleRouting(pathname: string) {
    return (
        PUBLIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
        PUBLIC_FILE_PATTERN.test(pathname) ||
        pathname === '/googleaa85449beb5ca13c.html' ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt'
    );
}

function getDefaultLocaleRedirectPath(pathname: string, locale: string) {
    if (pathname === '/') {
        return `/${DEFAULT_LOCALE}/`;
    }

    if (RETIRED_LOCALES.has(locale)) {
        const remainder = pathname.split('/').slice(2).join('/');
        return `/${DEFAULT_LOCALE}/${remainder}`.replace(/\/+$/, '/') || `/${DEFAULT_LOCALE}/`;
    }

    return `/${DEFAULT_LOCALE}${pathname}`;
}

export function proxy(req: NextRequest) {
    const {pathname} = req.nextUrl;
    const cookie_consent: string = req.cookies.get("cookie_consent")?.value || 'false';

    if (shouldBypassLocaleRouting(pathname)) {
        return NextResponse.next();
    }

    const pathnameParts = pathname.split('/');
    const locale = pathnameParts[1];

    if (pathname === '/' || !LOCALES.includes(locale as (typeof LOCALES)[number])) {
        const url = new URL(getDefaultLocaleRedirectPath(pathname, locale), req.url);
        return NextResponse.redirect(url);
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-cookie-consent', cookie_consent);
    requestHeaders.set('x-locale', locale);
    requestHeaders.set('x-pathname', pathname);

    const res = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    res.headers.set('x-cookie-consent', cookie_consent);
    res.headers.set('x-locale', locale);
    res.headers.set('x-pathname', pathname);
    return res;
}

export const config = {
    matcher: ['/:path*'],
};
