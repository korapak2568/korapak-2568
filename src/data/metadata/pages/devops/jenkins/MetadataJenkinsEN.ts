import {Metadata} from "next";
import {MetadataLinkContact} from "@/data/metadata/pages/contact/common/MetadataLinkContact";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsEN: Metadata = {
    title: "Jenkins DevOps Services | CHORN",
    description: "CHORN offers Jenkins-based DevOps technical-expertise for automating builds, testing, and deployment in your development pipeline.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Services | CHORN",
        description: "Automate your development process with CHORN’s Jenkins DevOps technical-expertise for continuous integration and deployment.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Services | CHORN",
        description: "Enhance your software development lifecycle with Jenkins-based DevOps technical-expertise from CHORN for CI/CD automation.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technical-expertise", "CI/CD automation", "DevOps", "continuous integration", "DevOps thailand",
        "Jenkins pipeline", "automated testing", "build automation", "custom software development"
    ]
}