import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentKO: Metadata = {
    title: "웹 개발 서비스 | 맞춤형 소프트웨어 및 기술 솔루션",
    description: "Next.js, React, Angular, Vue 등을 포함한 CHORN의 웹 개발 기술 전문성을 확인하십시오. CHORN은 디지털 마케팅, 블록체인, 전자 상거래 등 다양한 분야에서 기업 맞춤형 솔루션을 제공합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "최고의 웹 개발 서비스 | CHORN",
        description: "CHORN은 Next.js, React, Angular 등 인기 있는 프레임워크에서 전문성을 가진 웹 개발 기술을 제공합니다. CHORN은 디지털 마케팅, 전자 상거래, 블록체인 등 다양한 비즈니스 요구를 충족시킵니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.webDevelopment).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "웹 개발 서비스 | CHORN",
        description: "CHORN의 웹 개발 기술 전문성을 확인하십시오. Next.js에서 Angular까지 다양한 프레임워크를 사용하여 CHORN은 디지털 마케팅, 블록체인, 전자 상거래 등 모든 비즈니스 요구에 대한 솔루션을 제공합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.webDevelopment).twitter.images
    },
    keywords: [
        "웹 개발", "웹 개발 기술", "웹 개발자", "맞춤형 웹 개발",
        "반응형 웹 개발", "동적 웹사이트", "기업용 웹 개발",
        "확장 가능한 웹 애플리케이션", "맞춤형 웹 애플리케이션", "맞춤형 소프트웨어 개발",
        "시니어 풀스택 웹 개발자", "프린시펄 웹 개발자", "시니어 .NET Core Angular 웹 개발자",
        "시니어 React Node.js 웹 개발자", "프린시펄 React Java 개발자", "시니어 Angular Spring Boot 개발자",
        "프린시펄 PHP Laravel 웹 개발자", "시니어 웹 개발자", ".NET Core 웹 개발", "React 웹 개발",
        "Angular 웹 개발", "Vue.js 웹 개발", "Node.js 웹 개발", "Java Spring Boot 웹 개발",
        "PHP Laravel 웹 개발", "맞춤형 React 웹 개발", "기업용 Angular 웹 개발",
        "태국 웹 개발자", "방콕 웹 개발자", "치앙마이 웹 개발자",
        "태국 시니어 웹 개발자", "태국 프린시펄 웹 개발자", "태국 백엔드 개발자",
        "태국 프론트엔드 개발자", "태국 소프트웨어 엔지니어", "CHORN", "디지털 혁신", "기업 소프트웨어", "확장 가능한 웹 애플리케이션"
    ]
}