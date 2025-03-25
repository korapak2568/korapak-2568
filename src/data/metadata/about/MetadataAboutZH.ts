import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/about/common/MetadataLinkAbout";

export const MetadataAboutZH: Metadata = {
    title: "关于 CHORN | 系统分析与全栈软件开发工程",
    description: "探索 CHORN 在系统分析、全栈开发和推动企业成功的现代软件解决方案方面的专业知识。",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - 系统分析与全栈软件开发工程专家",
        description: "探索 CHORN 致力于为企业提供尖端系统现代化、全栈开发和技术支持的承诺。",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - 领先的系统分析与全栈软件开发工程",
        description: "通过 CHORN 的高级系统分析、全栈开发和现代软件解决方案释放企业潜力。",
        images: MetadataLinkAbout.twitter.images,
    },
}