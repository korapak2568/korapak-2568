import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryFR: Metadata = {
    title: "Voyages Internationaux | Galerie CHORN",
    description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: metadataLink(LanguageCode.fr, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.gallery).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Voyages Internationaux | Galerie CHORN",
        description: "CHORN possède l'expérience et la préparation nécessaires pour les voyages internationaux afin de recevoir une formation et d'apprendre du travail en ASEAN et aux États-Unis.",
        images: metadataLink(LanguageCode.fr, MetaLinks.gallery).twitter.images,
    },
}