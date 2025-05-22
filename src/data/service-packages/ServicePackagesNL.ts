// ServicePackagesNL.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesNL: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Drie topprioriteitspakketten – Premium Innovation Plan, Web3 Core Plan en NFT Evolution Plan – ontworpen voor toegewijde fulltime ontwikkeling met een doelstelling om binnen 3–12 maanden te lanceren. Ideaal voor kritieke of tijdgevoelige projecten.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999/month",
                hourlyEquivalent: "$37.49/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "Toegewijde fulltime ondersteuning voor niet-blockchainprojecten, inclusief MVP's, systeemupgrades en schaalbaarheid.",
                features: [
                    "Systeemupgrades, nieuwe functies, schaalbaarheid, PoC, MVP",
                    "Ondersteunt populaire programmeertalen en frameworks voor frontend, backend en API",
                    "Ondersteunt populaire databases en cloudplatforms",
                    "Ondersteunt moderne en legacy protocollen: gRPC, RPI, JMS, enz."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999/month",
                hourlyEquivalent: "$43.74/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "End-to-end blockchainontwikkeling met volledige Web3-integratie, inclusief tokenomics en smart contracts.",
                features: [
                    "Blockchain- en Web3-ontwikkeling met Solidity, Ethers.js, Ethereum",
                    "Smart contract ontwikkeling, audits en integratie",
                    "Frontend en backend: Next.js, React, Node.js",
                    "Tokenmechanismen: airdrops, presales, beloningssystemen"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999/month",
                hourlyEquivalent: "$43.74/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "NFT-gerichte ontwikkeling, inclusief nieuwe projecten en het upgraden van bestaande contracten.",
                features: [
                    "Moderne NFT-ontwikkeling en upgrades van legacy-NFT's",
                    "Smart contract creatie of herziening op basis van Solidity",
                    "Ondersteuning voor frontend- en backend-frameworks: Next.js, React, Node.js",
                    "Ondersteuning voor NFT-standaarden (ERC721, ERC1155) en marktplaatsen"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Drie deeltijdpakketten – Essential Care Plan, Growth Support Plan en Blockchain Pioneer Plan – ontworpen voor voortdurende ontwikkeling of ondersteuning van bestaande projecten na de lancering met gestructureerde roosters en schaalbare flexibiliteit.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899/month",
                hourlyEquivalent: "$5.625/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Betrouwbare lange termijn ondersteuning zonder nieuwe ontwikkeling. Ideaal voor stabiele systemen.",
                features: [
                    "Systeemmonitoring, onderhoud en technische ondersteuning",
                    "Documentatie-updates en ondersteuning bij teamtraining",
                    "Geen ontwikkeling van nieuwe functies inbegrepen",
                    "Ondersteunt populaire programmeertalen en databases"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999/month",
                hourlyEquivalent: "$12.49/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Flexibele ondersteuning met voortdurende ontwikkeling voor groeiende systemen.",
                features: [
                    "Onderhoud en ontwikkeling van nieuwe functies",
                    "Ondersteunt populaire programmeertalen en frameworks",
                    "Continue verbetering van web-, API- of aangepaste platforms",
                    "Ondersteunt populaire databases en cloudplatforms"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999/month",
                hourlyEquivalent: "$24.99/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Blockchainontwikkeling in een deeltijdmodel voor nieuwe Web3-, blockchain- en NFT-projecten.",
                features: [
                    "Web3-, smart contract-, NFT- en Ethereum-ondersteuning",
                    "Ondersteuning voor frontend- en backend-integratie voor aangepaste platforms",
                    "Ideaal voor groeiende blockchainprojecten in voortdurende ontwikkeling"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Flexibele, op uurbasis ontwikkelpakketten – geschikt voor agile teams, start-ups en blockchain-innovatoren die on-demand ondersteuning nodig hebben. Inclusief supersnelle bugfixes!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40/hour",
                hourlyEquivalent: "$40/hr",
                hours: "20–40 hrs/week",
                highlight: "Parttime of fulltime ontwikkelingsdienst met full-stack vaardigheden.",
                features: [
                    "On-demand ontwikkeling van aangepaste software, web en API",
                    "Ondersteunt populaire programmeertalen en frameworks",
                    "Ideaal voor teams die flexibele, bekwame ontwikkelaars nodig hebben"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60/hour",
                hourlyEquivalent: "$60/hr",
                hours: "20–40 hrs/week",
                highlight: "Geavanceerde blockchainservices voor Web3-native bedrijven en NFT-innovators.",
                features: [
                    "Blockchain-, smart contract-, NFT- en Ethereum-ontwikkeling",
                    "Ondersteuning voor frontend- en backend-frameworks: Next.js, React, Node.js",
                    "Integratie van frontend en backend voor aangepaste platforms",
                    "Flexibele inzet voor geavanceerde Web3-projecten"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240/fix",
                hourlyEquivalent: "$30/hr",
                hours: "Reserve 8 hrs/day",
                highlight: "Snelle noodrespons – probleemoplossing en -oplossing binnen één dag.",
                features: [
                    "Direct advies en ondersteuning",
                    "Levering op dezelfde dag",
                    "Enkele bugfix voor externe projecten",
                    "Geen langdurig contract vereist"
                ],
                link: "service-packages/"
            }
        ]
    }
};