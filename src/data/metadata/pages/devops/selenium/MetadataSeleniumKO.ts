import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/data/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumKO: Metadata = {
    title: "Selenium 테스트 서비스 | CHORN",
    description: "자동화된 테스트를 통해 애플리케이션의 품질과 성능을 보장하는 포괄적인 Selenium 테스트 기술 전문성.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium 테스트 | CHORN",
        description: "강력하고 신뢰할 수 있는 결과를 위해 Selenium 기술 전문성으로 애플리케이션 테스트를 자동화하세요.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium 테스트 서비스 | CHORN",
        description: "자동화되고 효과적인 테스트를 위해 Selenium 테스트 기술 전문성으로 애플리케이션의 품질을 향상시키세요.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium 테스트", "자동화된 테스트", "CHORN", "Cloud DevOps",
        "애플리케이션 품질 보증", "테스트 자동화", "소프트웨어 테스트",
        "품질 보증 기술 전문성", "테스트 기술 전문성", "테스트 스크립트",
        "소프트웨어 테스트 한국", "Selenium 기술 전문성", "웹 애플리케이션 테스트"
    ]
}
