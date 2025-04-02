import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const ReactFR: IFrontEndStack = {
    title: "React",
    description: "Créez sans effort des interfaces utilisateur dynamiques et performantes grâce à l'architecture puissante basée sur les composants de React.",
    image: ImageUrl.frontend.react.path,
    alt: "Logo représentant la bibliothèque React.js",
    readMore: "Explorez plus de solutions de développement front-end ReactJS",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "Développement React",
            description: "React.js est une bibliothèque JavaScript populaire pour créer des interfaces utilisateur. Elle permet aux développeurs de créer des composants UI réutilisables, améliorant l'efficacité du développement et les performances des applications.",
            list: []
        },
        {
            title: "Points forts de React.js",
            description: "React.js offre un ensemble robuste de fonctionnalités qui en font un choix privilégié pour les développeurs.",
            list: [
                "Architecture basée sur les composants",
                "DOM virtuel pour de meilleures performances",
                "Flux de données unidirectionnel",
                "Syntaxe JSX",
                "Écosystème riche et communauté active",
                "React Hooks",
                "Outils de développement étendus"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "React.js résout les défis du développement d'interfaces utilisateur dynamiques grâce au DOM virtuel, à la réutilisabilité des composants et à une communauté active.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que React.js?",
            answer: "React.js est une bibliothèque JavaScript pour créer des interfaces utilisateur, maintenue par Facebook."
        },
        {
            question: "Que sont les React Hooks?",
            answer: "Les React Hooks sont des fonctions qui permettent d'utiliser l'état et les fonctionnalités du cycle de vie dans les composants fonctionnels."
        },
        {
            question: "Comment fonctionne le DOM virtuel?",
            answer: "Le DOM virtuel met à jour uniquement les éléments modifiés, améliorant ainsi les performances de l'application."
        }
    ]
}