import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeDE: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-basierte DevOps-Technik für die Automatisierung der Bereitstellung, Skalierung und Verwaltung von containerisierten Anwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimieren Sie Ihre Infrastruktur mit Kubernetes-basierter DevOps-Technik für automatisierte Skalierung und Verwaltung von Anwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Nutzen Sie Kubernetes DevOps-Expertise, um containerisierte Anwendungen automatisch zu skalieren und zu verwalten.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technische Expertise", "Container-Orchestrierung", "CHORN", "DevOps",
        "skalierbare Anwendungsverwaltung", "automatisierte Skalierung", "DevOps Deutschland", "Cloud-native Anwendungen"
    ]
};
