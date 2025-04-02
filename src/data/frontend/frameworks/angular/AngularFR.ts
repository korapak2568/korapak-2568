import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AngularFR: IFrontEndStack = {
    title: "Angular",
    description: "Développez des applications web robustes de qualité professionnelle avec le framework complet et polyvalent d'Angular.",
    image: ImageUrl.frontend.angular.path,
    alt: "Logo représentant le framework Angular",
    readMore: "Explorez plus de solutions de développement front-end Angular",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Développement Angular",
            description: "Angular est un puissant framework d'application web développé par Google. Il facilite la création d'applications dynamiques à page unique avec son ensemble d'outils complet et son architecture MVC.",
            list: []
        },
        {
            title: "Points forts d'Angular",
            description: "Angular se distingue par son architecture robuste et ses fonctionnalités riches.",
            list: [
                "Liaison de données bidirectionnelle",
                "Injection de dépendances",
                "Structure basée sur les composants",
                "Intégration TypeScript",
                "Outils de test complets",
                "CLI riche",
                "Documentation extensive"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "Angular relève les complexités des applications à grande échelle avec une architecture solide, une liaison de données efficace et l'injection de dépendances.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce qu'Angular?",
            answer: "Angular est un framework d'application web développé par Google pour créer des applications web dynamiques."
        },
        {
            question: "Qu'est-ce que la liaison de données bidirectionnelle?",
            answer: "La liaison de données bidirectionnelle synchronise le modèle et la vue, garantissant que les changements dans l'un se reflètent dans l'autre."
        },
        {
            question: "Pourquoi utiliser TypeScript avec Angular?",
            answer: "TypeScript améliore le développement Angular avec un typage fort, des fonctionnalités modernes et des outils améliorés."
        }
    ]
}