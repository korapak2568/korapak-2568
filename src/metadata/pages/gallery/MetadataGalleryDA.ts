import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryDA: Metadata = {
    title: "Internationale Rejser | CHORN Galleri",
    description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: metadataLink(LanguageCode.da, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: metadataLink(LanguageCode.da, MetaLinks.gallery).twitter.images,
    },
}
