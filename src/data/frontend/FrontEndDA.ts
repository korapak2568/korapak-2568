import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueDA} from "@/data/frontend/frameworks/vue/VueDA";
import {TypeScriptDA} from "@/data/frontend/frameworks/typescript/TypeScriptDA";
import {ReactDA} from "@/data/frontend/frameworks/react/ReactDA";
import {NextjsDA} from "@/data/frontend/frameworks/nextjs/NextjsDA";
import {JavaScriptDA} from "@/data/frontend/frameworks/javascript/JavaScriptDA";
import {Html5DA} from "@/data/frontend/frameworks/html5/Html5DA";
import {Css3DA} from "@/data/frontend/frameworks/css3/Css3DA";
import {AngularDA} from "@/data/frontend/frameworks/angular/AngularDA";

export const FrontEndDA: IFrontEnd = {
    title: "Front-End Erfaring",
    span: "Front-End Udvikling Erfaring",
    subTitle: "",

    angular: AngularDA,
    css3: Css3DA,
    html5: Html5DA,
    nextjs: NextjsDA,
    react: ReactDA,
    typescript: TypeScriptDA,
    vue: VueDA,
    javascript: JavaScriptDA,

    stacks: [],

    services: {
        title: "Front-End Udviklingsydelser",
        descriptions: [
            "Omsæt din webvision til virkelighed med vores ekspertise inden for front-end udvikling. CHORN leverer brugervenlige, visuelt imponerende og fuldt responsive hjemmesider, der engagerer dit publikum. Vi specialiserer os i moderne frameworks som Next.js, React, Angular og Vue.js, sammen med kerneteknologier som HTML5 og CSS3. Uanset om du har brug for en højtydende single-page applikation (SPA) optimeret til søgemaskiner eller en sofistikeret multi-page platform, leverer vores udviklere kvalitetsresultater til tiden. Samarbejd med CHORN for at skabe overbevisende digitale oplevelser, der fanger besøgende og driver forretningsvækst."
        ],
        items: [
            {
                title: "Implementering af Moderne Frameworks",
                description: "Byg dynamiske, interaktive webapplikationer ved hjælp af banebrydende frameworks som Next.js og React, der giver optimal ydeevne og brugeroplevelse."
            },
            {
                title: "SEO-Optimering",
                description: "Forbedrer din hjemmesides synlighed på Google og andre søgemaskiner gennem optimeret kodestruktur, hurtige indlæsningstider og mobilvenligt design."
            },
            {
                title: "Proof of Concept (PoC) Udvikling",
                description: "Test og valider dine innovative idéer hurtigt med funktionelle prototyper, før du forpligter dig til fuld udvikling."
            },
            {
                title: "Minimum Viable Product (MVP) Skabelse",
                description: "Lancér en funktionel, skalerbar første version af dit produkt for at tiltrække tidlige brugere, indsamle feedback og sikre potentielle investorer."
            },
            {
                title: "UI/UX Design Excellence",
                description: "Forøg brugertilfredsheden med intuitive, smukke grænseflader, der øger engagement, reducerer bounce-rater og øger konverteringer."
            }
        ]
    }
}

FrontEndDA.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]