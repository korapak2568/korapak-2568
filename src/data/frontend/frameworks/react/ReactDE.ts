import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const ReactDE: IFrontEndStack = {
    title: "React",
    description: "Erstellen Sie mühelos dynamische, hochleistungsfähige Benutzeroberflächen mit der leistungsstarken komponentenbasierten Architektur von React.",
    image: ImageUrl.frontendThumbnails.react.path,
    alt: "Logo der React.js-Bibliothek",
    readMore: "Entdecken Sie weitere ReactJS Front-End-Entwicklungslösungen",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React-Entwicklung",
            description: "React.js ist eine beliebte JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Sie ermöglicht Entwicklern, wiederverwendbare UI-Komponenten zu erstellen, was die Entwicklungseffizienz und Anwendungsleistung verbessert.",
            list: []
        },
        {
            title: "Stärken von React.js",
            description: "React.js bietet einen robusten Satz von Funktionen, die es zur bevorzugten Wahl für Entwickler machen.",
            list: [
                "Komponentenbasierte Architektur",
                "Virtuelles DOM für verbesserte Leistung",
                "Unidirektionaler Datenfluss",
                "JSX-Syntax",
                "Reichhaltiges Ökosystem und Community",
                "React Hooks",
                "Umfangreiche Entwicklertools"
            ]
        },
        {
            title: "Herausforderungen und Lösungen",
            description: "React.js adressiert Herausforderungen bei der Entwicklung dynamischer Benutzeroberflächen mit einem virtuellen DOM, Wiederverwendbarkeit von Komponenten und einer aktiven Community.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist React.js?",
            answer: "React.js ist eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen, die von Facebook gepflegt wird."
        },
        {
            question: "Was sind React Hooks?",
            answer: "React Hooks sind Funktionen, mit denen Sie Zustand und Lifecycle-Funktionen in funktionalen Komponenten verwenden können."
        },
        {
            question: "Wie funktioniert das virtuelle DOM?",
            answer: "Das virtuelle DOM aktualisiert nur die geänderten Elemente und verbessert so die Anwendungsleistung."
        }
    ]
}