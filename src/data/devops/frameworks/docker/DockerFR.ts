import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";

export const DockerFR: IDevOpsStack = {
    title: "Docker",
    description: "Simplifiez le déploiement de vos applications grâce à la conteneurisation pour des environnements cohérents et efficaces.",
    "image": "/chorn-images/technical-expertise/cloud-devops/Docker.webp",
    "alt": "Logo représentant l'expérience en technologie Docker",
    "readMore": "Explorez Docker pour des tests DevOps efficaces",
    "link": "/technical-expertise/cloud-devops/docker",
    "features": [
        {
            title: "Docker",
            description: "Docker est une plateforme puissante pour développer, livrer et exécuter des applications dans des conteneurs, assurant la cohérence entre plusieurs environnements. Idéal pour les pratiques DevOps modernes.",
            "list": []
        },
        {
            title: "Points forts de Docker",
            description: "Docker excelle avec ses fonctionnalités clés",
            "list": [
                "Conteneurisation",
                "Cohérence des environnements",
                "Efficacité des ressources",
                "Évolutivité",
                "Isolation",
                "Déploiement rapide",
                "Configuration simplifiée"
            ]
        },
        {
            title: "Défis et Solutions",
            description: "Docker répond aux défis de déploiement en fournissant des solutions de conteneurisation qui améliorent les performances, l'évolutivité et la cohérence.",
            "list": []
        }
    ],
    "faqs": [
        {
            "question": "Qu'est-ce que Docker ?",
            "answer": "Docker est une plateforme qui utilise la conteneurisation pour déployer des applications dans des environnements cohérents et isolés."
        },
        {
            "question": "Comment Docker améliore-t-il la cohérence du déploiement ?",
            "answer": "Docker assure la cohérence du déploiement en emballant les applications et leurs dépendances dans des conteneurs qui fonctionnent uniformément dans différents environnements."
        },
        {
            "question": "Quels sont les avantages de l'utilisation de Docker ?",
            "answer": "Les avantages de l'utilisation de Docker comprennent la cohérence des environnements, l'efficacité des ressources, l'évolutivité, l'isolation et le déploiement rapide."
        }
    ]
}