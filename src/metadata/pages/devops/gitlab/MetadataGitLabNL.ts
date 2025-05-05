import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabNL: Metadata = {
    title: "GitLab DevOps Diensten | CHORN",
    description: "DevOps technische expertise die GitLab integreert voor versiebeheer, continue integratie en geautomatiseerde workflows.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Diensten | CHORN",
        description: "Verbeter uw ontwikkelworkflow met DevOps technische expertise op basis van GitLab voor CI/CD en versiebeheer.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.gitlab).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Diensten | CHORN",
        description: "Optimaliseer uw ontwikkeling met GitLab DevOps technische expertise voor versiebeheer en CI/CD workflows.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technische expertise", "CI/CD", "versiebeheer", "DevOps", "automatisering", "DevOps pijplijn",
        "DevOps Nederland", "GitLab automatisering", "continue integratie"
    ]
};
