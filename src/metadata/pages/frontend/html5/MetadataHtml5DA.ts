import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5DA: Metadata = {
    title: "HTML5 Udviklingstjenester | CHORN",
    description: "HTML5 udviklingsteknisk ekspertise til at skabe responsive og interaktive webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Udvikling | CHORN",
        description: "Byg moderne og interaktive webapplikationer med teknisk ekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.html5).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Udviklingstjenester | CHORN",
        description: "Skab interaktive webapps med HTML5 teknisk ekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "HTML5 udvikling", "HTML5 teknisk ekspertise", "HTML5 udvikler", "tilpasset HTML5 udvikling", "HTML5 responsivt design",
        "HTML5 webapplikationer", "HTML5 mobiludvikling", "tilpassede webapplikationer", "HTML5 cross-platform apps",
        "tilpasset softwareudvikling",
        "single-page applikationer", "frontend udvikling", "webudvikler", "skalerbare webapplikationer",
        "højtydende webdesign", "responsivt webdesign", "dynamiske brugergrænseflader",
        "HTML5 udvikler Thailand", "HTML5 udvikler Bangkok", "HTML5 udvikler Chiang Mai", "frontend udvikler Thailand",
        "webudvikler Bangkok", "softwareingeniør", "softwareudvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
