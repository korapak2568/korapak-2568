import {
    HomePageContentResponse,
    mapHomePageContentResponse,
    normalizeHomePageLocale,
} from "@/core/domain/homepage-content.entity";
import {HomePageContentInterface} from "@/core/ports/homepage-content.interface";
import {homePageContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";

export class HomePageContentRepository implements HomePageContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create homepage content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await homePageContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_homepage_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<HomePageContentResponse | null> {
        const normalizedLocale = normalizeHomePageLocale(locale);
        const document = await withMongoReadRetry(
            () => homePageContentCollection.findOne({locale: normalizedLocale}),
            `homepage content ${normalizedLocale}`
        );
        return document ? mapHomePageContentResponse(document) : null;
    }
}
