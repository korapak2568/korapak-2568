import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyJA: Metadata = {
    title: "プライバシーポリシー | CHORN",
    description: "CHORNはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkPrivacyPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "プライバシーポリシー | CHORN",
        description: "CHORNはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "プライバシーポリシー | CHORN",
        description: "CHORNはお客様のプライバシーを尊重し、個人データの保護に努めています。本プライバシーポリシーでは、Webサイトの利用時におけるデータの取り扱い方法と、分析目的でのクッキーの使用について説明します。",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}