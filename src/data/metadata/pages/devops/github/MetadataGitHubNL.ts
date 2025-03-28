import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/data/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubNL: Metadata = {
    title: "GitHub DevOps-diensten | CHORN",
    description: "DevOps-technische expertise die GitHub integreert voor versiebeheer, continue integratie en geautomatiseerde workflows.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-diensten | CHORN",
        description: "Verbeter uw ontwikkelingsworkflow met GitHub-gebaseerde DevOps-expertise voor CI/CD en versiebeheer.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-diensten | CHORN",
        description: "Optimaliseer uw ontwikkeling met GitHub DevOps-expertise voor versiebeheer en CI/CD-workflows.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technische expertise", "versiebeheer", "CI/CD", "DevOps", "op maat gemaakte softwareontwikkeling",
        "continue integratie", "DevOps Nederland", "GitHub automatisering", "softwareontwikkelingsworkflow"
    ]
};
