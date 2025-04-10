import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const ReactDA: IFrontEndStack = {
    title: "React",
    description: "Byg dynamiske brugergrænseflader med høj ydeevne uden besvær med Reacts kraftfulde komponentbaserede arkitektur.",
    image: ImageUrl.frontend.frameworks.react.thumbnail,
    alt: "Logo der repræsenterer React.js-biblioteket",
    readMore: "Udforsk flere ReactJS front-end udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React-udvikling",
            description: "React.js er et populært JavaScript-bibliotek til opbygning af brugergrænseflader. Det giver udviklere mulighed for at skabe genanvendelige UI-komponenter, hvilket forbedrer udviklingseffektiviteten og applikationens ydeevne.",
            list: []
        },
        {
            title: "React.js' stærke sider",
            description: "React.js tilbyder et robust sæt funktioner, der gør det til et foretrukket valg for udviklere.",
            list: [
                "Komponentbaseret arkitektur",
                "Virtuel DOM for forbedret ydeevne",
                "Envejsdataflow",
                "JSX-syntaks",
                "Rigt økosystem og fællesskab",
                "React Hooks",
                "Omfattende udviklerværktøjer"
            ]
        },
        {
            title: "Udfordringer og løsninger",
            description: "React.js adresserer udfordringer i dynamisk UI-udvikling med en virtuel DOM, genanvendelighed af komponenter og et aktivt fællesskab.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er React.js?",
            answer: "React.js er et JavaScript-bibliotek til opbygning af brugergrænseflader, vedligeholdt af Facebook."
        },
        {
            question: "Hvad er React Hooks?",
            answer: "React Hooks er funktioner, der lader dig bruge tilstand og livscyklusfunktioner i funktionelle komponenter."
        },
        {
            question: "Hvordan fungerer den virtuelle DOM?",
            answer: "Den virtuelle DOM opdaterer kun de ændrede elementer, hvilket forbedrer applikationens ydeevne."
        }
    ]
}