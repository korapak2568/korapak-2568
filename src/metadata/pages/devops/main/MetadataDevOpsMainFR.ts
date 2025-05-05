import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainFR: Metadata = {
    title: "Solutions DevOps et Cloud pour Entreprises | CHORN",
    description: "Accélérez votre transformation numérique avec l'expertise DevOps et Cloud. Nous fournissons des pipelines CI/CD optimisés, l'automatisation de l'infrastructure et des solutions Cloud-native qui améliorent la fiabilité et réduisent le temps de mise sur le marché.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Solutions DevOps et Cloud pour Entreprises | CHORN",
        description: "Accélérez votre transformation numérique avec l'expertise DevOps et Cloud. Nous fournissons des pipelines CI/CD optimisés, l'automatisation de l'infrastructure et des solutions Cloud-native qui améliorent la fiabilité et réduisent le temps de mise sur le marché.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Solutions DevOps et Cloud pour Entreprises | CHORN",
        description: "Accélérez votre transformation numérique avec l'expertise DevOps et Cloud. Nous fournissons des pipelines CI/CD optimisés, l'automatisation de l'infrastructure et des solutions Cloud-native qui améliorent la fiabilité et réduisent le temps de mise sur le marché.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "expertise DevOps", "test logiciel", "intégration continue", "CI/CD pipeline", "test automatisé",
        "solutions basées sur le Cloud", "développement logiciel personnalisé", "consultation DevOps", "assurance qualité logiciel",
        "test de performance", "test de charge", "test de sécurité", "automatisation des tests", "DevOps Thaïlande",
        "ingénieur DevOps", "expertise en test Thaïlande", "gestion d'infrastructure IT", "cycle de vie du développement logiciel",
        "développeur logiciel Thaïlande", "outils DevOps", "applications évolutives", "solutions de test logiciel",
        "développeur full stack", "infrastructure Cloud"
    ],
}
