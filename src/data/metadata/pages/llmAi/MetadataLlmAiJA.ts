import {Metadata} from "next";
import {MetadataLinkLlmAi} from "@/data/metadata/pages/llmAi/common/MetadataLinkLlmAi";

export const MetadataLlmAiJA: Metadata = {
    title: "LLM/AI統合 | CHORN",
    description: "LLM/AIエージェント開発サービスは、自動化、レガシーシステム統合、予測分析を強化するためのインテリジェントなソリューションを提供します。",
    alternates: MetadataLinkLlmAi.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI統合 - CHORN",
        description: "最先端のLLM/AIエージェント開発、カスタムLLMソリューション、AIワークフロー自動化を活用し、ビジネス運営を最適化しましょう。",
        images: MetadataLinkLlmAi.openGraph.images,
        url: MetadataLinkLlmAi.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI統合 - CHORN",
        description: "LLM/AIエージェント開発、予測分析、インテリジェントなワークフロー自動化サービスでAIの力を引き出しましょう。",
        images: MetadataLinkLlmAi.twitter.images,
    },
}
