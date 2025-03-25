import {Metadata} from "next";
import {MetadataLinkGallery} from "@/data/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryDA: Metadata = {
    title: "Internationale Rejser | CHORN Galleri",
    description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: MetadataLinkGallery.twitter.images,
    },
}
