import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3DA: Metadata = {
    title: "CSS3 Udviklingstjenester | CHORN",
    description: "Forbedr dine webapplikationer med CSS3-udvikling, teknisk ekspertise til moderne og visuelt tiltalende designs.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Udvikling | CHORN",
        description: "CSS3-udvikling med teknisk ekspertise for at skabe stilfulde og responsive webdesigns.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Udviklingstjenester | CHORN",
        description: "Skab visuelt imponerende webdesigns med CSS3 ved at tilbyde teknisk ekspertise i CSS3-udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3-udvikling", "CSS3-teknisk ekspertise", "CSS3-udvikler", "tilpasset CSS3-udvikling", "responsiv CSS3-design",
        "CSS3-webapplikationer", "CSS3-mobiludvikling", "tilpassede webapplikationer", "cross-platform apps CSS3",
        "tilpasset softwareudvikling",
        "webudvikling", "højtydende webdesign", "dynamiske brugergrænseflader",
        "CSS3-udvikler Thailand", "CSS3-udvikler Bangkok", "CSS3-udvikler Chiang Mai", "frontend udvikler Thailand",
        "webudvikler Bangkok", "softwareingeniør", "softwareudvikler Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
