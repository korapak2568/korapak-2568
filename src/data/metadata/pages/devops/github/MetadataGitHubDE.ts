import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/data/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubDE: Metadata = {
    title: "GitHub DevOps-Dienste | CHORN",
    description: "Technische Expertise in DevOps, die GitHub für Versionskontrolle, kontinuierliche Integration und automatisierte Workflows integriert.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-Dienste | CHORN",
        description: "Verbessern Sie Ihren Entwicklungsworkflow mit GitHub-basierter DevOps-Expertise für CI/CD und Versionskontrolle.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-Dienste | CHORN",
        description: "Optimieren Sie Ihre Entwicklung mit GitHub DevOps-Expertise für Versionskontrolle und CI/CD-Workflows.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technische Expertise", "Versionskontrolle", "CI/CD", "DevOps", "maßgeschneiderte Softwareentwicklung",
        "kontinuierliche Integration", "DevOps Deutschland", "GitHub-Automatisierung", "Softwareentwicklungs-Workflow"
    ]
};
