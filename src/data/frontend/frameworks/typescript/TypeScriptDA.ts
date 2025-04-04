import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const TypeScriptDA: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript er en stærkt typet overbygning af JavaScript, der tilføjer statiske typer, forbedrer udviklingsoplevelsen ved at fange fejl tidligt og forbedrer kodekvaliteten. Det kompileres til almindelig JavaScript, hvilket gør det kompatibelt med alle browsere og frameworks.",
    image: ImageUrl.frontendThumbnails.typescript.path,
    alt: "Logo der repræsenterer TypeScript programmeringssprog",
    readMore: "Udforsk flere TypeScript full-stack udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript Udvikling",
            description: "TypeScript forbedrer udvikling ved at introducere statisk typning og objektorienterede programmeringsfunktioner, hvilket giver udviklere mulighed for at bygge skalerbare og vedligeholdbare applikationer med selvtillid.",
            list: []
        },
        {
            title: "Forbedret Kodekvalitet",
            description: "TypeScripts typekontrol-funktioner sikrer, at potentielle fejl opdages under udviklingsfasen, reducerer runtime-fejl og forbedrer vedligeholdelsen for store projekter.",
            list: [
                "Statisk typning",
                "Avanceret fejlkontrol",
                "Forbedret kodekvalitet",
                "Forbedret IDE-support",
                "Skalerbar applikationsarkitektur",
                "Stor fællesskabssupport"
            ]
        },
        {
            title: "Forbedret Udviklerproduktivitet",
            description: "Med funktioner som typeinferens, interfaces og generics gør TypeScript det lettere at administrere komplekse kodebasiser. Det integreres problemfrit med moderne værktøjer, hvilket øger produktiviteten og samarbejdet.",
            list: []
        },
        {
            title: "Problemfri Integration med Frameworks",
            description: "TypeScript integreres uden problemer med populære JavaScript-frameworks som React, Angular og Vue.js. Udviklere kan gradvist implementere TypeScript i eksisterende JavaScript-projekter, hvilket sikrer kompatibilitet og skalerbarhed.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er TypeScript?",
            answer: "TypeScript er en overbygning af JavaScript, der tilføjer statisk typning og andre avancerede funktioner for forbedret udvikling."
        },
        {
            question: "Hvorfor bruge TypeScript i stedet for JavaScript?",
            answer: "TypeScripts statiske typning og robuste værktøjer fanger fejl tidligt, forbedrer kodekvaliteten og øger udviklerproduktiviteten."
        },
        {
            question: "Kan TypeScript arbejde med JavaScript-frameworks?",
            answer: "Ja, TypeScript er fuldt kompatibel med JavaScript-frameworks som React, Angular og Vue.js."
        }
    ]
}