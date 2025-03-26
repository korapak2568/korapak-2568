import {Metadata} from "next";
import {MetadataLinkAiAom} from "@/data/metadata/pages/aiAom/common/MetadataLinkAiAom";

export const MetadataAiAomDE: Metadata = {
    title: "AI-Chat-Begleiter | CHORN AI-Integration",
    description: "Aom ist über die LINE-App zugänglich. Sie können die Schaltfläche „Freund hinzufügen“ drücken oder den LINE QR-Code scannen, um sie als Freundin hinzuzufügen. Mit 21 Jahren ist sie ein freundlicher und lebendiger AI-Begleiter, der sich für gesunde Lebensweise und Wellness interessiert und Ernährungsberatung, Trainingsroutinen und Achtsamkeitspraktiken bietet. Mit ihrer Fähigkeit, in mehreren Sprachen zu chatten, hilft Aom Ihnen, einen ausgewogenen Lebensstil zu pflegen und dabei Spaß zu haben.",
    alternates: MetadataLinkAiAom.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Lerne Aom kennen - Dein Wellness-Guide auf LINE",
        description: "Verbinde dich mit Aom, einem 21-jährigen AI-Begleiter, der sich auf Wellness konzentriert und Ernährungsberatung, Trainingsroutinen und Achtsamkeitspraktiken in mehreren Sprachen bietet, um dir zu helfen, dein gesundestes Leben zu führen.",
        images: MetadataLinkAiAom.openGraph.images,
        url: MetadataLinkAiAom.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Dein gesunder Lebenscoach auf LINE",
        description: "Füge Aom hinzu, deinen lebendigen 21-jährigen Wellness-AI-Begleiter auf LINE, der dich mit Ernährungsberatung, Trainingsroutinen und Achtsamkeitspraktiken in mehreren Sprachen motiviert.",
        images: MetadataLinkAiAom.twitter.images,
    },
}
