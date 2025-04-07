import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Html5JA: IFrontEndStack = {
    title: "HTML5",
    description: "リッチでインタラクティブなコンテンツのためのウェブ開発における最新の標準をマスターしましょう。",
    image: ImageUrl.frontendThumbnails.html5.path,
    alt: "HTML5テクノロジーを表すロゴ",
    readMore: "さらにHTML5フロントエンド開発ソリューションを探る",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "HTML5ウェブデザイン",
            description: "HTML5はHyperText Markup Languageの最新バージョンで、より豊かなウェブ体験のための新しい要素とAPIを導入しています。",
            list: []
        },
        {
            title: "HTML5の強み",
            description: "HTML5は最新の機能と能力でウェブ開発を強化します。",
            list: [
                "新しいセマンティック要素",
                "オーディオとビデオのサポート",
                "Canvas要素",
                "改良されたフォームコントロール",
                "オフライン機能",
                "位置情報API",
                "アクセシビリティの向上"
            ]
        },
        {
            title: "課題と解決策",
            description: "HTML5は新しい要素とAPIによって、よりインタラクティブでメディアリッチなウェブ体験のニーズに対応します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "HTML5とは何ですか？",
            answer: "HTML5はHyperText Markup Languageの最新バージョンで、新機能と要素を導入しています。"
        },
        {
            question: "新しいセマンティック要素とは何ですか？",
            answer: "新しいセマンティック要素には<article>、<section>、<header>、<footer>などがあり、コンテンツ構造を改善します。"
        },
        {
            question: "Canvas要素とは何ですか？",
            answer: "Canvas要素はJavaScriptを通じてグラフィックを描画するためのスペースを提供します。"
        }
    ]
}