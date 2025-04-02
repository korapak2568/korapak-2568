import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyFR: Metadata = {
    title: "Politique de travail | CHORN",
    description: "CHORN s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Politique de travail | CHORN",
        description: "CHORN s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Politique de travail | CHORN",
        description: "CHORN s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}