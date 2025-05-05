import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerFR: Metadata = {
    title: "Services Docker DevOps | CHORN",
    description: "Expertise technique en DevOps basée sur Docker pour une conteneurisation efficace et un déploiement d’applications évolutif.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services Docker DevOps | CHORN",
        description: "Exploitez Docker pour la conteneurisation et le déploiement évolutif de logiciels avec une expertise en DevOps.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services Docker DevOps | CHORN",
        description: "Expertise en DevOps Docker pour la conteneurisation et le déploiement évolutif d’applications.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Expertise Docker", "Conteneurisation", "CHORN", "DevOps", "Déploiement évolutif",
        "Développement de logiciels sur mesure", "Applications cloud", "DevOps France", "Conteneurs Docker"
    ]
};
