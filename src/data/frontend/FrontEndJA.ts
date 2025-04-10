import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {VueJA} from "@/data/frontend/frameworks/vue/VueJA";
import {TypeScriptJA} from "@/data/frontend/frameworks/typescript/TypeScriptJA";
import {ReactJA} from "@/data/frontend/frameworks/react/ReactJA";
import {NextjsJA} from "@/data/frontend/frameworks/nextjs/NextjsJA";
import {JavaScriptJA} from "@/data/frontend/frameworks/javascript/JavaScriptJA";
import {Html5JA} from "@/data/frontend/frameworks/html5/Html5JA";
import {Css3JA} from "@/data/frontend/frameworks/css3/Css3JA";
import {AngularJA} from "@/data/frontend/frameworks/angular/AngularJA";

export const FrontEndJA: IFrontEnd = {
    title: "フロントエンド開発",
    span: "フロントエンド開発経験",
    subTitle: "",

    angular: AngularJA,
    css3: Css3JA,
    html5: Html5JA,
    nextjs: NextjsJA,
    react: ReactJA,
    typescript: TypeScriptJA,
    vue: VueJA,
    javascript: JavaScriptJA,

    stacks: [
        NextjsJA,
        ReactJA,
        AngularJA,
        VueJA,
        JavaScriptJA,
        TypeScriptJA,
        Html5JA,
        Css3JA
    ],

    services: {
        title: "フロントエンド開発",
        descriptions: [
            "フロントエンド開発は、ユーザーとデジタルサービスの間の重要なインターフェースであり、ユーザー体験を定義する視覚的要素とインタラクティブなコンポーネントを作成します。この不可欠な層は、複雑なバックエンドシステムを直感的でアクセスしやすいインターフェースに変換し、視聴者を惹きつけ、ビジネスの成長を促進します。Next.js、React、Angular、Vue.jsなどの最新フレームワークと、HTML5やCSS3などの基本的なウェブ技術により、あらゆるデバイスで迅速に読み込まれ、シームレスに応答する高性能アプリケーションが可能になります。効果的なフロントエンドソリューションは、ビジネス目標とユーザーニーズの両方を満たす一貫した専門的なデジタル体験を通じて、ユーザーエンゲージメントを向上させ、コンバージョン率を改善し、ブランド認知を強化します。"
        ],
        items: [
            {
                title: "最新フレームワークの実装",
                description: "Next.jsやReactなどの最先端フレームワークを使用した動的でインタラクティブなウェブアプリケーションで、最適なパフォーマンス、応答性、および向上したユーザー体験を提供します。"
            },
            {
                title: "SEO最適化",
                description: "最適化されたコード構造、高速読み込み時間、モバイルフレンドリーなデザインを通じて、Googleやその他の検索エンジンでのウェブサイトの可視性を向上させ、オーガニックトラフィックを促進し、獲得コストを削減します。"
            },
            {
                title: "概念実証（PoC）開発",
                description: "機能的なプロトタイプを通じて革新的なアイデアを迅速に検証し、リスクを軽減し、本格的な投資前に利害関係者がコンセプトを視覚化できるようにします。"
            },
            {
                title: "最小実行可能製品（MVP）の作成",
                description: "初期ユーザーを引き付け、貴重なフィードバックを生成し、市場での存在感を確立しながら潜在的な投資家にアピールする、機能完備でスケーラブルな初期バージョン。"
            },
            {
                title: "UI/UXデザイン",
                description: "ユーザー中心の設計原則とアクセシビリティ基準を通じて、エンゲージメントを高め、直帰率を減少させ、コンバージョンを増加させる直感的で美しいインターフェース。"
            }
        ]
    }
}