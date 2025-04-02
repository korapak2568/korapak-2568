import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubFR: Metadata = {
    title: "Services GitHub DevOps | CHORN",
    description: "Expertise technique DevOps intégrant GitHub pour le contrôle de version, l'intégration continue et les flux de travail automatisés.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services GitHub DevOps | CHORN",
        description: "Améliorez votre flux de développement avec l'expertise DevOps basée sur GitHub pour CI/CD et le contrôle de version.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services GitHub DevOps | CHORN",
        description: "Rationalisez votre développement avec l'expertise GitHub DevOps pour le contrôle de version et les flux de travail CI/CD.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "expertise technique GitHub", "contrôle de version", "CI/CD", "DevOps", "développement logiciel personnalisé",
        "intégration continue", "DevOps France", "automatisation GitHub", "flux de travail de développement logiciel"
    ]
};
