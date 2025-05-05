import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanDE: Metadata = {
    title: "Postman API-Testdienste | CHORN",
    description: "Bieten Sie technische Expertise für API-Tests mit Postman, um die Zuverlässigkeit und Leistung Ihrer Webtechnologie sicherzustellen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API-Testdienste | CHORN",
        description: "Stellen Sie sicher, dass Ihre APIs wie erwartet mit technischer Expertise im API-Test auf Postman-Basis funktionieren.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API-Testdienste | CHORN",
        description: "Postman-basierte API-Test-Expertise zur Validierung der Zuverlässigkeit und Leistung Ihrer Webtechnologie.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API-Test", "Postman-Technische-Expertise", "API-Test", "DevOps", "Automatisierte API-Tests", "CHORN",
        "Webtechnologie-Test", "API-Leistung", "Individuelle Softwareentwicklung", "DevOps Deutschland"
    ]
}
