import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyJA: Metadata = {
    title: "勤務ポリシー | CHORN",
    description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ja, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "勤務ポリシー | CHORN",
        description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.workplacePolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "勤務ポリシー | CHORN",
        description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.workplacePolicy).twitter.images,
    },
}