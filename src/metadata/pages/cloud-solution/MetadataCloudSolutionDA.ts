import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionDA: Metadata = {
    title: "Cloudløsningsarkitektur & Systemanalyse | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN leverer ekspertise inden for cloudløsningsarkitektur og systemanalyse. Vi optimerer cloudinfrastrukturer på AWS, Azure, GCP og DigitalOcean med fokus på ydeevne, skalerbarhed og omkostningseffektivitet.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Cloudløsningsarkitektur & Systemanalyse | CHORN",
        description: "Udforsk CHORN's ekspertise inden for cloudløsningsarkitektur og systemanalyse. Vi designer robuste, skalerbare og optimerede cloudløsninger på AWS, Azure, GCP og DigitalOcean.",
        images: metadataLink(LanguageCode.da, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloudløsningsarkitektur & Systemanalyse | CHORN",
        description: "Optimer din cloudinfrastruktur med CHORN's ekspertise i cloudløsningsarkitektur og systemanalyse, herunder AWS, Azure, GCP og DigitalOcean.",
        images: metadataLink(LanguageCode.da, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        "cloudløsningsarkitektur", "systemanalyse", "AWS-arkitektur", "Azure-cloudløsninger",
        "GCP-arkitektur", "DigitalOcean-infrastruktur", "cloudoptimering", "multi-cloud-strategier",
        "cloudskalerbarhed", "cloudinfrastrukturoptimering", "cloudsikkerhedsanalyse",

        "AWS-cloudrådgivning", "Azure-systemintegration", "GCP-omkostningsoptimering", "DigitalOcean-løsninger",
        "cloudmigrations-ekspertise", "cloud-ydeevneoptimering", "multi-cloud-integration", "cloud-native applikationer",

        "cloudarkitekt Danmark", "AWS-arkitekt Danmark", "Azure-arkitekt Danmark", "GCP-arkitekt Danmark",
        "DigitalOcean-udvikler Danmark", "systemanalytiker Danmark", "cloudinfrastruktur-ekspert Danmark",

        "CHORN", "cloudløsninger", "digital innovation", "cloudinfrastrukturoptimering", "skalerbare cloudsystemer"
    ]
}