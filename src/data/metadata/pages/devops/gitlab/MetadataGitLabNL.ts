import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/data/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabNL: Metadata = {
    title: "GitLab DevOps Diensten | CHORN",
    description: "DevOps technische expertise die GitLab integreert voor versiebeheer, continue integratie en geautomatiseerde workflows.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps Diensten | CHORN",
        description: "Verbeter uw ontwikkelworkflow met DevOps technische expertise op basis van GitLab voor CI/CD en versiebeheer.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Diensten | CHORN",
        description: "Optimaliseer uw ontwikkeling met GitLab DevOps technische expertise voor versiebeheer en CI/CD workflows.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab technische expertise", "CI/CD", "versiebeheer", "DevOps", "automatisering", "DevOps pijplijn",
        "DevOps Nederland", "GitLab automatisering", "continue integratie"
    ]
};
