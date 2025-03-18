// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: '', // Add the base path if your app is hosted in a subpath
    images: {
        unoptimized: true,
    },
    optimizeFonts: false,
    i18n: {
        locales: ['en-US', 'th-TH'],
        defaultLocale: 'en-US',
        localeDetection: false,

        // locales: ['en-US', 'th-TH', 'fr-FR', 'ja-JP', 'vi-VN', 'zh-CN', 'de-DE', 'nl-NL', 'da-DA'],
        // defaultLocale: 'en-US',
    },
};

export default nextConfig;