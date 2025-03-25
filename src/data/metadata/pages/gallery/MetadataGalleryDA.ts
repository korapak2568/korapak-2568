import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryDA: Metadata = {
    title: "Internationale Rejser | CHORN Galleri",
    description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Rejser | CHORN Galleri",
        description: "CHORN har erfaring og beredskab til internationale rejser for at modtage træning og lære af arbejde i ASEAN og USA.",
        images: MetadataLinkAbout.twitter.images,
    },
}
