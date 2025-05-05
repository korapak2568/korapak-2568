import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutEN: Metadata = {
    title: "About CHORN | System Analysis & Full-Stack Software Development Engineering",
    description: "Discover CHORN's expertise in system analysis, full-stack development, and modern software solutions that drive business success.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts in System Analysis & Full-Stack Software Development Engineering",
        description: "Explore CHORN's commitment to delivering cutting-edge system modernization, full-stack development, and technical support for businesses.",
        images: metadataLink(LanguageCode.en, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Leading System Analysis & Full-Stack Software Development Engineering",
        description: "Unlock business potential with CHORN's advanced system analysis, full-stack development, and modern software solutions.",
        images: metadataLink(LanguageCode.en, MetaLinks.about).twitter.images,
    },
}