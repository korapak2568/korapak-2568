import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubDE: Metadata = {
    title: "GitHub DevOps-Dienste | CHORN",
    description: "Technische Expertise in DevOps, die GitHub für Versionskontrolle, kontinuierliche Integration und automatisierte Workflows integriert.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-Dienste | CHORN",
        description: "Verbessern Sie Ihren Entwicklungsworkflow mit GitHub-basierter DevOps-Expertise für CI/CD und Versionskontrolle.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-Dienste | CHORN",
        description: "Optimieren Sie Ihre Entwicklung mit GitHub DevOps-Expertise für Versionskontrolle und CI/CD-Workflows.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technische Expertise", "Versionskontrolle", "CI/CD", "DevOps", "maßgeschneiderte Softwareentwicklung",
        "kontinuierliche Integration", "DevOps Deutschland", "GitHub-Automatisierung", "Softwareentwicklungs-Workflow"
    ]
};
