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
    const urlEntries: string[] = [];

    for (const urlImageMap of UrlImageMaps) {
        for (const locale of Locales) {
            const loc = `${baseUrl}/${locale}${urlImageMap.url}`;
            const images = urlImageMap.images?.length
                ? getImageUrls(urlImageMap.images)
                : '';

            urlEntries.push(`
        <url>
          <loc>${loc}</loc>
          ${images}
          <lastmod>${lastModified}</lastmod>
          <priority>0.8</priority>
        </url>`);
        }
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urlEntries.join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}