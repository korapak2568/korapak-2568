import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndVI} from "@/data/frontend/FrontEndVI";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueZH} from "@/data/frontend/frameworks/vue/VueZH";
import {TypeScriptZH} from "@/data/frontend/frameworks/typescript/TypeScriptZH";
import {ReactZH} from "@/data/frontend/frameworks/react/ReactZH";
import {NextjsZH} from "@/data/frontend/frameworks/nextjs/NextjsZH";
import {JavaScriptZH} from "@/data/frontend/frameworks/javascript/JavaScriptZH";
import {Html5ZH} from "@/data/frontend/frameworks/html5/Html5ZH";
import {Css3ZH} from "@/data/frontend/frameworks/css3/Css3ZH";
import {AngularZH} from "@/data/frontend/frameworks/angular/AngularZH";

export const FrontEndZH: IFrontEnd = {
    title: "前端经验",
    span: "前端开发经验",
    subTitle: "",

    angular: AngularZH,
    css3: Css3ZH,
    html5: Html5ZH,
    nextjs: NextjsZH,
    react: ReactZH,
    typescript: TypeScriptZH,
    vue: VueZH,
    javascript: JavaScriptZH,

    stacks: [],

    services: {
        title: "前端开发服务",
        descriptions: [
            "通过我们专业的前端开发服务将您的网络愿景转变为现实。CHORN提供用户友好、视觉震撼且完全响应式的网站，吸引您的受众。我们专注于现代框架，包括Next.js、React、Angular和Vue.js，以及HTML5和CSS3等核心网络技术。无论您需要针对搜索引擎优化的高性能单页应用(SPA)还是复杂的多页平台，我们的开发人员都能按时交付高质量的成果。与CHORN合作，创造引人入胜的数字体验，吸引访问者并推动业务增长。"
        ],
        items: [
            {
                title: "现代框架实施",
                description: "使用Next.js和React等尖端框架构建动态、交互式的网络应用，提供最佳性能和用户体验。"
            },
            {
                title: "搜索引擎优化",
                description: "通过优化的代码结构、快速加载时间和移动友好的设计，提高您的网站在Google和其他搜索引擎上的可见性。"
            },
            {
                title: "概念验证(PoC)开发",
                description: "在全面开发之前，通过功能原型快速测试和验证您的创新想法。"
            },
            {
                title: "最小可行产品(MVP)创建",
                description: "推出功能完整、可扩展的产品初始版本，吸引早期用户，收集反馈并获得潜在投资者的支持。"
            },
            {
                title: "UI/UX设计卓越",
                description: "通过直观、美观的界面提升用户满意度，增强参与度，降低跳出率，提高转化率。"
            }
        ]
    }
}

FrontEndZH.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]