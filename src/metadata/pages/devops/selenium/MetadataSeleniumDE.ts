import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumDE: Metadata = {
    title: "Selenium Testdienste | CHORN",
    description: "Umfassende Selenium-Testtechnische Expertise, um die Qualität und Leistung Ihrer Anwendungen durch automatisierte Tests sicherzustellen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testen | CHORN",
        description: "Automatisieren Sie Ihre Anwendungstests mit Selenium-Technische Expertise für robuste und zuverlässige Ergebnisse.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testdienste | CHORN",
        description: "Verbessern Sie die Qualität Ihrer Anwendung mit Selenium-Testtechnische Expertise für automatisierte und effektive Tests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium-Tests", "automatisierte Tests", "CHORN", "Cloud DevOps",
        "Anwendungsqualitätssicherung", "Testautomatisierung", "Softwaretests",
        "Qualitätssicherungstechnik", "Testtechnik", "Testskripte",
        "Softwaretests Deutschland", "Selenium-Technische Expertise", "Webanwendungstests"
    ]
}
