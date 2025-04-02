import {Metadata} from "next";
import {MetadataLinkSoapUI} from "@/metadata/pages/devops/soapui/common/MetadataLinkSoapUI";

export const MetadataSoapUINL: Metadata = {
    title: "SoapUI Testdiensten | CHORN",
    description: "Technische expertise in SoapUI-testen om ervoor te zorgen dat uw API's en webtechnologie grondig getest en betrouwbaar zijn.",
    alternates: MetadataLinkSoapUI.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Testen | CHORN",
        description: "Zorg voor de betrouwbaarheid van uw API's en webtechnologie met testexpertise.",
        images: MetadataLinkSoapUI.openGraph.images,
        url: MetadataLinkSoapUI.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testdiensten | CHORN",
        description: "Optimaliseer uw API-testen met SoapUI-expertise voor uitgebreide en betrouwbare webservicetesten.",
        images: MetadataLinkSoapUI.twitter.images,
    },
    keywords: [
        "SoapUI testen", "API testen", "CHORN", "Cloud DevOps",
        "Webservice testen", "Betrouwbare testen", "Testautomatisering",
        "Kwaliteitsborging", "Software testen", "API betrouwbaarheid",
        "Testexpertise in Nederland", "SoapUI expertise", "Webapplicatietesten"
    ]
};
