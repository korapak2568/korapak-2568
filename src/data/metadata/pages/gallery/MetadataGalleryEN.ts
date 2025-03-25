import {Metadata} from "next";
import {MetadataLinkGallery} from "@/data/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryEN: Metadata = {
    title: "International Travel | CHORN Gallery",
    description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "International Travel | CHORN Gallery",
        description: "CHORN has the experience and readiness for international travel to receive training and learn from work in ASEAN and the United States.",
        images: MetadataLinkGallery.twitter.images,
    },
}