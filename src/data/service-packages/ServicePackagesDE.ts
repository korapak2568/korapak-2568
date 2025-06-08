// ServicePackagesDE.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDE: IServicePackages = {
    name: "Servicepakete",
    platinum: {
        name: "Platin-Pakete",
        description: "Drei hochpriorisierte Pakete – Premium Innovation Plan, Web3 Core Plan und NFT Evolution Plan – konzipiert für dedizierte Vollzeitentwicklung mit dem Ziel, innerhalb von 3–12 Monaten zu starten. Ideal für geschäftskritische oder zeitkritische Projekte.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,900 USD/Monat",
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
                price: "$6,900 USD/Monat",
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
                price: "$6,900 USD/Monat",
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
        name: "Gold Packages",
        description: "Ein modulares Serviceangebot bestehend aus vier skalierbaren Shared-Time-Plänen — Essential Care, Growth Support, Advanced Growth und Blockchain Pioneer. Entwickelt für Startups, Agenturen und Technologieunternehmen, die strategische Entwicklungspartner suchen, ohne die Komplexität einer internen Vollzeitbesetzung.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$799 USD/Monat",
                hourlyEquivalent: "$5.625 USD/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 Uhr (geteilt)",
                highlight: "Grundlegender Entwicklungs-Support für MVPs, interne Tools oder frühe Plattformversionen mit geringem Wartungsaufwand.",
                features: [
                    "Leichtgewichtiges Setup und Stabilisierung von Kernfunktionen",
                    "Regelmäßige Überwachung, Fehlerbehebungen und technische Pflege",
                    "Technische Dokumentation und Übergabe an interne Teams",
                    "Keine Entwicklung komplexer Features",
                    "Kompatibel mit etablierten Technologien und Datenbanken"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/Monat",
                hourlyEquivalent: "$12.49 USD/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 Uhr (geteilt)",
                highlight: "Für wachsende Teams, die kontinuierliche Weiterentwicklung und technische Flexibilität ohne zusätzliche Festanstellungen benötigen.",
                features: [
                    "Laufende Wartung und Entwicklung von mittleren Features",
                    "Wöchentliche Abstimmung mit Ihrem Team (1–3 Stakeholder)",
                    "Full-Stack-Implementierung für APIs, Admin-Tools und Frontend-Funktionalität",
                    "Unterstützt moderne Tech-Stacks, Cloud-Plattformen und Frameworks",
                    "Nahtlos skalierbar in höhere Service-Levels, je nach Produktwachstum"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/Monat",
                hourlyEquivalent: "$18.74 USD/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 Uhr (geteilt)",
                highlight: "Strategischer Entwicklungspartner für dynamische Plattformen mit Bedarf an kontinuierlicher Auslieferung und enger Abstimmung.",
                features: [
                    "Erweiterter Funktions-Rollout, Optimierungszyklen und Performance-Tuning",
                    "Beschleunigte Delivery-Cadence (optimal für wöchentliche Sprints)",
                    "1–2 wöchentliche Syncs mit Stakeholdern (3–6 Teammitglieder)",
                    "Robustes Full-Stack-Engineering für Web, Backend und Systemintegration",
                    "Unterstützt wachsende Teams mit skalierenden Technologieanforderungen"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/Monat",
                hourlyEquivalent: "$24.99 USD/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 Uhr (geteilt, Vollzeit)",
                highlight: "Professioneller Einstieg in Blockchain-Innovationen – ideal für Web3-Prototypen, NFT-Utilities und Ethereum-basierte Plattformen.",
                features: [
                    "Entwicklung von Smart Contracts und Ethereum-basierten dApps",
                    "End-to-End-Integration von Web2/Web3-Backend-Systemen",
                    "NFT-Minting-Pipelines, Metadaten-Management und Marketplace-Deployments",
                    "Optimal für visionäre Teams mit Fokus auf dezentralen Technologien"
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