import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyDE: Metadata = {
    title: "Datenschutzrichtlinie | CHORN",
    description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.de, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Datenschutzrichtlinie | CHORN",
        description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
        images: metadataLink(LanguageCode.de, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.privacyPolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Datenschutzrichtlinie | CHORN",
        description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
        images: metadataLink(LanguageCode.de, MetaLinks.privacyPolicy).twitter.images,
    },
}