// src/model/pages/cloud-solution/MetadataCloudSolutionEN.ts

import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionEN: Metadata = {
    title: "Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN delivers expert cloud solution architecture and system analysis technical-expertise. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Cloud Solution Architecture & Systems Analysis | CHORN",
        description: "Explore CHORN’s cloud solution architecture and systems analysis technical-expertise. We design resilient, scalable, and optimized cloud solutions across AWS, Azure, GCP, and DigitalOcean.",
        images: metadataLink(LanguageCode.en, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Solution Architecture & Systems Analysis | CHORN",
        description: "Optimize your cloud infrastructure with CHORN’s cloud solution architecture and systems analysis technical-expertise, covering AWS, Azure, GCP, and DigitalOcean.",
        images: metadataLink(LanguageCode.en, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        // Core Cloud Architecture Keywords
        "cloud solution architecture", "system analysis", "AWS architecture", "Azure cloud solutions",
        "GCP architecture", "DigitalOcean infrastructure", "cloud optimization", "multi-cloud strategies",
        "cloud scalability", "cloud infrastructure design", "cloud security analysis",

        // services-Specific Keywords
        "AWS cloud consulting", "Azure system integration", "GCP cost optimization", "DigitalOcean solutions",
        "cloud migration technical-expertise", "cloud performance tuning", "multi-cloud integration", "cloud-native applications",

        // Developer & Location-Specific Keywords
        "cloud architect Thailand", "AWS architect Thailand", "Azure architect Thailand", "GCP architect Thailand",
        "DigitalOcean developer Thailand", "system analyst Thailand", "cloud infrastructure expert Thailand",

        // Brand & Innovation Keywords
        "CHORN", "cloud solutions", "digital innovation", "cloud infrastructure design", "scalable cloud systems"
    ]
}