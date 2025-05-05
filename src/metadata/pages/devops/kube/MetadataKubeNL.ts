import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeNL: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-gebaseerde DevOps-technische expertise voor het automatiseren van de implementatie, schaling en het beheer van containerized applicaties.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimaliseer uw infrastructuur met Kubernetes-gebaseerde DevOps-technische expertise voor geautomatiseerde schaalvergroting en beheer van applicaties.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.kube).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Maak gebruik van Kubernetes DevOps-expertise om containerized applicaties automatisch te schalen en te beheren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technische expertise", "containerorchestratie", "CHORN", "DevOps",
        "schalend applicatiebeheer", "geautomatiseerde schaling", "DevOps Nederland", "cloud-native applicaties"
    ]
};
