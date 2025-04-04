import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const VueFR: IFrontEndStack = {
    title: "Vue",
    description: "Créez rapidement des interfaces web modernes et réactives grâce à la conception intuitive et flexible de Vue.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Logo représentant le framework Vue.js",
    readMore: "Explorez plus de solutions de développement front-end VueJS",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Développement Vue",
            description: "Vue.js est un framework JavaScript progressif pour la construction d'interfaces utilisateur. Il est conçu pour être adoptable progressivement, avec une bibliothèque principale axée sur la couche de vue.",
            list: []
        },
        {
            title: "Points forts de Vue",
            description: "Vue.js offre un framework flexible et performant avec des atouts clés.",
            list: [
                "Liaison de données réactive",
                "Structure basée sur les composants",
                "DOM virtuel",
                "Intégration facile",
                "Documentation complète",
                "Vue CLI",
                "Communauté active"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "Vue.js simplifie le développement web grâce à son API intuitive, sa liaison de données réactive et sa facilité d'intégration.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Vue.js ?",
            answer: "Vue.js est un framework JavaScript progressif pour la construction d'interfaces utilisateur."
        },
        {
            question: "Qu'est-ce que le DOM virtuel ?",
            answer: "Le DOM virtuel est une copie légère du DOM réel, optimisant les mises à jour et les performances."
        },
        {
            question: "En quoi Vue.js diffère-t-il de React ?",
            answer: "Vue.js offre une intégration plus flexible et plus simple par rapport à la configuration plus complexe de React."
        }
    ]
}