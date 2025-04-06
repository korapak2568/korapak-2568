import {IService} from "@/data/service/model/IService";

export const ServiceDA: IService = {
    title: "LLM-AI Integration",
    description: "Transformer forretningsdriften med intelligente, responsive LLM-AI-agentløsninger skræddersyet til specifikke behov. Robust backend-udvikling sikrer pålidelig, skalerbar og sikker databehandling - afgørende for at levere problemfri brugeroplevelser på tværs af hjemmesider, mobilapplikationer og komplekse softwaresystemer. Den <strong>LLM-drevne</strong> assistent via LINE demonstrerer, hvordan store sprogmodeller som ChatGPT, Perplexity og DeepSeek kan forbedre digitale interaktioner og strømline operationer for både virksomheder og slutbrugere.",

    services: [
        {
            title: "LLM Agent Udvikling",
            description: "Udnyt intelligente AI-agenter drevet af avancerede LLMs, der integreres problemfrit med eksisterende systemer, forbedrer automatisering og effektivitet for virksomheder og samtidig giver intuitive interaktioner for brugere."
        },
        {
            title: "Integration med Eksisterende Systemer",
            description: "Oplev moderniserede systemer med avancerede AI-funktioner, der sikrer gnidningsfri dataflow og forbedret funktionalitet, hvilket gør eksisterende infrastruktur mere værdifuld og effektiv."
        },
        {
            title: "Skræddersyede LLM Løsninger",
            description: "Løs specifikke forretningsudfordringer og optimer operationer med skræddersyede AI-modeller, der udnytter avancerede LLMs, og leverer målrettede løsninger, der imødekommer unikke krav."
        },
        {
            title: "AI Workflow Automatisering",
            description: "Spar tid og ressourcer ved at strømline gentagne opgaver gennem AI-drevet automatisering, så teams kan fokusere på aktiviteter med højere værdi, samtidig med at den overordnede produktivitet forbedres."
        },
        {
            title: "Prædiktiv Analyse og Indsigt",
            description: "Tag bedre forretningsbeslutninger med AI-drevet datamønsteranalyse, der forudsiger tendenser og giver handlingsorienterede indsigter, der omdanner rådata til strategiske fordele."
        }
    ],

    demo: {
        title: "LLM-AI LINE Integration",
        description: "Oplev en AI-drevet integration af LLM-AI og LINE. Udforsk forskellige AI-assistenter, " +
            "hver med unikke personligheder, designet til at interagere problemfrit via LINE-applikationen. " +
            "Disse AI-assistenter kan kommunikere på flere sprog, herunder thai, engelsk, kinesisk, " +
            "japansk, koreansk, fransk og vietnamesisk.",
        link: {
            text: "Se demoen i aktion på <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "Sådan Fungerer Det",
            steps: [
                {
                    title: "Vælg Din AI-Assistent",
                    description: "Gennemse listen over tilgængelige AI-assistenter og vælg den, du bedst kan lide."
                },
                {
                    title: "Tilføj AI'en som Ven",
                    description: "Klik på knappen 'Tilføj ven' for din valgte AI, eller brug LINE-appen til at scanne den medfølgende QR-kode."
                },
                {
                    title: "Start Chatten",
                    description: "Begynd din samtale med AI'en. Standardsproget er thai, men AI'en vil svare på dit sprog sammen med en thai-oversættelse."
                },
                {
                    title: "Tilføj Flere Assistenter",
                    description: "Forbind med alle tilgængelige AI-assistenter og nyd forskellige interaktioner."
                }
            ]
        },
        note: [
            {
                title: "Bemærk",
                description: "Denne demo kører på en testserver. Hvis AI'en ikke reagerer på din første besked, send venligst yderligere beskeder, indtil den reagerer."
            },
            {
                title: "",
                description: "Oplev flersprogede samtaler og opdag de unikke personligheder af hver AI-assistent i dag!"
            }]
    }
};