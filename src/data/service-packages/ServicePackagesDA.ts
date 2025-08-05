import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesDA: IServicePackages = {
    name: "Servicepakker",
    premium: {
        name: "Premiumpakker",
        description: "Kompakte ingeniørplaner skræddersyet til tidlige platforme, MVP'er, interne værktøjer eller projekter med behov for hurtig levering. Designet til startups og virksomheder, der har brug for ekspertbistand uden langsigtede forpligtelser eller investering i fuldt team.",
        plans: [
            {
                name: "Lille Projektplan",
                price: "USD 300 / 1–3 dage",
                schedule: "Fleksibel (projektbaseret, ≤1 uge)",
                highlight: "Effektiv løsning til mikroopgaver, fejlrettelser eller små funktioner med levering på få dage.",
                features: [
                    "Ideel til hastesager, hurtige prototyper eller enkeltstående fejlrettelser",
                    "Typisk leveringstid: 2–5 arbejdsdage",
                    "Omfatter planlægning, kodelevering og grundlæggende test",
                    "Understøtter små funktioner i frontend, backend eller API",
                    "Ingen løbende support eller ugentlige møder",
                    "Bedst til enkeltstående eller afgrænsede behov"
                ],
                link: "service-packages/"
            },
            {
                name: "Hurtig Leveringsplan",
                price: "USD 500 / 1–2 uger",
                schedule: "Fleksibel (projektbaseret, ~1–2 uger)",
                highlight: "En fokuseret sprint-baseret pakke til kompakte funktioner, integrationer eller forbedringer leveret inden for få uger.",
                features: [
                    "Bedst til funktioner med middel kompleksitet, komponentopgraderinger eller integration",
                    "Omfatter planlægning, designiteration, implementering og funktionel test",
                    "Understøtter både full-stack opgaver eller fokuserede moduler (f.eks. API, dashboard, automatisering)",
                    "Inkluderer op til 2 synkroniseringsmøder til planlægning og overdragelse",
                    "Hurtigere levering uden binding til langtidskontrakter",
                    "Velegnet til tidlige teams, POC’er eller interne værktøjsudvidelser"
                ],
                link: "service-packages/"
            },
            {
                name: "Grundlæggende Vedligeholdsplan",
                price: "USD 900 /per month",
                schedule: "Man–Fre, 8:30–17:30 (delt kapacitet)",
                highlight: "Fundamental ingeniørsupport til MVP’er, interne værktøjer eller tidlige platforme med begrænsede udviklingskrav.",
                features: [
                    "Let opsætning og stabilisering af kernefunktioner",
                    "Løbende overvågning, fejlrettelser og teknisk vedligehold",
                    "Teknisk dokumentation og overdragelse til interne teams",
                    "Omfatter ikke komplekse feature-udviklinger",
                    "Kompatibel med branchestandard teknologier og databaser"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Guldpakker",
        description: "En pakke med tre deltidsservicepakker — Growth Support, Advanced Growth Plan og Blockchain Pioneer — skræddersyet til produktstøtte efter lancering, strategisk iteration og skalerbare tekniske driftsbehov. Designet til startups, bureauer og virksomheder, der ønsker pålidelig ingeniørbistand uden behovet for fuldtidsansættelser.",
        plans: [
            {
                name: "Vækstsupportplan",
                price: "USD 2,000 / måned",
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
                name: "Avanceret Vækstplan",
                price: "USD 3,000 / måned",
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
                name: "Blockchain Pionérplan",
                price: "USD 4,000 / måned",
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
    platinum: {
        name: "Platinpakker",
        description: "Tre strategiske fuldtidsengagementspakker — Premium Innovationsplan, Web3 Kerneplan og NFT Evolutionsplan — skræddersyet til CEO'er, CTO'er, Product Owners og Founders, der søger en betroet teknisk partner til at accelerere produktlanceringer inden for 3 til 12 måneder. Designet til forretningskritiske initiativer med behov for skalerbarhed, hurtig iteration og reduktion af interne rekrutteringsomkostninger.",
        plans: [
            {
                name: "Premium Innovationsplan",
                price: "USD 6,900 / month",
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
                name: "Web3 Kerneplan",
                price: "USD 7,900 / month",
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
                name: "NFT Evolutionsplan",
                price: "USD 7,900 / month",
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
};