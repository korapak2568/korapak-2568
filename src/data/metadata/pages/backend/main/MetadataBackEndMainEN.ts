import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/data/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainEN: Metadata = {
    title: "Back-End & API Development Services | CHORN",
    description: "CHORN offers expert Back-End & API Development technical-expertise utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End & API Development Services | CHORN",
        description: "CHORN provides Back-End & API Development technical-expertise with expertise in Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build powerful and scalable applications for your business.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End & API Development Services | CHORN",
        description: "Leverage Back-End & API Development technical-expertise by CHORN to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}