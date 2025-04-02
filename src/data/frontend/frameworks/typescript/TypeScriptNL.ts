import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const TypeScriptNL: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript is een sterk getypeerde superset van JavaScript die statische types toevoegt, de ontwikkelingservaring verbetert door vroeg fouten op te sporen en de codekwaliteit te verbeteren. Het compileert naar gewone JavaScript, waardoor het compatibel is met alle browsers en frameworks.",
    image: ImageUrl.frontend.typescript.path,
    alt: "Logo dat de TypeScript programmeertaal vertegenwoordigt",
    readMore: "Ontdek meer TypeScript full-stack ontwikkelingsoplossingen",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript Ontwikkeling",
            description: "TypeScript verbetert de ontwikkeling door statische typering en objectgeoriënteerde programmeerkenmerken te introduceren, waardoor ontwikkelaars met vertrouwen schaalbare en onderhoudbare applicaties kunnen bouwen.",
            list: []
        },
        {
            title: "Verbeterde Codekwaliteit",
            description: "De typecontrole-functies van TypeScript zorgen ervoor dat potentiële fouten tijdens de ontwikkelingsfase worden opgespoord, waardoor runtime-fouten worden verminderd en de onderhoudbaarheid voor grootschalige projecten wordt verbeterd.",
            list: [
                "Statische typering",
                "Geavanceerde foutcontrole",
                "Verbeterde codekwaliteit",
                "Verbeterde IDE-ondersteuning",
                "Schaalbare applicatiearchitectuur",
                "Grote community-ondersteuning"
            ]
        },
        {
            title: "Verbeterde Productiviteit van Ontwikkelaars",
            description: "Met functies zoals typeinferentie, interfaces en generics maakt TypeScript het beheren van complexe codebases eenvoudiger. Het integreert naadloos met moderne tools, waardoor productiviteit en samenwerking worden bevorderd.",
            list: []
        },
        {
            title: "Naadloze Integratie met Frameworks",
            description: "TypeScript integreert moeiteloos met populaire JavaScript-frameworks zoals React, Angular en Vue.js. Ontwikkelaars kunnen TypeScript geleidelijk implementeren in bestaande JavaScript-projecten, waardoor compatibiliteit en schaalbaarheid worden gewaarborgd.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is TypeScript?",
            answer: "TypeScript is een superset van JavaScript die statische typering en andere geavanceerde functies toevoegt voor verbeterde ontwikkeling."
        },
        {
            question: "Waarom TypeScript gebruiken in plaats van JavaScript?",
            answer: "De statische typering en robuuste tools van TypeScript vangen vroeg fouten op, verbeteren de codekwaliteit en verhogen de productiviteit van ontwikkelaars."
        },
        {
            question: "Kan TypeScript werken met JavaScript-frameworks?",
            answer: "Ja, TypeScript is volledig compatibel met JavaScript-frameworks zoals React, Angular en Vue.js."
        }
    ]
}