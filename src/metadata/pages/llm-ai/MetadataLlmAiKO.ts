import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiKO: Metadata = {
    title: "LLM/AI 통합 | CHORN",
    description: "LLM/AI 에이전트 개발 서비스로 자동화, 레거시 시스템 통합 및 예측 분석을 강화하는 지능형 솔루션을 제공합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI 통합 - CHORN",
        description: "비즈니스 운영을 최적화하기 위해 첨단 LLM/AI 에이전트 개발, 맞춤형 LLM 솔루션 및 AI 워크플로우 자동화를 탐색하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.llmAi).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI 통합 - CHORN",
        description: "LLM/AI 에이전트 개발, 예측 분석 및 지능형 워크플로우 자동화 서비스로 AI의 잠재력을 극대화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.llmAi).twitter.images,
    },
}