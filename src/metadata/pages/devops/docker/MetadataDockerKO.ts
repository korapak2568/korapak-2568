import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerKO: Metadata = {
    title: "Docker DevOps 서비스 | CHORN",
    description: "Docker 기반의 DevOps 기술 전문성을 활용하여 효율적인 컨테이너화 및 확장 가능한 애플리케이션 배포를 제공합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps 서비스 | CHORN",
        description: "Docker를 활용한 컨테이너화와 DevOps 기술 전문성으로 확장 가능한 소프트웨어 배포를 지원합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps 서비스 | CHORN",
        description: "Docker DevOps 기술 전문성을 활용하여 컨테이너화 및 확장 가능한 애플리케이션 배포를 지원합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker 기술 전문성", "컨테이너화", "CHORN", "DevOps", "확장 가능한 배포",
        "맞춤형 소프트웨어 개발", "클라우드 애플리케이션", "DevOps 한국", "Docker 컨테이너"
    ]
};
