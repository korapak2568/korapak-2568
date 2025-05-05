import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeZH: Metadata = {
    title: "Kubernetes DevOps 服务 | CHORN",
    description: "基于 Kubernetes 的 DevOps 技术专长，用于自动化容器化应用程序的部署、扩展和管理。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps 服务 | CHORN",
        description: "利用基于 Kubernetes 的 DevOps 技术专长，优化基础设施，实现应用程序的自动化扩展和管理。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.kube).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps 服务 | CHORN",
        description: "利用 Kubernetes DevOps 专业知识自动化并管理可扩展的容器化应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes 技术专长", "容器编排", "CHORN", "DevOps",
        "可扩展应用程序管理", "自动化扩展", "DevOps 中国", "云原生应用"
    ]
};
