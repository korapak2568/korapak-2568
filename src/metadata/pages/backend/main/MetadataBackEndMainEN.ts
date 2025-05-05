import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainEN: Metadata = {
    title: "Back-End API Development | CHORN",
    description: "Back-End API development services with technical expertise using modern technologies such as Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP to build high-quality and scalable applications tailored to business needs.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API Development | CHORN",
        description: "Back-End API development with technical expertise using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP to build high-quality and scalable applications tailored to business needs.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.backend.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API Development | CHORN",
        description: "Back-End API development to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
        images: metadataLink(LanguageCode.en, MetaLinks.backend.main).twitter.images,
    },
}