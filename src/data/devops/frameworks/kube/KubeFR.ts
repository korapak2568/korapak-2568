import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeFR: IDevOpsStack = {
    title: "Kubernetes",
    description: "Automatisez l'orchestration de vos conteneurs avec Kubernetes pour des applications évolutives et résilientes.",
    image: ImageUrl.devops.frameworks.kube.thumbnail,
    alt: "Logo représentant l'expérience de la technologie Kubernetes",
    readMore: "Découvrez les solutions de test DevOps Kubernetes",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes est une plateforme leader d'orchestration de conteneurs qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées. Essentiel pour les systèmes à grande échelle et résilients.",
            list: []
        },
        {
            title: "Points forts de Kubernetes",
            description: "Kubernetes se distingue par ses fonctionnalités robustes",
            list: [
                "Déploiement automatisé",
                "Évolutivité",
                "Auto-réparation",
                "Découverte de services",
                "Équilibrage de charge",
                "Orchestration du stockage",
                "Gestion de la configuration"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "Kubernetes répond aux défis d'orchestration en fournissant des solutions évolutives et automatisées pour les applications conteneurisées.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Qu'est-ce que Kubernetes?",
            answer: "Kubernetes est une plateforme d'orchestration de conteneurs qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées."
        },
        {
            question: "Comment Kubernetes améliore-t-il l'évolutivité des applications?",
            answer: "Kubernetes améliore l'évolutivité des applications en gérant automatiquement la mise à l'échelle des applications conteneurisées en fonction de la demande."
        },
        {
            question: "Quels sont les avantages d'utiliser Kubernetes?",
            answer: "Les avantages d'utiliser Kubernetes comprennent le déploiement automatisé, l'évolutivité, l'auto-réparation, la découverte de services, l'équilibrage de charge et l'orchestration du stockage."
        }
    ]
}