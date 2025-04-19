// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: '', // Add the base path if your app is hosted in a subpath
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.chorn.in.th',
                pathname: '/**',
            },
        ],
        minimumCacheTTL: 31536000,
    },
    optimizeFonts: false,
    i18n: {
        locales: ['en-US', 'th-TH', 'fr-FR', 'ja-JP', 'vi-VN', 'zh-CN', 'de-DE', 'nl-NL', 'da-DA', 'fi-FI', 'ko-KR'],
        defaultLocale: 'en-US',
        localeDetection: false,
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, s-maxage=86400, stale-while-revalidate"
                    }
                ]
            }
        ]
    },
    async rewrites() {
        // ****
        // Use rewrite for OpenGraph images only
        // ****

        return [
            {
                source: '/images/:path*',
                destination: 'https://cdn.chorn.in.th/public/:path*'
            },
            {
                source: '/images-ai/:path*',
                destination: 'https://cdn.chorn.in.th/public/ai/:path*'
            },
            {
                source: '/chorn-images/:path*',
                destination: 'https://cdn.chorn.in.th/public/:path*'
            },
            {
                source: '/obsolete-images/:path*',
                destination: 'https://cdn.chorn.in.th/obsolete/:path*'
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/na/:path*',
                destination: '/da/:path*',
                permanent: true,
            },
            {
                source: '/:locale/technical-expertise/full-stack-developer/javascript-javascript-developer/',
                destination: '/:locale/technical-expertise/front-end-developer/javascript-developer/',
                permanent: true,
            },
            {
                source: '/:locale/technical-expertise/full-stack-developer/typescript-javascript-developer/',
                destination: '/:locale/technical-expertise/front-end-developer/typescript-developer/',
                permanent: true,
            },
            {
                source: '/ai-solutions/:path*',
                destination: '/en/ai-companions/:path*',
                permanent: true,
            },
            {
                source: '/ai-solutions',
                destination: '/en/ai-companions',
                permanent: true,
            },
            {
                source: '/ai-companions/:path*',
                destination: '/en/ai-companions/:path*',
                permanent: true,
            },
            {
                source: '/ai-companions',
                destination: '/en/ai-companions/',
                permanent: true,
            },
            {
                source: '/:locale/ai-companions/buakaew',
                destination: '/en/ai-companions/fah',
                permanent: true,
            },
            {
                source: '/:locale/ai-companions/tonnam',
                destination: '/en/ai-companions/fah',
                permanent: true,
            },
            {
                source: '/:locale/ai-companions/milk',
                destination: '/en/ai-companions/fah',
                permanent: true,
            },
            {
                source: '/:locale/technical-expertise/full-stack-developer/javascript-developer',
                destination: '/:locale/technical-expertise/front-end-developer/javascript-developer',
                permanent: true,
            },
            {
                source: '/:locale/technical-expertise/devops-testing/:path*',
                destination: '/:locale/technical-expertise/cloud-devops/:path*',
                permanent: true,
            },
            {
                source: '/na/:path*',
                destination: '/da/:path*',
                permanent: true,
            },
            {
                source: '/na/:path*',
                destination: '/da/:path*',
                permanent: true,
            },

            // Front-End Redirect -------------------------------------------------------------
            {
                source: '/:locale/technical-expertise/front-end-developer/react/',
                destination: '/:locale/technical-expertise/front-end-developer/react-developer/',
                permanent: true,
            },
            {
                source: '/services/frontend-development/angular/',
                destination: '/en/technical-expertise/front-end-developer/angular-developer/',
                permanent: true,
            },
            {
                source: '/en/technical-expertise/frontend-development/html5/',
                destination: '/en/technical-expertise/front-end-developer/html5-developer/',
                permanent: true,
            },
            {
                source: '/outsourcing-software-development/front-end-developer/html5/',
                destination: '/en/technical-expertise/front-end-developer/html5-developer/',
                permanent: true
            },
            {
                source: '/en/technical-expertise/frontend-development/react/',
                destination: '/en/technical-expertise/front-end-developer/react-developer/',
                permanent: true,
            },
            {
                source: '/services/frontend-development/css3/',
                destination: '/en/technical-expertise/front-end-developer/css3-developer/',
                permanent: true,
            },
            {
                source: '/services/frontend-development/:path*',
                destination: '/en/technical-expertise/front-end-developer/:path*',
                permanent: true,
            },

            // Full-Stack Redirect -------------------------------------------------------------
            {
                source: '/services/fullstack-development/go-lang/',
                destination: '/en/technical-expertise/full-stack-developer/go-developer/',
                permanent: true,
            },
            {
                source: '/services/fullstack-development/python/',
                destination: '/en/technical-expertise/full-stack-developer/python-developer/',
                permanent: true,
            },
            {
                source: '/outsourcing-software-development/full-stack-developer/javascript-javascript-developer/',
                destination: '/en/technical-expertise/full-stack-developer/javascript-developer/',
                permanent: true,
            },
            {
                source: '/services/fullstack-development/java-spring-boot-kotlin/',
                destination: '/en/technical-expertise/full-stack-developer/java-spring-boot-developer/',
                permanent: true,
            },
            {
                source: '/services/fullstack-development/:path*',
                destination: '/en/technical-expertise/full-stack-developer/:path*',
                permanent: true,
            },

            // DevOps Redirect -------------------------------------------------------------
            {
                source: '/services/devops-testing/kubernetes/',
                destination: '/en/technical-expertise/cloud-devops/kubernetes/',
                permanent: true,
            },
            {
                source: '/services/devops-testing/:path*',
                destination: '/en/technical-expertise/cloud-devops/:path*',
                permanent: true,
            },

            // Otherwise ---------------------------------------------------------------------
            {
                source: '/:locale/contact-chorn',
                destination: '/:locale/about-chorn',
                permanent: true,
            },
            {
                source: "/contact",
                destination: "/en/about-chorn",
                permanent: true
            },
            {
                source: '/contact-chorn',
                destination: "/en/about-chorn",
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
                source: '/services/:path*',
                destination: '/en/technical-expertise/:path*',
                permanent: true,
            },
            {
                source: '/:locale/technical-expertise/',
                destination: '/:locale/technical-expertise/web-development/',
                permanent: true,
            },
            {
                source: '/technical-expertise/devops-testing/:path*',
                destination: '/en/technical-expertise/cloud-devops/:path*',
                permanent: true,
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