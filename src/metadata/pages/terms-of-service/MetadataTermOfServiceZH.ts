import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceZH: Metadata = {
    title: "服务条款 | CHORN",
    description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.zh, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "服务条款 | CHORN",
        description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
        images: metadataLink(LanguageCode.zh, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "服务条款 | CHORN",
        description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
        images: metadataLink(LanguageCode.zh, MetaLinks.termOfServices).twitter.images,
    },
}