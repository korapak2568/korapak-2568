export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function isActiveSubMenu(pathname: string, link: string): boolean {
    return pathname == link
}

export function isActiveMainMenu(pathname: string, group: string): boolean {
    const localesPath = ['/en/', '/th/', '/fr/', '/ja/', '/vi/', '/zh/', '/de/', '/nl/', '/da/', '/fi/', '/ko/']
    if (localesPath.includes(pathname) && group == "/info") {
        return true;
    }

    return pathname.includes(group)
}

export function publishTime() {
    const currentDate = new Date()
    return currentDate.toISOString()
}

export const chornLocales = ['en', 'th', 'fr', 'ja', 'vi', 'zh', 'de', 'nl', 'da', 'fi', 'ko']

export const chornUrls = [
    '',
    '/404',
    '/about-chorn',
    '/ai-companions',
    '/ai-companions/aom',
    '/ai-companions/fah',
    '/ai-companions/ploy',
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
    '/workplace-policy',
]