import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainZH: Metadata = {
    title: "企业 DevOps 和云解决方案 | CHORN",
    description: "利用 DevOps 和云的专业知识加速您的数字化转型。我们提供优化的 CI/CD 管道、基础设施自动化和 Cloud-native 解决方案，增强可靠性并减少市场上市时间。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "企业 DevOps 和云解决方案 | CHORN",
        description: "利用 DevOps 和云的专业知识加速您的数字化转型。我们提供优化的 CI/CD 管道、基础设施自动化和 Cloud-native 解决方案，增强可靠性并减少市场上市时间。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "企业 DevOps 和云解决方案 | CHORN",
        description: "利用 DevOps 和云的专业知识加速您的数字化转型。我们提供优化的 CI/CD 管道、基础设施自动化和 Cloud-native 解决方案，增强可靠性并减少市场上市时间。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "DevOps 专业知识", "软件测试", "持续集成", "CI/CD 管道", "自动化测试",
        "基于云的解决方案", "定制软件开发", "DevOps 咨询", "软件质量保证",
        "性能测试", "负载测试", "安全性测试", "测试自动化", "DevOps 泰国",
        "DevOps 工程师", "泰国测试专业知识", "IT 基础设施管理", "软件开发生命周期",
        "泰国软件开发人员", "DevOps 工具", "可扩展应用程序", "软件测试解决方案",
        "全栈开发人员", "云基础设施"
    ],
}
