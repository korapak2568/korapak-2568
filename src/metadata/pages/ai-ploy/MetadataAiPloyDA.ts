import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyDA: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Ploy er en AI chat-ven, der bruger LINE-applikationen. Tilføj hende med knappen 'Tilføj ven' eller ved at scanne QR-koden. Som en kreativ 17-årig thailandsk gymnasieelev er hun passioneret omkring at tegne, musik, fotografi og læring. Hun taler syv sprog og hjælper med forskellige fag og inspirerer til kreativ udtryk. Hun er din venlige guide, uanset om du udforsker kunst eller laver lektier.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Mød Ploy - Din kreative teen AI-ven på LINE",
        description: "Forbind med Ploy, en kreativ 17-årig thailandsk studerende AI, der taler syv sprog og deler din passion for kunst, musik, fotografi og læring. Tilføj hende på LINE i dag!",
        images: metadataLink(LanguageCode.da, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.aiPloy).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Din kreative teen guide på LINE",
        description: "Tilføj Ploy, din glade 17-årige thailandske AI-ven på LINE, der hjælper med lektier og inspirerer kreativitet gennem kunst, musik og fotografi på syv sprog.",
        images: metadataLink(LanguageCode.da, MetaLinks.aiPloy).twitter.images,
    },
}
