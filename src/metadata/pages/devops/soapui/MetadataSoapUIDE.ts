import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIDE: Metadata = {
    title: "SoapUI Testdienstleistungen | CHORN",
    description: "SoapUI-Testfachwissen zur Sicherstellung, dass Ihre APIs und Web-Technologie gründlich getestet und zuverlässig sind.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI Tests | CHORN",
        description: "Sichern Sie die Zuverlässigkeit Ihrer APIs und Web-Technologie mit erstklassigem Testfachwissen.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testdienstleistungen | CHORN",
        description: "Optimieren Sie Ihre API-Tests mit SoapUI-Fachwissen für umfassende und zuverlässige Web-Servicetests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI Tests", "API Tests", "CHORN", "Cloud DevOps",
        "Web-Service-Tests", "Zuverlässige Tests", "Testautomatisierung",
        "Qualitätssicherung", "Softwaretests", "API-Zuverlässigkeit",
        "Testfachwissen in Deutschland", "SoapUI Fachwissen", "Webanwendungstests"
    ]
};
