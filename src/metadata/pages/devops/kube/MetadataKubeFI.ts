import {Metadata} from "next";
import {MetadataLinkKube} from "@/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeFI: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-pohjainen DevOps-asiantuntemus konttien käyttöönoton, skaalaamisen ja hallinnan automatisoimiseksi.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimoi infrastruktuurisi Kubernetes-pohjaisella DevOps-asiantuntemuksella sovellusten automaattiselle skaalaamiselle ja hallinnalle.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Hyödynnä Kubernetes DevOps-asiantuntemusta konttien hallinnan ja skaalaamisen automatisointiin.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes asiantuntemus", "konttien orkestrointi", "CHORN", "DevOps",
        "skaalautuva sovellushallinta", "automaattinen skaalaus", "DevOps Suomi", "cloud-native sovellukset"
    ]
};
