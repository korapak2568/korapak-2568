import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabKO: Metadata = {
    title: "GitLab DevOps 서비스 | CHORN",
    description: "GitLab을 통합하여 버전 관리, 지속적인 통합 및 자동화된 워크플로우를 위한 DevOps 기술 전문 지식.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps 서비스 | CHORN",
        description: "GitLab 기반의 DevOps 기술 전문 지식을 통해 CI/CD 및 버전 관리로 개발 워크플로우를 향상시킵니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.gitlab).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps 서비스 | CHORN",
        description: "GitLab DevOps 기술 전문 지식을 활용하여 버전 관리 및 CI/CD 워크플로우로 개발을 최적화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab 기술 전문 지식", "CI/CD", "버전 관리", "DevOps", "자동화", "DevOps 파이프라인",
        "DevOps 한국", "GitLab 자동화", "지속적인 통합"
    ]
};
