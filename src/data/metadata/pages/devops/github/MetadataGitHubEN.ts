import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/data/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubEN: Metadata = {
    title: "GitHub DevOps Services | CHORN",
    description: "DevOps technical expertise integrating GitHub for version control, continuous integration, and automated workflows.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps Services | CHORN",
        description: "Enhance your development workflow with GitHub-based DevOps technical expertise for CI/CD and version control.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps Services | CHORN",
        description: "Streamline your development with GitHub DevOps technical expertise for version control and CI/CD workflows.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technical expertise", "version control", "CI/CD", "DevOps", "custom software development",
        "continuous integration", "DevOps thailand", "GitHub automation", "software development workflow"
    ]
}