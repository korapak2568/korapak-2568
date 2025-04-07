import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const VueJA: IFrontEndStack = {
    title: "Vue",
    description: "Vueの直感的で柔軟な設計により、モダンでリアクティブなウェブインターフェースを迅速に作成できます。",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Vue.jsフレームワークを表すロゴ",
    readMore: "さらに多くのVueJSフロントエンド開発ソリューションを探索する",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue開発",
            description: "Vue.jsは、ユーザーインターフェースを構築するためのプログレッシブJavaScriptフレームワークです。段階的に採用可能なように設計されており、コアライブラリはビューレイヤーに焦点を当てています。",
            list: []
        },
        {
            title: "Vueの強み",
            description: "Vue.jsは、主要な強みを持つ柔軟で高性能なフレームワークを提供します。",
            list: [
                "リアクティブなデータバインディング",
                "コンポーネントベースの構造",
                "仮想DOM",
                "容易な統合",
                "包括的なドキュメント",
                "Vue CLI",
                "活発なコミュニティ"
            ]
        },
        {
            title: "課題と解決策",
            description: "Vue.jsは、直感的なAPI、リアクティブなデータバインディング、そして統合の容易さによってウェブ開発を簡素化します。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Vue.jsとは何ですか？",
            answer: "Vue.jsは、ユーザーインターフェースを構築するためのプログレッシブJavaScriptフレームワークです。"
        },
        {
            question: "仮想DOMとは何ですか？",
            answer: "仮想DOMは実際のDOMの軽量コピーであり、更新とパフォーマンスを最適化します。"
        },
        {
            question: "Vue.jsはReactとどう違いますか？",
            answer: "Vue.jsは、Reactのより複雑なセットアップと比較して、より柔軟でシンプルな統合を提供します。"
        }
    ]
}