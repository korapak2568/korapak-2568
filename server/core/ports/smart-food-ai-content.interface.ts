import {
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";

export interface SmartFoodAiContentInterface {
    findByLocale(locale: string): Promise<SmartFoodAiContentResponse | null>;
}
