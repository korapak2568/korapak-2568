import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";
import {Metadata} from "next";

export const Metadata404KO: Metadata = {
    title: "404 - 페이지를 찾을 수 없습니다",
    description: "앗! 찾으시는 페이지를 찾을 수 없습니다. URL을 확인하시거나 홈페이지로 돌아가서 CHORN을 계속 탐색해 보세요.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ko, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - 페이지를 찾을 수 없습니다",
        description: "앗! 찾으시는 페이지를 찾을 수 없습니다. URL을 확인하시거나 홈페이지로 돌아가서 CHORN을 계속 탐색해 보세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - 페이지를 찾을 수 없습니다",
        description: "앗! 찾으시는 페이지를 찾을 수 없습니다. URL을 확인하시거나 홈페이지로 돌아가서 CHORN을 계속 탐색해 보세요.",
        images: metadataLink(LanguageCode.ko, MetaLinks._404).twitter.images,
    },
}