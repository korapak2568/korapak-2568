import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueKO: Metadata = {
    title: "Vue.js 개발 서비스 | CHORN",
    description: "Vue.js 개발 전문으로, 상호작용적이고 확장 가능한 웹 애플리케이션을 만듭니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js 개발 | CHORN",
        description: "Vue.js 개발 전문, 최신 웹 애플리케이션을 구축하기 위한 기술적 전문성.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js 개발 서비스 | CHORN",
        description: "Vue.js 개발 전문성을 통해 웹 애플리케이션을 향상시키세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js 개발", "Vue.js 기술 전문성", "Vue.js 개발자", "맞춤형 Vue.js 개발", "Vue.js 애플리케이션",
        "Vue.js 풀스택 개발", "Vue.js 싱글 페이지 애플리케이션", "Vue.js 사용자 인터페이스", "맞춤형 웹 애플리케이션",
        "맞춤형 소프트웨어 개발",
        "확장 가능한 웹 애플리케이션", "프론트엔드 개발", "고성능 웹 애플리케이션",
        "동적 사용자 인터페이스", "싱글 페이지 애플리케이션", "Vue.js 개발자",
        "Vue.js 개발자 태국", "Vue.js 개발자 방콕", "Vue.js 개발자 치앙마이", "프론트엔드 개발자 태국",
        "웹 개발자 방콕", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}