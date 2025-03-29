import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonJA} from "@/data/fullstack/frameworks/python/PythonJA";
import {PhpJA} from "@/data/fullstack/frameworks/php/PhpJA";
import {NodejsJA} from "@/data/fullstack/frameworks/nodejs/NodejsJA";
import {JavaJA} from "@/data/fullstack/frameworks/java/JavaJA";
import {GoJA} from "@/data/fullstack/frameworks/go/GoJA";
import {DotnetJA} from "@/data/fullstack/frameworks/dotnet/DotnetJA";

export const FullStackJA: IFullStack = {
    title: "バックエンドとAPIの経験",
    span: "バックエンドとAPI開発の経験",
    subTitle: "",

    dotnetcore: DotnetJA,
    go: GoJA,
    java: JavaJA,
    nodejs: NodejsJA,
    php: PhpJA,
    python: PythonJA,

    stacks: [],

    services: {
        title: "バックエンド＆API開発",
        descriptions: [
            "当社の専門的なフルスタック開発サービスで、強力で安全かつスケーラブルなウェブアプリケーションを構築しましょう。当社の開発者はフロントエンドとバックエンド技術の両方に優れており、お客様の特定のビジネス要件に合わせた包括的なソリューションを作成します。CHORNの技術的専門知識はNode.js、.NET Core C#、Java Spring Boot、Python、Go、PHPなど複数の技術スタックにまたがり、あらゆる複雑さのプロジェクトを処理することができます。初期の概念実証（PoC）を立ち上げる場合でも、市場投入準備の整った最小実行可能製品（MVP）を開発する場合でも、当社の熟練したチームはユーザーインターフェースとサーバーサイド機能間のシームレスな統合を確保し、卓越したユーザーエクスペリエンスを提供します。"
        ],
        items: [
            {
                title: "シームレスなフロントエンド＆バックエンド統合",
                description: "スピード、セキュリティ、スケーラビリティを提供する完全に同期されたクライアントとサーバーコンポーネントで一貫性のあるウェブアプリケーションを開発します。"
            },
            {
                title: "包括的なSEO＆パフォーマンス最適化",
                description: "最適化されたコード構造、より速い読み込み時間、効率的なリソース管理を通じて、ウェブサイトの検索エンジン可視性とユーザーエクスペリエンスを向上させます。"
            },
            {
                title: "堅牢な自動化テスト",
                description: "開発ライフサイクル全体に統合された包括的なテストフレームワークでアプリケーションの信頼性と安定性を確保します。"
            },
            {
                title: "高度なデータベース管理",
                description: "MySQL、MongoDB、PostgreSQLなどの主要技術を含む最適化されたデータベースソリューションで効果的にデータを構造化および管理します。"
            },
            {
                title: "エンタープライズグレードのクラウドサービス",
                description: "最適化されたインフラストラクチャ構成でAWS、Azure、Google Cloudなどのクラウドプラットフォームを使用して、アプリケーションを効率的に展開およびスケールします。"
            }
        ]
    }
}

FullStackJA.stacks = [
    FullStackJA.nodejs,
    FullStackJA.go,
    FullStackJA.java,
    FullStackJA.python,
    FullStackJA.php,
    FullStackJA.dotnetcore
]