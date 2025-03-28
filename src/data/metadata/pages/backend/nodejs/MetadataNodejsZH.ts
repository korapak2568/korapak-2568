import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/data/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsZH: Metadata = {
    title: "Go 全栈开发 | CHORN",
    description: "Go 全栈开发，构建高效且可扩展的 Web 应用程序的技术专长。",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go 开发 | CHORN",
        description: "利用 Go 全栈开发的技术专长，构建高效且可扩展的 Web 应用程序。",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go 全栈开发 | CHORN",
        description: "Go 全栈开发技术专长，构建高效且可扩展的 Web 应用程序。",
        images: MetadataLinkNodejs.twitter.images,
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