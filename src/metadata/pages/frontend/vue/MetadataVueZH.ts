import {Metadata} from "next";
import {MetadataLinkVue} from "@/metadata/pages/frontend/vue/common/MetadataLinkVue";

export const MetadataVueZH: Metadata = {
    title: "Vue.js 开发服务 | CHORN",
    description: "专注于 Vue.js 开发，创建互动性强且可扩展的 Web 应用程序。",
    alternates: MetadataLinkVue.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js 开发 | CHORN",
        description: "Vue.js 开发专业技术，用于构建现代 Web 应用程序。",
        images: MetadataLinkVue.openGraph.images,
        url: MetadataLinkVue.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js 开发服务 | CHORN",
        description: "通过 Vue.js 开发技术增强您的 Web 应用程序。",
        images: MetadataLinkVue.twitter.images,
    },
    keywords: [
        "Vue.js 开发", "Vue.js 专业技术", "Vue.js 开发者", "定制 Vue.js 开发", "Vue.js 应用程序",
        "Vue.js 全栈开发", "Vue.js 单页面应用", "Vue.js 用户界面", "定制 Web 应用程序",
        "定制软件开发",
        "可扩展的 Web 应用程序", "前端开发", "高性能 Web 应用程序",
        "动态用户界面", "单页面应用", "Vue.js 开发者",
        "Vue.js 开发者 泰国", "Vue.js 开发者 曼谷", "Vue.js 开发者 清迈", "前端开发者 泰国",
        "Web 开发者 曼谷", "软件工程师", "软件开发者 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}