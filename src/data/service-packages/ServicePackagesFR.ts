// ServicePackagesFR.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFR: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Trois offres entièrement dédiées, pensées pour les entreprises et startups avec une vision stratégique de croissance. Nous agissons comme un partenaire technologique pour soutenir l’évolutivité tout en réduisant les besoins en embauche interne. Idéal pour des lancements prévus sous 3 à 12 mois.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                "schedule": "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
                highlight: "Support exclusif pour les projets non-blockchain – MVP, refonte système, scalabilité.",
                features: [
                    "Améliorations systèmes, développement de nouvelles fonctionnalités, MVP, PoC",
                    "Support de tous les principaux langages et frameworks front-end & back-end",
                    "Compatible avec toutes les bases de données et plateformes cloud majeures",
                    "Prise en charge de protocoles modernes et hérités : gRPC, RPI, JMS"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                "schedule": "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
                highlight: "Développement blockchain complet avec intégration Web3, tokenomics et smart contracts.",
                features: [
                    "Développement Web3 et blockchain : Solidity, Ethers.js, Ethereum",
                    "Création, audit et intégration de smart contracts",
                    "Front-end & Back-end : Next.js, React, Node.js",
                    "Fonctionnalités tokens : airdrops, préventes, systèmes de récompense"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                "schedule": "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
                highlight: "Développement NFT moderne et modernisation des smart contracts existants.",
                features: [
                    "Création et refonte de projets NFT modernes",
                    "Smart contracts en Solidity",
                    "Intégration avec Next.js, React, Node.js",
                    "Support des standards ERC721, ERC1155 et des marketplaces"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Forfaits Gold",
        description: "Trois forfaits de service à temps partiel — Essential Care, Growth Support et Blockchain Pioneer — conçus pour accompagner les produits après leur lancement, favoriser les itérations stratégiques et assurer des opérations techniques évolutives. Parfait pour les startups, agences et équipes produit à la recherche d’un soutien technique fiable sans engager de développeurs à temps plein.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/mois",
                hourlyEquivalent: "$5.625 USD/heure",
                "schedule": "Lun–Ven, 8h30–17h30 (temps partagé)",
                highlight: "Support technique essentiel pour les MVP, outils internes ou plateformes en phase de démarrage avec des besoins limités en développement.",
                features: [
                    "Mise en place légère et stabilisation des fonctionnalités clés",
                    "Surveillance de routine, corrections de bugs et maintenance technique",
                    "Documentation claire et transfert technique vers votre équipe",
                    "Ne comprend pas de développement de fonctionnalités complexes",
                    "Compatible avec les langages et bases de données standards"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/mois",
                hourlyEquivalent: "$12.49 USD/heure",
                "schedule": "Lun–Ven, 8h30–17h30 (temps partagé)",
                highlight: "Idéal pour les équipes en phase de croissance nécessitant des améliorations continues et une flexibilité technique sans coût à temps plein.",
                features: [
                    "Maintenance continue et développement de fonctionnalités intermédiaires",
                    "Synchronisation hebdomadaire avec votre équipe (1 à 3 parties prenantes)",
                    "Déploiement full-stack : API, outils admin, et modules utilisateurs",
                    "Compatible avec les stacks modernes, frameworks récents et services cloud",
                    "Facilement évolutif vers un forfait supérieur si besoin"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/mois",
                hourlyEquivalent: "$18.74 USD/heure",
                "schedule": "Lun–Ven, 8h30–17h30 (temps partagé)",
                highlight: "Partenaire technique stratégique pour des plateformes en pleine évolution avec des livraisons fréquentes et une collaboration rapprochée avec les parties prenantes.",
                features: [
                    "Développement de fonctionnalités avancées, cycles d’optimisation et amélioration des performances",
                    "Cadence de livraison accélérée (parfait pour des sprints hebdomadaires)",
                    "1 à 2 synchronisations hebdomadaires (équipe de 3 à 6 personnes)",
                    "Développement full-stack robuste sur le web, le backend et les intégrations",
                    "Conçu pour accompagner les équipes produit en pleine structuration"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/mois",
                hourlyEquivalent: "$24.99 USD/heure",
                "schedule": "Lun–Ven, 8h30–17h30 (temps plein partagé)",
                highlight: "Accès professionnel au développement Web3 — idéal pour les prototypes blockchain, utilitaires NFT et plateformes basées sur Ethereum.",
                features: [
                    "Développement de smart contracts et dApps sur Ethereum",
                    "Intégration complète avec les systèmes backend Web2/Web3",
                    "Gestion des métadonnées, pipelines de mint et déploiement sur les marketplaces NFT",
                    "Parfait pour les équipes innovantes explorant l’univers décentralisé"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Des forfaits de développement flexibles à l'heure — idéals pour les équipes agiles, les startups et les innovateurs Web3 ayant besoin de support à la demande. Parfait pour accélérer la scalabilité sans engager une équipe interne. Inclut un service de correction urgente.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 h/semaine",
                highlight: "Développement full-stack flexible pour soutenir votre feuille de route produit.",
                features: [
                    "Développement personnalisé de logiciels, de sites web et d’APIs",
                    "Compatibilité avec tous les langages et frameworks modernes",
                    "Parfait pour les équipes en croissance cherchant à éviter l'embauche permanente"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 h/semaine",
                highlight: "Expertise avancée pour les projets blockchain, NFT, et applications décentralisées.",
                features: [
                    "Développement de smart contracts, NFTs, plateformes Ethereum",
                    "Intégration Next.js, React, Node.js et backend personnalisé",
                    "Solution stratégique pour accélérer votre croissance Web3"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "8 h réservées",
                highlight: "Intervention rapide et résolution de bug critique sous 24h — sans engagement.",
                features: [
                    "Diagnostic immédiat avec livraison le jour même",
                    "Adapté aux systèmes critiques ou aux projets externes",
                    "Sans contrat à long terme",
                    "Support ponctuel en cas d’urgence produit"
                ],
                link: "service-packages/"
            }
        ]
    }
};