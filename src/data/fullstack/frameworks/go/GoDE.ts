import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GoDE: IFullStackStack = {
    title: "GO",
    description: "Go, auch bekannt als Golang, ist eine statisch typisierte, kompilierte Programmiersprache, die von Google entwickelt wurde. Sie ist bekannt für ihre Einfachheit, Effizienz und starke Unterstützung für Nebenläufigkeit, was sie zur idealen Wahl für die Entwicklung von Microservices macht.",
    image: ImageUrl.backend.frameworks.go.thumbnail,
    alt: "Logo der Programmiersprache Go",
    readMore: "Entdecken Sie weitere Full-Stack-Entwicklungslösungen mit Go",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go-Entwicklung",
            description: "Go, auch bekannt als Golang, ist eine statisch typisierte, kompilierte Programmiersprache, die von Google entwickelt wurde. Sie ist bekannt für ihre Einfachheit, Effizienz und starke Unterstützung für Nebenläufigkeit, was sie zur idealen Wahl für die Entwicklung von Microservices macht.",
            list: []
        },
        {
            title: "Effiziente Nebenläufigkeit",
            description: "Die Goroutinen und Channels von Go bieten robuste Unterstützung für nebenläufige Programmierung und ermöglichen Entwicklern, hocheffiziente und skalierbare Anwendungen zu erstellen. Dies macht Go zu einer bevorzugten Sprache für die Entwicklung von Microservices, die mehrere Aufgaben gleichzeitig bewältigen müssen.",
            list: [
                "Nebenläufige Programmierung",
                "Schnelle Kompilierung",
                "Einfachheit",
                "Starke Leistung",
                "Statische Typisierung",
                "Garbage Collection",
                "Ideal für Microservices"
            ]
        },
        {
            title: "Schnelle Kompilierung",
            description: "Go kompiliert schnell zu Maschinencode, was zu schnellen Ausführungszeiten führt. Diese Effizienz, kombiniert mit der Garbage Collection und statischen Typisierung, stellt sicher, dass Go-Anwendungen auch unter hoher Last gut funktionieren.",
            list: []
        },
        {
            title: "Interoperabilität",
            description: "Die Einfachheit und Klarheit von Go macht es leicht, es mit anderen Programmiersprachen zu integrieren. Diese Interoperabilität ermöglicht es Entwicklern, die Stärken von Go in leistungskritischen Teilen einer Anwendung zu nutzen, während sie für verschiedene Komponenten andere Sprachen verwenden.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist Go?",
            answer: "Go ist eine statisch typisierte, kompilierte Programmiersprache, die für Einfachheit und Leistung konzipiert wurde."
        },
        {
            question: "Warum Go verwenden?",
            answer: "Go bietet schnelle Leistung, Einfachheit und leistungsstarke Nebenläufigkeitsfunktionen, was es ideal für Webserver und Microservices macht."
        },
        {
            question: "Ist Go gut für Webentwicklung?",
            answer: "Ja, Go eignet sich hervorragend für den Aufbau schneller und effizienter Webserver und APIs."
        }
    ]
}