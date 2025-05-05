import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoTH: Metadata = {
    title: "Go Full Stack Development | CHORN",
    description: "การพัฒนา Go full stack, ความเชี่ยวชาญทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่มีประสิทธิภาพและสามารถขยายได้",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Development | CHORN",
        description: "สร้างแอปพลิเคชันเว็บที่มีประสิทธิภาพและสามารถขยายได้ด้วยความเชี่ยวชาญในการพัฒนา Go full stack",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.go).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Development | CHORN",
        description: "ความเชี่ยวชาญในการพัฒนา Go full stack สำหรับแอปพลิเคชันเว็บที่มีประสิทธิภาพและสามารถขยายได้",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.go).twitter.images,
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
