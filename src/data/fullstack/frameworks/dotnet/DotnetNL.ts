import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DotnetNL: IFullStackStack = {
    title: ".NET Core",
    description: ".NET Core is een veelzijdig, open-source, platformonafhankelijk framework ontwikkeld door Microsoft. Het stelt ontwikkelaars in staat om moderne, krachtige en schaalbare applicaties te bouwen voor verschillende platformen, waaronder Windows, macOS en Linux. Met ondersteuning voor het bouwen van webapplicaties, API's en microservices biedt .NET Core een robuuste omgeving voor oplossingen op bedrijfsniveau.",
    image: ImageUrl.backend.frameworks.dotnetcore.thumbnail,
    alt: "Logo dat de .NET Core API-ontwikkeling vertegenwoordigt",
    readMore: "Verken meer .NET Core API full-stack ontwikkelingsoplossingen",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: ".NET Core Ontwikkeling",
            description: ".NET Core is een krachtig open-source framework voor het bouwen van hoogwaardige applicaties. Met een modulair ontwerp en ondersteuning voor verschillende programmeertalen is .NET Core ideaal voor het ontwikkelen van schaalbare webapplicaties, API's en microservices die op elk platform kunnen draaien.",
            list: []
        },
        {
            title: "ASP.NET Core",
            description: "ASP.NET Core is een platformonafhankelijk, krachtig framework voor het bouwen van moderne, op de cloud gebaseerde en internetverbonden applicaties. Het is bijzonder geschikt voor het bouwen van webapplicaties, API's en microservices met een focus op prestaties, beveiliging en schaalbaarheid.",
            list: [
                "Platformonafhankelijk",
                "Hoge prestaties",
                "Ingebouwde afhankelijkheidsinjectie",
                "Modulaire architectuur",
                "Geïntegreerd MVC- en Web API-framework",
                "Ondersteunt Razor Pages",
                "Veilige authenticatie en autorisatie"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API biedt ontwikkelaars de tools om RESTful APIs en technische oplossingen te bouwen die door een breed scala aan clients kunnen worden gebruikt, waaronder browsers, mobiele apparaten en desktopapplicaties. Het lichte, modulaire ontwerp zorgt voor hoge prestaties en gemakkelijke integratie met andere technische oplossingen.",
            list: []
        },
        {
            title: ".NET Core",
            description: ".NET Core is de primaire taal die wordt gebruikt voor het ontwikkelen van applicaties in .NET Core. Bekend om zijn eenvoud, veelzijdigheid en moderne functies, stelt C# ontwikkelaars in staat om robuuste, onderhoudbare en schaalbare applicaties gemakkelijk te bouwen.",
            list: [
                "Moderne syntaxis",
                "Objectgeoriënteerd",
                "Rijke standaardbibliotheek",
                "Ondersteunt asynchrone programmering",
                "Ondersteunt LINQ",
                "Platformonafhankelijke compatibiliteit",
                "Interoperabiliteit met andere .NET talen"
            ]
        }
    ],
    faqs: [
        {
            question: "Wat is .NET Core?",
            answer: ".NET Core is een open-source framework voor het bouwen van moderne applicaties die draaien op Windows, macOS en Linux."
        },
        {
            question: "Waarvoor wordt ASP.NET Core gebruikt?",
            answer: "ASP.NET Core is een framework voor het bouwen van webapplicaties, API's en microservices met hoge prestaties en platformonafhankelijke mogelijkheden."
        },
        {
            question: "Waarom is .NET Core een goede keuze voor ontwikkeling?",
            answer: "C# is een moderne, veelzijdige programmeertaal die een breed scala aan functies biedt, waardoor het ideaal is voor het ontwikkelen van schaalbare, onderhoudbare applicaties in .NET Core."
        }
    ],
}