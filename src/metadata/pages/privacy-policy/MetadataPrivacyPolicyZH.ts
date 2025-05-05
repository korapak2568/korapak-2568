import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyZH: Metadata = {
    title: "隐私政策 | CHORN",
    description: "CHORN 尊重您的隐私，并致力于保护您的个人数据。本隐私政策解释了在使用网站时如何处理数据，以及出于分析目的使用 Cookie。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.zh, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "隐私政策 | CHORN",
        description: "CHORN 尊重您的隐私，并致力于保护您的个人数据。本隐私政策解释了在使用网站时如何处理数据，以及出于分析目的使用 Cookie。",
        images: metadataLink(LanguageCode.zh, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.privacyPolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "隐私政策 | CHORN",
        description: "CHORN 尊重您的隐私，并致力于保护您的个人数据。本隐私政策解释了在使用网站时如何处理数据，以及出于分析目的使用 Cookie。",
        images: metadataLink(LanguageCode.zh, MetaLinks.privacyPolicy).twitter.images,
    },
}