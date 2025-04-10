import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonFR} from "@/data/fullstack/frameworks/python/PythonFR";
import {PhpFR} from "@/data/fullstack/frameworks/php/PhpFR";
import {NodejsFR} from "@/data/fullstack/frameworks/nodejs/NodejsFR";
import {JavaFR} from "@/data/fullstack/frameworks/java/JavaFR";
import {GoFR} from "@/data/fullstack/frameworks/go/GoFR";
import {DotnetFR} from "@/data/fullstack/frameworks/dotnet/DotnetFR";

export const FullStackFR: IFullStack = {
    title: "Développement Back-End",
    span: "Expérience en Développement Back-End",
    subTitle: "",

    dotnetcore: DotnetFR,
    go: GoFR,
    java: JavaFR,
    nodejs: NodejsFR,
    php: PhpFR,
    python: PythonFR,

    stacks: [
        NodejsFR,
        GoFR,
        JavaFR,
        PythonFR,
        PhpFR,
        DotnetFR,
    ],

    services: {
        title: "Développement Back-End",
        descriptions: [
            "Le développement back-end constitue la fondation essentielle des applications web puissantes, sécurisées et évolutives. Ce système en coulisses est nécessaire pour le traitement des données, la gestion des bases de données et la sécurité, permettant aux entreprises d'accueillir de nombreux utilisateurs simultanément, de créer des expériences fluides et de protéger les informations critiques. Les technologies couvertes comprennent Node.js, Java Spring Boot, Python, Go, PHP et .NET Core, capables de répondre aux besoins de projets de tous niveaux de complexité, de la preuve de concept (PoC) au produit minimum viable (MVP) prêt pour le marché. L'intégration harmonieuse entre les interfaces utilisateur et les fonctionnalités côté serveur offre aux utilisateurs des expériences supérieures et aide les entreprises à atteindre efficacement leurs objectifs."
        ],
        items: [
            {
                title: "Intégration Transparente Front-End & Back-End",
                description: "Applications web cohésives avec des composants client et serveur parfaitement synchronisés offrant vitesse, sécurité et évolutivité."
            },
            {
                title: "Optimisation Complète du SEO et des Performances",
                description: "Visibilité améliorée dans les moteurs de recherche et expérience utilisateur optimisée grâce à une structure de code optimisée, des temps de chargement plus rapides et une gestion efficace des ressources."
            },
            {
                title: "Tests d'Automatisation Robustes",
                description: "Applications fiables et stables avec des frameworks de test complets intégrés tout au long du cycle de développement."
            },
            {
                title: "Gestion Avancée des Bases de Données",
                description: "Données structurées et gérées efficacement avec des solutions de bases de données optimisées, notamment MySQL, MongoDB, PostgreSQL et d'autres technologies de pointe."
            },
            {
                title: "Services Cloud de Niveau Entreprise",
                description: "Applications déployées et mises à l'échelle efficacement à l'aide d'AWS, Azure, Google Cloud ou d'autres plateformes cloud avec des configurations d'infrastructure optimisées."
            }
        ]
    }
}