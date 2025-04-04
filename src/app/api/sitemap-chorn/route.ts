// src/app/api/sitemap-chorn/route.ts

import {ChornLocales, ChornUrls} from "@/lib/Structure";
import {NextResponse} from "next/server";
import {SitemapChorns} from "@/lib/SitemapChorns";
import {ISitemapImage} from "@/lib/model/ISitemapImage";

const baseUrl = "https://chorn.in.th";

function getImageUrls(images: ISitemapImage[]) {
    return images.map((image: ISitemapImage) =>
        `<image:image>
            <image:loc>${baseUrl}${image.path}</image:loc>
        </image:image>`
    )
}

export async function GET() {
    const lastModified = new Date().toISOString().split('T')[0];
    const localizedUrls = SitemapChorns.flatMap(sitemapChorn => {

            if (sitemapChorn.images.length > 0) {
                return ChornLocales.map(locale =>
                    `<url>
                        <loc>${baseUrl}/${locale}${sitemapChorn.url}</loc>
                        ${getImageUrls(sitemapChorn.images)}
                        <lastmod>${lastModified}</lastmod>
                        <priority>0.8</priority>
                    </url>`)
            }

            return ChornLocales.map(locale =>
                `<url>
                    <loc>${baseUrl}/${locale}${sitemapChorn.url}</loc>
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