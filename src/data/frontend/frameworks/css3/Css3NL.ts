import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Css3NL: IFrontEndStack = {
    title: "CSS3",
    description: "Verbeter het uiterlijk van uw website met geavanceerde stijltechnieken met behulp van CSS3.",
    image: ImageUrl.frontend.frameworks.css3.thumbnail,
    alt: "Logo dat CSS3-technologie vertegenwoordigt",
    readMore: "Ontdek meer CSS3 front-end ontwikkelingsoplossingen",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3 Webontwerp",
            description: "CSS3 is de nieuwste evolutie van Cascading Style Sheets, met geavanceerde functies voor het verbeteren van de visuele presentatie van webpagina's.",
            list: []
        },
        {
            title: "Sterke punten van CSS3",
            description: "CSS3 brengt moderne stijlmogelijkheden naar webontwikkeling.",
            list: [
                "Geavanceerde selectors",
                "Flexibele box-layout",
                "Grid-layout",
                "Animaties en overgangen",
                "Media queries",
                "Aangepaste eigenschappen",
                "Verbeterde typografie"
            ]
        },
        {
            title: "Uitdagingen en Oplossingen",
            description: "CSS3 voldoet aan de vraag naar responsieve, visueel aantrekkelijke webdesign met krachtige nieuwe functies.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is CSS3?",
            answer: "CSS3 is de nieuwste versie van Cascading Style Sheets, met nieuwe functies voor webstijling."
        },
        {
            question: "Wat zijn media queries?",
            answer: "Media queries maken responsieve ontwerpen mogelijk door stijlen toe te passen op basis van apparaatkenmerken."
        },
        {
            question: "Wat is de Flexbox-layout?",
            answer: "Flexbox-layout biedt een efficiëntere manier om layouts te ontwerpen, ruimte te verdelen en items uit te lijnen."
        },
        {
            question: "Wat zijn populaire CSS-frameworks?",
            answer: "De populaire CSS-frameworks zijn Bootstrap, Tailwind CSS, Bulma, Foundation en Materialize."
        }
    ]
}