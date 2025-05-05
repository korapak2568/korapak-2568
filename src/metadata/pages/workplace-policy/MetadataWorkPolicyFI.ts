import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyFI: Metadata = {
    title: "Työskentelykäytäntö | CHORN",
    description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fi, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Työskentelykäytäntö | CHORN",
        description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
        images: metadataLink(LanguageCode.fi, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Työskentelykäytäntö | CHORN",
        description: "CHORN mukautuu erilaisiin työskentelymalleihin, mukaan lukien etätyö, toimistotyö ja hybridityö, räätälöiden ne kunkin projektin erityistarpeisiin. Tämä lähestymistapa varmistaa sujuvan viestinnän ja tehokkuuden.",
        images: metadataLink(LanguageCode.fi, MetaLinks.workplacePolicy).twitter.images,
    },
}