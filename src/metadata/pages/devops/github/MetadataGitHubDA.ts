import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubDA: Metadata = {
    title: "GitHub DevOps-tjenester | CHORN",
    description: "DevOps teknisk ekspertise, der integrerer GitHub til versionskontrol, kontinuerlig integration og automatiserede workflows.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-tjenester | CHORN",
        description: "Forbedr din udviklingsworkflow med GitHub-baseret DevOps teknisk ekspertise til CI/CD og versionskontrol.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-tjenester | CHORN",
        description: "Strømlign din udvikling med GitHub DevOps teknisk ekspertise til versionskontrol og CI/CD workflows.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub teknisk ekspertise", "versionskontrol", "CI/CD", "DevOps", "tilpasset softwareudvikling",
        "kontinuerlig integration", "DevOps Danmark", "GitHub automatisering", "softwareudviklingsworkflow"
    ]
};
