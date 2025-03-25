import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataGalleryFR: Metadata = {
    title: "Voyages Internationaux | Galerie CHORN",
    description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: MetadataLinkAbout.twitter.images,
    },
}