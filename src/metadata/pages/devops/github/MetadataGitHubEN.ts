import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubEN: Metadata = {
    title: "GitHub DevOps Services | CHORN",
    description: "DevOps technical expertise integrating GitHub for version control, continuous integration, and automated workflows.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps Services | CHORN",
        description: "Enhance your development workflow with GitHub-based DevOps technical expertise for CI/CD and version control.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.github).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps Services | CHORN",
        description: "Streamline your development with GitHub DevOps technical expertise for version control and CI/CD workflows.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technical expertise", "version control", "CI/CD", "DevOps", "custom software development",
        "continuous integration", "DevOps thailand", "GitHub automation", "software development workflow"
    ]
}