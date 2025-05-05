import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoVI: Metadata = {
    title: "Phát triển Full Stack Go | CHORN",
    description: "Phát triển full stack Go, chuyên môn kỹ thuật để xây dựng các ứng dụng web hiệu quả và có thể mở rộng.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển Go | CHORN",
        description: "Xây dựng các ứng dụng web hiệu quả và có thể mở rộng với chuyên môn phát triển full stack Go.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.backend.go).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển Full Stack Go | CHORN",
        description: "Chuyên môn phát triển full stack Go để xây dựng các ứng dụng web hiệu quả và có thể mở rộng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.go).twitter.images,
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
