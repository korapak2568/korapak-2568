import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyNL: Metadata = {
    title: "Werkbeleid | CHORN",
    description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.nl, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Werkbeleid | CHORN",
        description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
        images: metadataLink(LanguageCode.nl, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.workplacePolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Werkbeleid | CHORN",
        description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
        images: metadataLink(LanguageCode.nl, MetaLinks.workplacePolicy).twitter.images,
    },
}