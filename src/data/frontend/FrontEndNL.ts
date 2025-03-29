import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueNL} from "@/data/frontend/frameworks/vue/VueNL";
import {TypeScriptNL} from "@/data/frontend/frameworks/typescript/TypeScriptNL";
import {ReactNL} from "@/data/frontend/frameworks/react/ReactNL";
import {NextjsNL} from "@/data/frontend/frameworks/nextjs/NextjsNL";
import {JavaScriptNL} from "@/data/frontend/frameworks/javascript/JavaScriptNL";
import {Html5NL} from "@/data/frontend/frameworks/html5/Html5NL";
import {Css3NL} from "@/data/frontend/frameworks/css3/Css3NL";
import {AngularNL} from "@/data/frontend/frameworks/angular/AngularNL";

export const FrontEndNL: IFrontEnd = {
    title: "Front-End Ervaring",
    span: "Front-End Ontwikkeling Ervaring",
    subTitle: "",

    angular: AngularNL,
    css3: Css3NL,
    html5: Html5NL,
    nextjs: NextjsNL,
    react: ReactNL,
    typescript: TypeScriptNL,
    vue: VueNL,
    javascript: JavaScriptNL,

    stacks: [],

    services: {
        title: "Front-End Ontwikkelingsservices",
        descriptions: [
            "Transformeer uw webvisie naar realiteit met onze deskundige front-end ontwikkelingsservices. CHORN levert gebruiksvriendelijke, visueel indrukwekkende en volledig responsieve websites die uw publiek boeien. We zijn gespecialiseerd in moderne frameworks zoals Next.js, React, Angular en Vue.js, naast kernwebtechnologieën zoals HTML5 en CSS3. Of u nu een hoogwaardige single-page applicatie (SPA) nodig heeft die geoptimaliseerd is voor zoekmachines of een geavanceerd multi-page platform, onze ontwikkelaars leveren kwaliteitsresultaten op tijd. Werk samen met CHORN om boeiende digitale ervaringen te creëren die bezoekers aantrekken en bedrijfsgroei stimuleren."
        ],
        items: [
            {
                title: "Implementatie van Moderne Frameworks",
                description: "Bouw dynamische, interactieve webapplicaties met geavanceerde frameworks zoals Next.js en React die optimale prestaties en gebruikerservaring bieden."
            },
            {
                title: "SEO-Optimalisatie",
                description: "Verbeter de zichtbaarheid van uw website op Google en andere zoekmachines door geoptimaliseerde codestructuur, snelle laadtijden en mobiel-vriendelijk ontwerp."
            },
            {
                title: "Proof of Concept (PoC) Ontwikkeling",
                description: "Test en valideer uw innovatieve ideeën snel met functionele prototypes voordat u zich vastlegt op volledige ontwikkeling."
            },
            {
                title: "Minimum Viable Product (MVP) Creatie",
                description: "Lanceer een complete, schaalbare eerste versie van uw product om vroege gebruikers aan te trekken, feedback te verzamelen en potentiële investeerders te overtuigen."
            },
            {
                title: "UI/UX Design Excellence",
                description: "Verhoog de tevredenheid van gebruikers met intuïtieve, aantrekkelijke interfaces die betrokkenheid verbeteren, bouncerates verminderen en conversies verhogen."
            }
        ]
    }
}

FrontEndNL.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]