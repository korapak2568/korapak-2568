import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiZH: Metadata = {
    title: "LLM/AI 集成 | CHORN",
    description: "LLM/AI 代理开发服务，提供智能解决方案，旨在增强自动化、传统系统集成和预测分析。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "LLM/AI 集成 - CHORN",
        description: "探索前沿的 LLM/AI 代理开发、定制 LLM 解决方案和 AI 工作流自动化，优化业务运营。",
        images: metadataLink(LanguageCode.zh, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI 集成 - CHORN",
        description: "通过 LLM/AI 代理开发、预测分析和智能工作流自动化服务，释放 AI 的强大潜力。",
        images: metadataLink(LanguageCode.zh, MetaLinks.llmAi).twitter.images,
    },
}