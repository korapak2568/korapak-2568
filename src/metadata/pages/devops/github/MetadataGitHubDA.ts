import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubDA: Metadata = {
    title: "GitHub DevOps-tjenester | CHORN",
    description: "DevOps teknisk ekspertise, der integrerer GitHub til versionskontrol, kontinuerlig integration og automatiserede workflows.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-tjenester | CHORN",
        description: "Forbedr din udviklingsworkflow med GitHub-baseret DevOps teknisk ekspertise til CI/CD og versionskontrol.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-tjenester | CHORN",
        description: "Strømlign din udvikling med GitHub DevOps teknisk ekspertise til versionskontrol og CI/CD workflows.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub teknisk ekspertise", "versionskontrol", "CI/CD", "DevOps", "tilpasset softwareudvikling",
        "kontinuerlig integration", "DevOps Danmark", "GitHub automatisering", "softwareudviklingsworkflow"
    ]
};
