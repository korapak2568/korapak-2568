import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptNL: Metadata = {
    title: "TypeScript | CHORN - Experts in maatwerksoftwareontwikkeling",
    description: "Gebruik TypeScript om schaalbare, robuuste en efficiënte maatwerksoftware-oplossingen te ontwikkelen voor bedrijven in verschillende sectoren.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Maatwerksoftwareontwikkeling met TypeScript",
        description: "Expertise in TypeScript, een krachtig hulpmiddel voor het bouwen van schaalbare en high-performance toepassingen. Leer waarom we TypeScript kiezen voor maatwerksoftware-oplossingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.typescript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript-ontwikkeling voor maatwerksoftware-oplossingen",
        description: "Gebruik TypeScript om schaalbare en hoogwaardige software-oplossingen te leveren die zijn afgestemd op de behoeften van bedrijven.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.typescript).twitter.images,
    },
    keywords: [
        "TypeScript-ontwikkeling", "TypeScript-expertise", "TypeScript-ontwikkelaar", "Maatwerk TypeScript-ontwikkeling",
        "TypeScript-webapplicaties", "TypeScript Full Stack-ontwikkeling", "TypeScript Frontend-ontwikkeling",
        "Maatwerksoftwareontwikkeling",
        "Schaalbare webapplicaties", "Frontend-ontwikkeling", "Backend-ontwikkeling",
        "High-performance toepassingen", "Software-oplossingen voor bedrijven", "Maatwerkwebapplicaties", "API-ontwikkeling",
        "TypeScript-ontwikkelaar Thailand", "TypeScript-ontwikkelaar Bangkok", "TypeScript-ontwikkelaar Chiang Mai",
        "Frontend-ontwikkelaar Thailand", "Backend-ontwikkelaar Thailand", "Full Stack-ontwikkelaar Thailand",
        "Software-engineer", "Softwareontwikkelaar Thailand",
        "CHORN", "Digitale innovatie", "Bedrijfsoftware"
    ]
}
