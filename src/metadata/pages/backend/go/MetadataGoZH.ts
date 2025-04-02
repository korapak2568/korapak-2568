import {Metadata} from "next";
import {MetadataLinkGo} from "@/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoZH: Metadata = {
    title: "Go全栈开发 | CHORN",
    description: "Go全栈开发，技术专长用于构建高效和可扩展的Web应用程序。",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go开发 | CHORN",
        description: "通过Go全栈开发的技术专长，构建高效和可扩展的Web应用程序。",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go全栈开发 | CHORN",
        description: "Go全栈开发的技术专长，用于构建高效和可扩展的Web应用程序。",
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
