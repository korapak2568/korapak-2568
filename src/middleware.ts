// src/middleware.ts

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

const locales = ['en', 'th', 'fr', 'ja', 'vi', 'zh', 'de', 'nl', 'na']; // Supported locales
const defaultLocale = 'en'; // Redirect to English by default

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    // Extract the locale from the pathname
    const pathnameParts = pathname.split('/');
    const locale = pathnameParts[1];
    const pathAfterLocale = pathnameParts.slice(2).join('/');

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

    // Redirect root ("/") to the default locale ("/en")
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    // Redirect root ("/") to the default locale ("/en")
    if (!locales.includes(locale)) {
        const newPath = pathAfterLocale
            ? `/${defaultLocale}/${pathAfterLocale}`
            : `/${defaultLocale}`;
        return NextResponse.redirect(new URL(newPath, request.url));
    }

    return NextResponse.next();
}

// Apply middleware to all paths
export const config = {
    matcher: '/:path*',
};