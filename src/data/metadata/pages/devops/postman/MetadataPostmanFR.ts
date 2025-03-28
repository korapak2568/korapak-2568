import {Metadata} from "next";
import {MetadataLinkPostman} from "@/data/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanFR: Metadata = {
    title: "Services de test API avec Postman | CHORN",
    description: "Offrez une expertise technique en test API en utilisant Postman pour garantir la fiabilité et les performances de votre expertise technique web.",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services de test API avec Postman | CHORN",
        description: "Assurez-vous que vos API fonctionnent comme prévu grâce à une expertise technique en test API basée sur Postman.",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test API avec Postman | CHORN",
        description: "Expertise technique en test API basée sur Postman pour valider la fiabilité et les performances de votre expertise technique web.",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Test API avec Postman", "Expertise technique Postman", "Test API", "DevOps", "Test API automatisé", "CHORN",
        "Test d'expertise technique web", "Performance API", "Développement logiciel personnalisé", "DevOps France"
    ]
}
