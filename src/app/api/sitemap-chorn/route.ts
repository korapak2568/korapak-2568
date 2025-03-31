// src/app/api/sitemap-chorn/route.ts

import {NextResponse} from "next/server";
import {chornLocales, chornUrls} from "@/lib/utils";

export async function GET() {
    const baseUrl = "https://www.chorn.in.th";
    const lastModified = new Date().toISOString().split('T')[0];
    const localizedUrls = chornUrls.flatMap(url => chornLocales.map(locale =>
        `<url>
            <loc>${baseUrl}/${locale}${url}</loc>
            <lastmod>lastModified: ${lastModified}</lastmod>
            <priority>0.8</priority>
        </url>`));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${localizedUrls.join("\n")}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}