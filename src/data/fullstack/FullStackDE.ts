import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonDE} from "@/data/fullstack/frameworks/python/PythonDE";
import {PhpDE} from "@/data/fullstack/frameworks/php/PhpDE";
import {NodejsDE} from "@/data/fullstack/frameworks/nodejs/NodejsDE";
import {JavaDE} from "@/data/fullstack/frameworks/java/JavaDE";
import {GoDE} from "@/data/fullstack/frameworks/go/GoDE";
import {DotnetDE} from "@/data/fullstack/frameworks/dotnet/DotnetDE";

export const FullStackDE: IFullStack = {
    title: "Back-End- & API-Erfahrung",
    span: "Erfahrung in der Back-End- & API-Entwicklung",
    subTitle: "",

    dotnetcore: DotnetDE,
    go: GoDE,
    java: JavaDE,
    nodejs: NodejsDE,
    php: PhpDE,
    python: PythonDE,

    stacks: [],

    services: {
        title: "Back-End & API-Entwicklung",
        descriptions: [
            "Entwickeln Sie leistungsstarke, sichere und skalierbare Webanwendungen mit unseren professionellen Full-Stack-Entwicklungsdiensten. Unsere Entwickler überzeugen in Front-End- und Back-End-Technologien und erstellen umfassende Lösungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind. Die technische Expertise von CHORN umfasst mehrere Technologie-Stacks, darunter Node.js, .NET Core C#, Java Spring Boot, Python, Go und PHP, was uns ermöglicht, Projekte jeder Komplexität zu bewältigen. Ob Sie einen ersten Proof of Concept (PoC) starten oder ein marktreifes Minimum Viable Product (MVP) entwickeln, unser erfahrenes Team sorgt für eine nahtlose Integration zwischen Benutzeroberflächen und serverseitiger Funktionalität für ein außergewöhnliches Benutzererlebnis."
        ],
        items: [
            {
                title: "Nahtlose Front-End- und Back-End-Integration",
                description: "Entwickeln Sie kohärente Webanwendungen mit perfekt synchronisierten Client- und Server-Komponenten, die Geschwindigkeit, Sicherheit und Skalierbarkeit bieten."
            },
            {
                title: "Umfassende SEO- und Leistungsoptimierung",
                description: "Verbessern Sie die Sichtbarkeit Ihrer Website in Suchmaschinen und die Benutzererfahrung durch optimierte Codestruktur, schnellere Ladezeiten und effizientes Ressourcenmanagement."
            },
            {
                title: "Robuste Automatisierungstests",
                description: "Gewährleisten Sie die Zuverlässigkeit und Stabilität der Anwendung mit umfassenden Testframeworks, die in den gesamten Entwicklungszyklus integriert sind."
            },
            {
                title: "Fortschrittliches Datenbankmanagement",
                description: "Strukturieren und verwalten Sie Ihre Daten effektiv mit optimierten Datenbanklösungen wie MySQL, MongoDB, PostgreSQL und anderen führenden Technologien."
            },
            {
                title: "Cloud-Dienste auf Unternehmensebene",
                description: "Stellen Sie Ihre Anwendungen effizient bereit und skalieren Sie sie mit AWS, Azure, Google Cloud oder anderen Cloud-Plattformen mit optimierten Infrastrukturkonfigurationen."
            }
        ]
    }
}

FullStackDE.stacks = [
    FullStackDE.nodejs,
    FullStackDE.go,
    FullStackDE.java,
    FullStackDE.python,
    FullStackDE.php,
    FullStackDE.dotnetcore
]