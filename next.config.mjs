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
        locales: ['en-US', 'th-TH', 'fr-FR', 'ja-JP', 'vi-VN', 'zh-CN', 'de-DE', 'nl-NL', 'da-DA', 'fi-FI', 'ko-KR'],
        defaultLocale: 'en-US',
        localeDetection: false,
    },
    async redirects() {
        return [
            {
                source: '/ai-companions',
                destination: '/en/ai-companions/',
                permanent: true,
            },
            {
                source: '/contact',
                destination: 'https://www.linkedin.com/in/khachornchit/',
                permanent: true,
            },
            {
                source: '/contact-chorn',
                destination: 'https://www.linkedin.com/in/khachornchit/',
                permanent: true,
            },
            {
                source: '/services/front-end-developer/:path*',
                destination: '/en/technical-expertise/front-end-developer/:path*',
                permanent: true,
            },
            {
                source: '/services/full-stack-developer/:path*',
                destination: '/en/technical-expertise/full-stack-developer/:path*',
                permanent: true,
            },
            {
                source: '/services/devops-testing/:path*',
                destination: '/en/technical-expertise/cloud-devops/:path*',
                permanent: true,
            },
            {
                source: '/services/:path*',
                destination: '/en/technical-expertise/:path*',
                permanent: true,
            },
            {
                source: '/technical-expertise/devops-testing/:path*',
                destination: '/en/technical-expertise/cloud-devops/:path*',
                permanent: true,
            },
            {
                source: '/ai-solutions/fah/',
                destination: '/en/ai-companions/fah/',
                permanent: true, // Set to true for 308 permanent redirect, false for 307 temporary
            },
            {
                source: '/ai-solutions/aom/',
                destination: '/en/ai-companions/aom/',
                permanent: true, // Set to true for 308 permanent redirect, false for 307 temporary
            },
            {
                source: '/ai-solutions/ploy/',
                destination: '/en/ai-companions/ploy/',
                permanent: true, // Set to true for 308 permanent redirect, false for 307 temporary
            },
            {
                source: "/outsourcing-software-development/:path*",
                destination: "/en/technical-expertise/:path*",
                permanent: true
            },
            {
                source: "/outsourcing-software-development/front-end-developer/html5/",
                destination: "/en/technical-expertise/front-end-developer/html5-developer/",
                permanent: true
            },
            {
                source: "/e-commerce-development",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/mvp",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/back-end-development",
                destination: "/en/technical-expertise/full-stack-developer/",
                permanent: true
            },
            {
                source: "/contact",
                destination: "/en/about-chorn",
                permanent: true
            },
            {
                source: "/technical-expertise/:path*",
                destination: "/en/technical-expertise/:path*",
                permanent: true
            },
            {
                source: "/front-end-development",
                destination: "/en/technical-expertise/front-end-developer/",
                permanent: true
            },
            {
                source: "/full-stack-development",
                destination: "/en/technical-expertise/full-stack-developer/",
                permanent: true
            },
            {
                source: "/custom-software-development",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/devops-and-testing",
                destination: "/en/technical-expertise/devops-testing/",
                permanent: true
            },
            {
                source: "/about-us/2",
                destination: "/en/about-chorn",
                permanent: true
            },
            {
                source: "/single-page-application",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/gallery",
                destination: "/en/gallery/",
                permanent: true
            },
            {
                source: "/galleries",
                destination: "/en/gallery/",
                permanent: true
            },
            {
                source: "/gits",
                destination: "/en/technical-expertise/devops-testing/github/",
                permanent: true
            },
            {
                source: "/microservices-technology",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/responsive-web-design",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/scaling",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/chorn-services",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/contact-chorn",
                destination: "/en/about-chorn",
                permanent: true
            },
            {
                source: "/services",
                destination: "/en/technical-expertise/web-development/",
                permanent: true
            },
            {
                source: "/privacy-policy",
                destination: "/en/privacy-policy",
                permanent: true
            },
            {
                source: "/src",
                destination: "/en",
                permanent: true
            }
        ];
    },
};

export default nextConfig;