import {
    GalleryContentResponse,
    mapGalleryContentResponse,
    normalizeGalleryContentLocale,
} from "@/core/domain/gallery-content.entity";
import {GalleryContentInterface} from "@/core/ports/gallery-content.interface";
import {galleryContentCollection, withMongoReadRetry} from "@/infrastructure/db/infra.mongodb";

export class GalleryContentRepository implements GalleryContentInterface {

    constructor() {
        this.ensureIndexes().catch((error) => {
            console.error('Failed to create gallery content indexes:', error);
        });
    }

    private async ensureIndexes() {
        await galleryContentCollection.createIndex(
            {locale: 1},
            {unique: true, name: 'unique_gallery_content_locale_index'}
        );
    }

    async findByLocale(locale: string): Promise<GalleryContentResponse | null> {
        const normalizedLocale = normalizeGalleryContentLocale(locale);
        const document = await withMongoReadRetry(
            () => galleryContentCollection.findOne({locale: normalizedLocale}),
            `gallery content ${normalizedLocale}`
        );
        return document ? mapGalleryContentResponse(document) : null;
    }
}
