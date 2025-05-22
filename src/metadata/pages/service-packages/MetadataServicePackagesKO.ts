import { Metadata } from "next";
import { metadataLink } from "@/metadata/metadataLink/metadataLink";
import { LanguageCode } from "@/data/translate/LanguageCode";
import { MetaLinks } from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesKO: Metadata = {
    title: "서비스 패키지 | 시스템 분석 및 풀스택 개발",
    description: "CHORN의 서비스 패키지를 통해 웹3, NFT 및 블록체인 개발을 포함한 고급 소프트웨어 개발을 경험하세요.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.servicePackages).alternates,
    authors: [{ name: "CHORN" }],
    openGraph: {
        title: "서비스 패키지 | 시스템 분석 및 풀스택 개발",
        description: "웹3 및 커스터마이징 개발을 위한 전담 및 공유 프로젝트 서비스.",
        images: metadataLink(LanguageCode.ko, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN 개발 서비스 패키지",
        description: "NFT, Web3, 전통 및 최신 기술에 대한 유연한 개발 서비스를 제공합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // 브랜드 관련 키워드
        "CHORN", "CHORN 맞춤 소프트웨어 개발", "CHORN 소프트웨어 아웃소싱", "CHORN이란",
        "CHORN 소프트웨어 개발 태국", "CHORN 개발자 치앙마이", "CHORN 개발자 방콕",

        // 핵심 서비스
        "맞춤형 소프트웨어 개발", "소프트웨어 아웃소싱 회사", "웹 개발 외주", "소프트웨어 개발 외주",
        "IT 개발 회사 태국", "태국 소프트웨어 아웃소싱", "치앙마이 개발자", "방콕 아웃소싱 회사",

        // 기술 직무
        "소프트웨어 엔지니어", "프론트엔드 개발자", "백엔드 개발자", "풀스택 개발자",
        "웹 개발자", "React 개발자", "Java 개발자", "Node.js 개발자", "API 개발자", "블록체인 개발자",
        "Web3 개발자", "마이크로서비스 개발", "기업용 소프트웨어",

        // 기술 및 프레임워크
        "Next.js 개발", "React.js 개발", "Spring Boot", "프론트엔드 아키텍처", "Web3 솔루션"
    ]
};