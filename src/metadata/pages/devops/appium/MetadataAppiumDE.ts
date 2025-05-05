import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumDE: Metadata = {
    title: "Appium Testdienstleistungen | CHORN",
    description: "Technische Expertise für Appium-Tests zur automatisierten Prüfung mobiler Anwendungen auf mehreren Plattformen, um eine hohe Leistungsqualität sicherzustellen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium-Tests | CHORN",
        description: "Automatisieren Sie Ihre mobilen App-Tests mit Appium-Expertise für umfassende plattformübergreifende Tests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.appium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testdienstleistungen | CHORN",
        description: "Stellen Sie sicher, dass Ihre mobilen Apps einwandfrei funktionieren, mit Appium-Testexpertise für gründliche und automatisierte plattformübergreifende Tests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appium-Tests", "Mobile App-Tests", "CHORN", "Cloud DevOps",
        "Plattformübergreifende Tests", "Testautomatisierung", "Qualitätssicherung",
        "Mobile Testexpertise", "Softwaretests", "App-Leistung",
        "Testexpertise in Deutschland", "Appium-Expertise", "Mobile Anwendungstests"
    ]
};
