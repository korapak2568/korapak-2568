import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GoDA: IFullStackStack = {
    title: "GO",
    description: "Go, også kendt som Golang, er et statisk typet, kompileret programmeringssprog designet af Google. Det er kendt for sin enkelhed, effektivitet og stærke understøttelse af samtidighed, hvilket gør det til et ideelt valg til udvikling af mikrotjenester.",
    image: ImageUrl.backend.frameworks.go.thumbnail,
    alt: "Logo der repræsenterer Go programmeringssproget",
    readMore: "Udforsk flere Go full-stack udviklingsløsninger",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go Udvikling",
            description: "Go, også kendt som Golang, er et statisk typet, kompileret programmeringssprog designet af Google. Det er kendt for sin enkelhed, effektivitet og stærke understøttelse af samtidighed, hvilket gør det til et ideelt valg til udvikling af mikrotjenester.",
            list: []
        },
        {
            title: "Effektiv Samtidighed",
            description: "Gos goroutines og kanaler giver robust understøttelse af samtidig programmering, hvilket gør det muligt for udviklere at bygge meget effektive og skalerbare applikationer. Dette gør Go til et foretrukket sprog til udvikling af mikrotjenester, der kræver håndtering af flere opgaver samtidigt.",
            list: [
                "Samtidig programmering",
                "Hurtig kompilering",
                "Enkelhed",
                "Stærk ydeevne",
                "Statisk typet",
                "Garbage collection",
                "Ideel til mikrotjenester"
            ]
        },
        {
            title: "Hurtig Kompilering",
            description: "Go kompilerer hurtigt til maskinkode, hvilket resulterer i hurtige eksekveringstider. Denne effektivitet, kombineret med garbage collection og statisk typning, sikrer, at Go-applikationer yder godt, selv under høj belastning.",
            list: []
        },
        {
            title: "Interoperabilitet",
            description: "Gos enkelhed og klarhed gør det nemt at integrere med andre programmeringssprog. Denne interoperabilitet giver udviklere mulighed for at udnytte Gos styrker i ydeevnekritiske dele af en applikation, mens andre sprog anvendes til forskellige komponenter.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er Go?",
            answer: "Go er et statisk typet, kompileret programmeringssprog designet med fokus på enkelhed og ydeevne."
        },
        {
            question: "Hvorfor bruge Go?",
            answer: "Go tilbyder hurtig ydeevne, enkelhed og kraftfulde funktioner til samtidighed, hvilket gør det ideelt til webservere og mikrotjenester."
        },
        {
            question: "Er Go godt til webudvikling?",
            answer: "Ja, Go er velegnet til at bygge hurtige og effektive webservere og API’er."
        }
    ],
}