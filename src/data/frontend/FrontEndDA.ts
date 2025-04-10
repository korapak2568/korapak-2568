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
    title: "Front-End Udvikling",
    span: "Front-End Udviklingserfaring",
    subTitle: "",

    angular: AngularDA,
    css3: Css3DA,
    html5: Html5DA,
    nextjs: NextjsDA,
    react: ReactDA,
    typescript: TypeScriptDA,
    vue: VueDA,
    javascript: JavaScriptDA,

    stacks: [
        NextjsDA,
        ReactDA,
        AngularDA,
        VueDA,
        JavaScriptDA,
        TypeScriptDA,
        Html5DA,
        Css3DA
    ],

    services: {
        title: "Front-End Udvikling",
        descriptions: [
            "Front-end udvikling er den afgørende grænseflade mellem brugere og digitale tjenester, der skaber de visuelle elementer og interaktive komponenter, som definerer brugeroplevelsen. Dette essentielle lag transformerer komplekse backend-systemer til intuitive, tilgængelige grænseflader, der engagerer publikum og driver forretningsvækst. Moderne frameworks som Next.js, React, Angular og Vue.js, sammen med kerneteknologier som HTML5 og CSS3, muliggør højtydende applikationer, der indlæses hurtigt og reagerer problemfrit på tværs af alle enheder. Effektive front-end løsninger øger brugerengagement, forbedrer konverteringsrater og styrker brandopfattelsen gennem konsistente, professionelle digitale oplevelser, der både opfylder forretningsmål og brugerbehov."
        ],
        items: [
            {
                title: "Implementering af Moderne Frameworks",
                description: "Dynamiske, interaktive webapplikationer ved hjælp af banebrydende frameworks som Next.js og React, der giver optimal ydeevne, responsivitet og forbedret brugeroplevelse."
            },
            {
                title: "SEO Optimering",
                description: "Forbedret webstedssynlighed på Google og andre søgemaskiner gennem optimeret kodestruktur, hurtige indlæsningstider og mobilvenligt design, der driver organisk trafik og reducerer anskaffelsesomkostninger."
            },
            {
                title: "Proof of Concept (PoC) Udvikling",
                description: "Hurtig validering af innovative ideer gennem funktionelle prototyper, reducering af risici og mulighed for interessenter at visualisere koncepter før fuldskalainvestering."
            },
            {
                title: "Minimum Viable Product (MVP) Oprettelse",
                description: "Funktionskomplette, skalerbare første versioner, der tiltrækker tidlige brugere, genererer værdifuld feedback og appellerer til potentielle investorer, mens de etablerer markedstilstedeværelse."
            },
            {
                title: "UI/UX Design",
                description: "Intuitive, smukke grænseflader, der øger engagement, reducerer bounce-rater og øger konverteringer gennem brugercentrerede designprincipper og tilgængelighedsstandarder."
            }
        ]
    }
}