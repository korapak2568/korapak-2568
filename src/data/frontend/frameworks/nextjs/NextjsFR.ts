import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const NextjsFR: IFrontEndStack = {
    title: "NextJS",
    description: "Améliorez vos applications React avec un rendu côté serveur transparent et une génération de sites statiques pour des performances optimales.",
    image: ImageUrl.frontendThumbnails.nextjs.path,
    alt: "Logo représentant le framework Next.js",
    readMore: "Explorez plus de solutions de développement front-end NextJS",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "Développement NextJS",
            description: "Next.js est un framework React de premier plan qui offre un rendu côté serveur et une génération de sites statiques, fournissant des applications web hautes performances, optimisées pour le référencement, avec une configuration minimale. Parfait pour les besoins de développement web moderne.",
            list: []
        },
        {
            title: "Points forts de NextJS",
            description: "NextJS se distingue par ses fonctionnalités robustes",
            list: [
                "Rendu côté serveur",
                "Génération de sites statiques",
                "Fractionnement automatique du code",
                "Routes API",
                "Régénération statique incrémentielle",
                "Support intégré pour CSS et Sass",
                "Excellente expérience développeur"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "Next.js répond aux défis du développement web en fournissant des solutions pour la performance, l'évolutivité et le référencement, assurant une livraison optimale des applications.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Next.js ?",
            answer: "Next.js est un framework React qui fournit un rendu côté serveur et une génération de sites statiques pour des applications web optimisées."
        },
        {
            question: "Comment le rendu côté serveur dans Next.js améliore-t-il les performances ?",
            answer: "Le rendu côté serveur améliore les performances en prérendant les pages sur le serveur, réduisant ainsi le temps de rendu côté client."
        },
        {
            question: "Qu'est-ce que la génération de sites statiques dans Next.js ?",
            answer: "La génération de sites statiques prérendant les pages au moment de la compilation, offrant des temps de chargement rapides et un meilleur référencement."
        }
    ]
}