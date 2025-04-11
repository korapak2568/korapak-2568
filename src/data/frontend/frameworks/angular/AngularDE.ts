import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const AngularDE: IFrontEndStack = {
    title: "Angular",
    description: "Entwickeln Sie robuste, unternehmenstaugliche Webanwendungen mit dem umfassenden und vielseitigen Framework von Angular.",
    image: ImageUrl.frontend.frameworks.angular.thumbnail,
    alt: "Logo, das das Angular-Framework repräsentiert",
    readMore: "Entdecken Sie weitere Angular-Frontend-Entwicklungslösungen",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular-Entwicklung",
            description: "Angular ist ein leistungsstarkes Webanwendungs-Framework, das von Google entwickelt wurde. Es erleichtert die Erstellung dynamischer Single-AiBannerFahMain-Anwendungen mit seinem umfassenden Toolset und der MVC-Architektur.",
            list: []
        },
        {
            title: "Stärken von Angular",
            description: "Angular zeichnet sich durch seine robuste Architektur und reichhaltigen Funktionen aus.",
            list: [
                "Zwei-Wege-Datenbindung",
                "Dependency Injection",
                "Komponentenbasierte Struktur",
                "TypeScript-Integration",
                "Umfassende Testwerkzeuge",
                "Leistungsstarke CLI",
                "Umfangreiche Dokumentation"
            ]
        },
        {
            title: "Herausforderungen und Lösungen",
            description: "Angular bewältigt Komplexitäten in großen Anwendungen mit einer starken Architektur, effizienter Datenbindung und Dependency Injection.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist Angular?",
            answer: "Angular ist ein von Google entwickeltes Webanwendungs-Framework zur Erstellung dynamischer Webanwendungen."
        },
        {
            question: "Was ist Zwei-Wege-Datenbindung?",
            answer: "Die Zwei-Wege-Datenbindung synchronisiert das Modell und die Ansicht und stellt sicher, dass Änderungen in einem sich im anderen widerspiegeln."
        },
        {
            question: "Warum TypeScript mit Angular verwenden?",
            answer: "TypeScript verbessert die Angular-Entwicklung mit starker Typisierung, modernen Funktionen und verbesserten Tools."
        }
    ]
}