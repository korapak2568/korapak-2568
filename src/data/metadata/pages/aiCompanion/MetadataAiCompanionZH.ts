import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionZH: Metadata = {
    title: "使用LLM/AI集成的LINE聊天",
    description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "使用LLM/AI集成的LINE聊天",
        description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "使用LLM/AI集成的LINE聊天",
        description: "测试LINE聊天，连接支持多种语言的LLM/AI。",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}