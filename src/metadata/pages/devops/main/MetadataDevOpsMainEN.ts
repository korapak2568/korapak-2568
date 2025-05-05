import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainEN: Metadata = {
    title: "Enterprise DevOps & Cloud Solutions | CHORN",
    description: "Accelerate your digital transformation with DevOps and cloud expertise. We deliver streamlined CI/CD pipelines, infrastructure automation, and cloud-native solutions that enhance reliability and reduce time-to-market.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Enterprise DevOps & Cloud Solutions | CHORN",
        description: "Accelerate your digital transformation with DevOps and cloud expertise. We deliver streamlined CI/CD pipelines, infrastructure automation, and cloud-native solutions that enhance reliability and reduce time-to-market.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise DevOps & Cloud Solutions | CHORN",
        description: "Accelerate your digital transformation with DevOps and cloud expertise. We deliver streamlined CI/CD pipelines, infrastructure automation, and cloud-native solutions that enhance reliability and reduce time-to-market.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "DevOps technical expertise", "software testing", "continuous integration", "CI/CD pipeline", "automated testing",
        "cloud-based solutions", "custom software development", "DevOps consulting", "software quality assurance",
        "performance testing", "load testing", "security testing", "QA automation", "DevOps thailand",
        "DevOps engineer", "testing technical expertise thailand", "IT infrastructure management", "software development lifecycle",
        "software developer thailand", "DevOps tools", "scalable applications", "software testing solutions",
        "full stack developer", "cloud infrastructure"
    ],
}