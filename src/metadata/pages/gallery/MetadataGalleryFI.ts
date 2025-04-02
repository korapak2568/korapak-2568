import {Metadata} from "next";
import {MetadataLinkGallery} from "@/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryFI: Metadata = {
    title: "Kansainväliset Matkat | CHORN Galleria",
    description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kansainväliset Matkat | CHORN Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kansainväliset Matkat | CHORN Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: MetadataLinkGallery.twitter.images,
    },
}