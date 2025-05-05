import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeNL: Metadata = {
    title: "CHORN | Ontwikkeling van bedrijfssoftware en systeemintegratie",
    description: "Versterk uw bedrijf met professionele systeemanalyse en geavanceerde softwareoplossingen. CHORN is gespecialiseerd in full-stack ontwikkeling, AI-gedreven automatisering, cloud computing en systeemmodernisering om innovatie en efficiëntie te stimuleren.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.nl, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN | Ontwikkeling van bedrijfssoftware en systeemintegratie",
        description: "Versterk uw bedrijf met professionele systeemanalyse en geavanceerde softwareoplossingen. CHORN is gespecialiseerd in full-stack ontwikkeling, AI-gedreven automatisering, cloud computing en systeemmodernisering om innovatie en efficiëntie te stimuleren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.home).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Ontwikkeling van bedrijfssoftware en systeemintegratie",
        description: "Versterk uw bedrijf met professionele systeemanalyse en geavanceerde softwareoplossingen. CHORN is gespecialiseerd in full-stack ontwikkeling, AI-gedreven automatisering, cloud computing en systeemmodernisering om innovatie en efficiëntie te stimuleren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "CHORN maatwerk softwareontwikkeling", "CHORN software outsourcing", "Wat is CHORN",
        "CHORN softwareontwikkeling Thailand", "CHORN softwareontwikkelaar Chiang Mai", "CHORN softwareontwikkelaar Bangkok",

        "maatwerk softwareontwikkeling", "maatwerk softwareontwikkelingsbedrijven", "software outsourcing",
        "software outsourcing technische expertise", "software ontwikkelings outsourcing", "software ontwikkelings outsourcing bedrijven",
        "top software outsourcing bedrijven", "webontwikkeling outsourcing bedrijven", "IT ontwikkelingsbedrijven",
        "outsourcing ontwikkelingsbedrijf", "outsourcing Thailand", "outsourcing bedrijf in Thailand",
        "softwareontwikkeling Chiang Mai", "software outsourcing Chiang Mai", "software outsourcing Bangkok",

        "software engineer", "software ontwikkelaar", "frontend ontwikkelaar", "backend ontwikkelaar", "full stack ontwikkelaar",
        "web ontwikkelaar", "mobiele ontwikkelaar", "React ontwikkelaar", "Angular ontwikkelaar", "Java ontwikkelaar",
        "Node.js ontwikkelaar", ".NET Core ontwikkelaar", "PHP ontwikkelaar", "API ontwikkelaar", "blockchain ontwikkelaar",
        "Web3 ontwikkelaar", "microservices ontwikkelaar", "digitale innovatie", "bedrijfssoftware", "schaalbare websites",

        "software ontwikkelaar Thailand", "software ontwikkelaar Chiang Mai", "software ontwikkelaar Bangkok",
        "software engineer Thailand", "frontend ontwikkelaar Thailand", "backend ontwikkelaar Thailand",
        "full stack ontwikkelaar Thailand", "web ontwikkelaar vacatures in Thailand", "mobiele ontwikkelaar Thailand",
        "full stack ontwikkelaar Chiang Mai", "software ontwikkelaar remote vacatures", "outsourcing programmeurs Thailand",

        "hoofd techniek", "hoofd techniek afdeling Thailand", "directeur techniek",
        "directeur techniek Thailand", "hoofd software ontwikkeling", "hoofd software ontwikkeling Thailand",
        "hoofd software engineering", "hoofd software engineering Thailand", "IT projectmanager",
        "software ontwikkelingsmanager", "hoofd technologie", "systeemanalist",

        "Next.js ontwikkelaar", "React.js ontwikkelaar", "Spring Boot", "frontend framework", "frontend architectuur",
        "full stack web ontwikkelaar", "frontend backend ontwikkeling", "microservices",

        "outsourcing ontwikkeling", "outsourcing bedrijf in Thailand", "outsourcing programmeren",
        "outsourcing programmeertaken", "outsourcing programmeerjobs", "outsourcing programmeertaken",
        "online outsourcing programma"
    ]
}
