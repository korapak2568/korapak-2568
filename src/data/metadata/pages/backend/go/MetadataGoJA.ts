import {Metadata} from "next";
import {MetadataLinkGo} from "@/data/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoJA: Metadata = {
    title: "Goフルスタック開発 | CHORN",
    description: "Goフルスタック開発、効率的でスケーラブルなウェブアプリケーションを構築するための技術的専門知識。",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go開発 | CHORN",
        description: "Goフルスタック開発の技術的専門知識で、効率的でスケーラブルなウェブアプリケーションを構築。",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Goフルスタック開発 | CHORN",
        description: "効率的でスケーラブルなウェブアプリケーションのためのGoフルスタック開発の専門技術。",
        images: MetadataLinkGo.twitter.images,
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
