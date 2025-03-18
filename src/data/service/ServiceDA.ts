import {IService} from "@/data/service/model/IService";

export const ServiceDA: IService = {
    title: "LLM/AI-integration",
    description: "CHORN specialiserer sig i udvikling af LLM/AI-agenter og leverer intelligente, responsive løsninger skræddersyet til at opfylde specifikke behov. Ekspertisen omfatter skalerbare hjemmesider, mobilapplikationer og full-stack softwaresystemer. Den <strong>LLM-drevne</strong> tekniske ekspertise-ledsager via LINE demonstrerer mulighederne i store sprogmodeller som ChatGPT, Perplexity og DeepSeek, og viser innovative tilgange til at forbedre digital tilstedeværelse og strømline operationel effektivitet.",

    services: [
        {
            title: "LLM-agentudvikling",
            description: "Design og implementering af intelligente AI-agenter drevet af avancerede LLM'er som ChatGPT og DeepSeek, der integreres problemfrit med dine eksisterende systemer for at forbedre automatisering og effektivitet."
        },
        {
            title: "Integration af ældre systemer",
            description: "Modernisér eksisterende systemer ved at integrere avancerede AI-funktioner, hvilket sikrer jævn datastrøm og forbedret funktionalitet."
        },
        {
            title: "Skræddersyede LLM-løsninger",
            description: "Udvikl skræddersyede AI-modeller ved at udnytte state-of-the-art LLM'er til at tackle specifikke forretningsmæssige udfordringer og optimere drift."
        },
        {
            title: "AI-arbejdsgangsautomatisering",
            description: "Strømlin gentagende opgaver og optimér arbejdsgange ved hjælp af AI-drevne automatiseringsløsninger for forbedret produktivitet."
        },
        {
            title: "Forudsigende analyse og indsigt",
            description: "Udnyt AI til at analysere datamønstre, forudsige tendenser og levere handlingsorienterede indsigter for bedre beslutningstagning."
        }
    ],

    demo: {
        title: "LLM/AI-integrationsdemonstration",
        description: "Velkommen til AI Chat-ledsageren, en demonstration af AI-drevet integration. Udforsk en række AI-ledsagere, " +
            "hver med unikke personligheder, designet til at interagere problemfrit med brugere via LINE-applikationen. " +
            "Disse AI-ledsagere kan kommunikere på flere sprog, herunder thai, engelsk, kinesisk, " +
            "japansk, koreansk, fransk og vietnamesisk.",
        link: {
            text: "Se vores demo i aktion på <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "Sådan fungerer det",
            steps: [
                {
                    title: "Vælg din AI-ledsager",
                    description: "Gennemse listen over tilgængelige AI-ledsagere og vælg den, du bedst kan lide."
                },
                {
                    title: "Tilføj AI'en som ven",
                    description: "Klik på knappen 'Tilføj ven' for din valgte AI eller brug LINE-appen til at scanne den medfølgende QR-kode."
                },
                {
                    title: "Start chatting",
                    description: "Begynd din samtale med AI'en. Standardsproget er thai, men AI'en vil svare på dit sprog sammen med en thai-oversættelse."
                },
                {
                    title: "Tilføj flere ledsagere",
                    description: "Du er velkommen til at forbinde med alle tilgængelige AI-ledsagere og nyde forskellige interaktioner."
                }
            ]
        },
        note: [
            {
                title: "Bemærk",
                description: "Denne demo kører på en testserver. Hvis AI'en ikke svarer på din første besked, bedes du sende yderligere beskeder, indtil den svarer."
            },
            {
                title: "",
                description: "Oplev flersprogede samtaler og opdag de unikke personligheder hos hver AI-ledsager i dag!"
            }]
    }
};
