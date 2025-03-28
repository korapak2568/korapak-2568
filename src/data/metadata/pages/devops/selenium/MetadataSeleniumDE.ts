import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/data/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumDE: Metadata = {
    title: "Selenium Testdienste | CHORN",
    description: "Umfassende Selenium-Testtechnische Expertise, um die Qualität und Leistung Ihrer Anwendungen durch automatisierte Tests sicherzustellen.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testen | CHORN",
        description: "Automatisieren Sie Ihre Anwendungstests mit Selenium-Technische Expertise für robuste und zuverlässige Ergebnisse.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testdienste | CHORN",
        description: "Verbessern Sie die Qualität Ihrer Anwendung mit Selenium-Testtechnische Expertise für automatisierte und effektive Tests.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium-Tests", "automatisierte Tests", "CHORN", "Cloud DevOps",
        "Anwendungsqualitätssicherung", "Testautomatisierung", "Softwaretests",
        "Qualitätssicherungstechnik", "Testtechnik", "Testskripte",
        "Softwaretests Deutschland", "Selenium-Technische Expertise", "Webanwendungstests"
    ]
}
