import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PythonDE: IFullStackStack = {
    title: "Python",
    description: "Python ist eine interpretierte Programmiersprache auf hoher Ebene, die für ihre Einfachheit, Lesbarkeit und Vielseitigkeit bekannt ist. Sie wird in verschiedenen Bereichen eingesetzt, von der Webentwicklung und Datenanalyse bis hin zu künstlicher Intelligenz und wissenschaftlichem Rechnen.",
    image: ImageUrl.backend.frameworks.python.thumbnail,
    alt: "Logo, das Python mit dem Flask-Framework darstellt",
    readMore: "Entdecken Sie weitere Python-, Flask- und Django-Lösungen für Full-Stack-Entwicklung",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python-Entwicklung",
            description: "Python ist eine interpretierte Programmiersprache auf hoher Ebene, die für ihre Einfachheit, Lesbarkeit und Vielseitigkeit bekannt ist. Sie wird in verschiedenen Bereichen eingesetzt, von der Webentwicklung und Datenanalyse bis hin zu künstlicher Intelligenz und wissenschaftlichem Rechnen.",
            list: []
        },
        {
            title: "Leicht zu erlernen und zu verwenden",
            description: "Pythons einfache Syntax und Lesbarkeit machen es zu einer ausgezeichneten Wahl für Anfänger und erfahrene Entwickler gleichermaßen. Seine umfangreiche Standardbibliothek und von der Community beigesteuerte Module bieten sofort einsatzbereite Lösungen für eine Vielzahl von Aufgaben.",
            list: [
                "Leicht zu erlernen",
                "Lesbare Syntax",
                "Vielseitig",
                "Große Standardbibliothek",
                "Starke Community",
                "Beliebt für KI/ML",
                "Plattformübergreifend"
            ]
        },
        {
            title: "Vielseitige Anwendungen",
            description: "Python wird in verschiedenen Bereichen eingesetzt, darunter Webentwicklung mit Frameworks wie Django und Flask, Datenwissenschaft mit Bibliotheken wie pandas und NumPy sowie maschinelles Lernen mit TensorFlow und scikit-learn. Diese Vielseitigkeit macht Python zu einer bevorzugten Sprache für viele Entwickler.",
            list: []
        },
        {
            title: "Starke Community-Unterstützung",
            description: "Python hat eine lebendige und aktive Community, die kontinuierlich zu seinem Wachstum beiträgt. Mit zahlreichen Tutorials, Foren und Open-Source-Projekten können Entwickler leicht Unterstützung und Ressourcen finden, um ihre Fähigkeiten zu verbessern und Herausforderungen zu lösen.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wofür wird Python verwendet?",
            answer: "Python wird für Webentwicklung, Datenanalyse, künstliche Intelligenz, wissenschaftliches Rechnen und vieles mehr verwendet."
        },
        {
            question: "Warum ist Python so beliebt?",
            answer: "Die Einfachheit, Lesbarkeit und Vielseitigkeit von Python machen es zu einer beliebten Wahl für Anfänger und erfahrene Entwickler."
        },
        {
            question: "Ist Python gut für die Webentwicklung?",
            answer: "Ja, Frameworks wie Django und Flask machen Python zu einem leistungsstarken Werkzeug für die Webentwicklung."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django ist ein Web-Framework auf hoher Ebene, das eine schnelle Entwicklung und ein sauberes, pragmatisches Design fördert.",
            strengths: [
                "Batterien inklusive: Kommt mit vielen eingebauten Funktionen wie ORM, Authentifizierung und einem Admin-Panel.",
                "Skalierbarkeit: Geeignet für große Anwendungen.",
                "Sicherheit: Enthält integrierten Schutz gegen viele gängige Sicherheitsbedrohungen."
            ],
            useCases: [
                "Große Webanwendungen",
                "E-Commerce-Seiten",
                "Content-Management-Systeme"
            ]
        },
        {
            name: "Flask",
            overview: "Flask ist ein Mikro-Web-Framework, das das Wesentliche bietet, um eine Webanwendung ohne viel Boilerplate-Code zum Laufen zu bringen.",
            strengths: [
                "Leichtgewichtig: Minimalistisch und flexibel.",
                "Erweiterbar: Kann leicht mit verschiedenen Erweiterungen erweitert werden.",
                "Leicht zu erlernen: Einfach zu verstehen und einzusteigen."
            ],
            useCases: [
                "Kleine bis mittelgroße Anwendungen",
                "APIs",
                "Prototyping"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI ist ein modernes, schnelles (hochleistungsfähiges) Web-Framework zum Erstellen von APIs mit Python 3.6+, basierend auf Standard-Python-Typhinweisen.",
            strengths: [
                "Geschwindigkeit: Asynchrone Unterstützung und hohe Leistung.",
                "Automatische Dokumentation: Generiert OpenAPI- und JSON-Schema-Dokumentation.",
                "Typsicherheit: Verwendet Python-Typhinweise für Validierung und Serialisierung."
            ],
            useCases: [
                "APIs",
                "Microservices",
                "Echtzeit-Anwendungen"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid ist ein allgemeines Web-Framework, das entwickelt wurde, um das Schreiben von Webanwendungen zu erleichtern.",
            strengths: [
                "Flexibilität: Kann für kleine und große Anwendungen verwendet werden.",
                "Anpassbarkeit: Hochgradig konfigurierbar und modular.",
                "Sicherheit: Bietet mehrere Sicherheitsfunktionen."
            ],
            useCases: [
                "Vielseitige Anwendungen von Microservices bis hin zu großen Webanwendungen"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado ist ein skalierbarer, nicht-blockierender Webserver und Web-Anwendungs-Framework.",
            strengths: [
                "Leistung: Entwickelt für die Handhabung langlebiger Netzwerkverbindungen.",
                "Echtzeit: Geeignet für Echtzeit-Webanwendungen.",
                "Skalierbarkeit: Kann Tausende von gleichzeitigen Verbindungen handhaben."
            ],
            useCases: [
                "Echtzeit-Anwendungen",
                "WebSockets",
                "Long Polling"
            ]
        }
    ]
}