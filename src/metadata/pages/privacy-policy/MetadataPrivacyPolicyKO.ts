import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyKO: Metadata = {
    title: "개인정보 보호정책 | CHORN",
    description: "CHORN은 귀하의 개인정보를 존중하며 보호하기 위해 최선을 다하고 있습니다. 본 개인정보 보호정책은 웹사이트 이용 시 데이터 처리 방식 및 분석 목적으로 쿠키 사용에 대해 설명합니다.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ko, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "개인정보 보호정책 | CHORN",
        description: "CHORN은 귀하의 개인정보를 존중하며 보호하기 위해 최선을 다하고 있습니다. 본 개인정보 보호정책은 웹사이트 이용 시 데이터 처리 방식 및 분석 목적으로 쿠키 사용에 대해 설명합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "개인정보 보호정책 | CHORN",
        description: "CHORN은 귀하의 개인정보를 존중하며 보호하기 위해 최선을 다하고 있습니다. 본 개인정보 보호정책은 웹사이트 이용 시 데이터 처리 방식 및 분석 목적으로 쿠키 사용에 대해 설명합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.privacyPolicy).twitter.images,
    },
}
