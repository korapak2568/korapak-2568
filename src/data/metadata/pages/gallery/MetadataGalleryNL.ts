import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryNL: Metadata = {
    title: "Internationale Reizen | CHORN Galerie",
    description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: MetadataLinkAbout.twitter.images,
    },
}
