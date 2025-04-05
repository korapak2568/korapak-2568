import {IService} from "@/data/service/model/IService";

export const ServiceFR: IService = {
    title: "Intégration LLM/IA",
    description: "Transformez les opérations commerciales grâce à des solutions d'agents LLM/IA intelligentes et réactives adaptées à des besoins spécifiques. Un développement backend robuste garantit un traitement des données fiable, évolutif et sécurisé - essentiel pour offrir des expériences utilisateur fluides sur les sites web, les applications mobiles et les systèmes logiciels complexes. Le compagnon <strong>alimenté par LLM</strong> via LINE démontre comment les grands modèles de langage comme ChatGPT, Perplexity et DeepSeek peuvent améliorer les interactions numériques et rationaliser les opérations pour les entreprises et les utilisateurs finaux.",

    services: [
        {
            title: "Développement d'Agents LLM",
            description: "Exploitez des agents IA intelligents propulsés par des LLM avancés qui s'intègrent parfaitement aux systèmes existants, améliorant l'automatisation et l'efficacité pour les entreprises tout en offrant des interactions intuitives aux utilisateurs."
        },
        {
            title: "Intégration aux Systèmes Existants",
            description: "Expérimentez des systèmes modernisés avec des capacités d'IA avancées qui assurent un flux de données fluide et des fonctionnalités améliorées, rendant l'infrastructure existante plus précieuse et efficace."
        },
        {
            title: "Solutions LLM Personnalisées",
            description: "Résolvez des défis commerciaux spécifiques et optimisez les opérations avec des modèles d'IA sur mesure qui exploitent des LLM à la pointe de la technologie, offrant des solutions adaptées qui répondent à des exigences uniques."
        },
        {
            title: "Automatisation des Flux de Travail par IA",
            description: "Économisez du temps et des ressources en rationalisant les tâches répétitives grâce à l'automatisation pilotée par l'IA, permettant aux équipes de se concentrer sur des activités à plus forte valeur ajoutée tout en améliorant la productivité globale."
        },
        {
            title: "Analyses Prédictives et Insights",
            description: "Prenez de meilleures décisions commerciales grâce à l'analyse de modèles de données alimentée par l'IA qui prévoit les tendances et fournit des informations exploitables, transformant les données brutes en avantages stratégiques."
        }
    ],

    demo: {
        title: "Intégration LLM/IA avec LINE",
        description: "Découvrez une intégration alimentée par l'IA entre LLM/IA et LINE. Explorez une variété de compagnons IA, " +
            "chacun avec des personnalités uniques, conçus pour interagir parfaitement via l'application LINE. " +
            "Ces compagnons IA communiquent en plusieurs langues, notamment le thaï, l'anglais, le chinois, " +
            "le japonais, le coréen, le français et le vietnamien.",
        link: {
            text: "Découvrez la démo en action sur <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "Comment Ça Fonctionne",
            steps: [
                {
                    title: "Choisissez Votre Compagnon IA",
                    description: "Parcourez la liste des compagnons IA disponibles et sélectionnez celui que vous préférez."
                },
                {
                    title: "Ajoutez l'IA Comme Ami",
                    description: "Cliquez sur le bouton 'Ajouter un ami' pour l'IA choisie ou utilisez l'application LINE pour scanner le code QR fourni."
                },
                {
                    title: "Commencez à Discuter",
                    description: "Débutez votre conversation avec l'IA. La langue par défaut est le thaï, mais l'IA répondra dans votre langue avec une traduction en thaï."
                },
                {
                    title: "Ajoutez Plus de Compagnons",
                    description: "Connectez-vous avec tous les compagnons IA disponibles et profitez d'interactions diverses."
                }
            ]
        },
        note: [
            {
                title: "Remarque",
                description: "Cette démo fonctionne sur un serveur de test. Si l'IA ne répond pas à votre premier message, veuillez envoyer des messages supplémentaires jusqu'à ce qu'elle réponde."
            },
            {
                title: "",
                description: "Expérimentez des conversations multilingues et découvrez les personnalités uniques de chaque compagnon IA dès aujourd'hui !"
            }]
    }
};