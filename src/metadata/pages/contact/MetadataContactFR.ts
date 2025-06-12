import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactFR: Metadata = {
    title: "À propos de CHORN | Analyse de système et ingénierie de développement logiciel Full-Stack",
    description: "Découvrez l'expertise de CHORN en analyse de système, développement full-stack et solutions logicielles modernes qui favorisent le succès des entreprises.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.contact).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Explorez l'engagement de CHORN à fournir une modernisation de système de pointe, un développement full-stack et un support technique pour les entreprises.",
        images: metadataLink(LanguageCode.fr, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Leader en analyse de système et ingénierie de développement logiciel Full-Stack",
        description: "Libérez le potentiel de votre entreprise avec l'analyse de système avancée, le développement full-stack et les solutions logicielles modernes de CHORN.",
        images: metadataLink(LanguageCode.fr, MetaLinks.contact).twitter.images,
    },
}