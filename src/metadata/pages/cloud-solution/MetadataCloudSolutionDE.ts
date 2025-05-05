import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionDE: Metadata = {
    title: "Cloud-Lösungsarchitektur & Systemanalyse | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN bietet Fachwissen in Cloud-Lösungsarchitektur und Systemanalyse. Wir optimieren Cloud-Infrastrukturen auf AWS, Azure, GCP und DigitalOcean und gewährleisten Leistung, Skalierbarkeit und Kosteneffizienz.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Cloud-Lösungsarchitektur & Systemanalyse | CHORN",
        description: "Entdecken Sie das Fachwissen von CHORN in Cloud-Lösungsarchitektur und Systemanalyse. Wir entwerfen resiliente, skalierbare und optimierte Cloud-Lösungen auf AWS, Azure, GCP und DigitalOcean.",
        images: metadataLink(LanguageCode.de, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud-Lösungsarchitektur & Systemanalyse | CHORN",
        description: "Optimieren Sie Ihre Cloud-Infrastruktur mit CHORNs Fachwissen in Cloud-Lösungsarchitektur und Systemanalyse, inklusive AWS, Azure, GCP und DigitalOcean.",
        images: metadataLink(LanguageCode.de, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        "Cloud-Lösungsarchitektur", "Systemanalyse", "AWS-Architektur", "Azure-Cloud-Lösungen",
        "GCP-Architektur", "DigitalOcean-Infrastruktur", "Cloud-Optimierung", "Multi-Cloud-Strategien",
        "Cloud-Skalierbarkeit", "Cloud-Infrastruktur-Design", "Cloud-Sicherheitsanalyse",

        "AWS-Cloud-Beratung", "Azure-Systemintegration", "GCP-Kostenoptimierung", "DigitalOcean-Lösungen",
        "Cloud-Migration-Expertise", "Cloud-Leistungsoptimierung", "Multi-Cloud-Integration", "Cloud-native Anwendungen",

        "Cloud-Architekt Deutschland", "AWS-Architekt Deutschland", "Azure-Architekt Deutschland", "GCP-Architekt Deutschland",
        "DigitalOcean-Entwickler Deutschland", "Systemanalytiker Deutschland", "Cloud-Infrastruktur-Experte Deutschland",

        "CHORN", "Cloud-Lösungen", "digitale Innovation", "Cloud-Infrastruktur-Design", "skalierbare Cloud-Systeme"
    ]
}