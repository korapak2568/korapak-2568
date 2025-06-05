import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDA: IServicePackages = {
    name: "Servicepakker",
    platinum: {
        name: "Platinum Packages",
        description: "Tre fuldt dedikerede pakker designet til virksomheder og startup-teams med kritiske roadmaps. Disse løsninger fungerer som en strategisk teknologipartner, hvor vi hjælper med skalering og reducerer behovet for interne ansættelser. Ideel til projekter, der skal lanceres inden for 3–12 måneder.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Man–Fre, 8:30–17:30 (Fuldtid, dedikeret)",
                highlight: "Dedikeret support til udvikling uden blockchain – ideel til MVP’er, systemopgraderinger og skalerbare løsninger.",
                features: [
                    "Systemforbedringer, udvikling af nye funktioner, MVP og proof-of-concept",
                    "Understøttelse af alle større sprog og frameworks på frontend og backend",
                    "Kompatibilitet med førende databaser og cloud-platforme",
                    "Support for moderne og ældre protokoller som gRPC, RPI og JMS"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Man–Fre, 8:30–17:30 (Fuldtid, dedikeret)",
                highlight: "Komplet blockchain-løsning med Web3-integration – herunder smart contracts og token design.",
                features: [
                    "Udvikling med Solidity, Ethers.js og Ethereum-økosystemet",
                    "Smart contracts med audit og integration",
                    "Frontend og backend via Next.js, React og Node.js",
                    "Token-mekanik som airdrops, presales og belønningssystemer"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Man–Fre, 8:30–17:30 (Fuldtid, dedikeret)",
                highlight: "Specialiseret i NFT-løsninger – både nye produkter og modernisering af eksisterende smart contracts.",
                features: [
                    "NFT-udvikling og opdatering af eksisterende kontrakter",
                    "Smart contract-udvikling med Solidity",
                    "Integration med Next.js, React, Node.js m.m.",
                    "Support for ERC721, ERC1155 og markedsplads-integration"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Et udvalg af tre deltidsservicepakker — Essential Care, Growth Support og Blockchain Pioneer — designet til støtte efter lancering, strategisk iteration og skalerbar teknisk drift. Ideel til startups, bureauer og virksomheder, der søger pålidelig teknisk support uden behov for fuldtidsansættelser.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/måned",
                hourlyEquivalent: "$5.625 USD/time",
                schedule: "Man–Fre, 8:30–17:30 (deltid)",
                highlight: "Grundlæggende teknisk support til MVP'er, interne værktøjer eller tidlige platforme med minimale udviklingsbehov.",
                features: [
                    "Let opsætning og stabilisering af kernefunktioner",
                    "Rutinemæssig overvågning, fejlrettelser og teknisk vedligeholdelse",
                    "Dokumentation og teknisk overdragelse til interne teams",
                    "Udelukker udvikling af komplekse funktioner",
                    "Kompatibel med udbredte sprog og databaser"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/måned",
                hourlyEquivalent: "$12.49 USD/time",
                schedule: "Man–Fre, 8:30–17:30 (deltid)",
                highlight: "Ideel for voksende teams, der kræver kontinuerlige forbedringer og teknisk fleksibilitet uden fuldtidsomkostninger.",
                features: [
                    "Løbende vedligeholdelse og udvikling af mellemstore funktioner",
                    "Ugentlig synkronisering med dit team (1–3 interessenter)",
                    "Full-stack implementering af API'er, admin-værktøjer og brugerfunktioner",
                    "Understøtter moderne teknologistakke, cloud-platforme og rammer",
                    "Nem opgradering til højere pakker efter behov"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/måned",
                hourlyEquivalent: "$18.74 USD/time",
                schedule: "Man–Fre, 8:30–17:30 (deltid)",
                highlight: "Strategisk udviklingspartner for platforme med behov for kontinuerlig levering og tæt interessentsamarbejde.",
                features: [
                    "Udvidet funktionalitet, optimeringscyklusser og ydeevneforbedringer",
                    "Accelereret leveringskadence (ideel til ugentlige sprint)",
                    "1–2 interessentsynkroniseringer pr. uge (team på 3–6 deltagere)",
                    "Robust full-stack engineering på tværs af web, backend og integrationer",
                    "Designet til voksende produktteams med udviklende tekniske behov"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/måned",
                hourlyEquivalent: "$24.99 USD/time",
                schedule: "Man–Fre, 8:30–17:30 (fuldtid, delt)",
                highlight: "Professionel indgang til blockchain-innovation — ideel til Web3-prototyper, NFT-værktøjer og Ethereum-baserede platforme.",
                features: [
                    "Udvikling af smart contracts og Ethereum-baserede dApps",
                    "End-to-end integration med Web2/Web3 backend-systemer",
                    "NFT-minting pipelines, metadatahåndtering og markedspladsudrulning",
                    "Bedst egnet til fremadskuende teams, der træder ind i det decentrale rum"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Fleksible timebaserede udviklingspakker — ideelle for agile teams, startups og Web3-aktører, der har brug for on-demand support. Perfekt til skalering uden behov for fastansættelse. Inkluderer hurtig nødhjælp til kritiske fejl.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 timer/uge",
                highlight: "Fleksibel softwareudvikling med full-stack kapabiliteter — tilpasset jeres team og roadmap.",
                features: [
                    "Custom software, web og API-udvikling på forespørgsel",
                    "Understøtter alle større programmeringssprog og frameworks",
                    "Effektiv løsning for teams, der ønsker skalérbar udviklingskapacitet uden langsigtede forpligtelser"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 timer/uge",
                highlight: "Avancerede blockchain-tjenester målrettet Web3-startups og NFT-lanceringer.",
                features: [
                    "Udvikling af blockchain, smart contracts, NFT’er og Ethereum-baserede løsninger",
                    "Integration med Next.js, React, Node.js og backend services",
                    "Fleksibel model til hurtig tilpasning af Web3-arkitektur og tokenmekanik"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "8 timer forbeholdt",
                highlight: "Akut fejlretning med leverance samme dag — ideel til kritiske issues i drift.",
                features: [
                    "Øjeblikkelig rådgivning og fejlanalyse",
                    "Samme dags løsning uden binding",
                    "Velegnet til eksterne systemer uden fast udviklingsteam",
                    "Ingen langtidskontrakt nødvendig"
                ],
                link: "service-packages/"
            }
        ]
    }
};