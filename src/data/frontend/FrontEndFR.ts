import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {VueFR} from "@/data/frontend/frameworks/vue/VueFR";
import {TypeScriptFR} from "@/data/frontend/frameworks/typescript/TypeScriptFR";
import {ReactFR} from "@/data/frontend/frameworks/react/ReactFR";
import {NextjsFR} from "@/data/frontend/frameworks/nextjs/NextjsFR";
import {JavaScriptFR} from "@/data/frontend/frameworks/javascript/JavaScriptFR";
import {Html5FR} from "@/data/frontend/frameworks/html5/Html5FR";
import {Css3FR} from "@/data/frontend/frameworks/css3/Css3FR";
import {AngularFR} from "@/data/frontend/frameworks/angular/AngularFR";

export const FrontEndFR: IFrontEnd = {
    title: "Développement Front-End",
    span: "Expérience en Développement Front-End",
    subTitle: "",

    angular: AngularFR,
    css3: Css3FR,
    html5: Html5FR,
    nextjs: NextjsFR,
    react: ReactFR,
    typescript: TypeScriptFR,
    vue: VueFR,
    javascript: JavaScriptFR,

    stacks: [
        NextjsFR,
        ReactFR,
        AngularFR,
        VueFR,
        JavaScriptFR,
        TypeScriptFR,
        Html5FR,
        Css3FR
    ],

    services: {
        title: "Développement Front-End",
        descriptions: [
            "Le développement front-end constitue l'interface cruciale entre les utilisateurs et les services numériques, créant les éléments visuels et les composants interactifs qui définissent les expériences utilisateur. Cette couche essentielle transforme des systèmes backend complexes en interfaces intuitives et accessibles qui engagent les audiences et stimulent la croissance des entreprises. Les frameworks modernes comme Next.js, React, Angular et Vue.js, ainsi que les technologies web fondamentales comme HTML5 et CSS3, permettent de créer des applications performantes qui se chargent rapidement et répondent parfaitement sur tous les appareils. Les solutions front-end efficaces augmentent l'engagement des utilisateurs, améliorent les taux de conversion et renforcent la perception de la marque grâce à des expériences numériques cohérentes et professionnelles qui répondent à la fois aux objectifs commerciaux et aux besoins des utilisateurs."
        ],
        items: [
            {
                title: "Implémentation de Frameworks Modernes",
                description: "Applications web dynamiques et interactives utilisant des frameworks de pointe comme Next.js et React qui offrent des performances optimales, une réactivité et une expérience utilisateur améliorée."
            },
            {
                title: "Optimisation SEO",
                description: "Visibilité améliorée sur Google et autres moteurs de recherche grâce à une structure de code optimisée, des temps de chargement rapides et une conception adaptée aux mobiles, générant du trafic organique et réduisant les coûts d'acquisition."
            },
            {
                title: "Développement de Preuve de Concept (PoC)",
                description: "Validation rapide d'idées innovantes à travers des prototypes fonctionnels, réduisant les risques et permettant aux parties prenantes de visualiser les concepts avant un investissement à grande échelle."
            },
            {
                title: "Création de Produit Minimum Viable (MVP)",
                description: "Versions initiales complètes et évolutives qui attirent les premiers utilisateurs, génèrent des retours précieux et séduisent les investisseurs potentiels tout en établissant une présence sur le marché."
            },
            {
                title: "Design UI/UX",
                description: "Interfaces intuitives et élégantes qui stimulent l'engagement, réduisent les taux de rebond et augmentent les conversions grâce aux principes de conception centrée sur l'utilisateur et aux normes d'accessibilité."
            }
        ]
    }
}