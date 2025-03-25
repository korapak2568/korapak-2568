import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryEN: Metadata = {
    title: "International Travel | CHORN Gallery",
    description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: MetadataLinkAbout.twitter.images,
    },
}