import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaFR: IFullStackStack = {
    title: "Java, Spring Boot",
    description: "Java est un langage de programmation polyvalent de haut niveau reconnu pour sa portabilité, sa robustesse et ses performances. Spring Boot est un framework qui simplifie le développement d'applications prêtes pour la production. Kotlin, un langage de programmation moderne, interopère avec Java, améliorant la productivité et la sécurité.",
    image: ImageUrl.fullstackThumbnails.java.path,
    alt: "Logo représentant Java avec le framework Spring Boot",
    readMore: "Explorez plus de solutions de développement full-stack Java Spring Boot",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Développement Java Spring Boot",
            description: "Java est un langage de programmation polyvalent de haut niveau reconnu pour sa portabilité, sa robustesse et ses performances. Spring Boot est un framework qui simplifie le développement d'applications prêtes pour la production. Kotlin, un langage de programmation moderne, interopère avec Java, améliorant la productivité et la sécurité.",
            list: []
        },
        {
            title: "Écosystème robuste",
            description: "La combinaison de Java et Spring Boot fournit un écosystème robuste pour construire des applications évolutives, sécurisées et performantes. Spring Boot simplifie le processus de configuration et de développement, permettant un développement et un déploiement rapides.",
            list: [
                "Robuste et évolutif",
                "Écosystème mature",
                "Orienté objet",
                "Framework Spring Boot",
                "Intégration Kotlin",
                "Haute performance",
                "Applications d'entreprise"
            ]
        },
        {
            title: "Fonctionnalités de langages modernes",
            description: "Kotlin offre des fonctionnalités de langage modernes comme la sécurité contre les valeurs nulles, les fonctions d'extension et les coroutines, ce qui en fait un choix privilégié pour les nouveaux projets. Son interopérabilité transparente avec Java permet aux développeurs d'exploiter les bibliothèques et frameworks Java existants tout en profitant des améliorations de Kotlin.",
            list: []
        },
        {
            title: "Solutions d'entreprise",
            description: "Java et Spring Boot sont largement utilisés dans les environnements d'entreprise en raison de leur fiabilité et de leur évolutivité. Ces technologies alimentent des applications critiques dans divers secteurs, garantissant qu'elles peuvent gérer des opérations à grande échelle avec facilité.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Spring Boot ?",
            answer: "Spring Boot est un framework pour construire des applications autonomes basées sur Spring prêtes pour la production."
        },
        {
            question: "Pourquoi utiliser Kotlin avec Java ?",
            answer: "Kotlin est entièrement interopérable avec Java et offre des fonctionnalités de langage modernes pour un code plus concis et plus sûr."
        },
        {
            question: "Quels sont les avantages de Java ?",
            answer: "Java est connu pour sa robustesse, son évolutivité et son vaste écosystème pour les applications d'entreprise."
        }
    ],
}