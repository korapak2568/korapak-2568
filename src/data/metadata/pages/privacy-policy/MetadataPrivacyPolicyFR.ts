import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/data/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyFR: Metadata = {
    title: "Politique de confidentialité | CHORN",
    description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkPrivacyPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Politique de confidentialité | CHORN",
        description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Politique de confidentialité | CHORN",
        description: "CHORN respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment les données sont traitées lors de l'utilisation du site Web et l'utilisation des cookies à des fins d'analyse.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}