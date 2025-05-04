// src/middleware.ts

import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {LocaleMain} from "@/lib/UrlMain";

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;
    const cookie_consent: string = request.cookies.get("cookie_consent")?.value || 'false';


    // Skip internal-images requests
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/images-ai') ||
        pathname.startsWith('/chorn-images') ||
        pathname.startsWith('/internal-images') ||
        pathname.startsWith('/contracts') ||
        pathname.startsWith('/fonts') ||
        pathname.startsWith('/sitemap') ||
        pathname.startsWith('/api/sitemap') ||
        pathname.startsWith('/api/login') ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt'
    ) {
        return NextResponse.next();
    }

    // API protected
    // Strict format pathname.startsWith('/api') and matcher '/api/:path*'
    if (pathname.startsWith('/api')) {
        const authHeader = request.headers.get('Authorization') || '';
        const headers: string[] = authHeader?.split(' ')

        if (!headers || !headers.includes('Bearer')) {
            return NextResponse.json({status: 401, message: "Unauthorized"}, {status: 401});
        }

        const token = headers[1]
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-auth-token', token);

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            }
        })
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
    matcher: [
        '/',
        '/(th|en|fr|ja|vi|zh|de|nl|da|fi|ko)/:path*',
        '/api/:path*'
    ],
};