import {Metadata} from "next";
import {MetadataLinkKube} from "@/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeDE: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-basierte DevOps-Technik für die Automatisierung der Bereitstellung, Skalierung und Verwaltung von containerisierten Anwendungen.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimieren Sie Ihre Infrastruktur mit Kubernetes-basierter DevOps-Technik für automatisierte Skalierung und Verwaltung von Anwendungen.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Nutzen Sie Kubernetes DevOps-Expertise, um containerisierte Anwendungen automatisch zu skalieren und zu verwalten.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technische Expertise", "Container-Orchestrierung", "CHORN", "DevOps",
        "skalierbare Anwendungsverwaltung", "automatisierte Skalierung", "DevOps Deutschland", "Cloud-native Anwendungen"
    ]
};
