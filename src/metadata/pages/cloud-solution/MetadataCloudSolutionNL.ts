import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionNL: Metadata = {
    title: "Cloudoplossingsarchitectuur & Systeemanalyse | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN biedt deskundigheid in cloudoplossingsarchitectuur en systeemanalyse. Wij optimaliseren cloudinfrastructuren op AWS, Azure, GCP en DigitalOcean, met focus op prestaties, schaalbaarheid en kostenefficiëntie.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Cloudoplossingsarchitectuur & Systeemanalyse | CHORN",
        description: "Ontdek de expertise van CHORN in cloudoplossingsarchitectuur en systeemanalyse. Wij ontwerpen robuuste, schaalbare en geoptimaliseerde cloudoplossingen op AWS, Azure, GCP en DigitalOcean.",
        images: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloudoplossingsarchitectuur & Systeemanalyse | CHORN",
        description: "Optimaliseer uw cloudinfrastructuur met de expertise van CHORN in cloudoplossingsarchitectuur en systeemanalyse, inclusief AWS, Azure, GCP en DigitalOcean.",
        images: metadataLink(LanguageCode.nl, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        "cloudoplossingsarchitectuur", "systeemanalyse", "AWS-architectuur", "Azure-cloudoplossingen",
        "GCP-architectuur", "DigitalOcean-infrastructuur", "cloudoptimalisatie", "multi-cloudstrategieën",
        "cloudschaalbaarheid", "cloudinfrastructuurontwerp", "cloudbeveiligingsanalyse",

        "AWS-cloudadvies", "Azure-systeemintegratie", "GCP-kostenoptimalisatie", "DigitalOcean-oplossingen",
        "cloudmigratie-expertise", "cloudprestatieoptimalisatie", "multi-cloudintegratie", "cloud-native applicaties",

        "cloudarchitect Nederland", "AWS-architect Nederland", "Azure-architect Nederland", "GCP-architect Nederland",
        "DigitalOcean-ontwikkelaar Nederland", "systeemanalyse-expert Nederland", "cloudinfrastructuur-expert Nederland",

        "CHORN", "cloudoplossingen", "digitale innovatie", "cloudinfrastructuurontwerp", "schaalbare cloudsystemen"
    ]
}