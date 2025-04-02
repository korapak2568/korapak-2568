import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumDA: Metadata = {
    title: "Selenium Testtjenester | CHORN",
    description: "Omfattende Selenium-testteknisk ekspertise for at sikre kvaliteten og ydeevnen af dine applikationer gennem automatiserede tests.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Test | CHORN",
        description: "Automatiser dine applikationstests med Selenium teknisk ekspertise for robuste og pålidelige resultater.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testtjenester | CHORN",
        description: "Forbedr din applikationskvalitet med Selenium testteknisk ekspertise for automatiserede og effektive tests.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium-test", "automatiserede tests", "CHORN", "Cloud DevOps",
        "applikationskvalitetssikring", "testautomatisering", "softwaretests",
        "kvalitetssikring teknisk ekspertise", "test teknisk ekspertise", "test scripts",
        "softwaretest Danmark", "Selenium teknisk ekspertise", "webapplikationstest"
    ]
}
