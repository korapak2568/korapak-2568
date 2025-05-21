// src/app/[locale]/(tailwind)/layout.tsx

import "@/styles/tailwind.scss";

import React from "react";
import {headers} from "next/headers";

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const headers15 = await headers();
    const lang: string = headers15.get('x-locale') || 'en';

    return (
        <html lang={lang}>
        <body>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}