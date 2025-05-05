import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoKO: Metadata = {
    title: "Go 풀 스택 개발 | CHORN",
    description: "효율적이고 확장 가능한 웹 애플리케이션을 구축하기 위한 Go 풀 스택 개발, 기술적 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go 개발 | CHORN",
        description: "Go 풀 스택 개발의 기술적 전문성을 통해 효율적이고 확장 가능한 웹 애플리케이션을 구축하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.backend.go).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go 풀 스택 개발 | CHORN",
        description: "효율적이고 확장 가능한 웹 애플리케이션을 위한 Go 풀 스택 개발의 전문성.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.go).twitter.images,
    },
    keywords: [
        "Go-lang 개발", "Go 기술 전문성", "Go 개발자", "맞춤형 Go-lang 개발", "Go 웹 애플리케이션",
        "Go 백엔드 개발", "Go 마이크로서비스", "맞춤형 소프트웨어 개발",
        "확장 가능한 웹 애플리케이션", "백엔드 개발", "고성능 애플리케이션",
        "마이크로서비스 개발", "클라우드 네이티브 개발", "API 개발", "엔터프라이즈 소프트웨어",
        "Go 개발자 태국", "Go 개발자 방콕", "Go 개발자 치앙마이", "백엔드 개발자 태국",
        "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "엔터프라이즈 소프트웨어"
    ]
}