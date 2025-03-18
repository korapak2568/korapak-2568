import type {MetadataRoute} from 'next';

// Define your locales
const BASE_URL = 'https://chorn.in.th';
const locales = ['en'] as const;
// const locales = ['en', 'th', 'fr', 'ja', 'vi', 'zh', 'de', 'nl', 'na'] as const;

// Define static paths (you can fetch dynamic paths if needed)
const staticPaths = [
    '',
    '/404',
    '/about-chorn',
    '/ai-companions',
    '/ai-companions/aom',
    '/ai-companions/buakaew',
    '/ai-companions/fah',
    '/ai-companions/milk',
    '/ai-companions/ploy',
    '/ai-companions/tonnam',
    '/gallery',
    '/privacy-policy',
    '/technical-expertise/ai-solutions',
    '/technical-expertise/cloud-devops',
    '/technical-expertise/cloud-devops/appium',
    '/technical-expertise/cloud-devops/docker',
    '/technical-expertise/cloud-devops/github',
    '/technical-expertise/cloud-devops/gitlab',
    '/technical-expertise/cloud-devops/jenkins',
    '/technical-expertise/cloud-devops/kubernetes',
    '/technical-expertise/cloud-devops/postman',
    '/technical-expertise/cloud-devops/selenium',
    '/technical-expertise/cloud-devops/soapui',
    '/technical-expertise/cloud-infrastructure-systems-architecture',
    '/technical-expertise/front-end-developer',
    '/technical-expertise/front-end-developer/angular-developer',
    '/technical-expertise/front-end-developer/css3-developer',
    '/technical-expertise/front-end-developer/html5-developer',
    '/technical-expertise/front-end-developer/javascript-developer',
    '/technical-expertise/front-end-developer/nextjs-developer',
    '/technical-expertise/front-end-developer/react-developer',
    '/technical-expertise/front-end-developer/typescript-developer',
    '/technical-expertise/front-end-developer/vue-developer',
    '/technical-expertise/full-stack-developer',
    '/technical-expertise/full-stack-developer/dotnetcore-developer',
    '/technical-expertise/full-stack-developer/go-developer',
    '/technical-expertise/full-stack-developer/java-spring-boot-developer',
    '/technical-expertise/full-stack-developer/nodejs-developer',
    '/technical-expertise/full-stack-developer/php-developer',
    '/technical-expertise/full-stack-developer/python-developer',
    '/technical-expertise/mobile-development',
    '/technical-expertise/web3-blockchain-smart-contract-development',
    '/technical-expertise/web-development',
    '/terms-of-service',
    '/workplace policy',
];

const generateAlternates = async (path: string) => {
    return locales.reduce<Record<string, string>>((acc, locale) => {
        const localizedPath = locale === 'en' ? path : `/${locale}${path}`;
        acc[locale] = `${BASE_URL}${localizedPath}`;
        return acc;
    }, {});
};

// Correct sitemap structure
export default function sitemap(): MetadataRoute.Sitemap {
    return staticPaths.flatMap((path: string) => {
        return locales.map((locale: string) => ({
            url: `${BASE_URL}/${locale}${path}`,
            lastModified: new Date(),
        }));
    });
}

// Sitemap generator function - Incorrect xml
// export default function sitemap(): MetadataRoute.Sitemap {
//     return staticPaths.flatMap((path: string) => {
//         return locales.map((locale: string) => ({
//             url: `${BASE_URL}/${locale}${path}`,
//             lastModified: new Date(),
//             // alternates: {
//             //     languages: {
//             //         es: 'https://acme.com/es/about',
//             //         de: 'https://acme.com/de/about',
//             //     },
//             // }
//         }));
//     });
// }