import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const NextjsJA: IFrontEndStack = {
    title: "NextJS",
    description: "シームレスなサーバーサイドレンダリングと静的サイト生成により、Reactアプリケーションのパフォーマンスを最適化します。",
    image: ImageUrl.frontendThumbnails.nextjs.path,
    alt: "Next.jsフレームワークを表すロゴ",
    readMore: "NextJSフロントエンド開発ソリューションをさらに探る",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "NextJS開発",
            description: "Next.jsは、サーバーサイドレンダリングと静的サイト生成を提供する主要なReactフレームワークで、最小限の設定で高性能でSEOに優しいWebアプリケーションを提供します。現代のWeb開発ニーズに最適です。",
            list: []
        },
        {
            title: "NextJSの強み",
            description: "NextJSは堅牢な機能で際立っています",
            list: [
                "サーバーサイドレンダリング",
                "静的サイト生成",
                "自動コード分割",
                "APIルート",
                "インクリメンタル静的再生成",
                "組み込みCSSとSassサポート",
                "優れた開発者体験"
            ]
        },
        {
            title: "課題と解決策",
            description: "Next.jsは、パフォーマンス、スケーラビリティ、SEOのためのソリューションを提供することで、Web開発の課題に取り組み、最適なアプリケーション配信を確保します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Next.jsとは何ですか？",
            answer: "Next.jsは、最適化されたWebアプリケーションのためにサーバーサイドレンダリングと静的サイト生成を提供するReactフレームワークです。"
        },
        {
            question: "Next.jsのサーバーサイドレンダリングはどのようにパフォーマンスを向上させますか？",
            answer: "サーバーサイドレンダリングは、サーバー上でページを事前にレンダリングすることでクライアントサイドのレンダリング時間を短縮し、パフォーマンスを向上させます。"
        },
        {
            question: "Next.jsの静的サイト生成とは何ですか？",
            answer: "静的サイト生成は、ビルド時にページを事前にレンダリングし、高速な読み込み時間と改善されたSEOを提供します。"
        }
    ]
}