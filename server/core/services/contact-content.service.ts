import {
    ContactContentResponse,
} from "@/core/domain/contact-content.entity";
import {ContactContentInterface} from "@/core/ports/contact-content.interface";

export class ContactContentService implements ContactContentInterface {
    constructor(private readonly repository: ContactContentInterface) {
    }

    async findByLocale(locale: string): Promise<ContactContentResponse | null> {
        return this.repository.findByLocale(locale);
    }
}
