import {
    AiCompanionsContentResponse,
} from "@/core/domain/ai-companions-content.entity";
import {AiCompanionsContentInterface} from "@/core/ports/ai-companions-content.interface";

export class AiCompanionsContentService {
    constructor(private readonly repository: AiCompanionsContentInterface) {}

    async findByLocale(locale: string): Promise<AiCompanionsContentResponse | null> {
        return this.repository.findByLocale(locale);
    }
}
