import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularKO: Metadata = {
    title: "Angular 개발 서비스 | CHORN",
    description: "Angular 개발 서비스, Angular을 사용하여 동적이고 확장 가능하며 고성능 웹 애플리케이션을 구축하세요.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular 개발 | CHORN",
        description: "빠르고 확장 가능하며 동적인 웹 애플리케이션을 구축하기 위한 전문 Angular 개발 기술.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.angular).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular 개발 서비스 | CHORN",
        description: "전문 Angular 개발로 웹 애플리케이션을 한 단계 업그레이드하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular 개발", "Angular 기술 전문성", "Angular 개발자", "Angular 개발 태국",
        "Angular 개발 방콕", "Angular 개발 치앙마이", "Angular 개발 회사",
        "맞춤형 Angular 개발", "맞춤형 소프트웨어 개발", "엔터프라이즈 Angular 애플리케이션",
        "프론트엔드 개발", "싱글 페이지 애플리케이션", "동적 사용자 인터페이스",
        "고성능 애플리케이션", "확장 가능한 웹 애플리케이션", "맞춤형 웹 애플리케이션",
        "웹 개발자", "풀스택 개발자", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "Angular 개발자 태국", "프론트엔드 개발자 태국", "웹 개발자 방콕",
        "Angular 개발자 치앙마이", "Angular 개발자 방콕", "Angular 개발 회사",
        "CHORN", "디지털 혁신", "기업 소프트웨어",
        "Angular 반응형 웹 디자인", "반응형 웹 디자인 Angular", "Angular 반응형 디자인"
    ]
}