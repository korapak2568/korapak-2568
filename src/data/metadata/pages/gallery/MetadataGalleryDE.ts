import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryDE: Metadata = {
    title: "Internationale Reisen | CHORN Galerie",
    description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Reisen | CHORN Galerie",
        description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reisen | CHORN Galerie",
        description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: MetadataLinkAbout.twitter.images,
    },
}