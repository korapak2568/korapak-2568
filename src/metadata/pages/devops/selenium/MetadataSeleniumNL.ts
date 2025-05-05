import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumNL: Metadata = {
    title: "Selenium Testdiensten | CHORN",
    description: "Uitgebreide Selenium-testtechnische expertise om de kwaliteit en prestaties van uw toepassingen te waarborgen door middel van geautomatiseerde tests.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testen | CHORN",
        description: "Automatiseer uw applicatietests met Selenium-technische expertise voor robuuste en betrouwbare resultaten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testdiensten | CHORN",
        description: "Verbeter de kwaliteit van uw applicatie met Selenium-testtechnische expertise voor geautomatiseerde en effectieve tests.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium-testen", "geautomatiseerde tests", "CHORN", "Cloud DevOps",
        "toepassingskwaliteit", "testautomatisering", "softwaretesten",
        "kwaliteitstesttechnische expertise", "testtechnische expertise", "testscripts",
        "softwaretesten Nederland", "Selenium-technische expertise", "webtoepassingstests"
    ]
}
