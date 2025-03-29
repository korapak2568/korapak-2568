import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonNL} from "@/data/fullstack/frameworks/python/PythonNL";
import {PhpNL} from "@/data/fullstack/frameworks/php/PhpNL";
import {NodejsNL} from "@/data/fullstack/frameworks/nodejs/NodejsNL";
import {JavaNL} from "@/data/fullstack/frameworks/java/JavaNL";
import {GoNL} from "@/data/fullstack/frameworks/go/GoNL";
import {DotnetNL} from "@/data/fullstack/frameworks/dotnet/DotnetNL";

export const FullStackNL: IFullStack = {
    title: "Back-End & API Ervaring",
    span: "Back-End & API Ontwikkeling Ervaring",
    subTitle: "",

    dotnetcore: DotnetNL,
    go: GoNL,
    java: JavaNL,
    nodejs: NodejsNL,
    php: PhpNL,
    python: PythonNL,

    stacks: [],

    services: {
        title: "Back-End & API Ontwikkeling",
        descriptions: [
            "Bouw krachtige, veilige en schaalbare webapplicaties met onze deskundige full-stack ontwikkelingsdiensten. Onze ontwikkelaars excelleren in zowel front-end als back-end technologieën en creëren uitgebreide oplossingen op maat van uw specifieke zakelijke vereisten. De technische expertise van CHORN omvat meerdere technologiestacks, waaronder Node.js, .NET Core C#, Java Spring Boot, Python, Go en PHP, waardoor we projecten van elke complexiteit kunnen afhandelen. Of u nu een eerste Proof of Concept (PoC) lanceert of een marktklaar Minimum Viable Product (MVP) ontwikkelt, ons bekwame team zorgt voor een naadloze integratie tussen gebruikersinterfaces en serverzijde functionaliteit voor een uitzonderlijke gebruikerservaring."
        ],
        items: [
            {
                title: "Naadloze Front-End & Back-End Integratie",
                description: "Ontwikkel samenhangende webapplicaties met perfect gesynchroniseerde client- en servercomponenten die snelheid, veiligheid en schaalbaarheid bieden."
            },
            {
                title: "Uitgebreide SEO & Prestatie-optimalisatie",
                description: "Verbeter de zichtbaarheid van uw website in zoekmachines en de gebruikerservaring door geoptimaliseerde codestructuur, snellere laadtijden en efficiënt middelenbeheer."
            },
            {
                title: "Robuuste Geautomatiseerde Tests",
                description: "Zorg voor betrouwbaarheid en stabiliteit van applicaties met uitgebreide testframeworks die in de gehele ontwikkelingscyclus zijn geïntegreerd."
            },
            {
                title: "Geavanceerd Databasebeheer",
                description: "Structureer en beheer uw gegevens effectief met geoptimaliseerde databaseoplossingen waaronder MySQL, MongoDB, PostgreSQL en andere toonaangevende technologieën."
            },
            {
                title: "Enterprise-Grade Cloud Diensten",
                description: "Deploy en schaal uw applicaties efficiënt met AWS, Azure, Google Cloud of andere cloudplatforms met geoptimaliseerde infrastructuurconfiguraties."
            }
        ]
    }
}

FullStackNL.stacks = [
    FullStackNL.nodejs,
    FullStackNL.go,
    FullStackNL.java,
    FullStackNL.python,
    FullStackNL.php,
    FullStackNL.dotnetcore
]