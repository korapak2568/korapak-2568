import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainKO: Metadata = {
    title: "백엔드 API 개발 | CHORN",
    description: "최신 기술(Node.js, Java Spring Boot, .NET Core, Go, Python, PHP)을 활용한 백엔드 API 개발 서비스. 고품질 및 확장 가능한 애플리케이션을 비즈니스 요구에 맞게 구축합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "백엔드 API 개발 | CHORN",
        description: "Node.js, Java Spring Boot, .NET Core, Go, Python, PHP를 활용한 백엔드 API 개발로 고품질 및 확장 가능한 애플리케이션을 구축합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "백엔드 API 개발 | CHORN",
        description: "Node.js, Java Spring Boot, .NET Core, Go, Python, PHP를 사용하여 확장 가능한 웹 애플리케이션을 개발하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.main).twitter.images,
    },
}