import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpKO: Metadata = {
    title: "PHP 풀 스택 개발 | CHORN",
    description: "PHP 풀 스택 개발, 동적이고 확장 가능한 웹 애플리케이션을 구축하기 위한 기술 전문성.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP 개발 | CHORN",
        description: "PHP 풀 스택 개발을 활용한 확장 가능하고 동적인 웹 애플리케이션 구축 기술 전문성.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.backend.php).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP 풀 스택 개발 | CHORN",
        description: "동적이고 확장 가능한 웹 애플리케이션을 위한 PHP 풀 스택 개발 기술 전문성.",
        images: metadataLink(LanguageCode.ko, MetaLinks.backend.php).twitter.images,
    },
    keywords: [
        "PHP 개발", "PHP 기술 전문성", "PHP 개발자", "맞춤형 PHP 개발", "PHP 웹 애플리케이션",
        "PHP 풀 스택 개발", "기업용 PHP 애플리케이션", "맞춤형 소프트웨어 개발",
        "Symfony 개발", "Laravel 개발", "Yii Framework 개발", "Phalcon 개발",
        "맞춤형 Symfony 개발", "맞춤형 Laravel 개발", "맞춤형 Yii 개발", "맞춤형 Phalcon 개발",
        "확장 가능한 웹 애플리케이션", "백엔드 개발", "고성능 웹 애플리케이션",
        "맞춤형 웹 애플리케이션", "API 개발", "기업 소프트웨어", "PHP 프레임워크",
        "PHP 개발자 태국", "PHP 개발자 방콕", "PHP 개발자 치앙마이",
        "백엔드 개발자 태국", "풀 스택 개발자 태국", "소프트웨어 엔지니어", "소프트웨어 개발자 태국",
        "CHORN", "디지털 혁신", "기업 소프트웨어"
    ]
}