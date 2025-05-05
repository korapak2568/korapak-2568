import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabDA: Metadata = {
    title: "GitLab DevOps Tjenester | CHORN",
    description: "DevOps teknisk ekspertise, der integrerer GitLab til versionskontrol, kontinuerlig integration og automatiserede arbejdsprocesser.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Tjenester | CHORN",
        description: "Forbedr din udviklingsworkflow med GitLab-baseret DevOps teknisk ekspertise til CI/CD og versionskontrol.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.gitlab).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Tjenester | CHORN",
        description: "Optimer din udvikling med GitLab DevOps teknisk ekspertise til versionskontrol og CI/CD workflows.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab teknisk ekspertise", "CI/CD", "versionskontrol", "DevOps", "automatisering", "DevOps pipeline",
        "DevOps Danmark", "GitLab automatisering", "kontinuerlig integration"
    ]
};
