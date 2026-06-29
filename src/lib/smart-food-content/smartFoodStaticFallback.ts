import {
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentLocale,
    SmartFoodAiContentPayload,
} from "@/core/domain/smart-food-ai-content.entity";
import deSmartFoodContent from "@/data/smart-food/de.json";
import enSmartFoodContent from "@/data/smart-food/en.json";
import frSmartFoodContent from "@/data/smart-food/fr.json";
import idSmartFoodContent from "@/data/smart-food/id.json";
import jaSmartFoodContent from "@/data/smart-food/ja.json";
import koSmartFoodContent from "@/data/smart-food/ko.json";
import ruSmartFoodContent from "@/data/smart-food/ru.json";
import thSmartFoodContent from "@/data/smart-food/th.json";
import viSmartFoodContent from "@/data/smart-food/vi.json";
import zhSmartFoodContent from "@/data/smart-food/zh.json";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";

const SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE: Record<SmartFoodAiContentLocale, SmartFoodAiContentPayload> = {
    de: deSmartFoodContent as SmartFoodAiContentPayload,
    en: enSmartFoodContent as SmartFoodAiContentPayload,
    fr: frSmartFoodContent as SmartFoodAiContentPayload,
    id: idSmartFoodContent as SmartFoodAiContentPayload,
    ja: jaSmartFoodContent as SmartFoodAiContentPayload,
    ko: koSmartFoodContent as SmartFoodAiContentPayload,
    ru: ruSmartFoodContent as SmartFoodAiContentPayload,
    th: thSmartFoodContent as SmartFoodAiContentPayload,
    vi: viSmartFoodContent as SmartFoodAiContentPayload,
    zh: zhSmartFoodContent as SmartFoodAiContentPayload,
};

const SMART_FOOD_AI_STATIC_FALLBACK = SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE.en;

export const SMART_FOOD_AI_STATIC_METADATA_FALLBACK: ISmartFoodAiMetadataContent =
    SMART_FOOD_AI_STATIC_FALLBACK.metadata!;

export function getSmartFoodAiStaticMetadataFallback(locale: string): ISmartFoodAiMetadataContent {
    const fallbackContent = getSmartFoodAiStaticFallback(locale);

    return fallbackContent.metadata ?? SMART_FOOD_AI_STATIC_METADATA_FALLBACK;
}

export function getSmartFoodAiStaticFallback(locale: string): SmartFoodAiContentPayload {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const fallbackContent = SMART_FOOD_AI_STATIC_FALLBACK_BY_LOCALE[normalizedLocale] ?? SMART_FOOD_AI_STATIC_FALLBACK;

    return {
        ...fallbackContent,
        locale: normalizedLocale,
    };
}
