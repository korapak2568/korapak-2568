import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumFR: Metadata = {
    title: "Services de test Selenium | CHORN",
    description: "Expertise technique complète en tests Selenium pour garantir la qualité et les performances de vos applications grâce aux tests automatisés.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tests Selenium | CHORN",
        description: "Automatisez les tests de vos applications avec l'expertise technique de Selenium pour des résultats robustes et fiables.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.selenium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test Selenium | CHORN",
        description: "Améliorez la qualité de vos applications avec l'expertise technique de Selenium pour des tests automatisés efficaces.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "tests Selenium", "tests automatisés", "CHORN", "Cloud DevOps",
        "assurance qualité des applications", "automatisation des tests", "tests logiciels",
        "expertise technique en assurance qualité", "expertise technique en tests", "scripts de test",
        "tests logiciels France", "expertise technique Selenium", "tests d'applications web"
    ]
}
