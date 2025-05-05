import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainNL: Metadata = {
    title: "Enterprise DevOps & Cloud Oplossingen | CHORN",
    description: "Versnel uw digitale transformatie met DevOps- en cloud-expertise. Wij leveren gestroomlijnde CI/CD-pijplijnen, infrastructuurautomatisering en cloud-native oplossingen die de betrouwbaarheid verbeteren en de time-to-market verkorten.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Enterprise DevOps & Cloud Oplossingen | CHORN",
        description: "Versnel uw digitale transformatie met DevOps- en cloud-expertise. Wij leveren gestroomlijnde CI/CD-pijplijnen, infrastructuurautomatisering en cloud-native oplossingen die de betrouwbaarheid verbeteren en de time-to-market verkorten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise DevOps & Cloud Oplossingen | CHORN",
        description: "Versnel uw digitale transformatie met DevOps- en cloud-expertise. Wij leveren gestroomlijnde CI/CD-pijplijnen, infrastructuurautomatisering en cloud-native oplossingen die de betrouwbaarheid verbeteren en de time-to-market verkorten.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "DevOps-expertise", "softwaretesten", "continue integratie", "CI/CD-pijplijn", "geautomatiseerd testen",
        "cloudgebaseerde oplossingen", "maatwerksoftwareontwikkeling", "DevOps-consulting", "softwarekwaliteitbeheer",
        "prestatietests", "laadtests", "beveiligingstests", "testautomatisering", "DevOps Thailand",
        "DevOps-engineer", "test-expertise Thailand", "IT-infrastructuurbeheer", "softwareontwikkelingscyclus",
        "softwareontwikkelaar Thailand", "DevOps-tools", "schaalbare applicaties", "softwaretestoplossingen",
        "Full Stack ontwikkelaar", "cloudinfrastructuur"
    ],
}
