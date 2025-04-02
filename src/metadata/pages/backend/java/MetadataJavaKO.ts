import {Metadata} from "next";
import {MetadataLinkJava} from "@/metadata/pages/backend/java/common/MetadataLinkJava";

export const MetadataJavaKO: Metadata = {
    title: "Java Spring Boot Full Stack 개발 | CHORN",
    description: "Java Spring Boot full stack 개발, 강력하고 확장 가능한 기업 애플리케이션을 구축하기 위한 기술 전문성.",
    alternates: MetadataLinkJava.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot 개발 | CHORN",
        description: "Java Spring Boot full stack 개발의 기술 전문성을 활용하여 확장 가능하고 안전하며 고성능 애플리케이션을 구축하세요.",
        images: MetadataLinkJava.openGraph.images,
        url: MetadataLinkJava.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack 개발 | CHORN",
        description: "Java Spring Boot full stack 개발의 기술 전문성으로 안전하고 확장 가능한 애플리케이션을 구축하세요.",
        images: MetadataLinkJava.twitter.images,
    },
    keywords: [
        "Spring Boot 개발", "Java Spring Boot 기술 전문성", "Spring Boot 개발자", "맞춤형 Java 개발",
        "Java Spring Boot 애플리케이션", "기업 Java 개발", "Spring Boot 마이크로서비스",
        "맞춤형 소프트웨어 개발", "확장 가능한 웹 애플리케이션", "백엔드 개발", "기업 소프트웨어 솔루션",
        "고성능 애플리케이션", "Java 웹 애플리케이션", "마이크로서비스 개발", "API 개발",
        "Spring Boot 개발자 태국", "Java 개발자 태국", "Java 개발자 방콕",
        "Java 개발자 치앙마이", "백엔드 개발자 태국", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}
