import {Metadata} from "next";
import {MetadataLinkAngular} from "@/metadata/pages/frontend/angular/common/MetadataLinkAngular";

export const MetadataAngularEN: Metadata = {
    title: "Angular Development Services | CHORN",
    description: "Angular development service, build dynamic, scalable, and high-performance web applications using Angular.",
    alternates: MetadataLinkAngular.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Development | CHORN",
        description: "Angular development with technical expertise to create fast, scalable, and dynamic web applications.",
        images: MetadataLinkAngular.openGraph.images,
        url: MetadataLinkAngular.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Development Services | CHORN",
        description: "Elevate your web applications with expert Angular development.",
        images: MetadataLinkAngular.twitter.images,
    },
    keywords: [
        // Core Angular & service Keywords
        "Angular development", "Angular technical-expertise", "Angular developer", "Angular development Thailand",
        "Angular development Bangkok", "Angular development Chiang Mai", "Angular development company",
        "custom Angular development", "custom software development", "enterprise Angular applications",

        // Web & Application Development Keywords
        "frontend development", "single-page applications", "dynamic user interfaces",
        "high-performance applications", "scalable web applications", "custom web applications",

        // Developer & Location-Specific Keywords
        "web developer", "full stack developer", "software engineer", "software developer Thailand",
        "Angular developer Thailand", "frontend developer Thailand", "web developer Bangkok", "Angular developer Chiang Mai",
        "Angular developer Bangkok", "Angular development company",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software",

        // Google
        "responsive web design in angular", "responsive web design angular", "angular responsive web design"
    ]
}