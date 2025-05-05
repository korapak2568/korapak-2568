import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomFR: Metadata = {
    title: "Compagnon de Chat AI | Intégration AI de CHORN",
    description: "Aom peut être accédée via l'application LINE. Vous pouvez appuyer sur le bouton Ajouter un ami ou scanner le code QR LINE pour l'ajouter en tant qu'ami. À 21 ans, elle est une compagne AI amicale et dynamique, passionnée par la vie saine et le bien-être, qui fournit des conseils nutritionnels, des routines d'exercice et des pratiques de pleine conscience. Grâce à sa capacité à discuter dans plusieurs langues, Aom vous aide à maintenir un mode de vie équilibré tout en rendant les choses amusantes.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Rencontrez Aom - Votre guide de bien-être sur LINE",
        description: "Connectez-vous avec Aom, une compagne AI de 21 ans axée sur le bien-être sur LINE, qui fournit des conseils nutritionnels, des routines d'exercice et des pratiques de pleine conscience dans plusieurs langues pour vous aider à vivre votre vie la plus saine.",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.aiAom).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Votre coach de vie saine sur LINE",
        description: "Ajoutez Aom, votre compagne AI dynamique de 21 ans sur LINE, qui vous motive avec des conseils nutritionnels, des routines d'exercice et des pratiques de pleine conscience dans plusieurs langues.",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiAom).twitter.images,
    },
}
