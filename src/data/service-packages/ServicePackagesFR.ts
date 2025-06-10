// ServicePackagesFR.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesFR: IServicePackages = {
    name: "Forfaits de service",
    premium: {
        name: "Forfaits Premium",
        description: "Plans d’ingénierie compacts conçus pour les plateformes en phase initiale, les MVP, les outils internes ou les projets nécessitant une livraison rapide. Idéal pour les startups et entreprises qui recherchent une expertise sans engagement à long terme ni équipe complète.",
        plans: [
            {
                name: "Plan de Petit Projet",
                price: "$299 USD/mission",
                schedule: "Flexible (par projet, ≤1 semaine)",
                highlight: "Solution efficace pour les micro-tâches, corrections ou petites fonctionnalités livrables en quelques jours.",
                features: [
                    "Idéal pour les tâches urgentes, prototypes rapides ou corrections isolées",
                    "Délai de livraison typique de 2 à 5 jours ouvrables",
                    "Inclut planification, livraison du code et tests de base",
                    "Support des micro-fonctionnalités front-end, back-end ou API",
                    "Sans support récurrent ni réunions hebdomadaires",
                    "Adapté aux besoins ponctuels ou isolés"
                ],
                link: "service-packages/"
            },
            {
                name: "Plan de Soins Essentiels",
                price: "$799 USD/mois",
                schedule: "Lun–Ven, 8h30–17h30 (temps partagé)",
                highlight: "Support technique fondamental pour MVP, outils internes ou plateformes en démarrage nécessitant peu de développement.",
                features: [
                    "Mise en place légère et stabilisation des fonctionnalités clés",
                    "Suivi régulier, correction de bugs et maintenance technique",
                    "Documentation et transfert technique aux équipes internes",
                    "Ne comprend pas le développement de fonctionnalités complexes",
                    "Compatible avec les langages et bases de données courants"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Forfaits Or",
        description: "Une suite de trois forfaits de services à temps partagé — Growth Support, Advanced Growth Plan et Blockchain Pioneer — conçue pour le support produit post-lancement, l’itération stratégique et des opérations techniques évolutives. Pensée pour les startups, agences et entreprises recherchant une expertise fiable sans devoir recruter à temps plein.",
        plans: [
            {
                name: "Plan de Soutien à la Croissance",
                price: "$1,999 USD/mois",
                schedule: "Lun–Ven, 8h30–17h30 (temps partagé)",
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
                name: "Plan de Croissance Avancée",
                price: "$2,999 USD/mois",
                schedule: "Lun–Ven, 8h30–17h30 (temps partagé)",
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
                name: "Plan Pionnier Blockchain",
                price: "$3,999 USD/mois",
                schedule: "Lun–Ven, 8h30–17h30 (temps plein partagé)",
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
    platinum: {
        name: "Forfaits Platine",
        description: "Trois forfaits stratégiques à temps plein — Plan d’Innovation Premium, Plan de Base Web3 et Plan d’Évolution NFT — conçus pour les CEO, CTO, Product Owners et Fondateurs recherchant un partenaire technique de confiance pour accélérer les lancements de produits en 3 à 12 mois. Adaptés aux initiatives critiques nécessitant évolutivité, itération rapide et réduction des charges liées au recrutement interne.",
        plans: [
            {
                name: "Plan d’Innovation Premium",
                price: "$5,900 USD/month",
                schedule: "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
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
                name: "Plan de Base Web3",
                price: "$6,900 USD/month",
                schedule: "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
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
                name: "Plan d’Évolution NFT",
                price: "$6,900 USD/month",
                schedule: "Lun–Ven, 8h30–17h30 (Temps plein, dédié)",
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
};