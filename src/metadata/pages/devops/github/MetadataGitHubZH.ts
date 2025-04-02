import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubZH: Metadata = {
    title: "GitHub DevOps 服务 | CHORN",
    description: "DevOps 技术专长，集成 GitHub 用于版本控制、持续集成和自动化工作流。",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps 服务 | CHORN",
        description: "利用基于 GitHub 的 DevOps 技术专长提升您的开发工作流，支持 CI/CD 和版本控制。",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps 服务 | CHORN",
        description: "使用 GitHub DevOps 技术专长简化您的开发过程，支持版本控制和 CI/CD 工作流。",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub 技术专长", "版本控制", "CI/CD", "DevOps", "定制软件开发",
        "持续集成", "DevOps 中国", "GitHub 自动化", "软件开发工作流"
    ]
};
