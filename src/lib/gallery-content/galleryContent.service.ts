import {unstable_cache} from "next/cache";
import {
    GalleryContentPayload,
    GalleryContentResponse,
    normalizeGalleryContentLocale,
    } from "@/core/domain/gallery-content.entity";
import {GalleryContentService} from "@/core/services/gallery-content.service";
import {GalleryContentRepository} from "@/adapters/outbound/mongo.repository/gallery-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackGalleryContent} from "@/lib/static-content/publicContentFallbacks";

const galleryContentService = new GalleryContentService(new GalleryContentRepository());
const GALLERY_CONTENT_LIST_TAG = 'gallery-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_GALLERY_CONTENT_FIELDS = ['gallery', 'media'] as const;

function getGalleryContentTag(locale: string) {
    return `gallery-content:${normalizeGalleryContentLocale(locale)}`;
}

function assertCompleteGalleryContent(
    locale: string,
    databaseContent: GalleryContentResponse | null
): GalleryContentPayload {
    if (!databaseContent) {
        throw new Error(
            `Gallery content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_GALLERY_CONTENT || 'gallery_content'}")`
        );
    }

    const missingFields = REQUIRED_GALLERY_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `Gallery content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as GalleryContentPayload;
}

export async function getGalleryContent(locale: string): Promise<GalleryContentPayload> {
    const normalizedLocale = normalizeGalleryContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await galleryContentService.findByLocale(normalizedLocale);
        return assertCompleteGalleryContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await galleryContentService.findByLocale(normalizedLocale);
            return assertCompleteGalleryContent(normalizedLocale, databaseContent);
        },
        ['gallery-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [GALLERY_CONTENT_LIST_TAG, getGalleryContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getGalleryContentForPublicPage(locale: string): Promise<GalleryContentPayload> {
    const normalizedLocale = normalizeGalleryContentLocale(locale);

    return loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'gallery content public render',
        load: getGalleryContent,
        fallback: () => getFallbackGalleryContent(normalizedLocale),
    });
}
