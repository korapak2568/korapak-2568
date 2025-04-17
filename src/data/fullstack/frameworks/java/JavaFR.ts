import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaFR: IFullStackStack = {
    title: "Développement Java",
    description: "Java est un langage de programmation puissant et flexible, idéal pour les applications modernes d'entreprise et cloud. Grâce à Spring Boot, gRPC et la prise en charge de RMI, Java reste une technologie clé pour des solutions full-stack évolutives.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Développement Java, Spring Boot, gRPC et RMI",
    readMore: "Découvrez des solutions Java et Spring Boot pour le développement full-stack",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Développement Java moderne",
            description: "Java évolue avec des fonctionnalités modernes comme les records, le pattern matching et les threads virtuels, améliorant ainsi la productivité et les performances.",
            list: [
                "Compatibilité Java 17+ LTS",
                "Threads virtuels pour une meilleure scalabilité",
                "Sécurité des types et maintenabilité",
                "Parfait pour les microservices et l’entreprise"
            ]
        },
        {
            title: "Spring Boot et applications cloud-native",
            description: "Spring Boot simplifie le développement rapide d’APIs REST, de microservices et d’applications cloud grâce à sa configuration automatique et son intégration cloud.",
            list: [
                "Configuration automatique et gestion des dépendances",
                "Architecture microservices",
                "APIs REST et WebSocket",
                "Intégration avec Spring Cloud"
            ]
        },
        {
            title: "Communication entre services avec gRPC et RMI",
            description: "Java utilise gRPC pour des communications inter-services performantes, tout en assurant la compatibilité avec les systèmes existants via RMI.",
            list: [
                "Communication binaire performante avec gRPC",
                "Compatibilité legacy avec RMI",
                "Accès distant sécurisé",
                "Intégration de systèmes anciens et modernes"
            ]
        },
        {
            title: "Solutions d'entreprise et modernisation J2EE",
            description: "Jakarta EE et Spring modernisent J2EE avec une architecture modulaire, tout en assurant la compatibilité et le déploiement dans le cloud.",
            list: [
                "Jakarta EE comme successeur de J2EE",
                "Déploiement avec Docker et Kubernetes",
                "Architecture sécurisée pour l’entreprise",
                "APIs modernes pour systèmes existants"
            ]
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Spring Boot ?",
            answer: "Spring Boot est un framework permettant de créer rapidement des applications Spring autonomes prêtes pour la production avec un serveur intégré."
        },
        {
            question: "Comment Java prend-il en charge les anciens et nouveaux systèmes ?",
            answer: "Java allie les outils modernes comme Spring Boot et gRPC avec le support legacy via RMI et J2EE."
        },
        {
            question: "Qu’est-ce que gRPC et comment est-il utilisé avec Java ?",
            answer: "gRPC est un framework RPC performant basé sur Protocol Buffers, utilisé en Java pour la communication entre microservices."
        }
    ]
}