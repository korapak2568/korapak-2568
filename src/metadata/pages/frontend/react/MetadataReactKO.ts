import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactKO: Metadata = {
    title: "React 개발 서비스 | CHORN",
    description: "기술적 전문성을 갖춘 최고의 React 개발, React를 사용하여 동적이고 반응형 사용자 인터페이스를 구축합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React 개발 | CHORN",
        description: "전문 React 개발로 웹 애플리케이션을 향상시키고, 고성능 애플리케이션을 위한 기술적 전문성을 제공합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.react).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React 개발 서비스 | CHORN",
        description: "전문 React 개발, React로 매력적인 사용자 인터페이스를 만들기 위한 기술적 전문성.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "React 개발", "React 기술 전문성", "React 개발자", "커스텀 React 개발", "React.js 애플리케이션",
        "Full-stack React 개발", "React 단일 페이지 애플리케이션", "React 사용자 인터페이스", "커스텀 웹 애플리케이션",
        "커스텀 소프트웨어 개발",
        "스케일러블 웹 애플리케이션", "프론트엔드 개발", "고성능 웹 애플리케이션",
        "동적 사용자 인터페이스", "단일 페이지 애플리케이션", "React.js 개발자",
        "React 개발자 한국", "React 개발자 서울", "React 개발자 부산", "프론트엔드 개발자 한국",
        "웹 개발자 서울", "소프트웨어 엔지니어", "소프트웨어 개발자 한국",
        "CHORN", "디지털 혁신", "엔터프라이즈 소프트웨어"
    ]
}