import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIKO: Metadata = {
    title: "SoapUI 테스트 서비스 | CHORN",
    description: "SoapUI 테스트 기술 전문성을 통해 API와 웹 기술이 철저히 테스트되고 신뢰할 수 있도록 보장합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI 테스트 | CHORN",
        description: "테스트 기술 전문성을 활용하여 API와 웹 기술의 신뢰성을 보장하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI 테스트 서비스 | CHORN",
        description: "SoapUI 기술 전문성을 활용하여 종합적이고 신뢰할 수 있는 웹 서비스 테스트를 최적화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI 테스트", "API 테스트", "CHORN", "Cloud DevOps",
        "웹 서비스 테스트", "신뢰할 수 있는 테스트", "테스트 자동화",
        "품질 보증", "소프트웨어 테스트", "API 신뢰성",
        "한국의 테스트 기술 전문성", "SoapUI 기술 전문성", "웹 애플리케이션 테스트"
    ]
};
