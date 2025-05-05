import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404JA: Metadata = {
    title: "404 - ページが見つかりません",
    description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ja, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - ページが見つかりません",
        description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
        images: metadataLink(LanguageCode.ja, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - ページが見つかりません",
        description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
        images: metadataLink(LanguageCode.ja, MetaLinks._404).twitter.images,
    },
}