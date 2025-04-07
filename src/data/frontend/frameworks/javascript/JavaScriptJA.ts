import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const JavaScriptJA: IFrontEndStack = {
    title: "JavaScript",
    description: "JavaScriptは、インタラクティブでレスポンシブなウェブアプリケーションの構築に広く使用されている多用途で動的なプログラミング言語です。その柔軟性と広範なエコシステムにより、現代のウェブ開発に不可欠なツールとなっています。",
    image: ImageUrl.frontendThumbnails.javascript.path,
    alt: "JavaScriptプログラミング言語を表すロゴ",
    readMore: "JavaScriptフルスタック開発ソリューションをさらに探る",
    link: "/technical-expertise/front-end-developer/javascript-developer",
    features: [
        {
            title: "JavaScript開発",
            description: "JavaScriptはウェブサイトやウェブアプリケーションの動的な動作を支え、ブラウザやフレームワークとの比類のない汎用性と互換性を提供します。",
            list: []
        },
        {
            title: "豊かなインタラクティブ体験",
            description: "JavaScriptを使用すると、開発者はインタラクティブなユーザーインターフェース、アニメーション、チャットアプリケーションなどのリアルタイム機能を作成し、魅力的なユーザー体験を提供できます。",
            list: [
                "動的なコンテンツ更新",
                "インタラクティブなウェブインターフェース",
                "アニメーションとトランジション",
                "リアルタイム機能（チャット、通知など）",
                "クロスプラットフォーム互換性"
            ]
        },
        {
            title: "広範なエコシステムとツール",
            description: "JavaScriptはReact、Angular、Vue.jsなどのライブラリやフレームワークの広大なエコシステムを誇り、開発者が堅牢なウェブアプリケーションを効率的に構築できるようにします。",
            list: []
        },
        {
            title: "Node.jsによるバックエンド開発",
            description: "JavaScriptはNode.jsを通じてバックエンド開発にも拡張され、サーバーサイドのロジックからクライアントサイドのインタラクションまで、単一の言語でフルスタック開発を実現します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "JavaScriptとは何ですか？",
            answer: "JavaScriptは、インタラクティブなウェブアプリケーション作成によく使用される動的プログラミング言語です。"
        },
        {
            question: "なぜウェブ開発にJavaScriptを使用するのですか？",
            answer: "JavaScriptは汎用性、豊富なライブラリ、ブラウザ間の互換性を提供し、ウェブ開発者にとって必須の言語となっています。"
        },
        {
            question: "JavaScriptで構築されているフレームワークには何がありますか？",
            answer: "人気のあるJavaScriptフレームワークにはReact、Angular、Vue.jsなどがあります。"
        }
    ]
}