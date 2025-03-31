import {MetadataRoute} from 'next';

export const dynamic = 'force-static'; // Ensures static generation

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                disallow: '/sitmap.xml',
                allow: '/api/sitemap-chorn',
            },
        ],
        sitemap: [
            'https://www.chorn.in.th/api/sitemap-chorn',
        ],
    };
}