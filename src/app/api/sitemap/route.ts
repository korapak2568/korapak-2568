// src/app/api/sitemap/route.ts

import {Locales} from "@/lib/UrlMains";
import {NextResponse} from "next/server";
import {UrlImageMaps} from "@/lib/UrlImageMaps";
import {IImagePath} from "@/lib/model/IImagePath";

const baseUrl = "https://chorn.in.th";

function getImageUrls(images: IImagePath[]) {
    return images.map((image: IImagePath) =>
        `<image:image>
            <image:loc>${image.path}</image:loc>
        </image:image>`
    )
}

export async function GET() {
    const lastModified = new Date().toISOString().split('T')[0];
    const localizedUrls = UrlImageMaps.flatMap(urlImageMap => {

            if (urlImageMap.images.length > 0) {
                return Locales.map(locale =>
                    `<url>
                        <loc>${baseUrl}/${locale}${urlImageMap.url}</loc>
                        ${getImageUrls(urlImageMap.images)}
                        <lastmod>${lastModified}</lastmod>
                        <priority>0.8</priority>
                    </url>`)
            }

            return Locales.map(locale =>
                `<url>
                    <loc>${baseUrl}/${locale}${urlImageMap.url}</loc>
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