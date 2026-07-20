import {
    ContactContentResponse,
    mapContactContentResponse,
    normalizeContactContentLocale,
} from "@/core/domain/contact-content.entity";
import {ContactContentInterface} from "@/core/ports/contact-content.interface";
import {contactContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";

export class ContactContentRepository implements ContactContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create contact content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await contactContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_contact_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<ContactContentResponse | null> {
        const normalizedLocale = normalizeContactContentLocale(locale);
        const document = await withMongoReadRetry(
            () => contactContentCollection.findOne({locale: normalizedLocale}),
            `contact content ${normalizedLocale}`
        );
        return document ? mapContactContentResponse(document) : null;
    }
}
