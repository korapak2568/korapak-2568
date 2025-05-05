import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularDA: Metadata = {
    title: "Angular Udviklingstjenester | CHORN",
    description: "Angular udviklingstjeneste, byg dynamiske, skalerbare og højtydende webapplikationer med Angular.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Udvikling | CHORN",
        description: "Angular udvikling med teknisk ekspertise til at skabe hurtige, skalerbare og dynamiske webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.angular).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Udviklingstjenester | CHORN",
        description: "Forbedr dine webapplikationer med professionel Angular udvikling.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular udvikling", "Angular teknisk ekspertise", "Angular udvikler", "Angular udvikling Thailand",
        "Angular udvikling Bangkok", "Angular udvikling Chiang Mai", "Angular udviklingsfirma",
        "tilpasset Angular udvikling", "tilpasset softwareudvikling", "enterprise Angular applikationer",
        "frontend udvikling", "single-page applikationer", "dynamiske brugergrænseflader",
        "højtydende applikationer", "skalerbare webapplikationer", "tilpassede webapplikationer",
        "webudvikler", "full-stack udvikler", "softwareingeniør", "softwareudvikler Thailand",
        "Angular udvikler Thailand", "frontend udvikler Thailand", "webudvikler Bangkok",
        "Angular udvikler Chiang Mai", "Angular udvikler Bangkok", "Angular udviklingsfirma",
        "CHORN", "digital innovation", "enterprise software",
        "responsivt webdesign i Angular", "responsivt webdesign Angular", "Angular responsivt webdesign"
    ]
}