import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const GoNL: IFullStackStack = {
    title: "GO",
    description: "Go, ook bekend als Golang, is een statisch getypeerde, gecompileerde programmeertaal ontworpen door Google. Het staat bekend om zijn eenvoud, efficiëntie en sterke ondersteuning voor gelijktijdigheid, waardoor het een ideale keuze is voor het ontwikkelen van microservices.",
    image: ImageUrl.fullstack.go.path,
    alt: "Logo dat de programmeertaal Go vertegenwoordigt",
    readMore: "Ontdek meer full-stack ontwikkelingsoplossingen met Go",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go-ontwikkeling",
            description: "Go, ook bekend als Golang, is een statisch getypeerde, gecompileerde programmeertaal ontworpen door Google. Het staat bekend om zijn eenvoud, efficiëntie en sterke ondersteuning voor gelijktijdigheid, waardoor het een ideale keuze is voor het ontwikkelen van microservices.",
            list: []
        },
        {
            title: "Efficiënte gelijktijdigheid",
            description: "Go's goroutines en channels bieden robuuste ondersteuning voor gelijktijdige programmering, waardoor ontwikkelaars zeer efficiënte en schaalbare applicaties kunnen bouwen. Dit maakt Go een voorkeurtaal voor het ontwikkelen van microservices die meerdere taken tegelijkertijd moeten afhandelen.",
            list: [
                "Gelijktijdige programmering",
                "Snelle compilatie",
                "Eenvoud",
                "Sterke prestaties",
                "Statisch getypeerd",
                "Garbage collection",
                "Uitstekend voor microservices"
            ]
        },
        {
            title: "Snelle compilatie",
            description: "Go compileert snel naar machinecode, wat resulteert in snelle uitvoeringstijden. Deze efficiëntie, gecombineerd met garbage collection en statische typering, zorgt ervoor dat Go-applicaties goed presteren, zelfs onder zware belasting.",
            list: []
        },
        {
            title: "Interoperabiliteit",
            description: "De eenvoud en duidelijkheid van Go maken het gemakkelijk te integreren met andere programmeertalen. Deze interoperabiliteit stelt ontwikkelaars in staat om de sterke punten van Go te benutten in prestatie-kritische delen van een applicatie, terwijl ze andere talen gebruiken voor verschillende componenten.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is Go?",
            answer: "Go is een statisch getypeerde, gecompileerde programmeertaal ontworpen voor eenvoud en prestaties."
        },
        {
            question: "Waarom Go gebruiken?",
            answer: "Go biedt snelle prestaties, eenvoud en krachtige gelijktijdigheidsfuncties, waardoor het ideaal is voor webservers en microservices."
        },
        {
            question: "Is Go goed voor webontwikkeling?",
            answer: "Ja, Go is zeer geschikt voor het bouwen van snelle en efficiënte webservers en API's."
        }
    ]
}