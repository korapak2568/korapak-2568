import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyFI: Metadata = {
    title: "Työskentelykäytäntö | CHORN",
    description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
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
        title: "Työskentelykäytäntö | CHORN",
        description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Työskentelykäytäntö | CHORN",
        description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}