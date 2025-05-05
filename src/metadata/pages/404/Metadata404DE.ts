import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404DE: Metadata = {
    title: "404 - Seite nicht gefunden",
    description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates:  metadataLink(LanguageCode.de, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Seite nicht gefunden",
        description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
        images: metadataLink(LanguageCode.de, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks._404).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Seite nicht gefunden",
        description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
        images: metadataLink(LanguageCode.de, MetaLinks._404).twitter.images,
    },
}