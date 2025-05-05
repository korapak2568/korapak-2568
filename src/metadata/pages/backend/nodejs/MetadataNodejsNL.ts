import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsNL: Metadata = {
    title: "Node.js Full Stack Ontwikkeling | CHORN",
    description: "Node.js full-stack ontwikkeling, technische expertise voor het bouwen van efficiënte en schaalbare webapplicaties.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Node.js Ontwikkeling | CHORN",
        description: "Bouw efficiënte en schaalbare webapplicaties met Node.js full-stack technische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.nodejs).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Ontwikkeling | CHORN",
        description: "Technische expertise in Node.js full-stack ontwikkeling voor efficiënte en schaalbare webapps.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.nodejs).twitter.images
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
