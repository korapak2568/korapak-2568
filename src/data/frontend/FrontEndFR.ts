import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueFR} from "@/data/frontend/frameworks/vue/VueFR";
import {TypeScriptFR} from "@/data/frontend/frameworks/typescript/TypeScriptFR";
import {ReactFR} from "@/data/frontend/frameworks/react/ReactFR";
import {NextjsFR} from "@/data/frontend/frameworks/nextjs/NextjsFR";
import {JavaScriptFR} from "@/data/frontend/frameworks/javascript/JavaScriptFR";
import {Html5FR} from "@/data/frontend/frameworks/html5/Html5FR";
import {Css3FR} from "@/data/frontend/frameworks/css3/Css3FR";
import {AngularFR} from "@/data/frontend/frameworks/angular/AngularFR";

export const FrontEndFR: IFrontEnd = {
    title: "Expérience Front-End",
    span: "Expérience en développement Front-End",
    subTitle: "",

    angular: AngularFR,
    css3: Css3FR,
    html5: Html5FR,
    nextjs: NextjsFR,
    react: ReactFR,
    typescript: TypeScriptFR,
    vue: VueFR,
    javascript: JavaScriptFR,

    stacks: [],

    services: {
        title: "Services de Développement Front-End",
        descriptions: [
            "Transformez votre vision web en réalité grâce à nos services experts de développement front-end. CHORN propose des sites web conviviaux, visuellement impressionnants et entièrement réactifs qui captent votre audience. Nous sommes spécialisés dans les frameworks modernes comme Next.js, React, Angular et Vue.js, ainsi que dans les technologies web fondamentales comme HTML5 et CSS3. Que vous ayez besoin d'une application à page unique (SPA) haute performance optimisée pour les moteurs de recherche ou d'une plateforme sophistiquée à plusieurs pages, nos développeurs fournissent des résultats de qualité dans les délais impartis. Collaborez avec CHORN pour créer des expériences numériques captivantes qui séduisent les visiteurs et stimulent la croissance de votre entreprise."
        ],
        items: [
            {
                title: "Implémentation de Frameworks Modernes",
                description: "Construisez des applications web dynamiques et interactives en utilisant des frameworks de pointe comme Next.js et React qui offrent des performances et une expérience utilisateur optimales."
            },
            {
                title: "Optimisation SEO",
                description: "Améliorez la visibilité de votre site web sur Google et autres moteurs de recherche grâce à une structure de code optimisée, des temps de chargement rapides et une conception adaptée aux appareils mobiles."
            },
            {
                title: "Développement de Preuve de Concept (PoC)",
                description: "Testez et validez rapidement vos idées innovantes avec des prototypes fonctionnels avant de vous engager dans un développement complet."
            },
            {
                title: "Création de Produit Minimum Viable (MVP)",
                description: "Lancez une version initiale évolutive et complète de votre produit pour attirer les premiers utilisateurs, recueillir des commentaires et séduire des investisseurs potentiels."
            },
            {
                title: "Excellence en Design UI/UX",
                description: "Améliorez la satisfaction des utilisateurs avec des interfaces intuitives et esthétiques qui augmentent l'engagement, réduisent les taux de rebond et augmentent les conversions."
            }
        ]
    }
}

FrontEndFR.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]