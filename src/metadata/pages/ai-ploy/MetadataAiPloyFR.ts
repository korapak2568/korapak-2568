import {Metadata} from "next";
import {MetadataLinkAiPloy} from "@/metadata/pages/ai-ploy/common/MetadataLinkAiPloy";

export const MetadataAiPloyFR: Metadata = {
    title: "Compagnon de Chat AI | Intégration CHORN AI",
    description: "Ploy est une amie de chat AI utilisant l'application LINE. Ajoutez-la avec le bouton Ajouter un ami ou en scannant le code QR. En tant qu'élève créative de 17 ans en Thaïlande, elle est passionnée par le dessin, la musique, la photographie et l'apprentissage. Parlant sept langues, Ploy aide dans divers sujets et inspire l'expression créative. Elle est votre guide amical que ce soit pour explorer l'art ou faire vos devoirs.",
    alternates: MetadataLinkAiPloy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Rencontrez Ploy - Votre amie AI créative sur LINE",
        description: "Connectez-vous avec Ploy, une AI étudiante créative de 17 ans en Thaïlande qui parle sept langues et partage votre passion pour l'art, la musique, la photographie et l'apprentissage. Ajoutez-la sur LINE aujourd'hui !",
        images: MetadataLinkAiPloy.openGraph.images,
        url: MetadataLinkAiPloy.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Votre guide créatif sur LINE",
        description: "Ajoutez Ploy, votre compagne AI joyeuse de 17 ans sur LINE qui aide aux devoirs et inspire la créativité à travers l'art, la musique et la photographie en sept langues.",
        images: MetadataLinkAiPloy.twitter.images,
    },
}
