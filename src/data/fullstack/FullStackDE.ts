import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonDE} from "@/data/fullstack/frameworks/python/PythonDE";
import {PhpDE} from "@/data/fullstack/frameworks/php/PhpDE";
import {NodejsDE} from "@/data/fullstack/frameworks/nodejs/NodejsDE";
import {JavaDE} from "@/data/fullstack/frameworks/java/JavaDE";
import {GoDE} from "@/data/fullstack/frameworks/go/GoDE";
import {DotnetDE} from "@/data/fullstack/frameworks/dotnet/DotnetDE";

export const FullStackDE: IFullStack = {
    title: "Back-End-Entwicklung",
    span: "Back-End-Entwicklungserfahrung",
    subTitle: "",

    dotnetcore: DotnetDE,
    go: GoDE,
    java: JavaDE,
    nodejs: NodejsDE,
    php: PhpDE,
    python: PythonDE,

    stacks: [],

    services: {
        title: "Back-End-Entwicklung",
        descriptions: [
            "Die Back-End-Entwicklung ist die wesentliche Grundlage für leistungsstarke, sichere und skalierbare Webanwendungen. Dieses System im Hintergrund ist für die Datenverarbeitung, Datenbankverwaltung und Sicherheit erforderlich und ermöglicht es Unternehmen, viele Benutzer gleichzeitig zu bedienen, nahtlose Erfahrungen zu schaffen und kritische Informationen zu schützen. Zu den abgedeckten Technologien gehören Node.js, Java Spring Boot, Python, Go, PHP und .NET Core, die in der Lage sind, die Anforderungen von Projekten aller Komplexitätsstufen zu erfüllen, vom Proof of Concept (PoC) bis zum marktfähigen Minimum Viable Product (MVP). Die reibungslose Integration zwischen Benutzeroberflächen und serverseitigen Funktionen bietet Benutzern überlegene Erfahrungen und hilft Unternehmen, ihre Ziele effizient zu erreichen."
        ],
        items: [
            {
                title: "Nahtlose Front-End- & Back-End-Integration",
                description: "Kohärente Webanwendungen mit perfekt synchronisierten Client- und Server-Komponenten, die Geschwindigkeit, Sicherheit und Skalierbarkeit bieten."
            },
            {
                title: "Umfassende SEO- & Leistungsoptimierung",
                description: "Verbesserte Sichtbarkeit in Suchmaschinen und Benutzererfahrung durch optimierte Codestruktur, schnellere Ladezeiten und effizientes Ressourcenmanagement."
            },
            {
                title: "Robuste Automatisierungstests",
                description: "Zuverlässige und stabile Anwendungen mit umfassenden Testframeworks, die in den gesamten Entwicklungszyklus integriert sind."
            },
            {
                title: "Fortschrittliche Datenbankverwaltung",
                description: "Effektiv strukturierte und verwaltete Daten mit optimierten Datenbanklösungen, einschließlich MySQL, MongoDB, PostgreSQL und anderen führenden Technologien."
            },
            {
                title: "Cloud-Dienste auf Unternehmensebene",
                description: "Effizient eingesetzte und skalierte Anwendungen mit AWS, Azure, Google Cloud oder anderen Cloud-Plattformen mit optimierten Infrastrukturkonfigurationen."
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