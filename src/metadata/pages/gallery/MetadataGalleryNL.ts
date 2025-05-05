import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryNL: Metadata = {
    title: "Internationale Reizen | CHORN Galerie",
    description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.gallery).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reizen | CHORN Galerie",
        description: "CHORN heeft de ervaring en bereidheid voor internationale reizen om training te ontvangen en te leren van werk in ASEAN en de Verenigde Staten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.gallery).twitter.images,
    },
}
