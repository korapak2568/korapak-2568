import {Metadata} from "next";
import {MetadataLinkGallery} from "@/data/metadata/pages/gallery/common/MetadataLinkGallery";

export const MetadataGalleryFR: Metadata = {
    title: "Voyages Internationaux | Galerie CHORN",
    description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
    alternates: MetadataLinkGallery.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: MetadataLinkGallery.openGraph.images,
        url: MetadataLinkGallery.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: MetadataLinkGallery.twitter.images,
    },
}