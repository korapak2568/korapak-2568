import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404ZH: Metadata = {
    title: "404 - 页面未找到",
    description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.zh, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - 页面未找到",
        description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
        images: metadataLink(LanguageCode.zh, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - 页面未找到",
        description: "糟糕！我们找不到您正在寻找的页面。请检查URL或返回我们的主页以继续探索CHORN。",
        images: metadataLink(LanguageCode.zh, MetaLinks._404).twitter.images,
    },
}