import {
    HomePageContentResponse,
} from "@/core/domain/homepage-content.entity";
import {HomePageContentInterface} from "@/core/ports/homepage-content.interface";

export class HomePageContentService implements HomePageContentInterface {
    constructor(private readonly repository: HomePageContentInterface) {
    }

    async findByLocale(locale: string): Promise<HomePageContentResponse | null> {
        return this.repository.findByLocale(locale);
    }
}
