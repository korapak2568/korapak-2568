import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainNL: Metadata = {
    title: "Back-End API-ontwikkeling | CHORN",
    description: "Back-End API-ontwikkelingsdiensten met technische expertise, gebruikmakend van moderne technologieën zoals Node.js, Java Spring Boot, .NET Core, Go, Python en PHP om hoogwaardige en schaalbare applicaties te bouwen die aansluiten bij zakelijke behoeften.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-ontwikkeling | CHORN",
        description: "Back-End API-ontwikkeling met technische expertise, gebruikmakend van Node.js, Java Spring Boot, .NET Core, Go, Python en PHP om hoogwaardige en schaalbare applicaties te bouwen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-ontwikkeling | CHORN",
        description: "Bouw schaalbare webapplicaties met Node.js, Java Spring Boot, .NET Core, Go, Python en PHP.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.main).twitter.images,
    },
}