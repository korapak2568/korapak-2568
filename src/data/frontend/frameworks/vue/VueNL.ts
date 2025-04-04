import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const VueNL: IFrontEndStack = {
    title: "Vue",
    description: "Creëer snel moderne, reactieve webinterfaces met het intuïtieve en flexibele ontwerp van Vue.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Logo dat het Vue.js-framework vertegenwoordigt",
    readMore: "Ontdek meer VueJS front-end ontwikkelingsoplossingen",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue-ontwikkeling",
            description: "Vue.js is een progressief JavaScript-framework voor het bouwen van gebruikersinterfaces. Het is ontworpen om incrementeel toepasbaar te zijn, met een kernbibliotheek die zich richt op de weergavelaag.",
            list: []
        },
        {
            title: "Sterke punten van Vue",
            description: "Vue.js biedt een flexibel en krachtig framework met belangrijke sterke punten.",
            list: [
                "Reactieve gegevensbinding",
                "Componentgebaseerde structuur",
                "Virtuele DOM",
                "Eenvoudige integratie",
                "Uitgebreide documentatie",
                "Vue CLI",
                "Actieve gemeenschap"
            ]
        },
        {
            title: "Uitdagingen en oplossingen",
            description: "Vue.js vereenvoudigt webontwikkeling met zijn intuïtieve API, reactieve gegevensbinding en eenvoudige integratie.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is Vue.js?",
            answer: "Vue.js is een progressief JavaScript-framework voor het bouwen van gebruikersinterfaces."
        },
        {
            question: "Wat is de virtuele DOM?",
            answer: "De virtuele DOM is een lichtgewicht kopie van de werkelijke DOM, die updates en prestaties optimaliseert."
        },
        {
            question: "Hoe verschilt Vue.js van React?",
            answer: "Vue.js biedt een flexibelere en eenvoudigere integratie in vergelijking met de complexere setup van React."
        }
    ]
}