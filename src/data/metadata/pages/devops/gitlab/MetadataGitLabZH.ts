import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/data/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabZH: Metadata = {
    title: "GitLab DevOps 服务 | CHORN",
    description: "集成 GitLab 进行版本控制、持续集成和自动化工作流程的 DevOps 技术专业知识。",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps 服务 | CHORN",
        description: "通过 GitLab 基于 DevOps 的技术专业知识，增强您的开发工作流以进行 CI/CD 和版本控制。",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps 服务 | CHORN",
        description: "使用 GitLab DevOps 技术专业知识优化版本控制和 CI/CD 工作流。",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab 技术专业知识", "CI/CD", "版本控制", "DevOps", "自动化", "DevOps 流水线",
        "DevOps 中国", "GitLab 自动化", "持续集成"
    ]
};
