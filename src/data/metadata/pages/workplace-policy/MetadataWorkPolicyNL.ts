import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyNL: Metadata = {
    title: "Werkbeleid | CHORN",
    description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
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
        title: "Werkbeleid | CHORN",
        description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Werkbeleid | CHORN",
        description: "CHORN past zich aan verschillende werkmodellen aan, waaronder werken op afstand, op kantoor en hybride werken, afgestemd op de specifieke behoeften van elk project. Deze aanpak zorgt voor naadloze communicatie en efficiëntie.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}