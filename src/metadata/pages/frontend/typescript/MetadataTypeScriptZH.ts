import {Metadata} from "next";
import {MetadataLinkTypeScript} from "@/metadata/pages/frontend/typescript/common/MetadataLinkTypeScript";

export const MetadataTypeScriptZH: Metadata = {
    title: "TypeScript | CHORN - 定制软件开发专家",
    description: "利用TypeScript为不同行业的企业构建可扩展、稳健且高效的定制软件解决方案。",
    alternates: MetadataLinkTypeScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - 使用TypeScript进行定制软件开发",
        description: "TypeScript专业知识，强大的工具，用于构建可扩展和高性能的应用程序。了解为什么我们为定制软件解决方案选择TypeScript。",
        images: MetadataLinkTypeScript.openGraph.images,
        url: MetadataLinkTypeScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - 为定制软件解决方案开发TypeScript",
        description: "使用TypeScript为企业需求提供可扩展和高质量的软件解决方案。",
        images: MetadataLinkTypeScript.twitter.images,
    },
    keywords: [
        "TypeScript开发", "TypeScript技术专长", "TypeScript开发人员", "定制TypeScript开发",
        "TypeScript Web应用", "TypeScript全栈开发", "TypeScript前端开发",
        "定制软件开发",
        "可扩展的Web应用", "前端开发", "后端开发",
        "高性能应用", "企业软件解决方案", "定制Web应用", "API开发",
        "TypeScript开发人员 泰国", "TypeScript开发人员 曼谷", "TypeScript开发人员 清迈",
        "前端开发人员 泰国", "后端开发人员 泰国", "全栈开发人员 泰国",
        "软件工程师", "软件开发人员 泰国",
        "CHORN", "数字创新", "企业软件"
    ]
}
