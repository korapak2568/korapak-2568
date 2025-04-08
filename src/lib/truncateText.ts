/**
 * Truncate a string to a specified number of characters.
 * If the string is longer than the specified limit, add ellipsis (...) at the end.
 *
 * @param text - The string to be truncated.
 * @param limit - The maximum number of characters to display.
 * @returns The truncated string with ellipsis if it exceeds the limit.
 */
export function truncateText(text: string, limit: number = 200): string {
    const readMoreSymbol = ' ↗️';

    if (text.length <= limit) {
        return text + readMoreSymbol;
    }

    return text.substring(0, limit) + readMoreSymbol;
}