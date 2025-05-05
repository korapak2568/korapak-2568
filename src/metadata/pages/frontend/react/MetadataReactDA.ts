import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactDA: Metadata = {
    title: "React Udviklingstjenester | CHORN",
    description: "Top React-udvikling med teknisk ekspertise, byg dynamiske og responsive brugergrænseflader med React.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React Udvikling | CHORN",
        description: "Forbedr dine webapps med ekspert React-udvikling, teknisk ekspertise til højtydende applikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.react).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React Udviklingstjenester | CHORN",
        description: "Ekspert React-udvikling, teknisk ekspertise til at skabe engagerende brugergrænseflader med React.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "React udvikling", "React teknisk ekspertise", "React udvikler", "Brugerdefineret React udvikling", "React.js applikationer",
        "Full-stack React udvikling", "React single-page applikationer", "React brugergrænseflader", "Brugerdefinerede webapplikationer",
        "Brugerdefineret softwareudvikling",
        "Skalerbare webapplikationer", "Frontend udvikling", "Højtydende webapplikationer",
        "Dynamiske brugergrænseflader", "Single-page applikationer", "React.js udvikler",
        "React udvikler Danmark", "React udvikler København", "React udvikler Aarhus", "Frontend udvikler Danmark",
        "Web udvikler København", "Softwareingeniør", "Softwareudvikler Danmark",
        "CHORN", "Digital innovation", "Enterprise software"
    ]
}
