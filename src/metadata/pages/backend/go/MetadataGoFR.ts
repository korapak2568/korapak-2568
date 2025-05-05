import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoFR: Metadata = {
    title: "Développement Full Stack Go | CHORN",
    description: "Développement full stack Go, expertise technique pour créer des applications web efficaces et évolutives.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement Go | CHORN",
        description: "Créez des applications web efficaces et évolutives avec l'expertise technique du développement full stack Go.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.backend.go).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement Full Stack Go | CHORN",
        description: "Expertise technique du développement full stack Go pour des applications web efficaces et évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.go).twitter.images,
    },
    keywords: [
        "Go-lang development", "Go technical-expertise", "Go developer", "custom Go-lang development", "Go web applications",
        "Go backend development", "Go microservices", "custom software development",
        "scalable web applications", "backend development", "high-performance applications",
        "microservices development", "cloud-native development", "API development", "enterprise software",
        "Go developer Thailand", "Go developer Bangkok", "Go developer Chiang Mai", "backend developer Thailand",
        "software engineer", "software developer Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
