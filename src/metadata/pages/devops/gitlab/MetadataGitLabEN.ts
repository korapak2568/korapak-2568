import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabEN: Metadata = {
    title: "GitLab DevOps Services | CHORN",
    description: "DevOps technical expertise integrating GitLab for version control, continuous integration, and automated workflows.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Services | CHORN",
        description: "Enhance your development workflow with GitLab-based DevOps technical expertise for CI/CD and version control.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Services | CHORN",
        description: "Streamline your development with GitLab DevOps technical expertise for version control and CI/CD workflows.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technical expertise", "CI/CD", "version control", "DevOps", "automation", "DevOps pipeline",
        "DevOps thailand", "GitLab automation", "continuous integration"
    ]
}