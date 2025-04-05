import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueDE} from "@/data/frontend/frameworks/vue/VueDE";
import {TypeScriptDE} from "@/data/frontend/frameworks/typescript/TypeScriptDE";
import {ReactDE} from "@/data/frontend/frameworks/react/ReactDE";
import {NextjsDE} from "@/data/frontend/frameworks/nextjs/NextjsDE";
import {JavaScriptDE} from "@/data/frontend/frameworks/javascript/JavaScriptDE";
import {Html5DE} from "@/data/frontend/frameworks/html5/Html5DE";
import {Css3DE} from "@/data/frontend/frameworks/css3/Css3DE";
import {AngularDE} from "@/data/frontend/frameworks/angular/AngularDE";

export const FrontEndDE: IFrontEnd = {
    title: "Front-End-Entwicklung",
    span: "Front-End-Entwicklungserfahrung",
    subTitle: "",

    angular: AngularDE,
    css3: Css3DE,
    html5: Html5DE,
    nextjs: NextjsDE,
    react: ReactDE,
    typescript: TypeScriptDE,
    vue: VueDE,
    javascript: JavaScriptDE,

    stacks: [],

    services: {
        title: "Front-End-Entwicklung",
        descriptions: [
            "Front-End-Entwicklung ist die entscheidende Schnittstelle zwischen Benutzern und digitalen Diensten, die visuelle Elemente und interaktive Komponenten schafft, welche das Benutzererlebnis definieren. Diese wesentliche Schicht verwandelt komplexe Backend-Systeme in intuitive, zugängliche Schnittstellen, die das Publikum ansprechen und das Geschäftswachstum fördern. Moderne Frameworks wie Next.js, React, Angular und Vue.js zusammen mit Kern-Webtechnologien wie HTML5 und CSS3 ermöglichen leistungsstarke Anwendungen, die schnell laden und auf allen Geräten nahtlos reagieren. Effektive Front-End-Lösungen erhöhen das Benutzerengagement, verbessern die Konversionsraten und stärken die Markenwahrnehmung durch konsistente, professionelle digitale Erlebnisse, die sowohl Geschäftsziele als auch Benutzerbedürfnisse erfüllen."
        ],
        items: [
            {
                title: "Implementierung moderner Frameworks",
                description: "Dynamische, interaktive Webanwendungen mit modernsten Frameworks wie Next.js und React, die optimale Leistung, Reaktionsfähigkeit und ein verbessertes Benutzererlebnis bieten."
            },
            {
                title: "SEO-Optimierung",
                description: "Verbesserte Sichtbarkeit der Website auf Google und anderen Suchmaschinen durch optimierte Codestruktur, schnelle Ladezeiten und mobilfreundliches Design, das organischen Traffic steigert und Akquisitionskosten senkt."
            },
            {
                title: "Proof of Concept (PoC) Entwicklung",
                description: "Schnelle Validierung innovativer Ideen durch funktionale Prototypen, Risikominderung und Ermöglichung für Stakeholder, Konzepte vor einer umfassenden Investition zu visualisieren."
            },
            {
                title: "Minimum Viable Product (MVP) Erstellung",
                description: "Funktionsvollständige, skalierbare Anfangsversionen, die frühe Benutzer anziehen, wertvolles Feedback generieren und potenzielle Investoren ansprechen, während sie eine Marktpräsenz etablieren."
            },
            {
                title: "UI/UX-Design",
                description: "Intuitive, ansprechende Benutzeroberflächen, die das Engagement steigern, Absprungraten reduzieren und Konversionen durch benutzerorientierte Designprinzipien und Zugänglichkeitsstandards erhöhen."
            }
        ]
    }
}

FrontEndDE.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]