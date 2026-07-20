import {
    HomePageContentResponse,
} from "@/core/domain/homepage-content.entity";

export interface HomePageContentInterface {
    findByLocale(locale: string): Promise<HomePageContentResponse | null>;
}
