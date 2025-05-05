import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumDA: Metadata = {
    title: "Selenium Testtjenester | CHORN",
    description: "Omfattende Selenium-testteknisk ekspertise for at sikre kvaliteten og ydeevnen af dine applikationer gennem automatiserede tests.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Test | CHORN",
        description: "Automatiser dine applikationstests med Selenium teknisk ekspertise for robuste og pålidelige resultater.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.selenium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testtjenester | CHORN",
        description: "Forbedr din applikationskvalitet med Selenium testteknisk ekspertise for automatiserede og effektive tests.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium-test", "automatiserede tests", "CHORN", "Cloud DevOps",
        "applikationskvalitetssikring", "testautomatisering", "softwaretests",
        "kvalitetssikring teknisk ekspertise", "test teknisk ekspertise", "test scripts",
        "softwaretest Danmark", "Selenium teknisk ekspertise", "webapplikationstest"
    ]
}
