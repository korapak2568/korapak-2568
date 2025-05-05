import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionZH: Metadata = {
    title: "使用LLM/AI集成的LINE聊天",
    description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "使用LLM/AI集成的LINE聊天",
        description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.aiCompanion).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "使用LLM/AI集成的LINE聊天",
        description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiCompanion).twitter.images,
    },
}