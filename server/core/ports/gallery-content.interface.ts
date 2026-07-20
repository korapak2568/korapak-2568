import {
    GalleryContentResponse,
} from "@/core/domain/gallery-content.entity";

export interface GalleryContentInterface {
    findByLocale(locale: string): Promise<GalleryContentResponse | null>;
}
