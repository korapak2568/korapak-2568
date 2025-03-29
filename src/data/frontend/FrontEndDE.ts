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
    title: "Front-End-Erfahrung",
    span: "Erfahrung in der Front-End-Entwicklung",
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
        title: "Front-End-Entwicklungsdienste",
        descriptions: [
            "Verwandeln Sie Ihre Web-Vision mit unseren professionellen Front-End-Entwicklungsdiensten in die Realität. CHORN liefert benutzerfreundliche, visuell beeindruckende und vollständig responsive Websites, die Ihr Publikum ansprechen. Wir sind spezialisiert auf moderne Frameworks wie Next.js, React, Angular und Vue.js, sowie auf die grundlegenden Webtechnologien wie HTML5 und CSS3. Ob Sie eine hochleistungsfähige, für Suchmaschinen optimierte Single-Page-Anwendung (SPA) oder eine komplexe Multi-Page-Plattform benötigen, unsere Entwickler liefern qualitativ hochwertige Ergebnisse pünktlich. Arbeiten Sie mit CHORN zusammen, um überzeugende digitale Erlebnisse zu schaffen, die Besucher fesseln und das Geschäftswachstum vorantreiben."
        ],
        items: [
            {
                title: "Implementierung moderner Frameworks",
                description: "Erstellen Sie dynamische, interaktive Webanwendungen mit fortschrittlichen Frameworks wie Next.js und React, die optimale Leistung und Benutzererfahrung bieten."
            },
            {
                title: "SEO-Optimierung",
                description: "Verbessern Sie die Sichtbarkeit Ihrer Website auf Google und anderen Suchmaschinen durch optimierte Codestruktur, schnelle Ladezeiten und mobilfreundliches Design."
            },
            {
                title: "Proof of Concept (PoC) Entwicklung",
                description: "Testen und validieren Sie Ihre innovativen Ideen schnell mit funktionalen Prototypen, bevor Sie sich auf eine vollständige Entwicklung festlegen."
            },
            {
                title: "Entwicklung eines Minimum Viable Product (MVP)",
                description: "Starten Sie eine funktionsfähige, skalierbare Erstversion Ihres Produkts, um frühe Nutzer anzuziehen, Feedback zu sammeln und potenzielle Investoren zu gewinnen."
            },
            {
                title: "UI/UX-Design-Exzellenz",
                description: "Steigern Sie die Zufriedenheit der Nutzer mit intuitiven, ansprechenden Benutzeroberflächen, die das Engagement erhöhen, die Absprungrate senken und die Konversionsrate steigern."
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