import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutKO: Metadata = {
    title: "CHORN 소개 | 시스템 분석 및 풀스택 소프트웨어 개발 엔지니어링",
    description: "비즈니스 성공을 이끄는 시스템 분석, 풀스택 개발 및 현대적인 소프트웨어 솔루션에 대한 CHORN의 전문성을 발견하세요.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - 시스템 분석 및 풀스택 소프트웨어 개발 엔지니어링 전문가",
        description: "기업을 위한 최첨단 시스템 현대화, 풀스택 개발 및 기술 지원을 제공하는 CHORN의 노력을 탐색해보세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - 시스템 분석 및 풀스택 소프트웨어 개발 엔지니어링 선도 기업",
        description: "CHORN의 고급 시스템 분석, 풀스택 개발 및 현대적인 소프트웨어 솔루션으로 비즈니스 잠재력을 발휘하세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks.about).twitter.images,
    },
}