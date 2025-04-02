import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabDA: Metadata = {
    title: "GitLab DevOps Tjenester | CHORN",
    description: "DevOps teknisk ekspertise, der integrerer GitLab til versionskontrol, kontinuerlig integration og automatiserede arbejdsprocesser.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Tjenester | CHORN",
        description: "Forbedr din udviklingsworkflow med GitLab-baseret DevOps teknisk ekspertise til CI/CD og versionskontrol.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Tjenester | CHORN",
        description: "Optimer din udvikling med GitLab DevOps teknisk ekspertise til versionskontrol og CI/CD workflows.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab teknisk ekspertise", "CI/CD", "versionskontrol", "DevOps", "automatisering", "DevOps pipeline",
        "DevOps Danmark", "GitLab automatisering", "kontinuerlig integration"
    ]
};
