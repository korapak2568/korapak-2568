import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGoNL: Metadata = {
    title: "Go Full Stack Ontwikkeling | CHORN",
    description: "Go full stack ontwikkeling, technische expertise voor het bouwen van efficiënte en schaalbare webtoepassingen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.go).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Ontwikkeling | CHORN",
        description: "Bouw efficiënte en schaalbare webtoepassingen met technische expertise in Go full stack ontwikkeling.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.go).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.go).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Ontwikkeling | CHORN",
        description: "Expertise in Go full stack ontwikkeling voor efficiënte en schaalbare webtoepassingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.go).twitter.images,
    },
    keywords: [
        "Go-lang ontwikkeling", "Go technische expertise", "Go ontwikkelaar", "op maat gemaakte Go-lang ontwikkeling", "Go webtoepassingen",
        "Go backend ontwikkeling", "Go microservices", "op maat gemaakte softwareontwikkeling",
        "schaalbare webtoepassingen", "backend ontwikkeling", "high-performance applicaties",
        "microservices ontwikkeling", "cloud-native ontwikkeling", "API ontwikkeling", "enterprise software",
        "Go ontwikkelaar Thailand", "Go ontwikkelaar Bangkok", "Go ontwikkelaar Chiang Mai", "backend ontwikkelaar Thailand",
        "software engineer", "software ontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
