export const SUPPORTED_LOCALES = ['en', 'th', 'zh', 'ja', 'ko', 'id', 'de', 'fr', 'ru', 'vi'];
export const RETIRED_LOCALES = ['da', 'fi', 'nl'];

export function getLegacyPublicRedirects() {
    return [
        {
            source: '/:lang/technical-expertise/web-development/',
            destination: '/:lang/technology/',
            permanent: true,
        },
        {
            source: '/:lang/ai-integration/',
            destination: '/:lang/ai-companions/fah/',
            permanent: true,
        },
        {
            source: '/about-chorn/',
            destination: '/about/',
            permanent: true,
        },
        {
            source: '/:lang/about-chorn/',
            destination: '/:lang/about/',
            permanent: true,
        },
        {
            source: '/smart-food-ai/',
            destination: '/smart-food/',
            permanent: true,
        },
        {
            source: '/:lang/smart-food-ai/',
            destination: '/:lang/smart-food/',
            permanent: true,
        },
        {
            source: '/ai-luxury/',
            destination: '/luxury/',
            permanent: true,
        },
        {
            source: '/:lang/ai-luxury/',
            destination: '/:lang/luxury/',
            permanent: true,
        },
        {
            source: '/:lang/outfit/',
            destination: '/:lang/style/',
            permanent: true,
        },
    ];
}

export async function redirectIncorrectPublic() {
    const items = [
        {source: '/na/:path*', destination: '/en/:path*', permanent: true},
        {source: '/public/', destination: '/en/', permanent: true},
    ];

    for (const locale of SUPPORTED_LOCALES) {
        items.push({
            source: `/public${locale}/`,
            destination: `/${locale}/`,
            permanent: true,
        });
    }

    for (const locale of RETIRED_LOCALES) {
        items.push({
            source: `/${locale}/:path*`,
            destination: '/en/:path*',
            permanent: true,
        });
    }

    return items;
}
