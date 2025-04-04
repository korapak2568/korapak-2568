import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const GitHubFR: IDevOpsStack = {
    title: "GitHub",
    description: "Améliorez votre flux de travail de développement avec la plateforme de contrôle de version et de collaboration de GitHub.",
    image: ImageUrl.devopsThumbnails.github.path,
    alt: "Logo représentant l'expérience de la technologie GitHub",
    readMore: "Découvrez comment GitHub optimise les tests DevOps",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub est une plateforme web qui fournit l'hébergement de dépôts Git, des outils de développement collaboratif et une large gamme d'intégrations, favorisant un développement logiciel efficace et collaboratif.",
            list: []
        },
        {
            title: "Points forts de GitHub",
            description: "GitHub excelle avec ses fonctionnalités clés",
            list: [
                "Contrôle de MetadataChorn",
                "Développement collaboratif",
                "Demandes de fusion (pull requests)",
                "Suivi des problèmes",
                "Revue de code",
                "Intégration continue",
                "Intégrations extensives"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "GitHub relève les défis du flux de travail de développement en fournissant un contrôle de version robuste et des outils collaboratifs pour une gestion efficace de projet.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que GitHub ?",
            answer: "GitHub est une plateforme web qui fournit l'hébergement de dépôts Git et des outils de développement collaboratif."
        },
        {
            question: "Comment GitHub améliore-t-il la collaboration ?",
            answer: "GitHub améliore la collaboration en offrant des fonctionnalités comme les demandes de fusion, le suivi des problèmes et la revue de code pour faciliter le développement en équipe."
        },
        {
            question: "Quels sont les avantages d'utiliser GitHub ?",
            answer: "Les avantages d'utiliser GitHub incluent le contrôle de version, le développement collaboratif, les demandes de fusion, le suivi des problèmes, la revue de code, l'intégration continue et des intégrations extensives."
        }
    ]
}