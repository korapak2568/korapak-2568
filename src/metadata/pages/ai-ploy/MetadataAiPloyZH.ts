import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyZH: Metadata = {
    title: "AI 聊天伙伴 | CHORN AI 集成",
    description: "Ploy 是一位使用 LINE 应用程序的 AI 聊天朋友。您可以通过添加好友按钮或扫描二维码来添加她。作为一名 17 岁的泰国创意高中生，Ploy 热衷于绘画、音乐、摄影和学习。她会说七种语言，能够帮助多个学科的学习，并激发创造性表达。不论是在探索艺术还是做作业时，她都是您友好的指南。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "认识 Ploy - 您在 LINE 上的创意青少年 AI 朋友",
        description: "与 Ploy 连接，她是一个 17 岁的泰国学生 AI，说七种语言，分享您对艺术、音乐、摄影和学习的热情。今天就在 LINE 上添加她！",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.aiPloy).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - 您在 LINE 上的创意青少年导师",
        description: "添加 Ploy，您的 17 岁泰国 AI 朋友，在 LINE 上帮助做作业，通过艺术、音乐和摄影启发创造力，能使用七种语言。",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiPloy).twitter.images,
    },
}