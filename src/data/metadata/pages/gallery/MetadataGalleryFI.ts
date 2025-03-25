import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryFI: Metadata = {
    title: "Kansainväliset Matkat | CHORN Galleria",
    description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kansainväliset Matkat | CHORN Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kansainväliset Matkat | CHORN Galleria",
        description: "CHORNilla on kokemus ja valmius kansainvälisiin matkoihin koulutuksen saamiseksi ja työstä oppimiseen ASEAN-maissa ja Yhdysvalloissa.",
        images: MetadataLinkAbout.twitter.images,
    },
}