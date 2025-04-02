// src/app/api/sitemap-chorn/route.ts

import {ChornLocales, ChornUrls} from "@/lib/Structure";
import {NextResponse} from "next/server";

export async function GET() {
    const baseUrl = "https://www.chorn.in.th";
    const lastModified = new Date().toISOString().split('T')[0];
    const localizedUrls = ChornUrls.flatMap(url => {

            if (url.includes("/technical-expertise/")) {
                return ChornLocales.map(locale =>
                    `<url>
                        <loc>${baseUrl}/${locale}${url}</loc>
                        <lastmod>${lastModified}</lastmod>
                        <priority>0.8</priority>
                    </url>`)
            }

            return ChornLocales.map(locale =>
                `<url>
                    <loc>${baseUrl}/${locale}${url}</loc>
                    <lastmod>${lastModified}</lastmod>
                    <priority>0.8</priority>
                </url>`)
        }
    )

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${localizedUrls.join("\n")}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}