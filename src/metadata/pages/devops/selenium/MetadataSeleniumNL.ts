import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumNL: Metadata = {
    title: "Selenium Testdiensten | CHORN",
    description: "Uitgebreide Selenium-testtechnische expertise om de kwaliteit en prestaties van uw toepassingen te waarborgen door middel van geautomatiseerde tests.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testen | CHORN",
        description: "Automatiseer uw applicatietests met Selenium-technische expertise voor robuuste en betrouwbare resultaten.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testdiensten | CHORN",
        description: "Verbeter de kwaliteit van uw applicatie met Selenium-testtechnische expertise voor geautomatiseerde en effectieve tests.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium-testen", "geautomatiseerde tests", "CHORN", "Cloud DevOps",
        "toepassingskwaliteit", "testautomatisering", "softwaretesten",
        "kwaliteitstesttechnische expertise", "testtechnische expertise", "testscripts",
        "softwaretesten Nederland", "Selenium-technische expertise", "webtoepassingstests"
    ]
}
