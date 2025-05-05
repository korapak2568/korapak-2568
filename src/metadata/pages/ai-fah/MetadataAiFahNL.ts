import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiFahNL: Metadata = {
    title: "AI Chat Companion | CHORN AI Integratie",
    description: "Fah is je AI-chatvriend op de LINE-app. Ze is een 20-jarige Thaise geïnspireerde metgezel die vrolijk en benaderbaar is. Voeg haar toe met één klik of scan haar QR-code om de beste bestemmingen, gerechten en culturele schatten van Thailand te ontdekken. Chat in meerdere talen terwijl ze je door de Thaise cultuur leidt met jeugdige energie.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.aiFah).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Ontmoet Fah - Je Thaise AI-chatvriend op LINE",
        description: "Ontmoet Fah, je 20-jarige Thaise AI-vriend op LINE, die de beste bestemmingen, gerechten en culturele ervaringen van Thailand aanbeveelt in meerdere talen. Voeg haar vandaag toe!",
        images: metadataLink(LanguageCode.nl, MetaLinks.aiFah).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.aiFah).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Je Thaise cultuurguide op LINE",
        description: "Voeg Fah toe, je vrolijke 20-jarige Thaise AI-compagnon op LINE die je helpt Thailand te ontdekken, van bestemmingen tot cultuur, in meerdere talen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.aiFah).twitter.images,
    },
}