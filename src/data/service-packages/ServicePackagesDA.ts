import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDA: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description:
            "Tre højprioriterede pakker — Premium Innovation Plan, Web3 Core Plan og NFT Evolution Plan — designet til dedikeret fuldtidsudvikling med henblik på lancering inden for 3–12 måneder. Ideel til missionkritiske eller tidsfølsomme projekter.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "Eksklusiv fuldtidsstøtte til ikke-blockchain projekter, herunder MVP'er, systemopgraderinger og skalering.",
                features: [
                    "Systemopgraderinger, udvikling af nye funktioner, skalering, PoC, MVP",
                    "Understøtter alle større programmeringssprog og frameworks, front-end, back-end og API-udvikling",
                    "Understøtter alle større databaser og cloud-platforme",
                    "Understøtter moderne og ældre protokoller: gRPC, RPI, JMS osv."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "End-to-end blockchain-udvikling med fuld Web3-integration, herunder tokenomics og smart contracts.",
                features: [
                    "Blockchain- og Web3-udvikling med Solidity, Ethers.js, Ethereum",
                    "Udvikling, revision og integration af smart contracts",
                    "Front-End og Back-End: Next.js, React, Node.js",
                    "Tokenmekanismer: airdrops, presales, belønningssystemer"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight:
                    "NFT-fokuseret udvikling, herunder nye builds og modernisering af ældre kontrakter.",
                features: [
                    "Moderne NFT-udvikling og opgraderinger af ældre NFT'er",
                    "Smart contract oprettelse eller refaktorering baseret på Solidity",
                    "Understøttelse af store front-end og back-end frameworks: Next.js, React, Node.js",
                    "Understøttelse af NFT-standarder (ERC721, ERC1155) og markedspladser"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description:
            "Tre deltids-pakker — Essential Care Plan, Growth Support Plan og Blockchain Pioneer Plan — designet til løbende udvikling eller support af eksisterende projekter efter lancering, med strukturerede tidslinjer og fleksibel skalering.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Pålidelig langsigtet support uden ny udvikling. Ideel til stabile systemer.",
                features: [
                    "Systemovervågning, vedligeholdelse og teknisk support",
                    "Opdateringer af dokumentation og support til teamlæring",
                    "Ingen udvikling af nye funktioner inkluderet",
                    "Understøtter alle større programmeringssprog og databaser"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Fleksibel support med løbende udvikling til voksende systemer.",
                features: [
                    "Vedligeholdelse og udvikling af nye funktioner",
                    "Understøtter alle større programmeringssprog og frameworks",
                    "Løbende forbedringer for web, API eller specialplatforme",
                    "Understøtter alle større databaser og cloud-platforme"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2.999 USD/måned",
                hourlyEquivalent: "$18,74 USD/time",
                schedule: "Man–Fre, 8:30–17:30 (Deltid, delt)",
                highlight: "Balanceret udviklingsfokus for skalerende virksomheder med aktive behov.",
                features: [
                    "Dedikerede timer til løbende funktionsopgraderinger og forbedringer",
                    "Full-Stack-udvikling på både Front-End og Back-End",
                    "Ideel til voksende platforme med behov for regelmæssige opdateringer",
                    "Understøtter integration med tredjepartstjenester og API'er",
                    "Dækker store frameworks, databaser og cloud-platforme"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight:
                    "Deltids blockchain-udvikling til nye Web3-, Blockchain- og NFT-projekter.",
                features: [
                    "Web3, Smart Contract, NFT, Ethereum support",
                    "Understøtter integration af front-end og back-end til specialplatforme",
                    "Ideel til voksende blockchain-projekter i løbende udvikling"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description:
            "Fleksible timebaserede udviklingspakker — velegnet til agile teams, startups og blockchain-innovatører med behov for support efter behov. Inkluderer Super Urgent fejlretningsplan!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 hrs/week",
                highlight:
                    "Deltid eller fuldtids softwareudvikling med full-stack kapaciteter.",
                features: [
                    "On-demand udvikling af tilpasset software, web og API",
                    "Understøtter alle større programmeringssprog og frameworks",
                    "Ideel til teams, der har brug for fleksible, dygtige udviklingsressourcer"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 hrs/week",
                highlight:
                    "Avancerede blockchain-tjenester til Web3-native virksomheder og NFT-innovatører.",
                features: [
                    "Blockchain, Smart Contract, NFT, Ethereum udvikling",
                    "Understøttelse af store front-end og back-end frameworks: Next.js, React, Node.js",
                    "Understøtter integration af front-end og back-end til specialplatforme",
                    "Fleksibelt engagement til avancerede Web3-projekter"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "Reserve 8 hrs/day",
                highlight:
                    "Hurtig nødhjælpsrespons — problem diagnosticeret og løst inden for en dag.",
                features: [
                    "Øjeblikkelig konsultation og support",
                    "Levering samme dag",
                    "Enkelt fejlretning for eksterne projekter",
                    "Ingen langvarig kontrakt krævet"
                ],
                link: "service-packages/"
            }
        ]
    }
};