import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const TypeScriptDE: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript ist ein stark typisierter Superset von JavaScript, der statische Typen hinzufügt, die Entwicklungserfahrung verbessert, indem Fehler frühzeitig erkannt werden und die Codequalität verbessert wird. Es wird zu reinem JavaScript kompiliert, wodurch es mit allen Browsern und Frameworks kompatibel ist.",
    image: ImageUrl.frontend.frameworks.typescript.thumbnail,
    alt: "Logo der Programmiersprache TypeScript",
    readMore: "Entdecken Sie weitere TypeScript Full-Stack-Entwicklungslösungen",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript-Entwicklung",
            description: "TypeScript verbessert die Entwicklung durch die Einführung von statischer Typisierung und objektorientierter Programmierung, sodass Entwickler mit Zuversicht skalierbare und wartbare Anwendungen erstellen können.",
            list: []
        },
        {
            title: "Verbesserte Codequalität",
            description: "Die Typenprüfungsfunktionen von TypeScript stellen sicher, dass potenzielle Fehler während der Entwicklungsphase erkannt werden, was Laufzeitfehler reduziert und die Wartbarkeit für große Projekte verbessert.",
            list: [
                "Statische Typisierung",
                "Erweiterte Fehlerprüfung",
                "Verbesserte Codequalität",
                "Erweiterte IDE-Unterstützung",
                "Skalierbare Anwendungsarchitektur",
                "Große Community-Unterstützung"
            ]
        },
        {
            title: "Verbesserte Entwicklerproduktivität",
            description: "Mit Funktionen wie Typinferenz, Schnittstellen und Generics macht TypeScript die Verwaltung komplexer Codebasen einfacher. Es integriert sich nahtlos in moderne Tools und steigert die Produktivität und Zusammenarbeit.",
            list: []
        },
        {
            title: "Nahtlose Integration mit Frameworks",
            description: "TypeScript lässt sich mühelos in beliebte JavaScript-Frameworks wie React, Angular und Vue.js integrieren. Entwickler können TypeScript schrittweise in bestehende JavaScript-Projekte einführen und so Kompatibilität und Skalierbarkeit gewährleisten.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist TypeScript?",
            answer: "TypeScript ist ein Superset von JavaScript, das statische Typisierung und andere erweiterte Funktionen für eine verbesserte Entwicklung hinzufügt."
        },
        {
            question: "Warum TypeScript anstelle von JavaScript verwenden?",
            answer: "Die statische Typisierung und die robusten Tools von TypeScript erkennen Fehler frühzeitig, verbessern die Codequalität und steigern die Entwicklerproduktivität."
        },
        {
            question: "Kann TypeScript mit JavaScript-Frameworks arbeiten?",
            answer: "Ja, TypeScript ist vollständig kompatibel mit JavaScript-Frameworks wie React, Angular und Vue.js."
        }
    ]
}