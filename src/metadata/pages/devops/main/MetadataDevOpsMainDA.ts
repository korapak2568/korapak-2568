import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainDA: Metadata = {
    title: "Cloud and DevOps Services | CHORN",
    description: "CHORN offers expert DevOps and testing technical expertise to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Cloud and DevOps Services | CHORN",
        description: "Leverage CHORN’s DevOps and testing technical expertise to enhance your software delivery with automation, continuous integration, and reliable testing solutions.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud and DevOps Services | CHORN",
        description: "Optimize your software development lifecycle with CHORN’s DevOps and testing technical expertise, including automation, CI/CD, and quality assurance testing.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.main).twitter.images,
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