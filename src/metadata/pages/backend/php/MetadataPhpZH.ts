import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpZH: Metadata = {
    title: "PHP全栈开发 | CHORN",
    description: "PHP全栈开发，技术专长于构建动态和可扩展的Web应用程序。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP开发 | CHORN",
        description: "利用PHP全栈开发，技术专长构建可扩展和动态的Web应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.backend.php).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP全栈开发 | CHORN",
        description: "PHP全栈开发技术专长，用于开发动态和可扩展的Web应用程序。",
        images: metadataLink(LanguageCode.zh, MetaLinks.backend.php).twitter.images,
    },
    keywords: [
        "PHP开发", "PHP技术专长", "PHP开发者", "定制PHP开发", "PHP Web应用程序",
        "PHP全栈开发", "企业PHP应用程序", "定制软件开发",
        "Symfony开发", "Laravel开发", "Yii框架开发", "Phalcon开发",
        "定制Symfony开发", "定制Laravel开发", "定制Yii开发", "定制Phalcon开发",
        "可扩展的Web应用程序", "后端开发", "高性能Web应用程序",
        "定制Web应用程序", "API开发", "企业软件", "PHP框架",
        "PHP开发者 泰国", "PHP开发者 曼谷", "PHP开发者 清迈",
        "后端开发者 泰国", "全栈开发者 泰国", "软件工程师", "软件开发者 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
