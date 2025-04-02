import {Metadata} from "next";
import {MetadataLinkHtml5} from "@/metadata/pages/frontend/html5/common/MetadataLinkHtml5";

export const MetadataHtml5ZH: Metadata = {
    title: "HTML5开发服务 | CHORN",
    description: "HTML5开发技术专长，打造响应式和互动性强的网页应用程序。",
    alternates: MetadataLinkHtml5.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5开发 | CHORN",
        description: "利用技术专长构建现代且互动性强的网页应用程序。",
        images: MetadataLinkHtml5.openGraph.images,
        url: MetadataLinkHtml5.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5开发服务 | CHORN",
        description: "使用HTML5技术专长创建互动网页应用程序。",
        images: MetadataLinkHtml5.twitter.images,
    },
    keywords: [
        "HTML5开发", "HTML5技术专长", "HTML5开发者", "定制HTML5开发", "HTML5响应式设计",
        "HTML5网页应用", "HTML5移动开发", "定制网页应用", "HTML5跨平台应用",
        "定制软件开发",
        "单页应用", "前端开发", "网页开发者", "可扩展的网页应用",
        "高性能网页设计", "响应式网页设计", "动态用户界面",
        "HTML5开发者泰国", "HTML5开发者曼谷", "HTML5开发者清迈", "前端开发者泰国",
        "网页开发者曼谷", "软件工程师", "软件开发者泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
