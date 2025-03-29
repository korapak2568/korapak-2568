import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonFR} from "@/data/fullstack/frameworks/python/PythonFR";
import {PhpFR} from "@/data/fullstack/frameworks/php/PhpFR";
import {NodejsFR} from "@/data/fullstack/frameworks/nodejs/NodejsFR";
import {JavaFR} from "@/data/fullstack/frameworks/java/JavaFR";
import {GoFR} from "@/data/fullstack/frameworks/go/GoFR";
import {DotnetFR} from "@/data/fullstack/frameworks/dotnet/DotnetFR";

export const FullStackFR: IFullStack = {
    title: "Expérience Back-End & API",
    span: "Expérience en développement Back-End & API",
    subTitle: "",

    dotnetcore: DotnetFR,
    go: GoFR,
    java: JavaFR,
    nodejs: NodejsFR,
    php: PhpFR,
    python: PythonFR,

    stacks: [],

    services: {
        title: "Développement Back-End & API",
        descriptions: [
            "Construisez des applications web puissantes, sécurisées et évolutives grâce à nos services experts de développement full-stack. Nos développeurs excellent dans les technologies front-end et back-end, créant des solutions complètes adaptées à vos besoins professionnels spécifiques. L'expertise technique de CHORN couvre plusieurs piles technologiques, notamment Node.js, .NET Core C#, Java Spring Boot, Python, Go et PHP, nous permettant de gérer des projets de toute complexité. Que vous lanciez une preuve de concept initiale (PoC) ou que vous développiez un produit minimum viable (MVP) prêt pour le marché, notre équipe qualifiée assure une intégration transparente entre les interfaces utilisateur et les fonctionnalités côté serveur pour une expérience utilisateur exceptionnelle."
        ],
        items: [
            {
                title: "Intégration Transparente Front-End & Back-End",
                description: "Développez des applications web cohérentes avec des composants client et serveur parfaitement synchronisés qui offrent rapidité, sécurité et évolutivité."
            },
            {
                title: "Optimisation Complète du SEO & des Performances",
                description: "Améliorez la visibilité de votre site web sur les moteurs de recherche et l'expérience utilisateur grâce à une structure de code optimisée, des temps de chargement plus rapides et une gestion efficace des ressources."
            },
            {
                title: "Tests Automatisés Robustes",
                description: "Assurez la fiabilité et la stabilité des applications avec des cadres de test complets intégrés tout au long du cycle de développement."
            },
            {
                title: "Gestion Avancée de Bases de Données",
                description: "Structurez et gérez efficacement vos données avec des solutions de bases de données optimisées, notamment MySQL, MongoDB, PostgreSQL et autres technologies de pointe."
            },
            {
                title: "Services Cloud de Niveau Entreprise",
                description: "Déployez et faites évoluer vos applications efficacement en utilisant AWS, Azure, Google Cloud ou d'autres plateformes cloud avec des configurations d'infrastructure optimisées."
            }
        ]
    }
}

FullStackFR.stacks = [
    FullStackFR.nodejs,
    FullStackFR.go,
    FullStackFR.java,
    FullStackFR.python,
    FullStackFR.php,
    FullStackFR.dotnetcore
]