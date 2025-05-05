import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsEN: Metadata = {
    title: "Jenkins DevOps Services | CHORN",
    description: "Jenkins-based DevOps technical expertise for automating builds, testing, and deployment in your development pipeline.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Services | CHORN",
        description: "Automate your development process with Jenkins DevOps technical expertise for continuous integration and deployment.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Services | CHORN",
        description: "Enhance your software development lifecycle with Jenkins-based DevOps technical expertise from CHORN for CI/CD automation.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technical expertise", "CI/CD automation", "DevOps", "continuous integration", "DevOps thailand",
        "Jenkins pipeline", "automated testing", "build automation", "custom software development"
    ]
}