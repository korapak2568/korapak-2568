import {Metadata} from "next";
import {MetadataLinkReact} from "@/data/metadata/pages/frontend/react/common/MetadataLinkReact";

export const MetadataReactZH: Metadata = {
    title: "React开发服务 | CHORN",
    description: "顶级的React开发技术专长，使用React构建动态和响应式的用户界面。",
    alternates: MetadataLinkReact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React开发 | CHORN",
        description: "通过React开发专家技术提升您的Web应用，打造高性能的应用程序。",
        images: MetadataLinkReact.openGraph.images,
        url: MetadataLinkReact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React开发服务 | CHORN",
        description: "专家级React开发技术，使用React创建互动性强的用户界面。",
        images: MetadataLinkReact.twitter.images,
    },
    keywords: [
        "React开发", "React技术专长", "React开发人员", "定制React开发", "React.js应用",
        "React全栈开发", "React单页应用", "React用户界面", "定制Web应用",
        "定制软件开发",
        "可扩展Web应用", "前端开发", "高性能Web应用",
        "动态用户界面", "单页应用", "React.js开发人员",
        "React开发人员 中国", "React开发人员 北京", "React开发人员 上海", "前端开发人员 中国",
        "Web开发人员 北京", "软件工程师", "软件开发人员 中国",
        "CHORN", "数字创新", "企业软件"
    ]
}
