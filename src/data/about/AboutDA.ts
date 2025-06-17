import {IAbout} from "@/data/about/model/IAbout";

export const AboutDA: IAbout = {
    title: "Om",
    span: "Omfattende systemanalyse og softwareudvikling",
    subTitle: "Teknologisk innovation for forretningssucces",
    description: [
        {
            title: "Om Os",
            description: "CHORN lancerede sin hjemmeside i marts 2023 for at følge de seneste oplysninger om nutidens hurtigt skiftende teknologi, softwareudvikling, informationsteknologi til forskellige forretningsdomæneindustrier og interessante nyheder."
        },
        {
            title: "Ekspertise",
            description: "Kontinuerligt engageret i at udvikle viden inden for softwareudvikling og IT, herunder deltagelse i globale platforme for at hjælpe med at træne AI og skabe Generativ AI. Udvider regelmæssigt viden og ekspertise inden for relaterede områder såsom systemarkitektur, dataanalyse, webudvikling, softwaretest og cloud computing."
        },
        {
            title: "Placering og Arbejdsform",
            description: "Udvikler software gennem fjernarbejde, hybrid og kontorarbejde i Chiang Mai, Bangkok og internationalt. Skaber proof of concept (PoC) applikationer, minimum levedygtige produkter (MVP), hjælper med at analysere systemkrav og forbedrer eksisterende systemer for at imødekomme skiftende forretningsbehov."
        }
    ],
    stacks: [
        {
            title: "Softwareudviklingsteknologi og virksomhedssystemintegration",
            description: "Udvikling af skræddersyede websites og softwaresystemer ved hjælp af moderne frameworks. Udvikling af front-end og back-end, smart contracts, blockchain, Web3 og DApp. Integration af virksomhedssystemer såsom ERP (f.eks. SAP), CRM, LLM-AI, LINE Chat App, Machine Learning, e-handelsplatforme og API'er, hvilket forbedrer datatilslutning på tværs af afdelinger og muliggør automatisering og samarbejde."
        },
        {
            title: "Systemanalyse og Teknisk Support",
            description: "Dybdegående systemanalyse og tekniske anbefalinger til forbedring af kritiske applikationer og systemer. Sikrer pålidelighed, kvalitetskontrol, softwaretest og implementering af moderne teknologier til kontinuerlig forretningsdrift og forbedring."
        },
        {
            title: "Agil Softwareudvikling og Forretningsteamkoordinering",
            description: "Agil softwareudvikling med forretningsteamkoordinering. Tæt samarbejde med indenlandske og internationale teams, interne og eksterne kunder, forretningsbrugere. Arbejdsmetoder omfatter agile, vandfalds- og hybride tilgange."
        }
    ],
    contact: {
        title: "Forretningshenvendelser og partnerskaber",
        description: "Vi byder velkommen til kontakt fra medstiftere, CEO'er, CTO'er, produktledere og investeringspartnere.",
        roles: [
            {
                title: "Project Manager",
                span: "(for koordinering af kundeprojekter)",
                email: "pm@chorn.in.th"
            },
            {
                title: "Chief Technology Officer",
                span: "(for tekniske partnerskaber eller integrationer)",
                email: "cto@chorn.in.th"
            },
            {
                title: "HR-afdeling",
                span: "(for henvendelser vedrørende HR, rekruttering og ansættelse)",
                email: "hr@chorn.in.th"
            },
            {
                title: "Generelle henvendelser",
                span: "(Strategiske partnerskaber)",
                telephone: "Tel: +66 (52) 000 548, +66 (64) 918 1998",
                locations: {
                    office: "Kontor: 405/112 Moo 3, San Na Meng Subdistrikt, San Sai Distrikt, Chiang Mai 50210, Thailand",
                    nearby: [
                        "Tæt på Central Festival Chiang Mai – 20 minutter",
                        "Tæt på Maejo Universitet – 22 minutter",
                        "Tæt på Chiang Mai Universitet – 29 minutter",
                        "Tæt på Chiang Mai Internationale Lufthavn – 30 minutter"
                    ]
                }
            }
        ]
    }
};
