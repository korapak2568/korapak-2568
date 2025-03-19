// src/middleware.ts

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {locales} from "@/lib/utils";

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    // Skip internal requests
    if (
        pathname.startsWith('/_next') ||            // Next.js internal assets
        pathname.startsWith('/api') ||            // Custom static images
        pathname.startsWith('/brand') ||            // Custom static images
        pathname.startsWith('/chorn-images') ||     // Custom static images
        pathname.startsWith('/contracts') ||        // Custom static images
        pathname.startsWith('/fonts') ||            // Custom static images
        pathname.startsWith('/images') ||           // Custom static images
        pathname.startsWith('/images-ai') ||        // Custom static images
        pathname.startsWith('/sitemap') ||          // Sitemaps (e.g., /sitemap.xml, /sitemap-0.xml)
        pathname === '/favicon.ico' ||              // Favicon
        pathname === '/robots.txt'                  // Robots.txt for SEO
    ) {
        return NextResponse.next();
    }

    // Extract the locale from the pathname
    const pathnameParts = pathname.split('/');
    const locale = pathnameParts[1];        // en
    const pathAfterLocale = pathnameParts.slice(2).join('/');

    // Redirect root ("/") to the default locale ("/en")
    if (
        pathname === '/' ||
        !locales.includes(locale)
    ) {
        return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    // Create a response and pass the locale via a custom header
    const res = NextResponse.next();
    res.headers.set('x-locale', locale);
    return res

    // return NextResponse.next();
}

// Apply middleware to all paths
export const config = {
    matcher: ['/', '/(th|en|fr|ja|vi|zh|de|nl|na)/:path*'],
};