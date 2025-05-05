import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumKO: Metadata = {
    title: "Appium 테스트 서비스 | CHORN",
    description: "Appium 테스트 기술 전문성을 활용하여 여러 플랫폼에서 자동화된 모바일 앱 테스트를 수행하고 높은 품질의 성능을 보장합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium 테스트 | CHORN",
        description: "포괄적인 크로스 플랫폼 테스트를 위해 Appium 기술 전문성을 활용하여 모바일 앱 테스트를 자동화하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.devops.appium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium 테스트 서비스 | CHORN",
        description: "Appium 테스트 기술 전문성을 활용하여 철저하고 자동화된 크로스 플랫폼 테스트로 모바일 앱의 완벽한 성능을 보장하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appium 테스트", "모바일 앱 테스트", "CHORN", "Cloud DevOps",
        "크로스 플랫폼 테스트", "테스트 자동화", "품질 보증",
        "모바일 테스트 기술 전문성", "소프트웨어 테스트", "앱 성능",
        "한국의 테스트 기술 전문성", "Appium 기술 전문성", "모바일 애플리케이션 테스트"
    ]
};
