import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Html5FR: IFrontEndStack = {
    title: "HTML5",
    description: "Maîtrisez les dernières normes en matière de développement web pour un contenu riche et interactif.",
    image: ImageUrl.frontend.frameworks.html5.thumbnail,
    alt: "Logo représentant la technologie HTML5",
    readMore: "Explorez davantage de solutions de développement front-end HTML5",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "Conception Web HTML5",
            description: "HTML5 est la dernière version du langage de balisage hypertexte, introduisant de nouveaux éléments et API pour une expérience web plus riche.",
            list: []
        },
        {
            title: "Points forts de HTML5",
            description: "HTML5 améliore le développement web avec ses fonctionnalités et capacités modernes.",
            list: [
                "Nouveaux éléments sémantiques",
                "Prise en charge audio et vidéo",
                "Élément Canvas",
                "Contrôles de formulaire améliorés",
                "Capacités hors ligne",
                "API de géolocalisation",
                "Accessibilité améliorée"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "HTML5 répond au besoin d'expériences web plus interactives et riches en médias avec de nouveaux éléments et API.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que HTML5 ?",
            answer: "HTML5 est la dernière version du langage de balisage hypertexte, introduisant de nouvelles fonctionnalités et éléments."
        },
        {
            question: "Quels sont les nouveaux éléments sémantiques ?",
            answer: "Les nouveaux éléments sémantiques comprennent <article>, <section>, <header>, <footer>, et plus pour une meilleure structure de contenu."
        },
        {
            question: "Qu'est-ce que l'élément canvas ?",
            answer: "L'élément canvas fournit un espace pour dessiner des graphiques via JavaScript."
        }
    ]
}