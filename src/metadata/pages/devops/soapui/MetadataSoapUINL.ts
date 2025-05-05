import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUINL: Metadata = {
    title: "SoapUI Testdiensten | CHORN",
    description: "Technische expertise in SoapUI-testen om ervoor te zorgen dat uw API's en webtechnologie grondig getest en betrouwbaar zijn.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Testen | CHORN",
        description: "Zorg voor de betrouwbaarheid van uw API's en webtechnologie met testexpertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testdiensten | CHORN",
        description: "Optimaliseer uw API-testen met SoapUI-expertise voor uitgebreide en betrouwbare webservicetesten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI testen", "API testen", "CHORN", "Cloud DevOps",
        "Webservice testen", "Betrouwbare testen", "Testautomatisering",
        "Kwaliteitsborging", "Software testen", "API betrouwbaarheid",
        "Testexpertise in Nederland", "SoapUI expertise", "Webapplicatietesten"
    ]
};
