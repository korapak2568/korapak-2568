import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomDA: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Aom kan tilgås via LINE-appen. Du kan trykke på knappen Tilføj ven eller scanne LINE QR-koden for at tilføje hende som ven. I en alder af 21 år er hun en venlig og energisk AI-companion, der brænder for sund livsstil og velvære og giver ernæringsråd, træningsrutiner og mindfulness-øvelser. Med hendes evne til at chatte på flere sprog hjælper Aom dig med at opretholde en afbalanceret livsstil, samtidig med at det er sjovt.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Mød Aom - Din wellness-guide på LINE",
        description: "Forbind med Aom, en 21-årig wellness-orienteret AI-companion på LINE, der giver ernæringsråd, træningsrutiner og mindfulness-øvelser på flere sprog for at hjælpe dig med at leve dit sundeste liv.",
        images: metadataLink(LanguageCode.da, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.aiAom).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Din sunde livsstilscoach på LINE",
        description: "Tilføj Aom, din livlige 21-årige wellness-AI-companion på LINE, der motiverer dig med ernæringsråd, træningsrutiner og mindfulness-øvelser på flere sprog.",
        images: metadataLink(LanguageCode.da, MetaLinks.aiAom).twitter.images,
    },
}
