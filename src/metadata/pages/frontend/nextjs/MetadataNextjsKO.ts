import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsKO: Metadata = {
    title: "Next.js 개발 서비스 | CHORN",
    description: "Next.js 개발 서비스, Next.js를 사용하여 웹 애플리케이션을 확장 가능하고 고성능 솔루션으로 향상시키세요.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js 개발 | CHORN",
        description: "Next.js 개발 전문 기술로 빠르고 확장 가능한 웹 애플리케이션을 만듭니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.nextjs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js 개발 서비스 | CHORN",
        description: "Next.js 개발 전문 기술로 웹 애플리케이션을 향상시키세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Next.js 개발", "Next.js 기술 전문성", "Next.js 개발자", "맞춤형 Next.js 개발", "서버 사이드 렌더링",
        "Next.js 풀 스택 개발", "Next.js SEO 최적화", "Next.js 애플리케이션", "맞춤형 웹 애플리케이션",
        "확장 가능한 웹 애플리케이션", "프론트엔드 개발", "고성능 웹 애플리케이션",
        "싱글 페이지 애플리케이션", "동적 사용자 인터페이스", "풀 스택 개발자", "맞춤형 소프트웨어 개발",
        "Next.js 개발자 한국", "Next.js 개발자 서울", "Next.js 개발자 부산", "프론트엔드 개발자 한국",
        "웹 개발자 서울", "소프트웨어 엔지니어", "소프트웨어 개발자 한국",
        "CHORN", "디지털 혁신", "기업용 소프트웨어"
    ]
}
