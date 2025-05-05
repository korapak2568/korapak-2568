import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonZH: Metadata = {
    title: "Python 全栈开发 | CHORN",
    description: "Python 全栈开发，技术专长于构建动态且可扩展的网页应用程序。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python 开发 | CHORN",
        description: "使用 Python 全栈开发的技术专长构建动态且可扩展的网页应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.backend.python).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python 全栈开发 | CHORN",
        description: "Python 全栈开发技术专长，用于构建动态且可扩展的网页应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.python).twitter.images,
    },
    keywords: [
        "Python 开发", "Python 技术专长", "Python 开发者", "定制 Python 开发", "Python 网页应用程序",
        "Python 后端开发", "Python 全栈开发", "定制软件开发",
        "可扩展的网页应用程序", "后端开发", "企业级 Python 应用程序",
        "高性能应用程序", "定制网页应用程序", "API 开发", "机器学习开发",
        "Python 开发者 泰国", "Python 开发者 曼谷", "Python 开发者 清迈",
        "后端开发者 泰国", "软件工程师", "软件开发者 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}