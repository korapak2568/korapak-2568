import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsZH: Metadata = {
    title: "Jenkins DevOps 服务 | CHORN",
    description: "基于 Jenkins 的 DevOps 技术专长，用于自动化构建、测试和部署，优化您的开发流水线。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps 服务 | CHORN",
        description: "利用 Jenkins 的 DevOps 技术专长自动化您的开发流程，实现持续集成和部署。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps 服务 | CHORN",
        description: "通过 CHORN 的 Jenkins DevOps 技术专长，增强您的软件开发生命周期，自动化 CI/CD 流程。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins 技术专长", "CI/CD 自动化", "DevOps", "持续集成", "DevOps 中国",
        "Jenkins 流水线", "自动化测试", "构建自动化", "定制软件开发"
    ]
};
