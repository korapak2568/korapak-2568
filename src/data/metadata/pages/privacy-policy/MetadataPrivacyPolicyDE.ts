import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/data/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyDE: Metadata = {
    title: "Datenschutzrichtlinie | CHORN",
    description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
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
        title: "Datenschutzrichtlinie | CHORN",
        description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Datenschutzrichtlinie | CHORN",
        description: "CHORN respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erklärt, wie Daten bei der Nutzung der Website verarbeitet werden und die Verwendung von Cookies zu Analysezwecken.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}