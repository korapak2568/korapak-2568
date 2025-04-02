import {Metadata} from "next";
import {MetadataLinkKube} from "@/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeEN: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-based DevOps technical expertise for automating deployment, scaling, and management of containerized applications.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimize your infrastructure with Kubernetes DevOps technical expertise for automated scaling and management of applications.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Leverage Kubernetes DevOps expertise for automating and managing scalable containerized applications.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technical expertise", "container orchestration", "CHORN", "DevOps",
        "scalable application management", "automated scaling", "DevOps thailand", "cloud-native applications"
    ]
}