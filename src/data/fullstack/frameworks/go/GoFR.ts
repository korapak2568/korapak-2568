import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";

export const GoFR: IFullStackStack = {
    title: "GO",
    description: "Go, également connu sous le nom de Golang, est un langage de programmation compilé et à typage statique conçu par Google. Il est reconnu pour sa simplicité, son efficacité et son solide support de la concurrence, ce qui en fait un choix idéal pour le développement de microservices.",
    image: "https://cdn.chorn.in.th/public/technical-expertise/full-stack-developer/go-developer.webp",
    alt: "Logo représentant le langage de programmation Go",
    readMore: "Explorez davantage de solutions de développement full-stack Go",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Développement Go",
            description: "Go, également connu sous le nom de Golang, est un langage de programmation compilé et à typage statique conçu par Google. Il est reconnu pour sa simplicité, son efficacité et son solide support de la concurrence, ce qui en fait un choix idéal pour le développement de microservices.",
            list: []
        },
        {
            title: "Concurrence Efficace",
            description: "Les goroutines et les canaux de Go offrent un support robuste pour la programmation concurrente, permettant aux développeurs de créer des applications hautement efficaces et évolutives. Cela fait de Go un langage privilégié pour développer des microservices qui nécessitent de gérer plusieurs tâches simultanément.",
            list: [
                "Programmation concurrente",
                "Compilation rapide",
                "Simplicité",
                "Performance solide",
                "Typage statique",
                "Garbage collection",
                "Idéal pour les microservices"
            ]
        },
        {
            title: "Compilation Rapide",
            description: "Go se compile rapidement en code machine, ce qui se traduit par des temps d'exécution rapides. Cette efficacité, combinée à son garbage collection et à son typage statique, garantit que les applications Go fonctionnent bien, même sous des charges importantes.",
            list: []
        },
        {
            title: "Interopérabilité",
            description: "La simplicité et la clarté de Go facilitent son intégration avec d'autres langages de programmation. Cette interopérabilité permet aux développeurs de tirer parti des points forts de Go dans les parties critiques en termes de performance d'une application, tout en utilisant d'autres langages pour différents composants.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Go ?",
            answer: "Go est un langage de programmation compilé et à typage statique conçu pour la simplicité et la performance."
        },
        {
            question: "Pourquoi utiliser Go ?",
            answer: "Go offre des performances rapides, de la simplicité et de puissantes fonctionnalités de concurrence, ce qui le rend idéal pour les serveurs web et les microservices."
        },
        {
            question: "Go est-il bon pour le développement web ?",
            answer: "Oui, Go est bien adapté pour construire des serveurs web et des API rapides et efficaces."
        }
    ]
}