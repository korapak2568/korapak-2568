import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404DE: Metadata = {
    title: "404 - Seite nicht gefunden",
    description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Seite nicht gefunden",
        description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Seite nicht gefunden",
        description: "Hoppla! Wir konnten die von Ihnen gesuchte Seite nicht finden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Startseite zurück, um CHORN weiter zu erkunden.",
        images: MetadataLink404.twitter.images,
    },
}