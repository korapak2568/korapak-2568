import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsDA: Metadata = {
    title: "Jenkins DevOps Tjenester | CHORN",
    description: "DevOps teknisk ekspertise baseret på Jenkins til automatisering af builds, tests og deployment i din udviklingspipeline.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Tjenester | CHORN",
        description: "Automatiser din udviklingsproces med Jenkins-baseret DevOps teknisk ekspertise for kontinuerlig integration og deployment.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Tjenester | CHORN",
        description: "Forbedr din softwareudviklingscyklus med Jenkins-baseret DevOps teknisk ekspertise fra CHORN til CI/CD automatisering.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins teknisk ekspertise", "CI/CD automatisering", "DevOps", "kontinuerlig integration", "DevOps Danmark",
        "Jenkins pipeline", "automatiserede tests", "build automatisering", "tilpasset softwareudvikling"
    ]
};
