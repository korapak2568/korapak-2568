import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/data/metadata/pages/aiFah/common/MetadataLinkAiFah";

export const MetadataAiFahDA: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Fah er din AI-chatven på LINE-appen. Hun er en 20-årig thailandsk-inspireret ledsager, der er munter og imødekommende. Tilføj hende med ét klik eller scan hendes QR-kode for at opdage Thailands bedste destinationer, retter og kulturelle skatte. Chat på flere sprog, mens hun guider dig gennem den thailandske kultur med ungdommelig energi.",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Mød Fah - Din thailandske AI-chatven på LINE",
        description: "Mød Fah, din 20-årige thailandske AI-ven på LINE, der anbefaler Thailands bedste destinationer, retter og kulturelle oplevelser på flere sprog. Tilføj hende i dag!",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Din thailandske kulturguide på LINE",
        description: "Tilføj Fah, din glade 20-årige thailandske AI-kompagnon på LINE, der hjælper dig med at udforske Thailands destinationer, mad og kultur på flere sprog.",
        images: MetadataLinkAiFah.twitter.images,
    },
}