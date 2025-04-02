import {Metadata} from "next";
import {MetadataLinkGo} from "@/metadata/pages/backend/go/common/MetadataLinkGo";

export const MetadataGoNL: Metadata = {
    title: "Go Full Stack Ontwikkeling | CHORN",
    description: "Go full stack ontwikkeling, technische expertise voor het bouwen van efficiënte en schaalbare webtoepassingen.",
    alternates: MetadataLinkGo.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Go Ontwikkeling | CHORN",
        description: "Bouw efficiënte en schaalbare webtoepassingen met technische expertise in Go full stack ontwikkeling.",
        images: MetadataLinkGo.openGraph.images,
        url: MetadataLinkGo.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Ontwikkeling | CHORN",
        description: "Expertise in Go full stack ontwikkeling voor efficiënte en schaalbare webtoepassingen.",
        images: MetadataLinkGo.twitter.images,
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
