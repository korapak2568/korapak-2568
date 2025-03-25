import {Metadata} from "next";
import {MetadataLinkAbout} from "@/data/metadata/about/common/MetadataLinkAbout";

export const MetadataAboutFR: Metadata = {
    title: "À propos de CHORN | Analyse de système et ingénierie de développement logiciel Full-Stack",
    description: "Découvrez l'expertise de CHORN en analyse de système, développement full-stack et solutions logicielles modernes qui favorisent le succès des entreprises.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Explorez l'engagement de CHORN à fournir une modernisation de système de pointe, un développement full-stack et un support technique pour les entreprises.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Leader en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Libérez le potentiel de votre entreprise avec l'analyse de système avancée, le développement full-stack et les solutions logicielles modernes de CHORN.",
        images: MetadataLinkAbout.twitter.images,
    },
}