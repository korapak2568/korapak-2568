import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonNL} from "@/data/fullstack/frameworks/python/PythonNL";
import {PhpNL} from "@/data/fullstack/frameworks/php/PhpNL";
import {NodejsNL} from "@/data/fullstack/frameworks/nodejs/NodejsNL";
import {JavaNL} from "@/data/fullstack/frameworks/java/JavaNL";
import {GoNL} from "@/data/fullstack/frameworks/go/GoNL";
import {DotnetNL} from "@/data/fullstack/frameworks/dotnet/DotnetNL";

export const FullStackNL: IFullStack = {
    title: "Back-End Ontwikkeling",
    span: "Back-End Ontwikkelingservaring",
    subTitle: "",

    dotnetcore: DotnetNL,
    go: GoNL,
    java: JavaNL,
    nodejs: NodejsNL,
    php: PhpNL,
    python: PythonNL,

    stacks: [],

    services: {
        title: "Back-End Ontwikkeling",
        descriptions: [
            "Back-end ontwikkeling is de essentiële basis voor krachtige, veilige en schaalbare webapplicaties. Dit achterliggende systeem is noodzakelijk voor gegevensverwerking, databasebeheer en beveiliging, waardoor bedrijven veel gebruikers tegelijkertijd kunnen bedienen, naadloze ervaringen kunnen creëren en kritieke informatie kunnen beschermen. Ondersteunde technologieën omvatten Node.js, Java Spring Boot, Python, Go, PHP en .NET Core, die in staat zijn om aan de behoeften van projecten van alle complexiteitsniveaus te voldoen, van Proof of Concept (PoC) tot marktklaar Minimum Viable Product (MVP). De soepele integratie tussen gebruikersinterfaces en serverfunctionaliteit biedt gebruikers superieure ervaringen en helpt bedrijven hun doelen efficiënt te bereiken."
        ],
        items: [
            {
                title: "Naadloze Front-End & Back-End Integratie",
                description: "Coherente webapplicaties met perfect gesynchroniseerde client- en servercomponenten die snelheid, veiligheid en schaalbaarheid bieden."
            },
            {
                title: "Uitgebreide SEO & Prestatie-optimalisatie",
                description: "Verbeterde zichtbaarheid in zoekmachines en gebruikerservaring door geoptimaliseerde codestructuur, snellere laadtijden en efficiënt resourcebeheer."
            },
            {
                title: "Robuuste Automatische Tests",
                description: "Betrouwbare en stabiele applicaties met uitgebreide testframeworks die geïntegreerd zijn in de hele ontwikkelingscyclus."
            },
            {
                title: "Geavanceerd Databasebeheer",
                description: "Effectief gestructureerde en beheerde gegevens met geoptimaliseerde databaseoplossingen, waaronder MySQL, MongoDB, PostgreSQL en andere toonaangevende technologieën."
            },
            {
                title: "Enterprise-grade Clouddiensten",
                description: "Efficiënt geïmplementeerde en geschaalde applicaties met AWS, Azure, Google Cloud of andere cloudplatforms met geoptimaliseerde infrastructuurconfiguraties."
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