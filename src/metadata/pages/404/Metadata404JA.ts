import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404JA: Metadata = {
    title: "404 - ページが見つかりません",
    description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
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
        title: "404 - ページが見つかりません",
        description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - ページが見つかりません",
        description: "申し訳ありません！お探しのページが見つかりませんでした。URLを確認するか、ホームページに戻ってCHORNの探索を続けてください。",
        images: MetadataLink404.twitter.images,
    },
}