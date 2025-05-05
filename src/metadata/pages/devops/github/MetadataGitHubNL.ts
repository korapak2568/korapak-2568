import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubNL: Metadata = {
    title: "GitHub DevOps-diensten | CHORN",
    description: "DevOps-technische expertise die GitHub integreert voor versiebeheer, continue integratie en geautomatiseerde workflows.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps-diensten | CHORN",
        description: "Verbeter uw ontwikkelingsworkflow met GitHub-gebaseerde DevOps-expertise voor CI/CD en versiebeheer.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps-diensten | CHORN",
        description: "Optimaliseer uw ontwikkeling met GitHub DevOps-expertise voor versiebeheer en CI/CD-workflows.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub technische expertise", "versiebeheer", "CI/CD", "DevOps", "op maat gemaakte softwareontwikkeling",
        "continue integratie", "DevOps Nederland", "GitHub automatisering", "softwareontwikkelingsworkflow"
    ]
};
