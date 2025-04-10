import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Css3JA: IFrontEndStack = {
    title: "CSS3",
    description: "CSS3を使用した高度なスタイリング技術でウェブサイトの外観を強化します。",
    image: ImageUrl.frontend.frameworks.css3.thumbnail,
    alt: "CSS3技術を表すロゴ",
    readMore: "CSS3フロントエンド開発ソリューションをさらに探る",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3レスポンシブデザイン",
            description: "CSS3はカスケーディングスタイルシートの最新の進化であり、ウェブページの視覚的表現を向上させるための高度な機能を提供します。",
            list: []
        },
        {
            title: "CSS3の強み",
            description: "CSS3はウェブ開発に最新のスタイリング機能をもたらします。",
            list: [
                "高度なセレクタ",
                "フレックスボックスレイアウト",
                "グリッドレイアウト",
                "アニメーションとトランジション",
                "メディアクエリ",
                "カスタムプロパティ",
                "改良された文字組み"
            ]
        },
        {
            title: "課題と解決策",
            description: "CSS3は強力な新機能により、レスポンシブで視覚的に魅力的なウェブデザインの需要に応えます。",
            list: []
        }
    ],
    faqs: [
        {
            question: "CSS3とは何ですか？",
            answer: "CSS3はカスケーディングスタイルシートの最新バージョンで、ウェブスタイリングのための新機能を提供します。"
        },
        {
            question: "メディアクエリとは何ですか？",
            answer: "メディアクエリはデバイスの特性に基づいてスタイルを適用することで、レスポンシブデザインを可能にします。"
        },
        {
            question: "Flexboxレイアウトとは何ですか？",
            answer: "Flexboxレイアウトは、レイアウトの設計、スペースの分配、アイテムの配置をより効率的に行う方法を提供します。"
        },
        {
            question: "人気のCSSフレームワークは何ですか？",
            answer: "人気のCSSフレームワークはBootstrap、Tailwind CSS、Bulma、Foundation、Materializeです。"
        }
    ]
}