// ServicePackagesNL.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesNL: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Drie high-priority pakketten — Premium Innovation Plan, Web3 Core Plan en NFT Evolution Plan — ontworpen voor fulltime toewijding en snelle oplevering binnen 3–12 maanden. Ideaal voor strategische groei, schaalbaarheid en het verlichten van de noodzaak om een intern team aan te nemen.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Ma–Vr, 8:30–17:30 (Fulltime, toegewijd)",
                highlight: "Exclusieve fulltime ondersteuning voor niet-blockchain projecten zoals MVP’s, systeemverbeteringen en schaalvergroting.",
                features: [
                    "Systeemupgrades, nieuwe functionaliteiten, schaalbaarheid, PoC en MVP",
                    "Ondersteuning voor alle gangbare talen en frameworks (frontend, backend, API)",
                    "Integratie met alle grote databases en cloud platforms",
                    "Ondersteuning voor moderne en legacy protocollen zoals gRPC, RPI, JMS"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Ma–Vr, 8:30–17:30 (Fulltime, toegewijd)",
                highlight: "Volledige blockchain-ontwikkeling inclusief tokenomics en smart contracts, met volledige Web3-integratie.",
                features: [
                    "Blockchainontwikkeling met Solidity, Ethers.js, Ethereum",
                    "Ontwikkeling, audit en integratie van smart contracts",
                    "Frontend- en backendontwikkeling met Next.js, React, Node.js",
                    "Tokenmechanismen zoals airdrops, presales en reward systems"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Ma–Vr, 8:30–17:30 (Fulltime, toegewijd)",
                highlight: "Gespecialiseerde NFT-ontwikkeling en modernisering van bestaande contracten.",
                features: [
                    "Moderne NFT-oplossingen en upgrades van legacy contracten",
                    "Ontwikkeling of refactoring van Solidity-gebaseerde smart contracts",
                    "Integratie met frontend/backend frameworks: Next.js, React, Node.js",
                    "Ondersteuning voor NFT-standaarden (ERC721, ERC1155) en marktplaatsen"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Drie deeltijd pakketten — Essential Care, Growth Support en Blockchain Pioneer — ontworpen voor het continu ontwikkelen en ondersteunen van bestaande projecten na lancering, met duidelijke tijdsplanning en flexibele schaalbaarheid. Ideaal voor startups, agencies en technische teams die op zoek zijn naar een betrouwbare partner zonder fulltime inzet.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "Ma–Vr, 08:30–17:30 (gedeeld)",
                highlight: "Fundamentele ondersteuning voor systemen met beperkte ontwikkelbehoeften. Perfect voor MVP’s, proof-of-concepts en vroege operationele fases.",
                features: [
                    "Lichte setup en verfijning van kernfunctionaliteiten",
                    "Systeemmonitoring, kleine aanpassingen en stabiliteitsbewaking",
                    "Documentatie en begeleiding voor nieuwe ontwikkelaars",
                    "Geen complexe nieuwe functies inbegrepen",
                    "Ondersteuning van belangrijke talen en databases"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "Ma–Vr, 08:30–17:30 (gedeeld)",
                highlight: "Voor groeiende bedrijven die continue ontwikkeling nodig hebben zonder fulltime inzet.",
                features: [
                    "Regulier onderhoud en middelzware feature ontwikkeling",
                    "Wekelijkse afstemming met stakeholders (1–3 teamleden)",
                    "Full-stack ondersteuning voor API’s, platforms en interne tools",
                    "Ondersteunt belangrijke talen, frameworks, databases en cloudplatforms",
                    "Schaalbaar naar grotere plannen bij groei van het bedrijf"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/month",
                hourlyEquivalent: "$18.74 USD/hr",
                schedule: "Ma–Vr, 08:30–17:30 (gedeeld)",
                highlight: "Meer ontwikkelingsfocus dan Growth Support, ideaal voor platforms die frequente verbeteringen en nauwe samenwerking met stakeholders nodig hebben.",
                features: [
                    "Uitgebreidere scope voor feature upgrades, verfijningen en prestatieverbeteringen",
                    "Snellere oplevercycli dan Growth Support (geschikt voor snelle iteraties)",
                    "1–2 wekelijkse syncs met stakeholders (3–6 personen) voor planning en feedback",
                    "Full-stack engineering voor web, backend en third-party integraties",
                    "Ondersteunt belangrijke frameworks, databases en cloudservices met toenemende vraag"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "Ma–Vr, 08:30–17:30 (gedeeld)",
                highlight: "Instapniveau blockchain ondersteuning voor Web3, NFT’s en Ethereum-productinnovatie.",
                features: [
                    "Smart contract en dApp ontwikkeling op Ethereum",
                    "Integratie met Web2/3 backends en token ecosystemen",
                    "NFT minting, metadata beheer en marktplaats gereedheid",
                    "Ideaal voor bedrijven die Web3 ervaringen testen of lanceren"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Flexibele development pakketten op uurbasis — ideaal voor agile teams, startups en Web3-innovators die behoefte hebben aan on-demand ondersteuning. Een strategische partner zonder vaste aanwervingen. Inclusief spoedreparatieservice.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 uur/week",
                highlight: "Flexibele full-stack ontwikkelcapaciteit afgestemd op productgroei en schaalbaarheid.",
                features: [
                    "Maatwerk software-, web- en API-ontwikkeling on-demand",
                    "Ondersteuning voor alle belangrijke programmeertalen en frameworks",
                    "Ideaal voor teams die willen opschalen zonder vaste developers"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 uur/week",
                highlight: "Geavanceerde blockchain- en Web3-diensten voor innovatieve digitale producten.",
                features: [
                    "Smart contracts, NFT’s en Ethereum ontwikkeling",
                    "Integratie met moderne frameworks zoals Next.js, React en Node.js",
                    "Strategische ondersteuning voor op maat gemaakte Web3 platformen"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "8 uur gereserveerd",
                highlight: "Snel reageren op kritieke bugs — diagnose en oplossing binnen één werkdag.",
                features: [
                    "Directe analyse en same-day delivery",
                    "Ondersteunt éénmalige fix voor externe projecten",
                    "Geen langetermijncontract vereist",
                    "Ideaal voor urgente productieproblemen"
                ],
                link: "service-packages/"
            }
        ]
    }
};