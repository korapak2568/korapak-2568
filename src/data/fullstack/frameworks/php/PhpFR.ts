import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const PhpFR: IFullStackStack = {
    title: "PHP",
    description: "PHP est un langage de script côté serveur populaire largement utilisé pour le développement web. Des frameworks comme Symfony, Laravel, Phalcon, et des moteurs de templates comme Twig, ainsi que des plateformes comme WordPress et sa variante headless, ont élevé le développement PHP en fournissant des solutions structurées, efficaces et évolutives pour la création d'applications web complexes.",
    image: ImageUrl.backend.frameworks.php.thumbnail,
    alt: "Logo représentant le langage de programmation PHP",
    readMore: "Explorez plus de solutions de développement full-stack PHP",
    link: "/technical-expertise/full-stack-developer/php-developer",
    features: [
        {
            title: "Développement PHP",
            description: "PHP est un langage de script côté serveur populaire largement utilisé pour le développement web. Des frameworks comme Symfony, Laravel, Phalcon, et des moteurs de templates comme Twig, ainsi que des plateformes comme WordPress et sa variante headless, ont élevé le développement PHP en fournissant des solutions structurées, efficaces et évolutives pour la création d'applications web complexes.",
            list: []
        },
        {
            title: "Développement Structuré",
            description: "Symfony et Laravel offrent une approche structurée du développement PHP, favorisant les meilleures pratiques et les modèles de conception. Symfony fournit un ensemble réutilisable de composants, tandis que Laravel se concentre sur la productivité des développeurs avec sa syntaxe élégante et ses outils. Twig, le moteur de template utilisé dans Symfony, fournit une méthode flexible, sécurisée et rapide pour concevoir des templates. Phalcon, un framework haute performance livré comme une extension C, offre une optimisation de bas niveau et une vitesse exceptionnelle, assurant une gestion efficace des ressources.",
            list: [
                "Script côté serveur",
                "Facile à apprendre",
                "Large écosystème",
                "Frameworks populaires",
                "Intégration WordPress",
                "Idéal pour le développement web",
                "Communauté solide"
            ]
        },
        {
            title: "Développement Rapide",
            description: "Laravel, connu pour sa syntaxe expressive et ses outils puissants, permet un développement et un déploiement rapides d'applications web. Des fonctionnalités comme Eloquent ORM, le moteur de template Blade et l'outil de ligne de commande Laravel Artisan simplifient les tâches de développement. Phalcon améliore le développement rapide avec ses performances robustes et son architecture de bas niveau. WordPress offre une configuration rapide et une grande variété de plugins et de thèmes, permettant aux développeurs de déployer rapidement des sites web riches en fonctionnalités. WordPress Headless découple le front-end et le back-end, permettant l'utilisation de frameworks JavaScript modernes comme React ou Vue pour une expérience utilisateur dynamique et réactive.",
            list: []
        },
        {
            title: "Communauté et Écosystème",
            description: "PHP bénéficie d'une vaste communauté et d'un riche écosystème de bibliothèques, de plugins et de frameworks. Symfony et Laravel bénéficient tous deux d'un soutien communautaire actif, d'une documentation étendue et de nombreux packages tiers, rendant le développement PHP efficace et agréable. Phalcon dispose d'une communauté croissante et fournit une documentation détaillée et des tutoriels pour aider les développeurs. WordPress se vante d'un vaste écosystème avec une large base d'utilisateurs, offrant de nombreux plugins et thèmes, tandis que WordPress Headless exploite la flexibilité des frameworks front-end modernes, soutenu par une communauté robuste et des ressources.",
            list: []
        }
    ],
    faqs: [
        {
            question: "À quoi sert PHP ?",
            answer: "PHP est un langage de script côté serveur conçu pour le développement web et largement utilisé pour créer des pages web dynamiques."
        },
        {
            question: "Que sont Symfony et Laravel ?",
            answer: "Symfony et Laravel sont des frameworks PHP populaires qui facilitent le développement d'applications web robustes et évolutives."
        },
        {
            question: "Pourquoi utiliser WordPress ?",
            answer: "WordPress est un système de gestion de contenu polyvalent construit sur PHP, idéal pour créer des blogs, des sites web et des boutiques en ligne."
        }
    ]
}