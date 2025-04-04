import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const DotnetFR: IFullStackStack = {
    title: ".NET Core C#",
    description: ".NET Core C# est un framework polyvalent, open-source et multiplateforme développé par Microsoft. Il permet aux développeurs de créer des applications modernes, performantes et évolutives sur diverses plateformes, y compris Windows, macOS et Linux. Avec la prise en charge de la création d'applications web, d'API et de microservices, .NET Core C# offre un environnement robuste pour des solutions de niveau entreprise.",
    image: ImageUrl.fullstackThumbnails.dotnetcore.path,
    alt: "Logo représentant le développement de l'API .NET Core",
    readMore: "Explorez davantage les solutions de développement API .NET Core full-stack",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: "Développement C# .NET Core",
            description: ".NET Core C# est un framework puissant et open-source pour la création d'applications à haute performance. Avec une conception modulaire et le support de plusieurs langages de programmation, .NET Core C# est idéal pour développer des applications web, des API et des microservices évolutifs qui peuvent fonctionner sur n'importe quelle plateforme.",
            list: []
        },
        {
            title: "ASP.NET Core C#",
            description: "ASP.NET Core C# est un framework multiplateforme et haute performance pour créer des applications modernes, basées sur le cloud et connectées à Internet. Il est particulièrement adapté pour créer des applications web, des API et des microservices en mettant l'accent sur la performance, la sécurité et l'évolutivité.",
            list: [
                "Multiplateforme",
                "Haute performance",
                "Injection de dépendance intégrée",
                "Architecture modulaire",
                "Framework MVC et Web API unifié",
                "Prend en charge Razor Pages",
                "Authentification et autorisation sécurisées"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API fournit aux développeurs les outils nécessaires pour créer des API RESTful et des solutions techniques qui peuvent être consommées par une large gamme de clients, y compris des navigateurs, des appareils mobiles et des applications de bureau. Sa conception modulaire et légère garantit des performances élevées et une intégration facile avec d'autres solutions techniques.",
            list: []
        },
        {
            title: "C# .NET Core",
            description: "C# .NET Core est le langage principal utilisé pour développer des applications dans .NET Core C#. Connu pour sa simplicité, sa polyvalence et ses fonctionnalités modernes, C# permet aux développeurs de créer des applications robustes, maintenables et évolutives avec facilité.",
            list: [
                "Syntaxe moderne",
                "Programmation orientée objet",
                "Bibliothèque standard riche",
                "Prise en charge de la programmation asynchrone",
                "Prise en charge de LINQ",
                "Compatibilité multiplateforme",
                "Interopérabilité avec d'autres langages .NET"
            ]
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que .NET Core C# ?",
            answer: ".NET Core C# est un framework open-source et multiplateforme pour créer des applications modernes qui fonctionnent sur Windows, macOS et Linux."
        },
        {
            question: "À quoi sert ASP.NET Core C# ?",
            answer: "ASP.NET Core C# est un framework pour créer des applications web, des API et des microservices avec des performances élevées et une prise en charge multiplateforme."
        },
        {
            question: "Pourquoi C# .NET Core est-il un bon choix pour le développement ?",
            answer: "C# est un langage de programmation moderne et polyvalent qui offre un large éventail de fonctionnalités, ce qui en fait un excellent choix pour le développement d'applications évolutives et maintenables dans .NET Core C#."
        }
    ],
}