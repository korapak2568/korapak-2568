import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryEN: Metadata = {
    title: "International Travel | CHORN Gallery",
    description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: metadataLink(LanguageCode.en, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.gallery).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: metadataLink(LanguageCode.en, MetaLinks.gallery).twitter.images,
    },
}