import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyFR: Metadata = {
    title: "Politique de confidentialité | CHORN",
    description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fr, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Politique de confidentialité | CHORN",
        description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
        images: metadataLink(LanguageCode.fr, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Politique de confidentialité | CHORN",
        description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
        images: metadataLink(LanguageCode.fr, MetaLinks.privacyPolicy).twitter.images,
    },
}