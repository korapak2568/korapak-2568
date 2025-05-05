import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanZH: Metadata = {
    title: "使用Postman的API测试服务 | CHORN",
    description: "提供使用Postman进行API测试的技术专长，确保您的Web技术的可靠性和性能。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "使用Postman的API测试服务 | CHORN",
        description: "通过基于Postman的API测试技术专长，确保您的API按预期功能运行。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.postman).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "使用Postman的API测试服务 | CHORN",
        description: "基于Postman的API测试技术专长，验证您的Web技术的可靠性和性能。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "使用Postman进行API测试", "Postman技术专长", "API测试", "DevOps", "自动化API测试", "CHORN",
        "Web技术测试", "API性能", "定制软件开发", "DevOps 中国"
    ]
}
