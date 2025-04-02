import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AngularDA: IFrontEndStack = {
    title: "Angular",
    description: "Udvikl robuste, virksomhedsklare webapplikationer med Angulars omfattende og alsidige framework.",
    image: ImageUrl.frontend.angular.path,
    alt: "Logo der repræsenterer Angular-frameworket",
    readMore: "Udforsk flere Angular frontend-udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular-udvikling",
            description: "Angular er et kraftfuldt webapplikationsframework udviklet af Google. Det letter skabelsen af dynamiske, single-page applikationer med dets omfattende værktøjssæt og MVC-arkitektur.",
            list: []
        },
        {
            title: "Angulars stærke sider",
            description: "Angular udmærker sig ved sin robuste arkitektur og rige funktioner.",
            list: [
                "Tovejs databinding",
                "Dependency injection",
                "Komponentbaseret struktur",
                "TypeScript-integration",
                "Omfattende testværktøjer",
                "Rig CLI",
                "Omfattende dokumentation"
            ]
        },
        {
            title: "Udfordringer og løsninger",
            description: "Angular tackler kompleksiteter i store applikationer med en stærk arkitektur, effektiv databinding og dependency injection.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er Angular?",
            answer: "Angular er et webapplikationsframework udviklet af Google til at skabe dynamiske webapps."
        },
        {
            question: "Hvad er tovejs databinding?",
            answer: "Tovejs databinding synkroniserer modellen og visningen, så ændringer i den ene afspejles i den anden."
        },
        {
            question: "Hvorfor bruge TypeScript med Angular?",
            answer: "TypeScript forbedrer Angular-udvikling med stærk typning, moderne funktioner og forbedrede værktøjer."
        }
    ]
}