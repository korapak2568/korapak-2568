// src/middleware.ts

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {LocaleMain} from "@/lib/UrlMain";

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;
    const cookie_consent: string = request.cookies.get("cookie_consent")?.value || 'false';

    // Skip internal-images requests
    if (
        pathname.startsWith('/_next') ||            // Next.js internal-images assets
        pathname.startsWith('/api') ||              // Custom static images
        pathname.startsWith('/images') ||           // Custom static images
        pathname.startsWith('/images-ai') ||        // Custom static images
        pathname.startsWith('/chorn-images') ||     // Custom static images
        pathname.startsWith('/internal-images') ||  // Custom static images
        pathname.startsWith('/contracts') ||        // Custom static images
        pathname.startsWith('/fonts') ||            // Custom static images
        pathname.startsWith('/sitemap') ||          // Sitemaps (e.g., /sitemap.xml, /sitemap-0.xml)
        pathname === '/favicon.ico' ||                          // Favicon
        pathname === '/robots.txt'                              // Robots.txt for SEO
    ) {
        return NextResponse.next();
    }

    // Extract the locale from the pathname
    const pathnameParts = pathname.split('/');
    const locale = pathnameParts[1];                    // en

    // Redirect root ("/") to the default locale ("/en")
    if (
        pathname === '/' ||
        !LocaleMain.includes(locale)
    ) {
        const newPathName = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
        const url = new URL(newPathName, request.url);
        return NextResponse.redirect(url);
    }

    // Create a response and pass the locale via a custom header
    const res = NextResponse.next();
    res.headers.set('x-cookie-consent', cookie_consent);
    res.headers.set('x-locale', locale);
    res.headers.set('x-pathname', pathname);
    return res
}

// Apply middleware to all paths
export const config = {
    matcher: ['/', '/(th|en|fr|ja|vi|zh|de|nl|da|fi|ko)/:path*'],
};