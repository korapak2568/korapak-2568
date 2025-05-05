import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeKO: Metadata = {
    title: "Kubernetes DevOps 서비스 | CHORN",
    description: "Kubernetes 기반 DevOps 기술 전문성으로 컨테이너화된 애플리케이션의 배포, 확장 및 관리 자동화.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps 서비스 | CHORN",
        description: "Kubernetes 기반 DevOps 기술 전문성으로 애플리케이션의 자동 확장 및 관리를 최적화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps 서비스 | CHORN",
        description: "Kubernetes DevOps 전문성을 활용하여 컨테이너화된 애플리케이션을 자동으로 확장하고 관리하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes 기술 전문성", "컨테이너 오케스트레이션", "CHORN", "DevOps",
        "확장 가능한 애플리케이션 관리", "자동화된 확장", "DevOps 대한민국", "클라우드 네이티브 애플리케이션"
    ]
};
