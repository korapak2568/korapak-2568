import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonJA} from "@/data/fullstack/frameworks/python/PythonJA";
import {PhpJA} from "@/data/fullstack/frameworks/php/PhpJA";
import {NodejsJA} from "@/data/fullstack/frameworks/nodejs/NodejsJA";
import {JavaJA} from "@/data/fullstack/frameworks/java/JavaJA";
import {GoJA} from "@/data/fullstack/frameworks/go/GoJA";
import {DotnetJA} from "@/data/fullstack/frameworks/dotnet/DotnetJA";

export const FullStackJA: IFullStack = {
    title: "バックエンド開発",
    span: "バックエンド開発の経験",
    subTitle: "",

    dotnetcore: DotnetJA,
    go: GoJA,
    java: JavaJA,
    nodejs: NodejsJA,
    php: PhpJA,
    python: PythonJA,

    stacks: [
        NodejsJA,
        GoJA,
        JavaJA,
        PythonJA,
        PhpJA,
        DotnetJA,
    ],

    services: {
        title: "バックエンド開発",
        descriptions: [
            "バックエンド開発は、強力で安全性が高く、スケーラブルなウェブアプリケーションの不可欠な基盤です。この舞台裏のシステムは、データ処理、データベース管理、セキュリティに必要であり、企業が多数のユーザーを同時に収容し、シームレスな体験を作成し、重要な情報を保護することを可能にします。対応技術には、Node.js、Java Spring Boot、Python、Go、PHP、.NET Coreが含まれ、概念実証（PoC）から市場投入可能な最小限の実行可能製品（MVP）まで、あらゆる複雑さのプロジェクトのニーズに対応できます。ユーザーインターフェースとサーバーサイド機能の円滑な統合により、ユーザーに優れた体験を提供し、企業が効率的に目標を達成するのを支援します。"
        ],
        items: [
            {
                title: "シームレスなフロントエンドとバックエンドの統合",
                description: "スピード、セキュリティ、スケーラビリティを提供する、完全に同期されたクライアントとサーバーコンポーネントを備えた一貫性のあるウェブアプリケーション。"
            },
            {
                title: "包括的なSEOとパフォーマンスの最適化",
                description: "最適化されたコード構造、より速いロード時間、効率的なリソース管理を通じて、検索エンジンの可視性とユーザー体験を向上。"
            },
            {
                title: "堅牢な自動化テスト",
                description: "開発ライフサイクル全体に統合された包括的なテストフレームワークを備えた信頼性の高い安定したアプリケーション。"
            },
            {
                title: "高度なデータベース管理",
                description: "MySQL、MongoDB、PostgreSQL、その他の主要技術を含む最適化されたデータベースソリューションにより、効果的に構造化および管理されたデータ。"
            },
            {
                title: "エンタープライズグレードのクラウドサービス",
                description: "AWS、Azure、Google Cloud、または最適化されたインフラストラクチャ構成を持つその他のクラウドプラットフォームを使用して、効率的に展開およびスケールされたアプリケーション。"
            }
        ]
    }
}