import {Metadata} from "next";
import {MetadataLinkSoapUI} from "@/data/metadata/pages/devops/soapui/common/MetadataLinkSoapUI";

export const MetadataSoapUIFI: Metadata = {
    title: "SoapUI Testauspalvelut | CHORN",
    description: "SoapUI-testauksen asiantuntemusta varmistaaksesi, että API:t ja verkkotekniikka testataan perusteellisesti ja ovat luotettavia.",
    alternates: MetadataLinkSoapUI.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Testaus | CHORN",
        description: "Varmista API:esi ja verkkotekniikkasi luotettavuus testausasiantuntemuksella.",
        images: MetadataLinkSoapUI.openGraph.images,
        url: MetadataLinkSoapUI.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testauspalvelut | CHORN",
        description: "Optimoi API-testauksesi SoapUI-asiantuntemuksella kattavaan ja luotettavaan verkkopalvelutestaukseen.",
        images: MetadataLinkSoapUI.twitter.images,
    },
    keywords: [
        "SoapUI testaus", "API testaus", "CHORN", "Cloud DevOps",
        "Verkkopalvelutestaus", "Luotettava testaus", "Testiautomaatio",
        "Laadunvarmistus", "Ohjelmistotestaus", "API-luotettavuus",
        "Testausasiantuntemus Suomessa", "SoapUI asiantuntemus", "Web-sovellusten testaus"
    ]
};
