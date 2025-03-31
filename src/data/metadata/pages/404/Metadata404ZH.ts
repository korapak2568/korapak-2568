import {Metadata} from "next";
import {MetadataLink404} from "@/data/metadata/pages/404/common/MetadataLink404";

export const Metadata404ZH: Metadata = {
    title: "404 - 页面未找到",
    description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - 页面未找到",
        description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - 页面未找到",
        description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
        images: MetadataLink404.twitter.images,
    },
}