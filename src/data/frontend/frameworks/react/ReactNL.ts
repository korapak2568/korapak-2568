import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const ReactNL: IFrontEndStack = {
    title: "React",
    description: "Bouw moeiteloos dynamische, hoogwaardige gebruikersinterfaces met de krachtige componentgebaseerde architectuur van React.",
    image: ImageUrl.frontendThumbnails.react.path,
    alt: "Logo van de React.js bibliotheek",
    readMore: "Ontdek meer ReactJS front-end ontwikkelingsoplossingen",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React Ontwikkeling",
            description: "React.js is een populaire JavaScript bibliotheek voor het bouwen van gebruikersinterfaces. Het stelt ontwikkelaars in staat om herbruikbare UI-componenten te maken, wat de ontwikkelingsefficiëntie en applicatieprestaties verbetert.",
            list: []
        },
        {
            title: "Sterke punten van React.js",
            description: "React.js biedt een robuuste set functies die het een voorkeurskeuze maken voor ontwikkelaars.",
            list: [
                "Componentgebaseerde architectuur",
                "Virtuele DOM voor verbeterde prestaties",
                "Unidirectionele gegevensstroom",
                "JSX-syntax",
                "Rijk ecosysteem en gemeenschap",
                "React Hooks",
                "Uitgebreide ontwikkeltools"
            ]
        },
        {
            title: "Uitdagingen en Oplossingen",
            description: "React.js pakt uitdagingen in dynamische UI-ontwikkeling aan met een virtuele DOM, herbruikbaarheid van componenten en een actieve gemeenschap.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is React.js?",
            answer: "React.js is een JavaScript bibliotheek voor het bouwen van gebruikersinterfaces, onderhouden door Facebook."
        },
        {
            question: "Wat zijn React Hooks?",
            answer: "React Hooks zijn functies waarmee je staat- en levenscyclusfuncties kunt gebruiken in functionele componenten."
        },
        {
            question: "Hoe werkt de virtuele DOM?",
            answer: "De virtuele DOM werkt alleen de gewijzigde elementen bij, wat de applicatieprestaties verbetert."
        }
    ]
}