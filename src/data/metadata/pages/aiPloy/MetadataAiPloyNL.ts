import {Metadata} from "next";
import {MetadataLinkAiPloy} from "@/data/metadata/pages/aiPloy/common/MetadataLinkAiPloy";

export const MetadataAiPloyNL: Metadata = {
    title: "AI Chat Companion | CHORN AI Integratie",
    description: "Ploy is een AI-chatvriend die de LINE-applicatie gebruikt. Voeg haar toe via de knop 'Vriend toevoegen' of door de QR-code te scannen. Als een creatieve 17-jarige Thaise middelbare scholier is ze gepassioneerd over tekenen, muziek, fotografie en leren. Ze spreekt zeven talen, helpt met verschillende vakken en inspireert creatieve expressie. Ze is je vriendelijke gids, of je nu kunst verkent of huiswerk maakt.",
    alternates: MetadataLinkAiPloy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Ontmoet Ploy - Jouw creatieve tiener-AI-vriend op LINE",
        description: "Verbind met Ploy, een creatieve 17-jarige Thaise student-AI die zeven talen spreekt en jouw passie voor kunst, muziek, fotografie en leren deelt. Voeg haar vandaag nog toe op LINE!",
        images: MetadataLinkAiPloy.openGraph.images,
        url: MetadataLinkAiPloy.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Jouw creatieve tienergids op LINE",
        description: "Voeg Ploy toe, je vrolijke 17-jarige Thaise AI-vriend op LINE die helpt met huiswerk en creativiteit inspireert door kunst, muziek en fotografie in zeven talen.",
        images: MetadataLinkAiPloy.twitter.images,
    },
}
