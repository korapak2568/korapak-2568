import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainJA: Metadata = {
    title: "エンタープライズDevOpsおよびクラウドソリューション | CHORN",
    description: "DevOpsおよびクラウドの専門知識を活用して、デジタルトランスフォーメーションを加速します。効率的なCI/CDパイプライン、インフラの自動化、および信頼性を向上させ、マーケット投入までの時間を短縮するクラウドネイティブソリューションを提供します。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "エンタープライズDevOpsおよびクラウドソリューション | CHORN",
        description: "DevOpsおよびクラウドの専門知識を活用して、デジタルトランスフォーメーションを加速します。効率的なCI/CDパイプライン、インフラの自動化、および信頼性を向上させ、マーケット投入までの時間を短縮するクラウドネイティブソリューションを提供します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "エンタープライズDevOpsおよびクラウドソリューション | CHORN",
        description: "DevOpsおよびクラウドの専門知識を活用して、デジタルトランスフォーメーションを加速します。効率的なCI/CDパイプライン、インフラの自動化、および信頼性を向上させ、マーケット投入までの時間を短縮するクラウドネイティブソリューションを提供します。",
        images: metadataLink(LanguageCode.ja, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "DevOpsの専門知識", "ソフトウェアテスト", "継続的インテグレーション", "CI/CDパイプライン", "自動化テスト",
        "クラウドベースのソリューション", "カスタムソフトウェア開発", "DevOpsコンサルティング", "ソフトウェア品質保証",
        "パフォーマンステスト", "負荷テスト", "セキュリティテスト", "テストの自動化", "DevOpsタイランド",
        "DevOpsエンジニア", "タイランドでのテストの専門知識", "ITインフラ管理", "ソフトウェア開発ライフサイクル",
        "ソフトウェア開発者タイランド", "DevOpsツール", "スケーラブルなアプリケーション", "ソフトウェアテストソリューション",
        "フルスタック開発者", "クラウドインフラ"
    ],
}
