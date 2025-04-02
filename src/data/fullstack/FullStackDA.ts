import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetDA} from "@/data/fullstack/frameworks/dotnet/DotnetDA";
import {GoDA} from "@/data/fullstack/frameworks/go/GoDA";
import {JavaDA} from "@/data/fullstack/frameworks/java/JavaDA";
import {NodejsDA} from "@/data/fullstack/frameworks/nodejs/NodejsDA";
import {PhpDA} from "@/data/fullstack/frameworks/php/PhpDA";
import {PythonDA} from "@/data/fullstack/frameworks/python/PythonDA";

export const FullStackDA: IFullStack = {
    title: "Back-End & API Erfaring",
    span: "Back-End & API Udvikling Erfaring",
    subTitle: "",

    dotnetcore: DotnetDA,
    go: GoDA,
    java: JavaDA,
    nodejs: NodejsDA,
    php: PhpDA,
    python: PythonDA,

    stacks: [],

    services: {
        title: "Back-End & API Udvikling",
        descriptions: [
            "Byg kraftfulde, sikre og skalerbare webapplikationer med vores ekspertise inden for full-stack udvikling. Vores udviklere udmærker sig inden for både front-end og back-end teknologier og skaber omfattende løsninger, der er skræddersyet til dine specifikke forretningsbehov. CHORN's tekniske ekspertise spænder over flere teknologistakke, herunder Node.js, .NET Core C#, Java Spring Boot, Python, Go og PHP, hvilket giver os mulighed for at håndtere projekter af enhver kompleksitet. Uanset om du lancerer et indledende Proof of Concept (PoC) eller udvikler et markedsklart Minimum Viable Product (MVP), sikrer vores dygtige team en problemfri integration mellem brugergrænseflader og serversidesfunktionalitet for en enestående brugeroplevelse."
        ],
        items: [
            {
                title: "Problemfri Front-End & Back-End Integration",
                description: "Udvikl sammenhængende webapplikationer med perfekt synkroniserede klient- og serverkomponenter, der leverer hastighed, sikkerhed og skalerbarhed."
            },
            {
                title: "Omfattende SEO & Ydeevneoptimering",
                description: "Forbedre din hjemmesides synlighed i søgemaskiner og brugeroplevelse gennem optimeret kodestruktur, hurtigere indlæsningstider og effektiv ressourcestyring."
            },
            {
                title: "Robust Automatiseret Test",
                description: "Sikre applikationens pålidelighed og stabilitet med omfattende testframework integreret gennem hele udviklingslivscyklussen."
            },
            {
                title: "Avanceret Databaseadministration",
                description: "Strukturer og administrer dine data effektivt med optimerede databaseløsninger, herunder MySQL, MongoDB, PostgreSQL og andre førende teknologier."
            },
            {
                title: "Enterprise-Grade Cloud-tjenester",
                description: "Implementer og skaler dine applikationer effektivt ved hjælp af AWS, Azure, Google Cloud eller andre cloudplatforme med optimerede infrastrukturkonfigurationer."
            }
        ]
    }
}

FullStackDA.stacks = [
    FullStackDA.nodejs,
    FullStackDA.go,
    FullStackDA.java,
    FullStackDA.python,
    FullStackDA.php,
    FullStackDA.dotnetcore
]