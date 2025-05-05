import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsZH: Metadata = {
    title: "Node.js 全栈开发 | CHORN",
    description: "Node.js 全栈开发，具备构建高效且可扩展 Web 应用的技术专长。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js 开发 | CHORN",
        description: "通过 Node.js 全栈开发专业知识构建高效且可扩展的 Web 应用。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.backend.nodejs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js 全栈开发 | CHORN",
        description: "提供 Node.js 全栈开发技术专长，打造高效、可扩展的 Web 应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "Node.js 开发", "Node.js 技术专长", "Node.js 开发者", "定制 Node.js 开发",
        "Node.js 后端开发", "Node.js 全栈开发", "Node.js 微服务", "定制软件开发",
        "可扩展的 Web 应用程序", "后端开发", "高性能应用程序",
        "企业级 Node.js 应用程序", "API 开发", "微服务开发", "全栈开发者",
        "Node.js 开发者 泰国", "Node.js 开发者 曼谷", "Node.js 开发者 清迈",
        "后端开发者 泰国", "全栈开发者 泰国", "软件工程师", "软件开发者 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}