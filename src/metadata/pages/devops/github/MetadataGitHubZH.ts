import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubZH: Metadata = {
    title: "GitHub DevOps 服务 | CHORN",
    description: "DevOps 技术专长，集成 GitHub 用于版本控制、持续集成和自动化工作流。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps 服务 | CHORN",
        description: "利用基于 GitHub 的 DevOps 技术专长提升您的开发工作流，支持 CI/CD 和版本控制。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps 服务 | CHORN",
        description: "使用 GitHub DevOps 技术专长简化您的开发过程，支持版本控制和 CI/CD 工作流。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub 技术专长", "版本控制", "CI/CD", "DevOps", "定制软件开发",
        "持续集成", "DevOps 中国", "GitHub 自动化", "软件开发工作流"
    ]
};
