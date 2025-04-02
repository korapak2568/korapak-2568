import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainEN: Metadata = {
    title: "Back-End API Development | CHORN",
    description: "Back-End API development services with technical expertise using modern technologies such as Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP to build high-quality and scalable applications tailored to business needs.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API Development | CHORN",
        description: "Back-End API development with technical expertise using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP to build high-quality and scalable applications tailored to business needs.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API Development | CHORN",
        description: "Back-End API development to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}