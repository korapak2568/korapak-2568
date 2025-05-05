import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5KO: Metadata = {
    title: "HTML5 개발 서비스 | CHORN",
    description: "반응형 및 상호작용하는 웹 애플리케이션을 만들기 위한 HTML5 개발 기술 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 개발 | CHORN",
        description: "기술 전문성으로 현대적이고 상호작용적인 웹 애플리케이션을 구축하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.html5).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 개발 서비스 | CHORN",
        description: "HTML5 기술 전문성을 바탕으로 상호작용하는 웹 애플리케이션을 만드세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "HTML5 개발", "HTML5 기술 전문성", "HTML5 개발자", "맞춤형 HTML5 개발", "HTML5 반응형 디자인",
        "HTML5 웹 애플리케이션", "HTML5 모바일 개발", "맞춤형 웹 애플리케이션", "HTML5 크로스 플랫폼 앱",
        "맞춤형 소프트웨어 개발",
        "싱글 페이지 애플리케이션", "프론트엔드 개발", "웹 개발자", "확장 가능한 웹 애플리케이션",
        "고성능 웹 디자인", "반응형 웹 디자인", "동적 사용자 인터페이스",
        "HTML5 개발자 태국", "HTML5 개발자 방콕", "HTML5 개발자 치앙마이", "프론트엔드 개발자 태국",
        "웹 개발자 방콕", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}