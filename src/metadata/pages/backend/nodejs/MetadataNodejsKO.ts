import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsKO: Metadata = {
    title: "Node.js 풀스택 개발 | CHORN",
    description: "Node.js 풀스택 개발, 효율적이고 확장 가능한 웹 애플리케이션을 구축하기 위한 기술 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js 개발 | CHORN",
        description: "Node.js 풀스택 개발 전문성을 통해 효율적이고 확장 가능한 웹 애플리케이션 구축.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.backend.nodejs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js 풀스택 개발 | CHORN",
        description: "효율적이고 확장 가능한 웹 앱 구축을 위한 Node.js 풀스택 개발 기술력.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "Node.js 개발", "Node.js 기술 전문성", "Node.js 개발자", "맞춤형 Node.js 개발",
        "Node.js 백엔드 개발", "Node.js 풀스택 개발", "Node.js 마이크로서비스", "맞춤형 소프트웨어 개발",
        "확장 가능한 웹 애플리케이션", "백엔드 개발", "고성능 애플리케이션",
        "엔터프라이즈 Node.js 애플리케이션", "API 개발", "마이크로서비스 개발", "풀스택 개발자",
        "Node.js 개발자 태국", "Node.js 개발자 방콕", "Node.js 개발자 치앙마이",
        "백엔드 개발자 태국", "풀스택 개발자 태국", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}
