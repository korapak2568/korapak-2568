import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentJA: Metadata = {
    title: "ウェブ開発サービス | カスタムソフトウェアとテクノロジーソリューション",
    description: "CHORNのウェブ開発技術的専門知識を探索してください。Next.js、React、Angular、Vueなどの技術を含む専門知識を提供します。CHORNは、デジタルマーケティング、ブロックチェーン、Eコマースなどのさまざまな分野で企業向けのカスタマイズされたソリューションを提供します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "トップウェブ開発サービス | CHORN",
        description: "CHORNはNext.js、React、Angularなどの人気のあるフレームワークに精通した最先端のウェブ開発技術的専門知識を提供します。CHORNは、デジタルマーケティング、Eコマース、ブロックチェーンなどの多様なビジネスニーズに対応します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.webDevelopment).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "ウェブ開発サービス | CHORN",
        description: "Next.jsからAngularまで、CHORNの専門的なウェブ開発技術を発見してください。CHORNは、デジタルマーケティング、ブロックチェーン、Eコマースなど、すべてのビジネスニーズに対応するソリューションを提供します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.webDevelopment).twitter.images
    },
    keywords: [
        "ウェブ開発", "ウェブ開発技術", "ウェブ開発者", "カスタムウェブ開発",
        "レスポンシブウェブ開発", "動的ウェブサイト", "企業向けウェブ開発",
        "スケーラブルなウェブアプリケーション", "カスタムウェブアプリケーション", "カスタムソフトウェア開発",
        "シニアフルスタックウェブ開発者", "プリンシパルウェブ開発者", "シニア.NET Core Angularウェブ開発者",
        "シニアReact Node.jsウェブ開発者", "プリンシパルReact Java開発者", "シニアAngular Spring Boot開発者",
        "プリンシパルPHP Laravelウェブ開発者", "シニアウェブ開発者", "NET Coreウェブ開発", "Reactウェブ開発",
        "Angularウェブ開発", "Vue.jsウェブ開発", "Node.jsウェブ開発", "Java Spring Bootウェブ開発",
        "PHP Laravelウェブ開発", "カスタムReactウェブ開発", "企業向けAngularウェブ開発",
        "タイのウェブ開発者", "バンコクのウェブ開発者", "チェンマイのウェブ開発者",
        "タイのシニアウェブ開発者", "タイのプリンシパルウェブ開発者", "タイのバックエンド開発者",
        "タイのフロントエンド開発者", "タイのソフトウェアエンジニア", "CHORN", "デジタル革新", "企業ソフトウェア", "スケーラブルなウェブアプリケーション"
    ]
}