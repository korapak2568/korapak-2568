import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIDA: Metadata = {
    title: "SoapUI Testtjenester | CHORN",
    description: "SoapUI testekspertise til at sikre, at dine API'er og webteknologi er grundigt testet og pålidelige.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Test | CHORN",
        description: "Sørg for pålideligheden af dine API'er og webteknologi med testekspertise.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.soapui).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testtjenester | CHORN",
        description: "Optimer din API-testning med SoapUI-ekspertise for omfattende og pålidelige webservicetest.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI test", "API test", "CHORN", "Cloud DevOps",
        "Webservice test", "Pålidelig test", "Testautomatisering",
        "Kvalitetssikring", "Softwaretest", "API-pålidelighed",
        "Testekspertise i Danmark", "SoapUI ekspertise", "Webapplikationstest"
    ]
};
