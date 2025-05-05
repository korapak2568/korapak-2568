import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsDA: Metadata = {
    title: "Next.js Udviklingstjenester | CHORN",
    description: "Ekspert Next.js udvikling, forbedr dine webapplikationer med skalerbare og højtydende løsninger ved hjælp af Next.js.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js Udvikling | CHORN",
        description: "Specialiseret Next.js udvikling med teknisk ekspertise til at skabe hurtige og skalerbare webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.nextjs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Udviklingstjenester | CHORN",
        description: "Hæv dine webapplikationer med ekspert Next.js udviklingsteknisk ekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Next.js udvikling", "Next.js teknisk ekspertise", "Next.js udvikler", "tilpasset Next.js udvikling", "server-side rendering",
        "Next.js full stack udvikling", "Next.js SEO optimering", "Next.js applikationer", "tilpassede webapplikationer",
        "skalerbare webapplikationer", "frontend udvikling", "højtydende webapplikationer",
        "single-page applikationer", "dynamiske brugergrænseflader", "full stack udvikler", "tilpasset softwareudvikling",
        "Next.js udvikler Danmark", "Next.js udvikler København", "Next.js udvikler Aarhus", "frontend udvikler Danmark",
        "webudvikler København", "softwareingeniør", "softwareudvikler Danmark",
        "CHORN", "digital innovation", "enterprise software"
    ]
}
