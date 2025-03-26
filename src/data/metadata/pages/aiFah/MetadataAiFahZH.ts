import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/data/metadata/pages/aiFah/common/MetadataLinkAiFah";

export const MetadataAiFahZH: Metadata = {
    title: "AI聊天助手 | CHORN AI集成",
    description: "Fah是您在LINE应用上的AI聊天好友。她是一位20岁的泰国风格伙伴，性格开朗且容易接近。只需一键添加或扫描她的二维码，即可发现泰国的热门目的地、美食和文化瑰宝。她能使用多种语言与您交流，并以青春活力带您探索泰国文化。",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "遇见Fah - 您在LINE上的泰国AI聊天伙伴",
        description: "遇见Fah，您在LINE上的20岁泰国AI好友，推荐泰国的最佳目的地、美食和文化体验，支持多种语言。立即添加她吧！",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - 您在LINE上的泰国文化向导",
        description: "添加Fah，这位20岁性格开朗的泰国AI伙伴，她将帮助您用多种语言探索泰国的目的地、美食和文化。",
        images: MetadataLinkAiFah.twitter.images,
    },
}