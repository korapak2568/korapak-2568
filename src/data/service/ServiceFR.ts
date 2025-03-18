import {IService} from "@/data/service/model/IService";

export const ServiceFR: IService = {
    title: "Intégration LLM/IA",
    description: "CHORN est spécialisé dans le développement d'agents LLM/IA, fournissant des solutions intelligentes et réactives adaptées pour répondre à des besoins spécifiques. L'expertise inclut des sites web évolutifs, des applications mobiles et des systèmes logiciels full-stack. L'assistant technique <strong>alimenté par LLM</strong> via LINE démontre les capacités des grands modèles de langage comme ChatGPT, Perplexity et DeepSeek, présentant des approches innovantes pour améliorer la présence numérique et rationaliser l'efficacité opérationnelle.",

    services: [
        {
            title: "Développement d'Agents LLM",
            description: "Conception et déploiement d'agents IA intelligents alimentés par des LLM avancés tels que ChatGPT et DeepSeek, s'intégrant parfaitement à vos systèmes existants pour améliorer l'automatisation et l'efficacité."
        },
        {
            title: "Intégration de Systèmes Existants",
            description: "Modernisation des systèmes existants en intégrant des capacités d'IA avancées, assurant un flux de données fluide et une fonctionnalité améliorée."
        },
        {
            title: "Solutions LLM sur Mesure",
            description: "Développement de modèles d'IA sur mesure, exploitant des LLM à la pointe de la technologie pour relever des défis commerciaux spécifiques et optimiser les opérations."
        },
        {
            title: "Automatisation des Flux de Travail par IA",
            description: "Rationalisation des tâches répétitives et optimisation des flux de travail grâce à des solutions d'automatisation pilotées par l'IA pour une productivité améliorée."
        },
        {
            title: "Analyses Prédictives et Insights",
            description: "Exploitation de l'IA pour analyser les modèles de données, prévoir les tendances et fournir des insights actionnables pour une meilleure prise de décision."
        }
    ],

    demo: {
        title: "Démonstration d'intégration LLM/IA",
        description: "Bienvenue au Compagnon de Chat IA, une démonstration d'intégration alimentée par l'IA. Explorez une variété de compagnons IA, " +
            "chacun avec des personnalités uniques, conçus pour interagir de manière fluide avec les utilisateurs via l'application LINE. " +
            "Ces compagnons IA peuvent communiquer en plusieurs langues, notamment le thaï, l'anglais, le chinois, " +
            "le japonais, le coréen, le français et le vietnamien.",
        link: {
            text: "Découvrez notre démo en action sur <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "Comment ça fonctionne",
            steps: [
                {
                    title: "Choisissez votre compagnon IA",
                    description: "Parcourez la liste des compagnons IA disponibles et sélectionnez celui que vous préférez."
                },
                {
                    title: "Ajoutez l'IA comme ami",
                    description: "Cliquez sur le bouton 'Ajouter un ami' pour l'IA de votre choix ou utilisez l'application LINE pour scanner le code QR fourni."
                },
                {
                    title: "Commencez à discuter",
                    description: "Débutez votre conversation avec l'IA. La langue par défaut est le thaï, mais l'IA répondra dans votre langue avec une traduction en thaï."
                },
                {
                    title: "Ajoutez d'autres compagnons",
                    description: "N'hésitez pas à vous connecter avec tous les compagnons IA disponibles et profitez d'interactions diverses."
                }
            ]
        },
        note: [
            {
                title: "Remarque",
                description: "Cette démonstration fonctionne sur un serveur de test. Si l'IA ne répond pas à votre premier message, veuillez envoyer des messages supplémentaires jusqu'à ce qu'elle réponde."
            },
            {
                title: "",
                description: "Faites l'expérience de conversations multilingues et découvrez les personnalités uniques de chaque compagnon IA dès aujourd'hui !"
            }]
    }
};
