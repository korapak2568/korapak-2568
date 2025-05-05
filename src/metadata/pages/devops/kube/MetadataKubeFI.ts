import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeFI: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "Kubernetes-pohjainen DevOps-asiantuntemus konttien käyttöönoton, skaalaamisen ja hallinnan automatisoimiseksi.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimoi infrastruktuurisi Kubernetes-pohjaisella DevOps-asiantuntemuksella sovellusten automaattiselle skaalaamiselle ja hallinnalle.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Hyödynnä Kubernetes DevOps-asiantuntemusta konttien hallinnan ja skaalaamisen automatisointiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes asiantuntemus", "konttien orkestrointi", "CHORN", "DevOps",
        "skaalautuva sovellushallinta", "automaattinen skaalaus", "DevOps Suomi", "cloud-native sovellukset"
    ]
};
