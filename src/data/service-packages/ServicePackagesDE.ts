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
        name: "Gold-Pakete",
        description: "Drei geteilte Zeitpakete – Essential Care Plan, Growth Support Plan und Blockchain Pioneer Plan – konzipiert für kontinuierliche Entwicklung oder Support bestehender Projekte nach dem Launch mit strukturierten Zeitplänen und flexibler Skalierbarkeit.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/Monat",
                hourlyEquivalent: "$5.625/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, geteilt)",
                highlight: "Zuverlässiger langfristiger Support ohne neue Entwicklung. Ideal für stabile Systeme.",
                features: [
                    "Systemüberwachung, Wartung und technischer Support",
                    "Aktualisierung von Dokumentationen und Unterstützung beim Teamlernen",
                    "Keine neuen Feature-Entwicklungen enthalten",
                    "Unterstützt alle gängigen Programmiersprachen und Datenbanken"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/Monat",
                hourlyEquivalent: "$12.49/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, geteilt)",
                highlight: "Flexibler Support mit kontinuierlicher Entwicklung für wachsende Systeme.",
                features: [
                    "Wartung und Entwicklung neuer Funktionen",
                    "Unterstützt alle gängigen Programmiersprachen und Frameworks",
                    "Kontinuierliche Verbesserung von Web-, API- oder kundenspezifischen Plattformen",
                    "Unterstützt alle gängigen Datenbanken und Cloud-Plattformen"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2.999 USD/Monat",
                hourlyEquivalent: "$18,74 USD/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Teilzeit, geteilt)",
                highlight: "Ausgewogener Entwicklungsfokus für wachsende Unternehmen mit aktivem Bedarf.",
                features: [
                    "Dedizierte Stunden für kontinuierliche Feature-Upgrades und Optimierungen",
                    "Full-Stack-Entwicklung für Front-End- und Back-End-Systeme",
                    "Ideal für wachsende Plattformen mit regelmäßigen Aktualisierungsanforderungen",
                    "Unterstützt Integration mit Drittanbieterdiensten und APIs",
                    "Umfasst wichtige Frameworks, Datenbanken und Cloud-Plattformen"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/Monat",
                hourlyEquivalent: "$24.99/Stunde",
                schedule: "Mo–Fr, 8:30–17:30 (Vollzeit, geteilt)",
                highlight: "Blockchain-Entwicklung in geteiltem Zeitmodell für neue Web3-, Blockchain- und NFT-Projekte.",
                features: [
                    "Web3-, Smart Contract-, NFT- und Ethereum-Support",
                    "Unterstützt Frontend- und Backend-Integration für kundenspezifische Plattformen",
                    "Ideal für wachsende Blockchain-Projekte in kontinuierlicher Entwicklung"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium-Pakete",
        description: "Flexible, stundenbasierte Entwicklungspakete – geeignet für agile Teams, Start-ups und Blockchain-Innovatoren, die On-Demand-Support benötigen. Inklusive Super-Dringend-Fehlerbehebung!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/Stunde",
                hourlyEquivalent: "$40 USD/Stunde",
                hours: "20–40 Std./Woche",
                highlight: "Teilzeit- oder Vollzeitentwicklungsdienst mit Full-Stack-Fähigkeiten.",
                features: [
                    "On-Demand-Entwicklung von benutzerdefinierter Software, Web- und API",
                    "Unterstützt alle gängigen Programmiersprachen und Frameworks",
                    "Ideal für Teams, die flexible, qualifizierte Entwicklungsressourcen benötigen"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/Stunde",
                hourlyEquivalent: "$60 USD/Stunde",
                hours: "20–40 Std./Woche",
                highlight: "Erweiterte Blockchain-Dienste für Web3-native Unternehmen und NFT-Innovatoren.",
                features: [
                    "Blockchain-, Smart Contract-, NFT- und Ethereum-Entwicklung",
                    "Unterstützung führender Frontend- und Backend-Frameworks: Next.js, React, Node.js",
                    "Frontend- und Backend-Integration für kundenspezifische Plattformen",
                    "Flexible Beteiligung für fortschrittliche Web3-Projekte"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30/Stunde",
                hours: "Reserve: 8 Std./Tag",
                highlight: "Schnelle Notfallreaktion – Problemdiagnose und -lösung innerhalb eines Tages.",
                features: [
                    "Sofortige Beratung und Unterstützung",
                    "Lieferung am selben Tag",
                    "Einzelne Fehlerbehebung für externe Projekte",
                    "Kein langfristiger Vertrag erforderlich"
                ],
                link: "service-packages/"
            }
        ]
    }
};