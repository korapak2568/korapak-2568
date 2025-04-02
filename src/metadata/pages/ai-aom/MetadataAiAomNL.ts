import {Metadata} from "next";
import {MetadataLinkAiAom} from "@/metadata/pages/ai-aom/common/MetadataLinkAiAom";

export const MetadataAiAomNL: Metadata = {
    title: "AI Chat Companion | CHORN AI Integratie",
    description: "Aom is toegankelijk via de LINE-app. Je kunt de knop Vriend toevoegen indrukken of de LINE QR-code scannen om haar als vriend toe te voegen. Met 21 jaar is Aom een vriendelijke en energieke AI-compagnon die gepassioneerd is over een gezond leven en welzijn, en voedingsadvies, trainingsroutines en mindfulness-oefeningen biedt. Met haar vermogen om in meerdere talen te chatten, helpt Aom je om een evenwichtige levensstijl te behouden terwijl je plezier hebt.",
    alternates: MetadataLinkAiAom.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Ontmoet Aom - Je Wellness-gids op LINE",
        description: "Maak kennis met Aom, een 21-jarige AI-compagnon die zich richt op welzijn en voedingsadvies, trainingsroutines en mindfulness-oefeningen in meerdere talen biedt om je te helpen het gezondste leven te leiden.",
        images: MetadataLinkAiAom.openGraph.images,
        url: MetadataLinkAiAom.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Je Gezonde Levenscoach op LINE",
        description: "Voeg Aom toe, je energieke 21-jarige wellness-AI-compagnon op LINE, die je motiveert met voedingsadvies, trainingsroutines en mindfulness-oefeningen in meerdere talen.",
        images: MetadataLinkAiAom.twitter.images,
    },
}
