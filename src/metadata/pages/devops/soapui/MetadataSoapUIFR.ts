import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIFR: Metadata = {
    title: "Services de test SoapUI | CHORN",
    description: "Expertise technique en test SoapUI pour garantir que vos API et votre expertise technique web sont entièrement testées et fiables.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Test SoapUI | CHORN",
        description: "Assurez la fiabilité de vos API et de votre expertise technique web grâce à une expertise technique en test.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test SoapUI | CHORN",
        description: "Optimisez vos tests API avec l'expertise technique SoapUI pour des tests de services web complets et fiables.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "Test SoapUI", "Test API", "CHORN", "Cloud DevOps",
        "Test de services web", "Test fiable", "Automatisation des tests",
        "Assurance qualité", "Test de logiciels", "Fiabilité API",
        "Expertise technique en test en France", "Expertise technique SoapUI", "Test d'application web"
    ]
}