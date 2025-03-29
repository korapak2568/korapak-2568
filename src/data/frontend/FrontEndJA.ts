import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueJA} from "@/data/frontend/frameworks/vue/VueJA";
import {TypeScriptJA} from "@/data/frontend/frameworks/typescript/TypeScriptJA";
import {ReactJA} from "@/data/frontend/frameworks/react/ReactJA";
import {NextjsJA} from "@/data/frontend/frameworks/nextjs/NextjsJA";
import {JavaScriptJA} from "@/data/frontend/frameworks/javascript/JavaScriptJA";
import {Html5JA} from "@/data/frontend/frameworks/html5/Html5JA";
import {Css3JA} from "@/data/frontend/frameworks/css3/Css3JA";
import {AngularJA} from "@/data/frontend/frameworks/angular/AngularJA";

export const FrontEndJA: IFrontEnd = {
    title: "フロントエンドの経験",
    span: "フロントエンド開発の経験",
    subTitle: "",

    angular: AngularJA,
    css3: Css3JA,
    html5: Html5JA,
    nextjs: NextjsJA,
    react: ReactJA,
    typescript: TypeScriptJA,
    vue: VueJA,
    javascript: JavaScriptJA,

    stacks: [],

    services: {
        title: "フロントエンド開発サービス",
        descriptions: [
            "当社の専門的なフロントエンド開発サービスで、あなたのウェブビジョンを現実に変えましょう。CHORNは、ユーザーフレンドリーで視覚的に魅力的な、完全にレスポンシブなウェブサイトを提供し、お客様のオーディエンスを惹きつけます。Next.js、React、Angular、Vue.jsなどの最新フレームワークと、HTML5やCSS3などの基本的なウェブ技術を専門としています。検索エンジン最適化された高性能なシングルページアプリケーション（SPA）や、複雑なマルチページプラットフォームが必要な場合でも、当社の開発者は質の高い結果を期限内に提供します。CHORNと提携して、訪問者を魅了し、ビジネスの成長を促進する魅力的なデジタル体験を作り出しましょう。"
        ],
        items: [
            {
                title: "最新フレームワークの実装",
                description: "Next.jsやReactなどの最先端フレームワークを使用して、最適なパフォーマンスとユーザーエクスペリエンスを提供する動的でインタラクティブなウェブアプリケーションを構築します。"
            },
            {
                title: "SEO最適化",
                description: "最適化されたコード構造、高速読み込み時間、モバイルフレンドリーなデザインを通じて、Googleやその他の検索エンジンでのウェブサイトの可視性を向上させます。"
            },
            {
                title: "概念実証（PoC）開発",
                description: "本格的な開発に取り組む前に、機能的なプロトタイプで革新的なアイデアを迅速にテストし検証します。"
            },
            {
                title: "最小実行可能製品（MVP）の作成",
                description: "初期ユーザーを惹きつけ、フィードバックを集め、潜在的な投資家を確保するために、機能が完全でスケーラブルな製品の初期バージョンを立ち上げます。"
            },
            {
                title: "UI/UXデザインの卓越性",
                description: "直感的で美しいインターフェースでユーザー満足度を高め、エンゲージメントを向上させ、離脱率を減少させ、コンバージョンを増加させます。"
            }
        ]
    }
}

FrontEndJA.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]