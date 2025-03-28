import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsDA: Metadata = {
    title: "Jenkins DevOps Tjenester | CHORN",
    description: "DevOps teknisk ekspertise baseret på Jenkins til automatisering af builds, tests og deployment i din udviklingspipeline.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Tjenester | CHORN",
        description: "Automatiser din udviklingsproces med Jenkins-baseret DevOps teknisk ekspertise for kontinuerlig integration og deployment.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Tjenester | CHORN",
        description: "Forbedr din softwareudviklingscyklus med Jenkins-baseret DevOps teknisk ekspertise fra CHORN til CI/CD automatisering.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins teknisk ekspertise", "CI/CD automatisering", "DevOps", "kontinuerlig integration", "DevOps Danmark",
        "Jenkins pipeline", "automatiserede tests", "build automatisering", "tilpasset softwareudvikling"
    ]
};
