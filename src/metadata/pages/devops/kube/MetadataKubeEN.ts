import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeEN: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-based DevOps technical expertise for automating deployment, scaling, and management of containerized applications.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimize your infrastructure with Kubernetes DevOps technical expertise for automated scaling and management of applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.kube).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Leverage Kubernetes DevOps expertise for automating and managing scalable containerized applications.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes technical expertise", "container orchestration", "CHORN", "DevOps",
        "scalable application management", "automated scaling", "DevOps thailand", "cloud-native applications"
    ]
}