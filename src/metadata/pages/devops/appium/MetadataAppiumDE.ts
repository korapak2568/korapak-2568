import {Metadata} from "next";
import {MetadataLinkAppium} from "@/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumDE: Metadata = {
    title: "Appium Testdienstleistungen | CHORN",
    description: "Technische Expertise für Appium-Tests zur automatisierten Prüfung mobiler Anwendungen auf mehreren Plattformen, um eine hohe Leistungsqualität sicherzustellen.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium-Tests | CHORN",
        description: "Automatisieren Sie Ihre mobilen App-Tests mit Appium-Expertise für umfassende plattformübergreifende Tests.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testdienstleistungen | CHORN",
        description: "Stellen Sie sicher, dass Ihre mobilen Apps einwandfrei funktionieren, mit Appium-Testexpertise für gründliche und automatisierte plattformübergreifende Tests.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium-Tests", "Mobile App-Tests", "CHORN", "Cloud DevOps",
        "Plattformübergreifende Tests", "Testautomatisierung", "Qualitätssicherung",
        "Mobile Testexpertise", "Softwaretests", "App-Leistung",
        "Testexpertise in Deutschland", "Appium-Expertise", "Mobile Anwendungstests"
    ]
};
