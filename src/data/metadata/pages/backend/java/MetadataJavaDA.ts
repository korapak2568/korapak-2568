import {Metadata} from "next";
import {MetadataLinkJava} from "@/data/metadata/pages/backend/java/common/MetadataLinkJava";

export const MetadataJavaDA: Metadata = {
    title: "Java Spring Boot Full Stack Udvikling | CHORN",
    description: "Java Spring Boot full stack udvikling, teknisk ekspertise til at opbygge robuste og skalerbare virksomhedsapplikationer.",
    alternates: MetadataLinkJava.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Udvikling | CHORN",
        description: "Udnyt Java Spring Boot full stack udvikling med teknisk ekspertise til at bygge skalerbare, sikre og højtydende applikationer.",
        images: MetadataLinkJava.openGraph.images,
        url: MetadataLinkJava.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Udvikling | CHORN",
        description: "Ekspert Java Spring Boot full stack udvikling til at bygge sikre og skalerbare applikationer.",
        images: MetadataLinkJava.twitter.images,
    },
    keywords: [
        "Spring Boot udvikling", "Java Spring Boot teknisk ekspertise", "Spring Boot udvikler", "Brugerdefineret Java udvikling",
        "Java Spring Boot applikationer", "Enterprise Java udvikling", "Spring Boot microservices",
        "Brugerdefineret softwareudvikling", "Skalerbare webapplikationer", "Backend udvikling", "Enterprise softwareløsninger",
        "Højtydende applikationer", "Java webapplikationer", "Microservices udvikling", "API udvikling",
        "Spring Boot udvikler Thailand", "Java udvikler Thailand", "Java udvikler Bangkok",
        "Java udvikler Chiang Mai", "Backend udvikler Thailand", "Softwareingeniør", "Softwareudvikler Thailand",
        "CHORN", "Digital innovation", "Enterprise software"
    ]
}
