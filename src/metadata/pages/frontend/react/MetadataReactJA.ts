import {Metadata} from "next";
import {MetadataLinkReact} from "@/metadata/pages/frontend/react/common/MetadataLinkReact";

export const MetadataReactJA: Metadata = {
    title: "React開発サービス | CHORN",
    description: "高度な技術力を持つReact開発サービス、Reactを使用して動的でレスポンシブなユーザーインターフェースを構築します。",
    alternates: MetadataLinkReact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React開発 | CHORN",
        description: "専門的なReact開発技術を活用し、迅速でスケーラブルなウェブアプリケーションを構築します。",
        images: MetadataLinkReact.openGraph.images,
        url: MetadataLinkReact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React開発サービス | CHORN",
        description: "Reactの専門技術を活用し、魅力的なユーザーインターフェースを作成します。",
        images: MetadataLinkReact.twitter.images,
    },
    keywords: [
        "React開発", "React技術力", "React開発者", "カスタムReact開発", "React.jsアプリケーション",
        "Reactフルスタック開発", "Reactシングルページアプリケーション", "Reactユーザーインターフェース", "カスタムウェブアプリケーション",
        "カスタムソフトウェア開発",
        "スケーラブルなウェブアプリケーション", "フロントエンド開発", "高性能ウェブアプリケーション",
        "動的なユーザーインターフェース", "シングルページアプリケーション", "React.js開発者",
        "React開発者 日本", "React開発者 東京", "React開発者 大阪", "フロントエンド開発者 日本",
        "ウェブ開発者 東京", "ソフトウェアエンジニア", "ソフトウェア開発者 日本",
        "CHORN", "デジタルイノベーション", "企業向けソフトウェア"
    ]
}
