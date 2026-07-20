import {
    AiCompanionsContentResponse,
    mapAiCompanionsContentResponse,
    normalizeAiCompanionsContentLocale,
} from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentInterface} from "@/core/ports/ai-companions-content.interface";
import {aiCompanionsContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";

export class AiCompanionsContentRepository implements AiCompanionsContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create AI companions content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await aiCompanionsContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_ai_companions_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<AiCompanionsContentResponse | null> {
        const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
        const document = await withMongoReadRetry(
            () => aiCompanionsContentCollection.findOne({locale: normalizedLocale}),
            `AI companions content ${normalizedLocale}`
        );
        return document ? mapAiCompanionsContentResponse(document) : null;
    }
}
