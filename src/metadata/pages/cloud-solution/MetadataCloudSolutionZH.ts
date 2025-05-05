import {Metadata} from "next";
import {metadataLinkCloudSolution} from "@/metadata/metadataLink/MetadataLinkCloudSolution";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const MetadataCloudSolutionZH: Metadata = {
    title: "云解决方案架构与系统分析 | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN 提供专业的云解决方案架构与系统分析技术专长。我们在 AWS、Azure、GCP 和 DigitalOcean 上优化云基础架构，确保性能、可扩展性和成本效益。",
    alternates: metadataLinkCloudSolution(LanguageCode.zh).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "云解决方案架构与系统分析 | CHORN",
        description: "探索 CHORN 的云解决方案架构与系统分析技术专长。我们设计具有弹性、可扩展且优化的云解决方案，涵盖 AWS、Azure、GCP 和 DigitalOcean。",
        images: metadataLinkCloudSolution(LanguageCode.zh).openGraph.images,
        url: metadataLinkCloudSolution(LanguageCode.zh).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "云解决方案架构与系统分析 | CHORN",
        description: "通过 CHORN 的云解决方案架构与系统分析技术专长，优化您的云基础架构，涵盖 AWS、Azure、GCP 和 DigitalOcean。",
        images: metadataLinkCloudSolution(LanguageCode.zh).twitter.images,
    },
    keywords: [
        "云解决方案架构", "系统分析", "AWS 架构", "Azure 云解决方案",
        "GCP 架构", "DigitalOcean 基础架构", "云优化", "多云策略",
        "云扩展性", "云基础架构设计", "云安全分析",

        "AWS 云咨询", "Azure 系统集成", "GCP 成本优化", "DigitalOcean 解决方案",
        "云迁移技术专长", "云性能调优", "多云集成", "云原生应用",

        "云架构师 中国", "AWS 架构师 中国", "Azure 架构师 中国", "GCP 架构师 中国",
        "DigitalOcean 开发者 中国", "系统分析师 中国", "云基础架构专家 中国",

        "CHORN", "云解决方案", "数字创新", "云基础架构设计", "可扩展云系统"
    ]
}