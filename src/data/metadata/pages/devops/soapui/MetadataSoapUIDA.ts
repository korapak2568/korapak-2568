import {Metadata} from "next";
import {MetadataLinkSoapUI} from "@/data/metadata/pages/devops/soapui/common/MetadataLinkSoapUI";

export const MetadataSoapUIDA: Metadata = {
    title: "SoapUI Testtjenester | CHORN",
    description: "SoapUI testekspertise til at sikre, at dine API'er og webteknologi er grundigt testet og pålidelige.",
    alternates: MetadataLinkSoapUI.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Test | CHORN",
        description: "Sørg for pålideligheden af dine API'er og webteknologi med testekspertise.",
        images: MetadataLinkSoapUI.openGraph.images,
        url: MetadataLinkSoapUI.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testtjenester | CHORN",
        description: "Optimer din API-testning med SoapUI-ekspertise for omfattende og pålidelige webservicetest.",
        images: MetadataLinkSoapUI.twitter.images,
    },
    keywords: [
        "SoapUI test", "API test", "CHORN", "Cloud DevOps",
        "Webservice test", "Pålidelig test", "Testautomatisering",
        "Kvalitetssikring", "Softwaretest", "API-pålidelighed",
        "Testekspertise i Danmark", "SoapUI ekspertise", "Webapplikationstest"
    ]
};
