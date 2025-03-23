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

export const locales = ['en', 'th', 'fr', 'ja', 'vi', 'zh', 'de', 'nl', 'da', 'fi', 'ko']