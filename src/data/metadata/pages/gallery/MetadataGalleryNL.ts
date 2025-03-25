import {Metadata} from "next";
import {MetadataLinkGallery} from "@/data/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryNL: Metadata = {
    title: "Internationale Reizen | CHORN Galerie",
    description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: MetadataLinkGallery.twitter.images,
    },
}
