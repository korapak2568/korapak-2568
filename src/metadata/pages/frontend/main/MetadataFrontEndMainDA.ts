import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainDA: Metadata = {
    title: "Frontend Udviklingstjenester | CHORN",
    description: "CHORN tilbyder ekspertise inden for frontend-udvikling med moderne frameworks som Next.js, React, Angular, Vue, HTML5 og CSS3. Byg responsive og skalerbare websites med de nyeste teknologier.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Frontend Udviklingstjenester | CHORN",
        description: "CHORN tilbyder frontend-udvikling med moderne teknologier som Next.js, React, Angular, Vue, HTML5 og CSS3 for at skabe hurtige, responsive og skalerbare websites.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.frontend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Udviklingstjenester | CHORN",
        description: "Ekspertise i frontend-udvikling fra CHORN ved brug af Next.js, React, Angular, Vue, HTML5 og CSS3 til responsive og skalerbare websites.",
        images: metadataLink(LanguageCode.da, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "frontend udvikling", "frontend ekspertise", "frontend udvikler", "tilpasset frontend udvikling",
        "dynamiske brugergrænseflader", "single-page applikationer", "responsivt webdesign",
        "højtydende frontend applikationer", "tilpasset softwareudvikling",
        "React udvikling", "Angular udvikling", "Vue.js udvikling", "Next.js frontend udvikling",
        "React.js udvikling", "tilpasset Angular frontend udvikling", "React.js frontend applikationer",
        "Vue.js frontend ekspertise", "tilpasset Vue.js udvikling",
        "frontend udvikler Danmark", "webudvikler Danmark", "softwareingeniør Danmark",
        "CHORN", "digital innovation", "enterprise software", "skalerbare webapplikationer"
    ]
}