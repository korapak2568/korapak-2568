import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3ZH: Metadata = {
    title: "CSS3 开发服务 | CHORN",
    description: "利用 CSS3 开发技术增强您的 Web 应用程序，提供现代和视觉吸引力的设计。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 开发 | CHORN",
        description: "使用 CSS3 技术开发，创建时尚且响应迅速的 Web 设计。",
        images: metadataLink(LanguageCode.zh, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 开发服务 | CHORN",
        description: "通过提供 CSS3 开发技术，创建视觉上令人惊叹的 Web 设计。",
        images: metadataLink(LanguageCode.zh, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3 开发", "CSS3 技术专长", "CSS3 开发人员", "定制 CSS3 开发", "响应式设计 CSS3",
        "CSS3 Web 应用程序", "CSS3 移动开发", "定制 Web 应用程序", "跨平台应用 CSS3",
        "定制软件开发",
        "Web 开发", "高性能 Web 设计", "动态用户界面",
        "CSS3 开发人员 泰国", "CSS3 开发人员 曼谷", "CSS3 开发人员 清迈", "前端开发人员 泰国",
        "Web 开发人员 曼谷", "软件工程师", "软件开发人员 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
