// ServicePackagesJA.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesJA: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Premium Innovation Plan、Web3 Core Plan、NFT Evolution Planの3つの高優先度パッケージ。3～12ヶ月以内のローンチを目指す専任フルタイム開発向け。重要または緊急性の高いプロジェクトに最適です。",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/月",
                hourlyEquivalent: "$37.49 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、専任または常勤）",
                highlight: "MVP、システムアップグレード、スケーリング等を含む非ブロックチェーン向けフルタイムサポート。",
                features: [
                    "PoC、MVP、機能開発、スケーリング、システム再構築",
                    "主要な言語・フレームワークに対応（フロントエンド・バックエンド・API）",
                    "クラウドおよび主要データベース対応",
                    "gRPC、RPI、JMSなどのレガシー・モダンプロトコル対応"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/月",
                hourlyEquivalent: "$43.74 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、専任または常勤）",
                highlight: "トークノミクスからスマートコントラクトまで含む完全なWeb3統合開発。",
                features: [
                    "Solidity、Ethers.js、Ethereumを用いたブロックチェーン/Web3開発",
                    "スマートコントラクトの作成、監査、統合",
                    "Next.js、React、Node.jsによるフロントエンド・バックエンド構築",
                    "Airdrop、Presale、報酬システム等のトークンメカニズム"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/月",
                hourlyEquivalent: "$43.74 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、専任または常勤）",
                highlight: "NFT特化開発、既存契約のアップグレードや新規開発。",
                features: [
                    "モダンNFT開発、レガシーNFTのアップグレード",
                    "Solidityによるスマートコントラクト開発または再構築",
                    "Next.js、React、Node.jsなど主要フレームワーク対応",
                    "ERC721、ERC1155などのNFT標準とマーケットプレイスへの対応"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Essential Care Plan、Growth Support Plan、Blockchain Pioneer Planの3つの共有時間パッケージ。既存プロジェクトの継続開発またはサポート向けに設計。柔軟なスケーラビリティと明確なスケジュール付き。",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/月",
                hourlyEquivalent: "$5.625 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、共有）",
                highlight: "安定したシステム向けの長期的な信頼サポート。新機能は含まれません。",
                features: [
                    "監視、保守、技術サポート",
                    "ドキュメント更新、チーム教育支援",
                    "新機能の開発は含まれません",
                    "主要言語・データベースサポート"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/月",
                hourlyEquivalent: "$12.49 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、共有）",
                highlight: "成長中のシステム向け、継続開発を含む柔軟なサポート。",
                features: [
                    "保守＋新機能の継続開発",
                    "主要なプログラミング言語・フレームワーク対応",
                    "Web、API、カスタムプラットフォームの改善",
                    "主要クラウド・DBプラットフォーム対応"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/月",
                hourlyEquivalent: "$18.74 USD/時",
                schedule: "月〜金, 8:30〜17:30（パートタイム、共有）",
                highlight: "アクティブなニーズを持つ成長中のビジネス向けのバランスの取れた開発プラン。",
                features: [
                    "機能の継続的なアップグレードと改良のための専用時間",
                    "フロントエンドおよびバックエンドに対応したフルスタック開発",
                    "定期的な更新が必要な成長中のプラットフォームに最適",
                    "サードパーティサービスやAPIとの統合をサポート",
                    "主要なフレームワーク、データベース、クラウドプラットフォームに対応"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/月",
                hourlyEquivalent: "$24.99 USD/時給換算",
                schedule: "月〜金、8:30〜17:30（フルタイム、共有）",
                highlight: "共有モデルによる新しいブロックチェーン/Web3/NFT開発に対応。",
                features: [
                    "Web3、スマートコントラクト、NFT、Ethereumの開発支援",
                    "カスタムプラットフォーム向けフロント・バック統合",
                    "成長中のブロックチェーンプロジェクトに最適"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "スタートアップやアジャイルチーム、ブロックチェーン開発者向けの柔軟な時間制パッケージ。緊急バグ修正にも対応！",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/時給",
                hourlyEquivalent: "$40 USD/時給",
                hours: "週20～40時間",
                highlight: "パートタイムまたはフルタイムのフルスタック開発サービス。",
                features: [
                    "オンデマンドによるWeb、API、カスタム開発",
                    "あらゆる主要技術スタック対応",
                    "柔軟性を求めるチームに最適"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/時給",
                hourlyEquivalent: "$60 USD/時給",
                hours: "週20～40時間",
                highlight: "Web3企業やNFTスタートアップ向けの高度なブロックチェーンサービス。",
                features: [
                    "ブロックチェーン、スマートコントラクト、NFT、Ethereum",
                    "主要なフロント・バックエンドフレームワークに対応",
                    "カスタムプラットフォームとの統合",
                    "先進的なWeb3プロジェクトに柔軟参加"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/バグ",
                hourlyEquivalent: "$30 USD/時給換算",
                hours: "1日最大8時間確保",
                highlight: "即日対応の緊急バグ修正サービス。",
                features: [
                    "即時相談・対応",
                    "当日納品保証",
                    "外部プロジェクト向け1件単位の修正",
                    "契約不要の単発対応"
                ],
                link: "service-packages/"
            }
        ]
    }
};