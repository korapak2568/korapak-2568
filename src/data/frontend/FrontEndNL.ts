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
    title: "Front-End Ontwikkeling",
    span: "Front-End Ontwikkelingservaring",
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
        title: "Front-End Ontwikkeling",
        descriptions: [
            "Front-end ontwikkeling is de cruciale interface tussen gebruikers en digitale diensten, die de visuele elementen en interactieve componenten creëert die de gebruikerservaring definiëren. Deze essentiële laag transformeert complexe backend-systemen in intuïtieve, toegankelijke interfaces die het publiek boeien en bedrijfsgroei stimuleren. Moderne frameworks waaronder Next.js, React, Angular en Vue.js, naast kerntechnologieën zoals HTML5 en CSS3, maken hoogwaardige applicaties mogelijk die snel laden en naadloos reageren op alle apparaten. Effectieve front-end oplossingen verhogen de betrokkenheid van gebruikers, verbeteren conversiepercentages en versterken de merkperceptie door consistente, professionele digitale ervaringen die zowel aan bedrijfsdoelstellingen als aan gebruikersbehoeften voldoen."
        ],
        items: [
            {
                title: "Moderne Framework Implementatie",
                description: "Dynamische, interactieve webapplicaties met geavanceerde frameworks zoals Next.js en React die optimale prestaties, responsiviteit en verbeterde gebruikerservaring bieden."
            },
            {
                title: "SEO Optimalisatie",
                description: "Verbeterde zichtbaarheid van websites op Google en andere zoekmachines door geoptimaliseerde codestructuur, snelle laadtijden en mobiel-vriendelijk ontwerp, wat organisch verkeer stimuleert en acquisitiekosten verlaagt."
            },
            {
                title: "Proof of Concept (PoC) Ontwikkeling",
                description: "Snelle validatie van innovatieve ideeën via functionele prototypes, risicovermindering en de mogelijkheid voor belanghebbenden om concepten te visualiseren voordat er grootschalig wordt geïnvesteerd."
            },
            {
                title: "Minimum Viable Product (MVP) Creatie",
                description: "Functie-complete, schaalbare eerste versies die vroege gebruikers aantrekken, waardevolle feedback genereren en potentiële investeerders aanspreken terwijl ze marktaanwezigheid vestigen."
            },
            {
                title: "UI/UX Design",
                description: "Intuïtieve, aantrekkelijke interfaces die betrokkenheid verhogen, bouncepercentages verlagen en conversies verhogen door gebruikersgerichte ontwerpprincipes en toegankelijkheidsnormen."
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