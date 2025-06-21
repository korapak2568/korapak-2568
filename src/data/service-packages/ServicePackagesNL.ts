// ServicePackagesNL.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesNL: IServicePackages = {
    name: "Servicepakketten",
    premium: {
        name: "Premium Pakketten",
        description: "Een reeks van drie gedeelde serviceplannen — Growth Support, Advanced Growth Plan en Blockchain Pioneer — afgestemd op productondersteuning na de lancering, strategische iteratie en schaalbare technische operaties. Ontworpen voor startups, bureaus en bedrijven die betrouwbare engineering zoeken zonder de lasten van fulltime aanwerving.",
        plans: [
            {
                name: "Klein Projectplan",
                price: "USD 299 / 1–5 dagen",
                schedule: "Flexibel (per project, ≤1 week)",
                highlight: "Efficiënte oplossing voor microtaken, fixes of kleine functies die binnen enkele dagen geleverd kunnen worden.",
                features: [
                    "Ideaal voor dringende taken, snelle prototypes of geïsoleerde bugfixes",
                    "Doorlooptijd meestal binnen 2–5 werkdagen",
                    "Inclusief planning, codelevering en basistesten",
                    "Ondersteuning voor front-end, back-end of API-microfeatures",
                    "Geen terugkerende support of wekelijkse meetings",
                    "Geschikt voor eenmalige of afgebakende behoeften"
                ],
                link: "service-packages/"
            },
            {
                name: "Snelle Leveringsplan",
                price: "USD 579 / 1–2 weken",
                schedule: "Flexibel (projectgebaseerd, ~1–2 weken)",
                highlight: "Een sprintgericht pakket voor compacte functiesets, integraties of verbeteringen, geleverd binnen enkele weken.",
                features: [
                    "Ideaal voor functies met gemiddelde complexiteit, component-upgrades of integratietaken",
                    "Omvat planning, ontwerpiteratie, implementatie en functioneel testen",
                    "Ondersteunt full-stack taken of gerichte modules (bijv. API, dashboard, automatisering)",
                    "Inclusief tot 2 sync-sessies voor planning en overdracht",
                    "Snelle levering zonder lange termijn contracten",
                    "Geschikt voor beginnende teams, POC’s of interne tool-uitbreidingen"
                ],
                link: "service-packages/"
            },
            {
                name: "Essentiële Zorgplan",
                price: "USD 900 / maand",
                schedule: "Ma–Vr, 8:30–17:30 (gedeeld)",
                highlight: "Basis engineering support voor MVP’s, interne tools of vroege platforms met minimale ontwikkelbehoefte.",
                features: [
                    "Lichte setup en stabilisatie van kernfunctionaliteiten",
                    "Regelmatige monitoring, bugfixes en technisch onderhoud",
                    "Documentatie en technische overdracht voor interne teams",
                    "Sluit complexe featureontwikkeling uit",
                    "Compatibel met gangbare programmeertalen en databases"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gouden Pakketten",
        description: "Drie deeltijd pakketten — Essential Care, Growth Support en Blockchain Pioneer — ontworpen voor het continu ontwikkelen en ondersteunen van bestaande projecten na lancering, met duidelijke tijdsplanning en flexibele schaalbaarheid. Ideaal voor startups, agencies en technische teams die op zoek zijn naar een betrouwbare partner zonder fulltime inzet.",
        plans: [
            {
                name: "Groei Ondersteuningsplan",
                price: "USD 1,999 / month",
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
                name: "Geavanceerd Groeiplan",
                price: "USD 2,999 / month",
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
                name: "Blockchain Pioniersplan",
                price: "USD 3,999 / month",
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
    platinum: {
        name: "Platina Pakketten",
        description: "Drie strategische fulltime dienstpakketten — Premium Innovatieplan, Web3 Kernplan en NFT Evolutieplan — afgestemd op CEO’s, CTO’s, Product Owners en oprichters die een betrouwbare technische partner zoeken om productlanceringen binnen 3 tot 12 maanden te versnellen. Ontworpen voor bedrijfskritische initiatieven die schaalbaarheid, snelle iteratie en vermindering van interne wervingslast vereisen.",
        plans: [
            {
                name: "Premium Innovatieplan",
                price: "USD 5,900 / month",
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
                name: "Web3 Kernplan",
                price: "USD 6,900 / month",
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
                name: "NFT Evolutieplan",
                price: "USD 6,900 / month",
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
};