import {Metadata} from "next";
import {MetadataLinkCloudSolution} from "@/metadata/pages/cloud-solution/common/MetadataLinkCloudSolution";

export const MetadataCloudSolutionKO: Metadata = {
    title: "클라우드 솔루션 아키텍처 및 시스템 분석 | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN은 클라우드 솔루션 아키텍처 및 시스템 분석에 대한 전문 지식을 제공합니다. AWS, Azure, GCP, DigitalOcean 환경에서 성능, 확장성 및 비용 효율성을 보장하도록 클라우드 인프라를 최적화합니다.",
    alternates: MetadataLinkCloudSolution.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "클라우드 솔루션 아키텍처 및 시스템 분석 | CHORN",
        description: "CHORN의 클라우드 솔루션 아키텍처 및 시스템 분석 전문 지식을 확인하세요. AWS, Azure, GCP, DigitalOcean 환경에서 견고하고 확장 가능하며 최적화된 클라우드 솔루션을 설계합니다.",
        images: MetadataLinkCloudSolution.openGraph.images,
        url: MetadataLinkCloudSolution.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "클라우드 솔루션 아키텍처 및 시스템 분석 | CHORN",
        description: "CHORN의 클라우드 솔루션 아키텍처 및 시스템 분석 전문 지식으로 AWS, Azure, GCP 및 DigitalOcean 환경에서 클라우드 인프라를 최적화하세요.",
        images: MetadataLinkCloudSolution.twitter.images,
    },
    keywords: [
        "클라우드 솔루션 아키텍처", "시스템 분석", "AWS 아키텍처", "Azure 클라우드 솔루션",
        "GCP 아키텍처", "DigitalOcean 인프라", "클라우드 최적화", "멀티 클라우드 전략",
        "클라우드 확장성", "클라우드 인프라 설계", "클라우드 보안 분석",

        "AWS 클라우드 컨설팅", "Azure 시스템 통합", "GCP 비용 최적화", "DigitalOcean 솔루션",
        "클라우드 마이그레이션 전문 지식", "클라우드 성능 최적화", "멀티 클라우드 통합", "클라우드 네이티브 애플리케이션",

        "클라우드 아키텍트 대한민국", "AWS 아키텍트 대한민국", "Azure 아키텍트 대한민국", "GCP 아키텍트 대한민국",
        "DigitalOcean 개발자 대한민국", "시스템 분석가 대한민국", "클라우드 인프라 전문가 대한민국",

        "CHORN", "클라우드 솔루션", "디지털 혁신", "클라우드 인프라 설계", "확장 가능한 클라우드 시스템"
    ]
}