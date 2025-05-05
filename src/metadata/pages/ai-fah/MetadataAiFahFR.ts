import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiFahFR: Metadata = {
    title: "Compagnon de Chat AI | Intégration CHORN AI",
    description: "Fah est votre amie de chat AI sur l'application LINE. C'est une compagne thaïlandaise de 20 ans, joyeuse et accessible. Ajoutez-la en un clic ou scannez son QR Code pour découvrir les meilleures destinations, plats et trésors culturels de la Thaïlande. Discutez en plusieurs langues pendant qu'elle vous guide à travers la culture thaïlandaise avec énergie et jeunesse.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.aiFah).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Rencontrez Fah - Votre amie de chat AI thaïlandaise sur LINE",
        description: "Rencontrez Fah, votre amie AI thaïlandaise de 20 ans sur LINE qui recommande les meilleures destinations, plats et expériences culturelles de la Thaïlande en plusieurs langues. Ajoutez-la dès aujourd'hui !",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiFah).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.aiFah).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Votre guide de la culture thaïlandaise sur LINE",
        description: "Ajoutez Fah, votre compagne AI thaïlandaise joyeuse de 20 ans sur LINE, qui vous aide à explorer les destinations, la cuisine et la culture thaïlandaise en plusieurs langues.",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiFah).twitter.images,
    },
}