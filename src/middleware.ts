// src/middleware.ts

import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {LocaleMain} from "@/lib/UrlMain";
import {setXAuthToken, unauthorized} from "@/utils/authorize";

const defaultLocale = 'en';

export function middleware(req: NextRequest) {
    const {pathname} = req.nextUrl;
    const cookie_consent: string = req.cookies.get("cookie_consent")?.value || 'false';


    // Skip internal-images requests
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/images') ||
        pathname.startsWith('/images-ai') ||
        pathname.startsWith('/chorn-images') ||
        pathname.startsWith('/internal-images') ||
        pathname.startsWith('/contracts') ||
        pathname.startsWith('/fonts') ||
        pathname.startsWith('/api/sitemap') ||
        pathname.startsWith('/api/login') ||
        pathname.startsWith('/api/line') ||
        pathname === '/favicon.ico' ||
        pathname === '/robots.txt'
    ) {
        return NextResponse.next();
    }

    // API protected
    if (pathname.startsWith('/api/')) {
        const token = setXAuthToken(req)
        if (!token.isToken) return unauthorized()

        const newRequestHeaders = new Headers(req.headers);
        newRequestHeaders.set(token.name, token.value!);

        return NextResponse.next({
            request: {
                headers: newRequestHeaders,
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
        const url = new URL(newPathName, req.url);
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
        '/api/:path*',
    ],
};