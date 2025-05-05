import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoJA: Metadata = {
    title: "Goフルスタック開発 | CHORN",
    description: "Goフルスタック開発、効率的でスケーラブルなウェブアプリケーションを構築するための技術的専門知識。",
    alternates: metadataLink(LanguageCode.ja, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go開発 | CHORN",
        description: "Goフルスタック開発の技術的専門知識で、効率的でスケーラブルなウェブアプリケーションを構築。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.backend.go).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Goフルスタック開発 | CHORN",
        description: "効率的でスケーラブルなウェブアプリケーションのためのGoフルスタック開発の専門技術。",
        images: metadataLink(LanguageCode.ja, MetaLinks.backend.go).twitter.images,
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
