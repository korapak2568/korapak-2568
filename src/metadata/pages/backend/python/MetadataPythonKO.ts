import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonKO: Metadata = {
    title: "Python Full Stack 개발 | CHORN",
    description: "Python Full Stack 개발, 동적이고 확장 가능한 웹 애플리케이션을 구축하기 위한 기술 전문성.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python 개발 | CHORN",
        description: "Python Full Stack 개발 기술 전문성을 통해 동적이고 확장 가능한 웹 애플리케이션을 구축하세요.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack 개발 | CHORN",
        description: "동적이고 확장 가능한 웹 애플리케이션을 위한 Python Full Stack 개발 기술 전문성.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Python 개발", "Python 기술 전문성", "Python 개발자", "맞춤형 Python 개발", "Python 웹 애플리케이션",
        "Python 백엔드 개발", "Python Full Stack 개발", "맞춤형 소프트웨어 개발",
        "확장 가능한 웹 애플리케이션", "백엔드 개발", "기업용 Python 애플리케이션",
        "고성능 애플리케이션", "맞춤형 웹 애플리케이션", "API 개발", "기계 학습 개발",
        "Python 개발자 태국", "Python 개발자 방콕", "Python 개발자 치앙마이",
        "백엔드 개발자 태국", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업용 소프트웨어"
    ]
}
