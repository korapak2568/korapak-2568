import {MetadataRoute} from 'next';

export const dynamic = 'force-static'; // Ensures static generation

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: [
            'https://chorn.in.th/sitemap-0.xml',
            'https://chorn.in.th/sitemap-fi.xml',
            'https://chorn.in.th/sitemap-ko.xml',
        ],
    };
}