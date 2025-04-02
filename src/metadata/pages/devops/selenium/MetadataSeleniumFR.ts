import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumFR: Metadata = {
    title: "Services de test Selenium | CHORN",
    description: "Expertise technique complète en tests Selenium pour garantir la qualité et les performances de vos applications grâce aux tests automatisés.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tests Selenium | CHORN",
        description: "Automatisez les tests de vos applications avec l'expertise technique de Selenium pour des résultats robustes et fiables.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test Selenium | CHORN",
        description: "Améliorez la qualité de vos applications avec l'expertise technique de Selenium pour des tests automatisés efficaces.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "tests Selenium", "tests automatisés", "CHORN", "Cloud DevOps",
        "assurance qualité des applications", "automatisation des tests", "tests logiciels",
        "expertise technique en assurance qualité", "expertise technique en tests", "scripts de test",
        "tests logiciels France", "expertise technique Selenium", "tests d'applications web"
    ]
}
