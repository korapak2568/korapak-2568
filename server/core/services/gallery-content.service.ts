import {
    GalleryContentResponse,
} from "@/core/domain/gallery-content.entity";
import {GalleryContentInterface} from "@/core/ports/gallery-content.interface";

export class GalleryContentService implements GalleryContentInterface {
    constructor(private readonly repository: GalleryContentInterface) {
    }

    async findByLocale(locale: string): Promise<GalleryContentResponse | null> {
        return this.repository.findByLocale(locale);
    }
}
