import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/data/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabDE: Metadata = {
    title: "GitLab DevOps Dienste | CHORN",
    description: "DevOps technische Expertise, die GitLab für Versionskontrolle, kontinuierliche Integration und automatisierte Workflows integriert.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Dienste | CHORN",
        description: "Verbessern Sie Ihren Entwicklungsworkflow mit DevOps-Technik-Expertise auf Basis von GitLab für CI/CD und Versionskontrolle.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Dienste | CHORN",
        description: "Optimieren Sie Ihre Entwicklung mit DevOps-Technik-Expertise auf Basis von GitLab für Versionskontrolle und CI/CD-Workflows.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technische Expertise", "CI/CD", "Versionskontrolle", "DevOps", "Automatisierung", "DevOps Pipeline",
        "DevOps Deutschland", "GitLab Automatisierung", "kontinuierliche Integration"
    ]
};
