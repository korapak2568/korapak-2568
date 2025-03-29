import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";

export const PythonFR: IFullStackStack = {
    title: "Python",
    description: "Python est un langage de programmation de haut niveau et interprété, connu pour sa simplicité, sa lisibilité et sa polyvalence. Il est largement utilisé dans divers domaines, du développement web et de l'analyse de données à l'intelligence artificielle et au calcul scientifique.",
    image: "/chorn-images/technical-expertise/full-stack-developer/python-developer.webp",
    alt: "Logo représentant Python avec le framework Flask",
    readMore: "Explorez davantage de solutions de développement full-stack Python, Flask, Django",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Développement Python",
            description: "Python est un langage de programmation de haut niveau et interprété, connu pour sa simplicité, sa lisibilité et sa polyvalence. Il est largement utilisé dans divers domaines, du développement web et de l'analyse de données à l'intelligence artificielle et au calcul scientifique.",
            list: []
        },
        {
            title: "Facile à Apprendre et à Utiliser",
            description: "La syntaxe simple et la lisibilité de Python en font un excellent choix pour les débutants comme pour les développeurs expérimentés. Sa vaste bibliothèque standard et ses modules contribués par la communauté fournissent des solutions prêtes à l'emploi pour un large éventail de tâches.",
            list: [
                "Facile à apprendre",
                "Syntaxe lisible",
                "Polyvalent",
                "Grande bibliothèque standard",
                "Communauté forte",
                "Populaire pour l'IA/ML",
                "Multi-plateforme"
            ]
        },
        {
            title: "Applications Polyvalentes",
            description: "Python est utilisé dans divers domaines, notamment le développement web avec des frameworks comme Django et Flask, la science des données avec des bibliothèques comme pandas et NumPy, et l'apprentissage automatique avec TensorFlow et scikit-learn. Cette polyvalence fait de Python un langage de prédilection pour de nombreux développeurs.",
            list: []
        },
        {
            title: "Fort Soutien de la Communauté",
            description: "Python possède une communauté dynamique et active qui contribue continuellement à sa croissance. Avec de nombreux tutoriels, forums et projets open-source disponibles, les développeurs peuvent facilement trouver du soutien et des ressources pour améliorer leurs compétences et résoudre des défis.",
            list: []
        }
    ],
    faqs: [
        {
            question: "À quoi sert Python ?",
            answer: "Python est utilisé pour le développement web, l'analyse de données, l'intelligence artificielle, le calcul scientifique, et bien plus encore."
        },
        {
            question: "Pourquoi Python est-il si populaire ?",
            answer: "La simplicité, la lisibilité et la polyvalence de Python en font un choix populaire pour les débutants comme pour les développeurs expérimentés."
        },
        {
            question: "Python est-il bon pour le développement web ?",
            answer: "Oui, des frameworks comme Django et Flask font de Python un outil puissant pour le développement web."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django est un framework web de haut niveau qui encourage un développement rapide et une conception propre et pragmatique.",
            strengths: [
                "Tout inclus : Livré avec de nombreuses fonctionnalités intégrées comme l'ORM, l'authentification et un panneau d'administration.",
                "Évolutivité : Adapté aux applications à grande échelle.",
                "Sécurité : Inclut une protection intégrée contre de nombreuses menaces de sécurité courantes."
            ],
            useCases: [
                "Applications web à grande échelle",
                "Sites e-commerce",
                "Systèmes de gestion de contenu"
            ]
        },
        {
            name: "Flask",
            overview: "Flask est un micro-framework web qui fournit l'essentiel pour faire fonctionner une application web sans beaucoup de code passe-partout.",
            strengths: [
                "Léger : Minimaliste et flexible.",
                "Extensible : Peut être facilement étendu avec diverses extensions.",
                "Facile à apprendre : Simple à comprendre et à démarrer."
            ],
            useCases: [
                "Applications de petite à moyenne taille",
                "APIs",
                "Prototypage"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI est un framework web moderne et rapide (haute performance) pour construire des APIs avec Python 3.6+ basé sur les annotations de type standard de Python.",
            strengths: [
                "Vitesse : Support asynchrone et haute performance.",
                "Documentation automatique : Génère la documentation OpenAPI et JSON Schema.",
                "Sécurité des types : Utilise les annotations de type Python pour la validation et la sérialisation."
            ],
            useCases: [
                "APIs",
                "Microservices",
                "Applications en temps réel"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid est un framework web polyvalent conçu pour faciliter l'écriture d'applications web.",
            strengths: [
                "Flexibilité : Peut être utilisé pour des applications de petite et grande taille.",
                "Personnalisation : Hautement configurable et modulaire.",
                "Sécurité : Fournit plusieurs fonctionnalités de sécurité."
            ],
            useCases: [
                "Applications polyvalentes allant des microservices aux grandes applications web"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado est un serveur web et un framework d'application web évolutif et non bloquant.",
            strengths: [
                "Performance : Conçu pour gérer les connexions réseau de longue durée.",
                "Temps réel : Adapté aux applications web en temps réel.",
                "Évolutivité : Peut gérer des milliers de connexions simultanées."
            ],
            useCases: [
                "Applications en temps réel",
                "WebSockets",
                "Long polling"
            ]
        }
    ]
}