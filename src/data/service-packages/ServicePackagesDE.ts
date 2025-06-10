// ServicePackagesDE.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDE: IServicePackages = {
    name: "Servicepakete",
    premium: {
        name: "Premiumpakete",
        description: "Kompakte Engineering-Pläne, maßgeschneidert für frühe Plattformphasen, MVPs, interne Tools oder Projekte mit kurzer Durchlaufzeit. Konzipiert für Startups und Unternehmen, die Expertenunterstützung ohne langfristige Bindung oder umfangreiche Teaminvestitionen benötigen.",
        plans: [
            {
                name: "Kleines Projektpaket",
                price: "$299 USD/Aufgabe",
                schedule: "Flexibel (projektbasiert, ≤1 Woche)",
                highlight: "Effiziente Lösung für Mikroaufgaben, Bugfixes oder kleine Features, die innerhalb weniger Tage geliefert werden können.",
                features: [
                    "Ideal für dringende Aufgaben, schnelle Prototypen oder isolierte Bugfixes",
                    "Typische Durchlaufzeit: 2–5 Werktage",
                    "Inklusive Planung, Code-Implementierung und Basistests",
                    "Unterstützt Frontend-, Backend- oder API-Mikrofeatures",
                    "Keine wiederkehrende Unterstützung oder wöchentliche Meetings",
                    "Geeignet für isolierte oder einmalige Anforderungen"
                ],
                link: "service-packages/"
            },
            {
                name: "Basis-Betreuungsplan",
                price: "$799 USD/Monat",
                schedule: "Mo–Fr, 8:30–17:30 (geteilte Kapazität)",
                highlight: "Grundlegende technische Unterstützung für MVPs, interne Tools oder frühe Plattformversionen mit geringem Entwicklungsbedarf.",
                features: [
                    "Leichtgewichtiges Setup und Stabilisierung der Kernfunktionen",
                    "Regelmäßige Überwachung, Fehlerbehebungen und technische Wartung",
                    "Dokumentation und Übergabe für interne Teams",
                    "Keine Entwicklung komplexer Features enthalten",
                    "Kompatibel mit gängigen Programmiersprachen und Datenbanksystemen"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Goldpakete",
        description: "Eine Suite von drei geteilten Serviceplänen — Growth Support, Advanced Growth Plan und Blockchain Pioneer — maßgeschneidert für Produkt-Support nach dem Launch, strategische Weiterentwicklung und skalierbare technische Betriebsabläufe. Entwickelt für Startups, Agenturen und Unternehmen, die zuverlässige technische Unterstützung ohne Vollzeit-Einstellungen suchen.",
        plans: [
            {
                name: "Wachstumsunterstützungsplan",
                price: "$1,999 USD/Monat",
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
                name: "Erweiterter Wachstumsplan",
                price: "$2,999 USD/Monat",
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
                name: "Blockchain-Pionierplan",
                price: "$3,999 USD/Monat",
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
    platinum: {
        name: "Platinpakete",
        description: "Drei strategische Full-Time-Angebote – Premium-Innovationsplan, Web3-Kernplan und NFT-Evolutionsplan – zugeschnitten auf CEOs, CTOs, Product Owner und Gründer, die einen vertrauenswürdigen technischen Partner suchen, um Produkteinführungen innerhalb von 3 bis 12 Monaten zu beschleunigen. Konzipiert für geschäftskritische Initiativen, die Skalierbarkeit, schnelle Iterationen und die Reduzierung interner Einstellungskosten erfordern.",
        plans: [
            {
                name: "Premium-Innovationsplan",
                price: "$5,900 USD/Monat",
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
                name: "Web3-Kernplan",
                price: "$6,900 USD/Monat",
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
                name: "NFT-Evolutionsplan",
                price: "$6,900 USD/Monat",
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
    }
};