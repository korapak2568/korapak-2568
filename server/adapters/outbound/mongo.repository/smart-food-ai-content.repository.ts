import {
    mapSmartFoodAiContentResponse,
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentResponse,
} from "@/core/domain/smart-food-ai-content.entity";
import {SmartFoodAiContentInterface} from "@/core/ports/smart-food-ai-content.interface";
import {smartFoodAiContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";

export class SmartFoodAiContentRepository implements SmartFoodAiContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create Smart Food AI content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await smartFoodAiContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_smart_food_ai_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<SmartFoodAiContentResponse | null> {
        const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
        const document = await withMongoReadRetry(
            () => smartFoodAiContentCollection.findOne({locale: normalizedLocale}),
            `Smart Food AI content ${normalizedLocale}`
        );
        return document ? mapSmartFoodAiContentResponse(document) : null;
    }
}
