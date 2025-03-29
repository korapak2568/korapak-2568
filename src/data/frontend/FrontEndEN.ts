import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {AngularEN} from "./frameworks/angular/AngularEN";
import {Css3EN} from "@/data/frontend/frameworks/css3/Css3EN";
import {Html5EN} from "@/data/frontend/frameworks/html5/Html5EN";
import {NextjsEN} from "@/data/frontend/frameworks/nextjs/NextjsEN";
import {ReactEN} from "@/data/frontend/frameworks/react/ReactEN";
import {TypeScriptEN} from "@/data/frontend/frameworks/typescript/TypeScriptEN";
import {VueEN} from "@/data/frontend/frameworks/vue/VueEN";
import {JavaScriptEN} from "@/data/frontend/frameworks/javascript/JavaScriptEN";

export const FrontEndEN: IFrontEnd = {
    title: "Front-End Development",
    span: "Front-End Development Experience",
    subTitle: "",

    angular: AngularEN,
    css3: Css3EN,
    html5: Html5EN,
    nextjs: NextjsEN,
    react: ReactEN,
    typescript: TypeScriptEN,
    vue: VueEN,
    javascript: JavaScriptEN,

    stacks: [
        NextjsEN,
        ReactEN,
        AngularEN,
        VueEN,
        JavaScriptEN,
        TypeScriptEN,
        Html5EN,
        Css3EN
    ],

    services: {
        title: "Front-End Development Service",
        descriptions: [
            "Transform your web vision into reality with our expert front-end development services. CHORN delivers user-friendly, visually stunning, and fully responsive websites that engage your audience. We specialize in modern frameworks including Next.js, React, Angular, and Vue.js, alongside core web technologies like HTML5 and CSS3. Whether you need a high-performance single-page application (SPA) optimized for search engines or a sophisticated multi-page platform, our developers deliver quality results on time. Partner with CHORN to create compelling digital experiences that captivate visitors and drive business growth."
        ],
        items: [
            {
                title: "Modern Framework Implementation",
                description: "Build dynamic, interactive web applications using cutting-edge frameworks like Next.js and React that provide optimal performance and user experience."
            },
            {
                title: "SEO Optimization",
                description: "Improve your website's visibility on Google and other search engines through optimized code structure, fast loading times, and mobile-friendly design."
            },
            {
                title: "Proof of Concept (PoC) Development",
                description: "Test and validate your innovative ideas quickly with functional prototypes before committing to full-scale development."
            },
            {
                title: "Minimum Viable Product (MVP) Creation",
                description: "Launch a feature-complete, scalable initial version of your product to attract early users, gather feedback, and secure potential investors."
            },
            {
                title: "UI/UX Design Excellence",
                description: "Enhance user satisfaction with intuitive, beautiful interfaces that boost engagement, reduce bounce rates, and increase conversions."
            }
        ]
    }
}