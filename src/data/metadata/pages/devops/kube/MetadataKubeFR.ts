import {Metadata} from "next";
import {MetadataLinkKube} from "@/data/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeFR: Metadata = {
    title: "Services DevOps Kubernetes | CHORN",
    description: "Expertise technique DevOps basée sur Kubernetes pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services DevOps Kubernetes | CHORN",
        description: "Optimisez votre infrastructure avec l'expertise technique DevOps basée sur Kubernetes pour la mise à l'échelle automatisée et la gestion des applications.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services DevOps Kubernetes | CHORN",
        description: "Exploitez l'expertise DevOps de Kubernetes pour automatiser et gérer des applications conteneurisées évolutives.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "DevOps Kubernetes", "expertise technique Kubernetes", "orchestration de conteneurs", "CHORN", "DevOps",
        "gestion d'applications évolutives", "mise à l'échelle automatisée", "DevOps France", "applications cloud-native"
    ]
};
