import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainKO: Metadata = {
    title: "프론트엔드 개발 서비스 | CHORN",
    description: "CHORN은 Next.js, React, Angular, Vue, HTML5, CSS3와 같은 최신 프레임워크를 활용한 전문적인 프론트엔드 개발 서비스를 제공합니다. 최신 기술로 반응형 및 확장 가능한 웹사이트를 구축하세요.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "프론트엔드 개발 서비스 | CHORN",
        description: "CHORN은 Next.js, React, Angular, Vue, HTML5, CSS3 등의 최신 기술을 활용하여 빠르고 반응형이며 확장 가능한 웹사이트를 구축하는 프론트엔드 개발 전문성을 제공합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "프론트엔드 개발 서비스 | CHORN",
        description: "CHORN의 프론트엔드 개발 전문성을 활용하여 Next.js, React, Angular, Vue, HTML5, CSS3를 사용한 반응형 및 확장 가능한 웹사이트를 구축하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "프론트엔드 개발", "프론트엔드 기술 전문성", "프론트엔드 개발자", "맞춤형 프론트엔드 개발",
        "동적 사용자 인터페이스", "싱글 페이지 애플리케이션", "반응형 웹 디자인",
        "고성능 프론트엔드 애플리케이션", "맞춤형 소프트웨어 개발",
        "React 개발", "Angular 개발", "Vue.js 개발", "Next.js 프론트엔드 개발",
        "React.js 개발", "맞춤형 Angular 프론트엔드 개발", "React.js 프론트엔드 애플리케이션",
        "Vue.js 프론트엔드 기술 전문성", "맞춤형 Vue.js 개발",
        "프론트엔드 개발자 한국", "웹 개발자 한국", "소프트웨어 엔지니어 한국",
        "CHORN", "디지털 혁신", "기업 소프트웨어", "확장 가능한 웹 애플리케이션"
    ]
}