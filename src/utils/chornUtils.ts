export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function isActiveMenu(pathname: string, link: string): boolean {
    return pathname == link
}

export function isActiveMainMenu(pathname: string, group: string): boolean {
    return pathname.includes(group)
}