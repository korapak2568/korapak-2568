/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    optimizeFonts: false,
    async redirects() {
        return [
            {
                source: '/e-commerce-development',
                destination: 'https://angular.chorn.in.th/e-commerce-development',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/mvp',
                destination: 'https://angular.chorn.in.th/mvp',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/back-end-development',
                destination: 'https://angular.chorn.in.th/back-end-development',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/contact',
                destination: '/contact-chorn',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/front-end-development',
                destination: 'https://angular.chorn.in.th/front-end-development',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/custom-software-development',
                destination: 'https://angular.chorn.in.th/custom-software-development',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/devops-and-testing',
                destination: '/services/devops-testing/',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/about-us/2',
                destination: '/about-chorn',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/single-page-application',
                destination: 'https://angular.chorn.in.th/single-page-application',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/_next/static/media/7e6a2e30184bb114-s.p.woff2',
                destination: 'https://www.chorn.in.th/',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/galleries',
                destination: '/404',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/gits',
                destination: 'https://github.com/chorn-hub',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/microservices-technology',
                destination: 'https://angular.chorn.in.th/microservices-technology',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/responsive-web-design',
                destination: 'https://angular.chorn.in.th/responsive-web-design',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/scaling',
                destination: 'https://angular.chorn.in.th/scaling',
                permanent: true, // 301 redirect for permanent move
            },
            {
                source: '/src',
                destination: '/',
                permanent: true, // 301 redirect for permanent move
            },
        ];
    }
};

export default nextConfig;