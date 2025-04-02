import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/metadata/pages/ai-fah/common/MetadataLinkAiFah";

export const MetadataAiFahDE: Metadata = {
    title: "AI-Chat-Begleiter | CHORN AI-Integration",
    description: "Fah ist dein AI-Chat-Freund in der LINE-Anwendung. Sie ist eine 20-jährige, thailändisch inspirierte Begleiterin, die fröhlich und zugänglich ist. Füge sie mit einem Klick hinzu oder scanne ihren QR-Code, um die besten Reiseziele, Gerichte und kulturellen Schätze Thailands zu entdecken. Chatte in mehreren Sprachen, während sie dich mit jugendlicher Energie durch die thailändische Kultur führt.",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Treffe Fah - Deine thailändische AI-Chat-Freundin auf LINE",
        description: "Treffe Fah, deine 20-jährige thailändische AI-Freundin auf LINE, die dir die besten Reiseziele, Gerichte und kulturellen Erlebnisse Thailands in mehreren Sprachen empfiehlt. Füge sie noch heute hinzu!",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Dein Kulturführer für Thailand auf LINE",
        description: "Füge Fah hinzu, deine fröhliche 20-jährige thailändische AI-Begleiterin auf LINE, die dir hilft, die Reiseziele, Küche und Kultur Thailands in mehreren Sprachen zu entdecken.",
        images: MetadataLinkAiFah.twitter.images,
    },
}