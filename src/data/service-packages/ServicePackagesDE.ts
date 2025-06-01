// ServicePackagesDE.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDE: IServicePackages = {
    platinum: {
        name: "Platin-Pakete",
        description: "Drei hochpriorisierte Pakete – Premium Innovation Plan, Web3 Core Plan und NFT Evolution Plan – konzipiert für dedizierte Vollzeitentwicklung mit dem Ziel, innerhalb von 3–12 Monaten zu starten. Ideal für geschäftskritische oder zeitkritische Projekte.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/Monat",
                hourlyEquivalent: "$37.49/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert oder dauerhaft)",
                highlight: "Exklusiver Vollzeitsupport für Nicht-Blockchain-Projekte, einschließlich MVPs, System-Upgrades und Skalierung.",
                features: [
                    "System-Upgrades, neue Feature-Entwicklung, Skalierung, PoC, MVP",
                    "Unterstützt alle gängigen Programmiersprachen und Frameworks, Frontend-, Backend- und API-Entwicklung",
                    "Unterstützt alle gängigen Datenbanken und Cloud-Plattformen",
                    "Unterstützt moderne und Legacy-Protokolle: gRPC, RPI, JMS usw."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/Monat",
                hourlyEquivalent: "$43.74/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert oder dauerhaft)",
                highlight: "End-to-End Blockchain-Entwicklung mit vollständiger Web3-Integration, einschließlich Tokenomics und Smart Contracts.",
                features: [
                    "Blockchain- und Web3-Entwicklung mit Solidity, Ethers.js, Ethereum",
                    "Smart Contract-Entwicklung, Audits und Integration",
                    "Frontend und Backend: Next.js, React, Node.js",
                    "Token-Mechaniken: Airdrops, Presales, Belohnungssysteme"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/Monat",
                hourlyEquivalent: "$43.74/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert oder dauerhaft)",
                highlight: "NFT-fokussierte Entwicklung, einschließlich Neubauten und Modernisierung bestehender Verträge.",
                features: [
                    "Moderne NFT-Entwicklung und Upgrades von Legacy-NFTs",
                    "Smart Contract-Erstellung oder -Überarbeitung auf Basis von Solidity",
                    "Unterstützung führender Frontend- und Backend-Frameworks: Next.js, React, Node.js",
                    "Unterstützung für NFT-Standards (ERC721, ERC1155) und Marktplätze"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Platinum Packages",
        description: "Drei vollständig dedizierte Servicepakete für Unternehmen und Startups mit kritischen Zeitplänen. Wir agieren als strategischer Technologiepartner zur Unterstützung der Skalierung und Reduktion interner Ressourcen. Optimal für Produkteinführungen innerhalb von 3–12 Monaten.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "195.000 THB/Monat",
                hourlyEquivalent: "1.220 THB/Stunde",
                "schedule": "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert)",
                highlight: "Exklusive Vollzeitunterstützung für Nicht-Blockchain-Projekte wie MVPs, Systemmodernisierungen und skalierbare Anwendungen.",
                features: [
                    "Systemoptimierung, Feature-Entwicklung, MVP, PoC",
                    "Support für gängige Programmiersprachen und Frameworks (Frontend & Backend)",
                    "Kompatibel mit führenden Datenbanken und Cloud-Infrastrukturen",
                    "Unterstützung moderner und klassischer Protokolle (gRPC, RPI, JMS usw.)"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                "schedule": "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert)",
                highlight: "End-to-End Blockchain-Entwicklung mit vollständiger Web3-Integration, einschließlich Smart Contracts und Token-Mechanismen.",
                features: [
                    "Blockchain- und Web3-Entwicklung mit Solidity, Ethers.js, Ethereum",
                    "Smart Contracts inkl. Audit und Integration",
                    "Frontend & Backend mit Next.js, React, Node.js",
                    "Airdrops, Token Presales, Belohnungssysteme"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                "schedule": "Mo–Fr, 8:30–17:30 (Vollzeit, dediziert)",
                highlight: "Fokus auf NFT-Projekte – neue Entwicklungen und Updates für bestehende Smart Contracts.",
                features: [
                    "Moderne NFT-Entwicklung und Migration alter Verträge",
                    "Solidity-basierte Smart Contract-Erstellung und -Optimierung",
                    "Integration mit Next.js, React, Node.js",
                    "Unterstützung für NFT-Standards (ERC721, ERC1155) und Marktplätze"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Flexible, stundenbasierte Entwicklungspakete — ideal für agile Teams, Startups und Web3-Unternehmen, die bedarfsorientierte Unterstützung benötigen. Skalierbar und ohne feste Mitarbeiterbindung. Inklusive Express-Fehlerbehebung.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 Std./Woche",
                highlight: "Flexible Full-Stack-Entwicklung für Teams, die skalierbare Unterstützung benötigen.",
                features: [
                    "Individuelle Software-, Web- und API-Entwicklung auf Abruf",
                    "Unterstützt alle gängigen Programmiersprachen und Frameworks",
                    "Perfekt zur Ergänzung bestehender Teams oder MVP-Sprints"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 Std./Woche",
                highlight: "Spezialisierte Blockchain- und NFT-Entwicklung für Web3-First-Projekte.",
                features: [
                    "Entwicklung von Smart Contracts, NFT-Standards und Ethereum-basierten Plattformen",
                    "Integration mit Next.js, React und Node.js",
                    "Optimiert für Tokenomics, Presales und dezentrale Anwendungen"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "8 Std. reserviert",
                highlight: "Sofortige Fehlerbehebung mit Lieferung am selben Tag — ideal für kritische Ausfälle.",
                features: [
                    "Schnelle Analyse und Umsetzung",
                    "Keine Vertragsbindung erforderlich",
                    "Einzelproblembehebung auch für externe Projekte",
                    "Geeignet für Produktionssysteme mit hoher Verfügbarkeit"
                ],
                link: "service-packages/"
            }
        ]
    }
};