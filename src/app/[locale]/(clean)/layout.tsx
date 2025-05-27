// src/app/[locale]/(empty-layout)/layout.tsx

import "@/styles/globals.scss"

import {headers} from "next/headers";

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const headers15 = await headers();
    const lang: string = headers15.get('x-locale') || 'en';
    const isCookieConsent: boolean = headers15.get('x-cookie-consent') != 'false';

    if (typeof window !== 'undefined') {
        return;
    }

    return (
        <html lang={lang}>
        <body>
        {children}
        </body>
        </html>
    );
}