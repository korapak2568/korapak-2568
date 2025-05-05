import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaZH: Metadata = {
    title: "Java Spring Boot 全栈开发 | CHORN",
    description: "Java Spring Boot 全栈开发，技术专长用于构建强大且可扩展的企业应用程序。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot 开发 | CHORN",
        description: "利用 Java Spring Boot 全栈开发的技术专长，构建可扩展、安全且高性能的应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.backend.java).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot 全栈开发 | CHORN",
        description: "Java Spring Boot 全栈开发技术专长，构建安全且可扩展的应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Spring Boot 开发", "Java Spring Boot 技术专长", "Spring Boot 开发人员", "定制 Java 开发",
        "Java Spring Boot 应用程序", "企业 Java 开发", "Spring Boot 微服务",
        "定制软件开发", "可扩展的 web 应用程序", "后端开发", "企业软件解决方案",
        "高性能应用程序", "Java web 应用程序", "微服务开发", "API 开发",
        "Spring Boot 开发人员 泰国", "Java 开发人员 泰国", "Java 开发人员 曼谷",
        "Java 开发人员 清迈", "后端开发人员 泰国", "软件工程师", "软件开发人员 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
