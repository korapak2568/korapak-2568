import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyJA: Metadata = {
    title: "勤務ポリシー | CHORN",
    description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "勤務ポリシー | CHORN",
        description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "勤務ポリシー | CHORN",
        description: "CHORNは、リモートワーク、オフィス勤務、ハイブリッドなど、さまざまな勤務形態に適応し、各プロジェクトの特定のニーズに合わせて調整します。このアプローチにより、円滑なコミュニケーションと効率性が確保されます。",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}