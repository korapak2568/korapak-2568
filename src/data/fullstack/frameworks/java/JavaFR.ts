import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaFR: IFullStackStack = {
    title: "Développement Java",
    description: "Java est un langage de programmation de haut niveau polyvalent, réputé pour sa portabilité, sa robustesse et ses performances. Spring Boot est un framework qui simplifie le développement d'applications prêtes pour la production.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Développement avec Java et le framework Spring Boot",
    readMore: "Découvrez davantage de solutions de développement full-stack Java Spring Boot",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Développement Java",
            description: "Java est un langage de programmation de haut niveau polyvalent, réputé pour sa portabilité, sa robustesse et ses performances. Spring Boot est un framework qui simplifie le développement d'applications prêtes pour la production.",
            list: []
        },
        {
            title: "Écosystème robuste",
            description: "L’association de Java et Spring Boot fournit un écosystème solide pour créer des applications performantes, sécurisées et évolutives. Spring Boot facilite la configuration et le déploiement rapide.",
            list: [
                "Robuste et évolutif",
                "Écosystème mature",
                "Orienté objet",
                "Framework Spring Boot",
                "Haute performance",
                "Applications de niveau entreprise"
            ]
        },
        {
            title: "Fonctionnalités modernes",
            description: "Java évolue continuellement et propose des fonctionnalités, bibliothèques et outils modernes favorisant la productivité, la sécurité typée et un développement efficace.",
            list: []
        },
        {
            title: "Solutions d’entreprise",
            description: "Java et Spring Boot sont largement utilisés dans les environnements d’entreprise en raison de leur fiabilité et de leur capacité de montée en charge. Ils alimentent des applications critiques dans de nombreux secteurs.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu’est-ce que Spring Boot ?",
            answer: "Spring Boot est un framework permettant de créer des applications Spring autonomes et prêtes pour la production."
        },
        {
            question: "Quels sont les avantages de Java ?",
            answer: "Java est réputé pour sa robustesse, sa scalabilité et son large écosystème adapté aux applications d’entreprise."
        }
    ]
}