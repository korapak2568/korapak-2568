// src/app/(food)/layout.tsx

import "@/food/style/globals.scss"
import "@/food/style/tailwind.scss"
import React from "react";
import ViewportSwitcher from "@/food/component/layouts/ViewportSwitcher";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ViewportSwitcher>
            {children}
        </ViewportSwitcher>
        </body>
        </html>
    )
}