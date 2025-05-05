import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabEN: Metadata = {
    title: "GitLab DevOps Services | CHORN",
    description: "DevOps technical expertise integrating GitLab for version control, continuous integration, and automated workflows.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Services | CHORN",
        description: "Enhance your development workflow with GitLab-based DevOps technical expertise for CI/CD and version control.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.gitlab).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Services | CHORN",
        description: "Streamline your development with GitLab DevOps technical expertise for version control and CI/CD workflows.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technical expertise", "CI/CD", "version control", "DevOps", "automation", "DevOps pipeline",
        "DevOps thailand", "GitLab automation", "continuous integration"
    ]
}