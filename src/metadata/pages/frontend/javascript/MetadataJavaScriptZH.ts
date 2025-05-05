import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptZH: Metadata = {
    title: "JavaScript | CHORN - 定制软件开发专家",
    description: "利用JavaScript构建可扩展、强大且高效的定制软件解决方案，服务于各行业的企业。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript定制软件开发",
        description: "JavaScript专业知识，构建可扩展和高性能应用程序的强大工具。了解我们为何选择JavaScript作为定制软件解决方案的工具。",
        images: metadataLink(LanguageCode.zh, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.frontend.javascript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - 定制软件解决方案的JavaScript开发",
        description: "使用JavaScript提供可扩展和高质量的定制软件解决方案，以满足企业的需求。",
        images: metadataLink(LanguageCode.zh, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "JavaScript开发", "JavaScript技术专长", "JavaScript开发人员", "定制JavaScript开发",
        "JavaScript网页应用程序", "JavaScript全栈开发", "JavaScript前端开发",
        "定制软件开发",
        "可扩展的网页应用程序", "前端开发", "后端开发",
        "高性能应用程序", "企业软件解决方案", "定制网页应用程序", "API开发",
        "JavaScript开发人员 泰国", "JavaScript开发人员 曼谷", "JavaScript开发人员 清迈",
        "前端开发人员 泰国", "后端开发人员 泰国", "全栈开发人员 泰国",
        "软件工程师", "软件开发人员 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
