import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabFR: Metadata = {
    title: "Services GitLab DevOps | CHORN",
    description: "Expertise technique DevOps intégrant GitLab pour le contrôle de version, l'intégration continue et les flux de travail automatisés.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services GitLab DevOps | CHORN",
        description: "Améliorez votre flux de développement avec l'expertise DevOps basée sur GitLab pour CI/CD et le contrôle de version.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services GitLab DevOps | CHORN",
        description: "Optimisez votre développement avec l'expertise DevOps GitLab pour le contrôle de version et les flux de travail CI/CD.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "expertise GitLab", "CI/CD", "contrôle de version", "DevOps", "automatisation", "pipeline DevOps",
        "DevOps France", "automatisation GitLab", "intégration continue"
    ]
};
