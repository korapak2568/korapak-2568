import {Metadata} from "next";
import {MetadataLinkGo} from "@/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataDotnetCoreZH: Metadata = {
    title: ".NET Core C# 全栈开发 | CHORN",
    description: ".NET Core C# 全栈开发，利用技术专长构建现代化、可扩展和安全的 Web 应用程序。",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# 开发 | CHORN",
        description: "利用 .NET Core C# 全栈开发的技术专长，构建安全、可扩展和现代化的 Web 应用程序。",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# 全栈开发 | CHORN",
        description: "为现代化、可扩展的 Web 应用程序提供 .NET Core C# 全栈开发技术专长。",
        images: MetadataLinkGo.twitter.images,
    },
    keywords: [
        ".NET Core C# 开发", ".NET Core C# 技术专长", ".NET Core C# 开发者", "定制 .NET Core C# 开发",
        "企业级 .NET Core C# 应用程序", "ASP.NET Core C# 开发", ".NET Core C# Web 应用程序",
        "定制软件开发",

        "可扩展的 Web 应用程序", "后端开发", "企业软件解决方案", "全栈开发",
        "高性能应用程序", "定制 Web 应用程序", "API 开发",

        ".NET Core C# 开发者 泰国", ".NET Core C# 开发者 曼谷", ".NET Core C# 开发者 清迈",
        "后端开发者 泰国", "软件工程师", "软件开发者 泰国",

        "CHORN", "数字创新", "企业软件"
    ]
}
