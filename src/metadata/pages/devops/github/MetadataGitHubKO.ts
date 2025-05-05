import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubKO: Metadata = {
    title: "GitHub DevOps 서비스 | CHORN",
    description: "버전 관리, 지속적인 통합 및 자동화된 워크플로를 위한 GitHub 통합 DevOps 기술 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps 서비스 | CHORN",
        description: "CI/CD 및 버전 관리를 위한 GitHub 기반 DevOps 기술 전문성으로 개발 워크플로를 개선하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps 서비스 | CHORN",
        description: "GitHub DevOps 기술 전문성으로 버전 관리 및 CI/CD 워크플로를 간소화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub 기술 전문성", "버전 관리", "CI/CD", "DevOps", "맞춤형 소프트웨어 개발",
        "지속적인 통합", "DevOps 한국", "GitHub 자동화", "소프트웨어 개발 워크플로"
    ]
};
