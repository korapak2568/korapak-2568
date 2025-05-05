import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsKO: Metadata = {
    title: "Jenkins DevOps 서비스 | CHORN",
    description: "Jenkins 기반 DevOps 기술 전문성을 통해 개발 파이프라인에서 빌드, 테스트 및 배포를 자동화합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps 서비스 | CHORN",
        description: "Jenkins 기반 DevOps 기술 전문성을 활용하여 지속적인 통합 및 배포를 자동화하여 개발 프로세스를 최적화합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps 서비스 | CHORN",
        description: "CHORN의 Jenkins 기반 DevOps 기술 전문성을 통해 CI/CD 자동화를 위한 소프트웨어 개발 주기를 개선하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins 기술 전문성", "CI/CD 자동화", "DevOps", "지속적 통합", "DevOps 한국",
        "Jenkins 파이프라인", "자동화된 테스트", "빌드 자동화", "맞춤형 소프트웨어 개발"
    ]
};
