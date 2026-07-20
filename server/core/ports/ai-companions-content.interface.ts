import {
    AiCompanionsContentResponse,
} from "@/core/domain/ai-companions-content.entity";

export interface AiCompanionsContentInterface {
    findByLocale(locale: string): Promise<AiCompanionsContentResponse | null>;
}
