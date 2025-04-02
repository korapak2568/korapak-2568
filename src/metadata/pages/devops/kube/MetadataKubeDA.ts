import {Metadata} from "next";
import {MetadataLinkKube} from "@/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeDA: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-baseret DevOps teknisk ekspertise til at automatisere implementering, skalering og administration af containeriserede applikationer.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimer din infrastruktur med Kubernetes-baseret DevOps teknisk ekspertise til automatisk skalering og administration af applikationer.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Udnyt Kubernetes DevOps ekspertise til automatisk at skalere og administrere containeriserede applikationer.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes teknisk ekspertise", "container orkestrering", "CHORN", "DevOps",
        "skalérbar applikationsadministration", "automatisk skalering", "DevOps Danmark", "cloud-native applikationer"
    ]
};
