import {
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentLocale,
    SmartFoodAiContentPayload,
} from "@/core/domain/smart-food-ai-content.entity";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";

const SMART_FOOD_AI_DEFAULT_LOCALE: SmartFoodAiContentLocale = "en";
const smartFoodFallbackCache = new Map<SmartFoodAiContentLocale, Promise<SmartFoodAiContentPayload>>();

async function loadSmartFoodAiStaticFallback(locale: SmartFoodAiContentLocale): Promise<SmartFoodAiContentPayload> {
    const cachedContent = smartFoodFallbackCache.get(locale);

    if (cachedContent) {
        return cachedContent;
    }

    const contentPromise = fetchData<SmartFoodAiContentPayload>(`/smart-food/${locale}.json`).catch((error) => {
        smartFoodFallbackCache.delete(locale);

        if (locale !== SMART_FOOD_AI_DEFAULT_LOCALE) {
            return loadSmartFoodAiStaticFallback(SMART_FOOD_AI_DEFAULT_LOCALE);
        }

        throw error;
    });
    smartFoodFallbackCache.set(locale, contentPromise);

    return contentPromise;
}

export async function getSmartFoodAiStaticMetadataFallback(locale: string): Promise<ISmartFoodAiMetadataContent> {
    const fallbackContent = await getSmartFoodAiStaticFallback(locale);
    const defaultContent = locale === SMART_FOOD_AI_DEFAULT_LOCALE
        ? fallbackContent
        : await getSmartFoodAiStaticFallback(SMART_FOOD_AI_DEFAULT_LOCALE);

    return fallbackContent.metadata ?? defaultContent.metadata!;
}

export async function getSmartFoodAiStaticFallback(locale: string): Promise<SmartFoodAiContentPayload> {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const fallbackContent = await loadSmartFoodAiStaticFallback(normalizedLocale);

    return {
        ...fallbackContent,
        locale: normalizedLocale,
    };
}