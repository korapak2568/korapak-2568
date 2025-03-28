import {Metadata} from "next";
import {MetadataLinkKube} from "@/data/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeNL: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-gebaseerde DevOps-technische expertise voor het automatiseren van de implementatie, schaling en het beheer van containerized applicaties.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimaliseer uw infrastructuur met Kubernetes-gebaseerde DevOps-technische expertise voor geautomatiseerde schaalvergroting en beheer van applicaties.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Maak gebruik van Kubernetes DevOps-expertise om containerized applicaties automatisch te schalen en te beheren.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technische expertise", "containerorchestratie", "CHORN", "DevOps",
        "schalend applicatiebeheer", "geautomatiseerde schaling", "DevOps Nederland", "cloud-native applicaties"
    ]
};
