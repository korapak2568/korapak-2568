export function ensureTrailingSlash(path: string): string {
    return path.endsWith("/") ? path : `${path}/`;
}

export function getLocalizedRoute(locale: string, path: string): string {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const withTrailingSlash = normalizedPath === "/" ? "/" : ensureTrailingSlash(normalizedPath);

    return `/${locale}${withTrailingSlash}`;
}