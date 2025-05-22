// ServicePackagesFR.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFR: IServicePackages = {
    platinum: {
        name: "Forfaits Platine",
        description:
            "Trois forfaits à haute priorité – Premium Innovation Plan, Web3 Core Plan et NFT Evolution Plan – conçus pour un développement à temps plein dédié, avec une livraison prévue dans les 3 à 12 mois. Idéal pour les projets critiques ou urgents.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999/mois",
                hourlyEquivalent: "$37.49/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, dédié ou permanent)",
                highlight:
                    "Support à temps plein dédié pour les projets non blockchain, y compris les MVP, les mises à jour systèmes et la montée en charge.",
                features: [
                    "Mises à jour systèmes, nouvelles fonctionnalités, montée en charge, PoC, MVP",
                    "Support pour les langages, frameworks, frontend, backend, et APIs courants",
                    "Support pour les bases de données et clouds les plus utilisés",
                    "Support des protocoles modernes et hérités : gRPC, RPI, JMS, etc."
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999/mois",
                hourlyEquivalent: "$43.74/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, dédié ou permanent)",
                highlight:
                    "Développement blockchain de bout en bout et intégration Web3 complète, incluant tokenomics et smart contracts.",
                features: [
                    "Développement Web3 avec Solidity, Ethers.js et Ethereum",
                    "Création, audit et intégration de smart contracts",
                    "Frontend et backend : Next.js, React, Node.js",
                    "Mécaniques de tokens : airdrops, préventes, systèmes de récompense"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999/mois",
                hourlyEquivalent: "$43.74/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, dédié ou permanent)",
                highlight:
                    "Développement centré sur les NFTs, incluant la création de nouveaux contrats et l’amélioration d’anciens.",
                features: [
                    "Développement NFT moderne et mise à jour de contrats existants",
                    "Création ou refonte de smart contracts avec Solidity",
                    "Support pour les principaux frameworks frontend et backend",
                    "Compatibilité avec les standards NFT (ERC721, ERC1155) et marketplaces"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Forfaits Or",
        description:
            "Trois forfaits partagés – Essential Care Plan, Growth Support Plan et Blockchain Pioneer Plan – conçus pour le support continu ou le développement post-lancement, avec des horaires fixes et une évolutivité flexible.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899/mois",
                hourlyEquivalent: "$5.625/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, partagé)",
                highlight:
                    "Support fiable à long terme sans nouveau développement. Idéal pour les systèmes stables.",
                features: [
                    "Surveillance, maintenance et support technique",
                    "Mise à jour de documentation et support aux équipes internes",
                    "Pas de développement de nouvelles fonctionnalités",
                    "Support pour les langages de programmation et bases de données courants"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999/mois",
                hourlyEquivalent: "$12.49/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, partagé)",
                highlight:
                    "Support flexible avec développement continu pour systèmes en croissance.",
                features: [
                    "Maintenance et développement de nouvelles fonctionnalités",
                    "Support pour les langages, frameworks, APIs et plateformes Web",
                    "Amélioration continue de l’infrastructure client",
                    "Support des bases de données et solutions cloud courantes"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999/mois",
                hourlyEquivalent: "$24.99/heure",
                schedule: "Lun–Ven, 8:30–17:30 (Temps plein, partagé)",
                highlight:
                    "Développement blockchain à temps partagé pour les projets Web3, Blockchain et NFT.",
                features: [
                    "Support pour Web3, smart contracts, NFT et Ethereum",
                    "Intégration frontend et backend personnalisée",
                    "Idéal pour les projets blockchain en croissance"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Forfaits Premium",
        description:
            "Forfaits flexibles à l’heure – parfaits pour les équipes agiles, startups et innovateurs blockchain nécessitant une expertise à la demande. Inclut une correction de bug urgente!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40/heure",
                hourlyEquivalent: "$40/heure",
                hours: "20–40 h/semaine",
                highlight:
                    "Développement partiel ou complet avec expertise full-stack.",
                features: [
                    "Développement à la demande de solutions logicielles personnalisées",
                    "Support pour les langages et frameworks courants",
                    "Idéal pour les équipes recherchant des développeurs flexibles"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60/heure",
                hourlyEquivalent: "$60/heure",
                hours: "20–40 h/semaine",
                highlight:
                    "Services avancés de blockchain pour entreprises Web3 et innovateurs NFT.",
                features: [
                    "Développement blockchain, smart contracts, NFT et Ethereum",
                    "Support pour les frameworks Next.js, React, Node.js",
                    "Intégration personnalisée frontend/backend",
                    "Participation flexible à des projets Web3 avancés"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240/intervention",
                hourlyEquivalent: "$30/heure",
                hours: "Réserver 8 h/jour",
                highlight:
                    "Assistance d’urgence – diagnostic et résolution le jour même.",
                features: [
                    "Consultation et assistance immédiate",
                    "Résolution le jour même",
                    "Correction ponctuelle de bugs pour projets externes",
                    "Sans engagement de long terme"
                ],
                link: "service-packages/"
            }
        ]
    }
};