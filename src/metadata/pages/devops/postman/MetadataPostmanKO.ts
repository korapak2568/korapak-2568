import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanKO: Metadata = {
    title: "Postman API 테스트 서비스 | CHORN",
    description: "Postman을 사용한 API 테스트 기술 전문성을 제공하여 웹 기술의 신뢰성 및 성능을 보장합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API 테스트 서비스 | CHORN",
        description: "Postman 기반의 API 테스트 기술 전문성을 통해 API가 예상대로 작동하는지 확인합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.postman).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API 테스트 서비스 | CHORN",
        description: "Postman 기반 API 테스트 기술 전문성을 통해 웹 기술의 신뢰성과 성능을 검증합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API 테스트", "Postman 기술 전문성", "API 테스트", "DevOps", "자동화된 API 테스트", "CHORN",
        "웹 기술 테스트", "API 성능", "맞춤형 소프트웨어 개발", "DevOps 대한민국"
    ]
}
