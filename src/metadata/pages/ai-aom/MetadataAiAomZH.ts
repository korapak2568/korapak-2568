import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomZH: Metadata = {
    title: "AI聊天伙伴 | CHORN AI集成",
    description: "Aom可以通过LINE应用访问。您可以按下添加朋友按钮或扫描LINE二维码将她添加为朋友。21岁的Aom是一个友好且充满活力的AI伙伴，热衷于健康生活和身心健康，提供营养建议、运动计划和正念练习。凭借她能够使用多种语言进行聊天，Aom帮助您保持平衡的生活方式，同时保持有趣。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "认识Aom - 您在LINE上的健康指南",
        description: "与Aom建立联系，Aom是一个21岁的专注于健康的AI伙伴，在LINE上提供营养建议、运动计划和正念练习，帮助您过上最健康的生活。",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.aiAom).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - 您在LINE上的健康生活教练",
        description: "添加Aom，您充满活力的21岁健康AI伙伴，她通过多种语言为您提供营养建议、运动计划和正念练习，激励您保持健康。",
        images: metadataLink(LanguageCode.zh, MetaLinks.aiAom).twitter.images,
    },
}
