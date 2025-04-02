import {Metadata} from "next";
import {MetadataLinkFrontEndMain} from "@/metadata/pages/frontend/main/common/MetadataLinkFrontEndMain";

export const MetadataFrontEndMainZH: Metadata = {
    title: "前端开发服务 | CHORN",
    description: "CHORN 提供专业的前端开发技术，专注于现代框架，如 Next.js、React、Angular、Vue、HTML5 和 CSS3。利用前沿技术构建响应式、可扩展的网站。",
    alternates: MetadataLinkFrontEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "前端开发服务 | CHORN",
        description: "CHORN 提供前端开发专业技术，使用 Next.js、React、Angular、Vue、HTML5 和 CSS3 等现代技术，打造快速、响应式、可扩展的网站。",
        images: MetadataLinkFrontEndMain.openGraph.images,
        url: MetadataLinkFrontEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "前端开发服务 | CHORN",
        description: "CHORN 通过 Next.js、React、Angular、Vue、HTML5 和 CSS3 提供前端开发技术，打造响应式、可扩展的网站。",
        images: MetadataLinkFrontEndMain.twitter.images,
    },
    keywords: [
        "前端开发", "前端技术专家", "前端开发人员", "定制前端开发",
        "动态用户界面", "单页应用", "响应式网页设计",
        "高性能前端应用", "定制软件开发",
        "React 开发", "Angular 开发", "Vue.js 开发", "Next.js 前端开发",
        "React.js 开发", "定制 Angular 前端开发", "React.js 前端应用",
        "Vue.js 前端技术专家", "定制 Vue.js 开发",
        "前端开发人员中国", "网页开发人员中国", "软件工程师中国",
        "CHORN", "数字创新", "企业软件", "可扩展的 Web 应用"
    ]
}