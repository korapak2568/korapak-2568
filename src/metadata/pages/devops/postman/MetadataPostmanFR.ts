import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanFR: Metadata = {
    title: "Services de test API avec Postman | CHORN",
    description: "Offrez une expertise technique en test API en utilisant Postman pour garantir la fiabilité et les performances de votre expertise technique web.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services de test API avec Postman | CHORN",
        description: "Assurez-vous que vos API fonctionnent comme prévu grâce à une expertise technique en test API basée sur Postman.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test API avec Postman | CHORN",
        description: "Expertise technique en test API basée sur Postman pour valider la fiabilité et les performances de votre expertise technique web.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Test API avec Postman", "Expertise technique Postman", "Test API", "DevOps", "Test API automatisé", "CHORN",
        "Test d'expertise technique web", "Performance API", "Développement logiciel personnalisé", "DevOps France"
    ]
}
