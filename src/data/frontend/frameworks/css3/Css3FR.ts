import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Css3FR: IFrontEndStack = {
    title: "CSS3",
    description: "Améliorez l'apparence de votre site web avec des techniques de style avancées utilisant CSS3.",
    image: ImageUrl.frontendThumbnails.css3.path,
    alt: "Logo représentant la technologie CSS3",
    readMore: "Explorez plus de solutions de développement front-end CSS3",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "Design Responsive CSS3",
            description: "CSS3 est la dernière évolution des Feuilles de Style en Cascade, offrant des fonctionnalités avancées pour améliorer la présentation visuelle des pages web.",
            list: []
        },
        {
            title: "Points Forts de CSS3",
            description: "CSS3 apporte des capacités de style modernes au développement web.",
            list: [
                "Sélecteurs avancés",
                "Mise en page flexible (Flexbox)",
                "Mise en page en grille",
                "Animations et transitions",
                "Media queries",
                "Propriétés personnalisées",
                "Typographie améliorée"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "CSS3 répond à la demande de conception web responsive et visuellement attrayante avec de puissantes nouvelles fonctionnalités.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que CSS3 ?",
            answer: "CSS3 est la dernière version des Feuilles de Style en Cascade, offrant de nouvelles fonctionnalités pour le style web."
        },
        {
            question: "Que sont les media queries ?",
            answer: "Les media queries permettent des designs responsives en appliquant des styles basés sur les caractéristiques de l'appareil."
        },
        {
            question: "Qu'est-ce que la mise en page Flexbox ?",
            answer: "La mise en page Flexbox offre une façon plus efficace de concevoir des layouts, de distribuer l'espace et d'aligner les éléments."
        },
        {
            question: "Quels sont les frameworks CSS populaires ?",
            answer: "Les frameworks CSS populaires sont Bootstrap, Tailwind CSS, Bulma, Foundation et Materialize."
        }
    ]
}