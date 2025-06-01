// ServicePackagesJA.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesJA: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "「Premium Innovation Plan」「Web3 Core Plan」「NFT Evolution Plan」の3つのフルタイム専用パッケージは、3〜12ヶ月以内の製品ローンチを目指す戦略的なスタートアップや企業向けに設計されています。専任の技術パートナーとしてスケーラビリティを実現し、社内エンジニアの採用負担を軽減します。",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "月〜金, 8:30〜17:30（フルタイム・専任）",
                highlight: "PoCやMVP開発、機能拡張やシステムリファクタリングを含む、非ブロックチェーン領域でのスケーラブルな開発支援。",
                features: [
                    "PoC、MVP、新機能開発、既存システムの拡張とスケーリング",
                    "主要なプログラミング言語・フレームワークに対応（フロント・バックエンド）",
                    "主要なデータベース・クラウド環境に対応",
                    "gRPC、RPI、JMSなどのモダンおよびレガシープロトコルに対応"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "月〜金, 8:30〜17:30（フルタイム・専任）",
                highlight: "SolidityやEthereumを用いたスマートコントラクト開発、トークノミクス設計を含む、Web3完全統合型ブロックチェーン開発支援。",
                features: [
                    "Solidity、Ethers.js、Ethereumを用いたブロックチェーン開発",
                    "スマートコントラクトの設計、監査、統合",
                    "Next.js、React、Node.js によるフロントエンド・バックエンド開発",
                    "エアドロップ、プレセール、報酬設計などのトークンメカニズム"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "月〜金, 8:30〜17:30（フルタイム・専任）",
                highlight: "最新のNFT開発と既存スマートコントラクトの近代化にフォーカスした専門的支援。",
                features: [
                    "モダンなNFT開発とレガシーNFT契約のアップグレード",
                    "Solidityベースのスマートコントラクト開発・改修",
                    "Next.js、React、Node.jsとの統合サポート",
                    "ERC721、ERC1155などの標準規格と主要マーケットプレイスに対応"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Essential Care、Growth Support、Blockchain Pioneerの3つのパートタイムサービスパッケージは、製品のリリース後の継続的な開発とサポートを目的として設計されています。スタートアップ、エージェンシー、技術主導のチームに最適で、フルタイムの開発者を雇用せずにスケーラブルな技術パートナーシップを提供します。",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/月",
                hourlyEquivalent: "$5.625 USD/時",
                schedule: "月〜金、8:30〜17:30（共有時間）",
                highlight: "MVP、社内ツール、初期段階のプラットフォームなど、開発ニーズが限られたシステム向けの基本的な技術サポート。",
                features: [
                    "軽量なセットアップとコア機能の調整",
                    "システム監視、軽微な修正、安定性の維持",
                    "明確なドキュメントとチームオンボーディングのための開発者ガイド",
                    "新しい複雑な機能の開発は含まれません",
                    "主要なプログラミング言語とデータベースに対応"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/月",
                hourlyEquivalent: "$12.49 USD/時",
                schedule: "月〜金、8:30〜17:30（共有時間）",
                highlight: "継続的な開発が必要でありながら、フルタイムのコミットメントを避けたい成長中の企業に最適。",
                features: [
                    "定期的なメンテナンスと中程度の機能開発",
                    "週1回のステークホルダーとの同期（1〜3人のチームメンバー）",
                    "API、プラットフォーム、社内ツールのフルスタックサポート",
                    "主要な言語、フレームワーク、データベース、クラウドプラットフォームに対応",
                    "ビジネスの成長に応じてより大きなプランへのスケーリングが可能"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/月",
                hourlyEquivalent: "$18.74 USD/時",
                schedule: "月〜金、8:30〜17:30（共有時間）",
                highlight: "Growth Supportプランよりも強力な開発フォーカスを持ち、頻繁な機能強化とステークホルダーとの協力が必要なプラットフォームに最適。",
                features: [
                    "機能のアップグレード、調整、パフォーマンス改善のための拡張された範囲",
                    "Growth Supportよりも頻繁なデリバリーサイクル（迅速なイテレーションに適しています）",
                    "週に1〜2回のステークホルダーとの同期（3〜6人）での計画とフィードバック",
                    "Web、バックエンド、サードパーティ統合にわたるフルスタックエンジニアリング",
                    "需要の高まりに対応する主要なフレームワーク、データベース、クラウドサービスをサポート"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/月",
                hourlyEquivalent: "$24.99 USD/時",
                schedule: "月〜金、8:30〜17:30（フルタイム、共有）",
                highlight: "Web3、NFT、Ethereumベースの製品イノベーションのためのエントリーレベルのブロックチェーンサポート。",
                features: [
                    "Ethereum上でのスマートコントラクトとdAppの開発",
                    "Web2/3バックエンドおよびトークンエコシステムとの統合",
                    "NFTのミント、メタデータ管理、マーケットプレイス対応",
                    "Web3体験を試行または開始する企業に最適"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "柔軟な時間制の開発パッケージ — アジャイルチーム、スタートアップ、Web3の革新者に最適なオンデマンド対応。自社開発チーム不要でスケーラビリティを確保。緊急バグ修正にも対応。",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "週20～40時間",
                highlight: "プロダクトのスケールに合わせた柔軟なフルスタック開発支援。",
                features: [
                    "カスタムソフトウェア・Web・APIのオンデマンド開発",
                    "主要な言語・フレームワークに幅広く対応",
                    "社内採用なしで即戦力エンジニアを確保可能"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "週20～40時間",
                highlight: "NFTや分散型アプリに特化したハイレベルなブロックチェーン開発。",
                features: [
                    "スマートコントラクト、NFT、Ethereum関連の開発全般",
                    "Next.js、React、Node.jsなどの統合対応",
                    "Web3ビジネスの戦略的成長をサポート"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "1日8時間確保",
                highlight: "緊急バグ対応 — 当日中に診断・修正を実施。契約不要の単発プラン。",
                features: [
                    "即時対応・当日納品",
                    "既存外部プロジェクトへの単発修正にも対応",
                    "長期契約不要",
                    "本番環境への影響を最小限に抑える緊急対応"
                ],
                link: "service-packages/"
            }
        ]
    }
};