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
        title: "Front-End Development",
        descriptions: [
            "Front-end development is the crucial interface between users and digital services, creating the visual elements and interactive components that define user experiences. This essential layer transforms complex backend systems into intuitive, accessible interfaces that engage audiences and drive business growth. Modern frameworks including Next.js, React, Angular, and Vue.js, alongside core web technologies like HTML5 and CSS3, enable high-performance applications that load quickly and respond seamlessly across all devices. Effective front-end solutions increase user engagement, improve conversion rates, and strengthen brand perception through consistent, professional digital experiences that meet both business objectives and user needs."
        ],
        items: [
            {
                title: "Modern Framework Implementation",
                description: "Dynamic, interactive web applications using cutting-edge frameworks like Next.js and React that provide optimal performance, responsiveness, and enhanced user experience."
            },
            {
                title: "SEO Optimization",
                description: "Improved website visibility on Google and other search engines through optimized code structure, fast loading times, and mobile-friendly design, driving organic traffic and reducing acquisition costs."
            },
            {
                title: "Proof of Concept (PoC) Development",
                description: "Rapid validation of innovative ideas through functional prototypes, reducing risks and allowing stakeholders to visualize concepts before full-scale investment."
            },
            {
                title: "Minimum Viable Product (MVP) Creation",
                description: "Feature-complete, scalable state versions that attract early users, generate valuable feedback, and appeal to potential investors while establishing market presence."
            },
            {
                title: "UI/UX Design",
                description: "Intuitive, beautiful interfaces that boost engagement, reduce bounce rates, and increase conversions through user-centered design principles and accessibility standards."
            }
        ]
    }
}