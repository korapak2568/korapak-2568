import {Metadata} from "next";
import {MetadataLinkNextjs} from "@/metadata/pages/frontend/nextjs/common/MetadataLinkNextjs";

export const MetadataNextjsZH: Metadata = {
    title: "Next.js开发服务 | CHORN",
    description: "专业的Next.js开发服务，使用Next.js提供可扩展、高性能的Web应用解决方案。",
    alternates: MetadataLinkNextjs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js开发 | CHORN",
        description: "专业的Next.js开发技术，构建快速、可扩展的Web应用程序。",
        images: MetadataLinkNextjs.openGraph.images,
        url: MetadataLinkNextjs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js开发服务 | CHORN",
        description: "通过Next.js开发专业技术提升您的Web应用。",
        images: MetadataLinkNextjs.twitter.images,
    },
    keywords: [
        "Next.js开发", "Next.js技术专长", "Next.js开发人员", "定制Next.js开发", "服务器端渲染",
        "Next.js全栈开发", "Next.js SEO优化", "Next.js应用程序", "定制Web应用开发",
        "可扩展的Web应用", "前端开发", "高性能Web应用",
        "单页应用", "动态用户界面", "全栈开发人员", "定制软件开发",
        "Next.js开发人员 中国", "Next.js开发人员 北京", "Next.js开发人员 上海", "前端开发人员 中国",
        "Web开发人员 北京", "软件工程师", "软件开发人员 中国",
        "CHORN", "数字创新", "企业软件"
    ]
}
