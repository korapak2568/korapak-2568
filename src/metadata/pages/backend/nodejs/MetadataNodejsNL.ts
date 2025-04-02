import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsNL: Metadata = {
    title: "Go Full Stack Ontwikkeling | CHORN",
    description: "Go full-stack ontwikkeling, technische expertise voor het bouwen van efficiënte en schaalbare webapplicaties.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Ontwikkeling | CHORN",
        description: "Bouw efficiënte en schaalbare webapplicaties met technische expertise in Go full-stack ontwikkeling.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full-Stack Ontwikkeling | CHORN",
        description: "Technische expertise in Go full-stack ontwikkeling voor efficiënte en schaalbare webapplicaties.",
        images: MetadataLinkNodejs.twitter.images,
    },
    keywords: [
        "Node.js ontwikkeling", "Node.js technische expertise", "Node.js ontwikkelaar", "maatwerk Node.js ontwikkeling",
        "Node.js backend ontwikkeling", "Node.js full-stack ontwikkeling", "Node.js microservices", "maatwerk softwareontwikkeling",
        "schaalbare webapplicaties", "backend ontwikkeling", "hoogwaardige applicaties",
        "enterprise Node.js applicaties", "API ontwikkeling", "microservices ontwikkeling", "full-stack ontwikkelaar",
        "Node.js ontwikkelaar Thailand", "Node.js ontwikkelaar Bangkok", "Node.js ontwikkelaar Chiang Mai",
        "backend ontwikkelaar Thailand", "full-stack ontwikkelaar Thailand", "software engineer", "software ontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
