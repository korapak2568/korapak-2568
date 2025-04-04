import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const VueDA: IFrontEndStack = {
    title: "Vue",
    description: "Skab moderne, reaktive webgrænseflader hurtigt med Vues intuitive og fleksible design.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Logo, der repræsenterer Vue.js-frameworket",
    readMore: "Udforsk flere VueJS frontend-udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue-udvikling",
            description: "Vue.js er et progressivt JavaScript-framework til opbygning af brugergrænseflader. Det er designet til at kunne adopteres gradvist, med et kernebibliotek, der fokuserer på visningslaget.",
            list: []
        },
        {
            title: "Stærke sider ved Vue",
            description: "Vue.js tilbyder et fleksibelt og ydedygtigt framework med centrale styrker.",
            list: [
                "Reaktiv databinding",
                "Komponentbaseret struktur",
                "Virtuel DOM",
                "Nem integration",
                "Omfattende dokumentation",
                "Vue CLI",
                "Aktivt fællesskab"
            ]
        },
        {
            title: "Udfordringer og løsninger",
            description: "Vue.js forenkler webudvikling med sin intuitive API, reaktive databinding og nem integration.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er Vue.js?",
            answer: "Vue.js er et progressivt JavaScript-framework til opbygning af brugergrænseflader."
        },
        {
            question: "Hvad er den virtuelle DOM?",
            answer: "Den virtuelle DOM er en letvægts kopi af den faktiske DOM, der optimerer opdateringer og ydeevne."
        },
        {
            question: "Hvordan adskiller Vue.js sig fra React?",
            answer: "Vue.js tilbyder en mere fleksibel og enklere integration sammenlignet med Reacts mere komplekse opsætning."
        }
    ]
}