import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsKO: Metadata = {
    title: "Go 풀스택 개발 | CHORN",
    description: "효율적이고 확장 가능한 웹 애플리케이션을 구축하기 위한 Go 풀스택 개발 기술 전문성.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go 개발 | CHORN",
        description: "Go 풀스택 개발 기술 전문성을 통해 효율적이고 확장 가능한 웹 애플리케이션을 구축하세요.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go 풀스택 개발 | CHORN",
        description: "효율적이고 확장 가능한 웹 애플리케이션을 위한 Go 풀스택 개발 기술 전문성.",
        images: MetadataLinkNodejs.twitter.images,
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
