import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDotnetCoreKO: Metadata = {
    title: ".NET Core C# 풀 스택 개발 | CHORN",
    description: ".NET Core C# 풀 스택 개발, 현대적이고 확장 가능하며 안전한 웹 애플리케이션을 구축하는 기술 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.backend.dotnetcore).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: ".NET Core C# 개발 | CHORN",
        description: ".NET Core C# 풀 스택 개발 기술 전문성을 활용하여 안전하고 확장 가능하며 현대적인 웹 애플리케이션을 구축합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.dotnetcore).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.backend.dotnetcore).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core C# 풀 스택 개발 | CHORN",
        description: ".NET Core C# 풀 스택 개발의 기술 전문성으로 현대적이고 확장 가능한 웹 애플리케이션을 개발합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.dotnetcore).twitter.images,
    },
    keywords: [
        ".NET Core C# 개발", ".NET Core C# 기술 전문성", ".NET Core C# 개발자", "맞춤형 .NET Core C# 개발",
        "기업용 .NET Core C# 애플리케이션", "ASP.NET Core C# 개발", ".NET Core C# 웹 애플리케이션",
        "맞춤형 소프트웨어 개발",

        "확장 가능한 웹 애플리케이션", "백엔드 개발", "기업 소프트웨어 솔루션", "풀 스택 개발",
        "고성능 애플리케이션", "맞춤형 웹 애플리케이션", "API 개발",

        ".NET Core C# 개발자 태국", ".NET Core C# 개발자 방콕", ".NET Core C# 개발자 치앙마이",
        "백엔드 개발자 태국", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",

        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}