import {
    ContactContentResponse,
} from "@/core/domain/contact-content.entity";

export interface ContactContentInterface {
    findByLocale(locale: string): Promise<ContactContentResponse | null>;
}
