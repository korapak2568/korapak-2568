import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetDA} from "@/data/fullstack/frameworks/dotnet/DotnetDA";
import {GoDA} from "@/data/fullstack/frameworks/go/GoDA";
import {JavaDA} from "@/data/fullstack/frameworks/java/JavaDA";
import {NodejsDA} from "@/data/fullstack/frameworks/nodejs/NodejsDA";
import {PhpDA} from "@/data/fullstack/frameworks/php/PhpDA";
import {PythonDA} from "@/data/fullstack/frameworks/python/PythonDA";

export const FullStackDA: IFullStack = {
    title: "Back-End Udvikling",
    span: "Back-End Udviklingserfaring",
    subTitle: "",

    dotnetcore: DotnetDA,
    go: GoDA,
    java: JavaDA,
    nodejs: NodejsDA,
    php: PhpDA,
    python: PythonDA,

    stacks: [],

    services: {
        title: "Back-End Udvikling",
        descriptions: [
            "Back-end udvikling er det essentielle fundament for kraftfulde, sikre og skalerbare webapplikationer. Dette system bag kulisserne er nødvendigt for databehandling, databaseadministration og sikkerhed, hvilket gør det muligt for virksomheder at imødekomme mange brugere samtidigt, skabe problemfri oplevelser og beskytte kritiske oplysninger. Teknologier omfatter Node.js, Java Spring Boot, Python, Go, PHP og .NET Core, der kan imødekomme behovene i projekter på alle kompleksitetsniveauer, fra konceptbeviser (PoC) til markedsklare minimum viable products (MVP). Den gnidningsfri integration mellem brugergrænseflader og serverfunktionalitet giver brugerne overlegne oplevelser og hjælper virksomheder med at nå deres mål effektivt."
        ],
        items: [
            {
                title: "Problemfri Front-End & Back-End Integration",
                description: "Sammenhængende webapplikationer med perfekt synkroniserede klient- og serverkomponenter, der leverer hastighed, sikkerhed og skalerbarhed."
            },
            {
                title: "Omfattende SEO & Ydelsesoptimering",
                description: "Forbedret synlighed i søgemaskiner og brugeroplevelse gennem optimeret kodestruktur, hurtigere indlæsningstider og effektiv ressourcestyring."
            },
            {
                title: "Robust Automatiseret Test",
                description: "Pålidelige og stabile applikationer med omfattende testframeworks integreret gennem hele udviklingsprocessen."
            },
            {
                title: "Avanceret Databaseadministration",
                description: "Effektivt strukturerede og administrerede data med optimerede databaseløsninger, herunder MySQL, MongoDB, PostgreSQL og andre førende teknologier."
            },
            {
                title: "Enterprise-grade Cloudtjenester",
                description: "Effektivt implementerede og skalerede applikationer ved hjælp af AWS, Azure, Google Cloud eller andre cloudplatforme med optimerede infrastrukturkonfigurationer."
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