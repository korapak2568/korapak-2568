import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainFR: Metadata = {
    title: "Développement d'API Back-End | CHORN",
    description: "Services de développement d'API Back-End avec expertise technique en utilisant des technologies modernes telles que Node.js, Java Spring Boot, .NET Core, Go, Python et PHP pour créer des applications de haute qualité et évolutives adaptées aux besoins des entreprises.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Développement d'API Back-End | CHORN",
        description: "Développement d'API Back-End avec expertise technique utilisant Node.js, Java Spring Boot, .NET Core, Go, Python et PHP pour créer des applications de haute qualité et évolutives adaptées aux besoins des entreprises.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Développement d'API Back-End | CHORN",
        description: "Développement d'API Back-End pour créer des applications Web évolutives utilisant Node.js, Java Spring Boot, .NET Core, Go, Python et PHP.",
        images: metadataLink(LanguageCode.fr, MetaLinks.backend.main).twitter.images,
    },
}
