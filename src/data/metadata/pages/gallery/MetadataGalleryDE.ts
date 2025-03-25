import {Metadata} from "next";
import { MetadataLinkGallery } from "./common/MetadataLinkGallery";

export const MetadataGalleryDE: Metadata = {
    title: "Internationale Reisen | CHORN Galerie",
    description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Internationale Reisen | CHORN Galerie",
        description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Internationale Reisen | CHORN Galerie",
        description: "CHORN verfügt über die Erfahrung und Bereitschaft für internationale Reisen, um Schulungen zu erhalten und aus der Arbeit in ASEAN und den Vereinigten Staaten zu lernen.",
        images: MetadataLinkGallery.twitter.images,
    },
}