import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaScriptDA: IFrontEndStack = {
    title: "JavaScript",
    description: "JavaScript er et alsidigt og dynamisk programmeringssprog, der bruges i vid udstrækning til at bygge interaktive og responsive webapplikationer. Dets fleksibilitet og omfattende økosystem gør det til et essentielt værktøj til moderne webudvikling.",
    image: ImageUrl.frontend.frameworks.javascript.thumbnail,
    alt: "Logo der repræsenterer JavaScript programmeringssprog",
    readMore: "Udforsk flere JavaScript full-stack udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/javascript-developer",
    features: [
        {
            title: "JavaScript Udvikling",
            description: "JavaScript driver den dynamiske adfærd på hjemmesider og webapplikationer og tilbyder uovertruffen alsidighed og kompatibilitet med browsere og frameworks.",
            list: []
        },
        {
            title: "Rige Interaktive Oplevelser",
            description: "JavaScript gør det muligt for udviklere at skabe interaktive brugergrænseflader, animationer og realtidsfunktioner som chatapplikationer, hvilket giver engagerende brugeroplevelser.",
            list: [
                "Dynamiske indholdsopdateringer",
                "Interaktive webgrænseflader",
                "Animation og overgange",
                "Realtidsfunktioner (f.eks. chat, notifikationer)",
                "Kompatibilitet på tværs af platforme"
            ]
        },
        {
            title: "Omfattende Økosystem og Værktøjer",
            description: "JavaScript har et omfattende økosystem af biblioteker og frameworks som React, Angular og Vue.js, der giver udviklere mulighed for effektivt at bygge robuste webapplikationer.",
            list: []
        },
        {
            title: "Back-End Udvikling med Node.js",
            description: "JavaScript strækker sig til back-end udvikling gennem Node.js, hvilket muliggør full-stack udvikling med et enkelt sprog, fra serverlogik til klientinteraktioner.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er JavaScript?",
            answer: "JavaScript er et dynamisk programmeringssprog, der almindeligvis bruges til at skabe interaktive webapplikationer."
        },
        {
            question: "Hvorfor bruge JavaScript til webudvikling?",
            answer: "JavaScript tilbyder alsidighed, omfattende biblioteker og kompatibilitet på tværs af browsere, hvilket gør det til et foretrukket sprog for webudviklere."
        },
        {
            question: "Hvilke frameworks er bygget på JavaScript?",
            answer: "Populære JavaScript frameworks inkluderer React, Angular og Vue.js."
        }
    ]
}