import {unstable_cache} from "next/cache";
import {
    AiCompanionsContentPayload,
    AiCompanionsContentResponse,
    normalizeAiCompanionsContentLocale,
    } from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentService} from "@/core/services/ai-companions-content.service";
import {AiCompanionsContentRepository} from "@/adapters/outbound/mongo.repository/ai-companions-content.repository";
import {loadLocalizedContentWithFallback} from "@/lib/localized-content/localizedContentFallback";
import {getFallbackAiCompanionsContent} from "@/lib/static-content/publicContentFallbacks";
import type {IAiDetail, IAiLanding} from "@/lib/model/IAi";
import type {IImageUnit} from "@/image/model/IImageUnit";
import {CDN} from "@/lib/cdn";

const aiCompanionsContentService = new AiCompanionsContentService(new AiCompanionsContentRepository());
const AI_COMPANIONS_CONTENT_LIST_TAG = 'ai-companions-content';
const isDevelopment = process.env.NODE_ENV !== 'production';
const REQUIRED_AI_COMPANIONS_CONTENT_FIELDS = ['demo', 'service', 'aiCompanions', 'feature', 'media'] as const;

function getAiImageAssetUrl(src: string): string {
    return src.startsWith('/images/ai/') ? `${CDN}${src}` : src;
}

function normalizeAiImageUnit<TImage extends IImageUnit>(image: TImage): TImage {
    return {
        ...image,
        path: getAiImageAssetUrl(image.path),
    };
}

function normalizeAiDetailMedia(detail: IAiDetail): IAiDetail {
    return {
        ...detail,
        thumbnail: getAiImageAssetUrl(detail.thumbnail),
        pages: {
            ...detail.pages,
            home: {
                ...detail.pages.home,
                image: normalizeAiImageUnit(detail.pages.home.image),
            },
            landing: {
                ...detail.pages.landing,
                image: normalizeAiImageUnit(detail.pages.landing.image),
            },
        },
    };
}

function normalizeAiLandingMedia(landing: IAiLanding): IAiLanding {
    return {
        ...landing,
        thumbnail: landing.thumbnail ? getAiImageAssetUrl(landing.thumbnail) : landing.thumbnail,
        pages: {
            ...landing.pages,
            landing: {
                ...landing.pages.landing,
                image: normalizeAiImageUnit(landing.pages.landing.image),
            },
        },
        relevants: landing.relevants.map(normalizeAiDetailMedia),
    };
}

function normalizeAiCompanionsPublicMedia(content: AiCompanionsContentPayload): AiCompanionsContentPayload {
    return {
        ...content,
        aiCompanions: {
            ...content.aiCompanions,
            fah: normalizeAiLandingMedia(content.aiCompanions.fah),
            aom: normalizeAiLandingMedia(content.aiCompanions.aom),
            ploy: normalizeAiLandingMedia(content.aiCompanions.ploy),
        },
    };
}
function getAiCompanionsContentTag(locale: string) {
    return `ai-companions-content:${normalizeAiCompanionsContentLocale(locale)}`;
}

function assertCompleteAiCompanionsContent(
    locale: string,
    databaseContent: AiCompanionsContentResponse | null
): AiCompanionsContentPayload {
    if (!databaseContent) {
        throw new Error(
            `AI companions content not found in MongoDB for locale "${locale}" ` +
            `(database="${process.env.MONGODB_DATABASE}", collection="${process.env.MONGODB_COLLECTION_AI_COMPANIONS_CONTENT || 'ai_companions_content'}")`
        );
    }

    const missingFields = REQUIRED_AI_COMPANIONS_CONTENT_FIELDS.filter((field) => databaseContent[field] === undefined);

    if (missingFields.length > 0) {
        throw new Error(
            `AI companions content is incomplete for locale "${locale}". Missing fields: ${missingFields.join(', ')}`
        );
    }

    return databaseContent as AiCompanionsContentPayload;
}

export async function getAiCompanionsContent(locale: string): Promise<AiCompanionsContentPayload> {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);

    if (isDevelopment) {
        const databaseContent = await aiCompanionsContentService.findByLocale(normalizedLocale);
        return assertCompleteAiCompanionsContent(normalizedLocale, databaseContent);
    }

    const getCachedContent = unstable_cache(
        async () => {
            const databaseContent = await aiCompanionsContentService.findByLocale(normalizedLocale);
            return assertCompleteAiCompanionsContent(normalizedLocale, databaseContent);
        },
        ['ai-companions-content-by-locale', normalizedLocale],
        {
            revalidate: 3600,
            tags: [AI_COMPANIONS_CONTENT_LIST_TAG, getAiCompanionsContentTag(normalizedLocale)],
        }
    );

    return getCachedContent();
}

export async function getAiCompanionsContentForPublicPage(locale: string): Promise<AiCompanionsContentPayload> {
    const normalizedLocale = normalizeAiCompanionsContentLocale(locale);

    const content = await loadLocalizedContentWithFallback({
        locale: normalizedLocale,
        context: 'AI companions content public render',
        load: getAiCompanionsContent,
        fallback: () => getFallbackAiCompanionsContent(normalizedLocale),
    });

    return normalizeAiCompanionsPublicMedia(content);
}
