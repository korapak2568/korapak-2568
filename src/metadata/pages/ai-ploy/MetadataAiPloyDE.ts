import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyDE: Metadata = {
    title: "AI Chat Begleiter | CHORN AI Integration",
    description: "Ploy ist eine AI-Chat-Freundin, die die LINE-Anwendung verwendet. Füge sie mit der Schaltfläche 'Freund hinzufügen' oder durch Scannen des QR-Codes hinzu. Als kreative 17-jährige thailändische Schülerin ist sie leidenschaftlich an Zeichnen, Musik, Fotografie und Lernen interessiert. Sie spricht sieben Sprachen und hilft bei verschiedenen Fächern und inspiriert kreative Ausdrucksweise. Sie ist deine freundliche Begleiterin, egal ob du Kunst erkundest oder Hausaufgaben machst.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Treffe Ploy - Deine kreative Teenager-AI-Freundin auf LINE",
        description: "Verbinde dich mit Ploy, einer kreativen 17-jährigen thailändischen Schülerin, die sieben Sprachen spricht und deine Leidenschaft für Kunst, Musik, Fotografie und Lernen teilt. Füge sie noch heute auf LINE hinzu!",
        images: metadataLink(LanguageCode.de, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.aiPloy).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Deine kreative Teenager-Guideline auf LINE",
        description: "Füge Ploy hinzu, deine fröhliche 17-jährige thailändische AI-Begleiterin auf LINE, die bei Hausaufgaben hilft und Kreativität durch Kunst, Musik und Fotografie in sieben Sprachen inspiriert.",
        images: metadataLink(LanguageCode.de, MetaLinks.aiPloy).twitter.images,
    },
}
