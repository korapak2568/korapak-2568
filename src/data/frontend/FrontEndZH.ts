import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {VueZH} from "@/data/frontend/frameworks/vue/VueZH";
import {TypeScriptZH} from "@/data/frontend/frameworks/typescript/TypeScriptZH";
import {ReactZH} from "@/data/frontend/frameworks/react/ReactZH";
import {NextjsZH} from "@/data/frontend/frameworks/nextjs/NextjsZH";
import {JavaScriptZH} from "@/data/frontend/frameworks/javascript/JavaScriptZH";
import {Html5ZH} from "@/data/frontend/frameworks/html5/Html5ZH";
import {Css3ZH} from "@/data/frontend/frameworks/css3/Css3ZH";
import {AngularZH} from "@/data/frontend/frameworks/angular/AngularZH";

export const FrontEndZH: IFrontEnd = {
    title: "前端开发",
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

    stacks: [
        NextjsZH,
        ReactZH,
        AngularZH,
        VueZH,
        JavaScriptZH,
        TypeScriptZH,
        Html5ZH,
        Css3ZH
    ],

    services: {
        title: "前端开发",
        descriptions: [
            "前端开发是用户与数字服务之间的关键接口，创建定义用户体验的视觉元素和交互组件。这一必不可少的层将复杂的后端系统转化为直观、易于访问的界面，吸引受众并推动业务增长。现代框架包括Next.js、React、Angular和Vue.js，以及HTML5和CSS3等核心Web技术，使高性能应用程序能够快速加载并在所有设备上无缝响应。有效的前端解决方案通过满足业务目标和用户需求的一致、专业的数字体验，提高用户参与度，改善转化率，并加强品牌认知。"
        ],
        items: [
            {
                title: "现代框架实施",
                description: "使用Next.js和React等前沿框架的动态、交互式Web应用程序，提供最佳性能、响应性和增强的用户体验。"
            },
            {
                title: "SEO优化",
                description: "通过优化的代码结构、快速加载时间和移动友好设计，提高在Google和其他搜索引擎上的网站可见性，增加自然流量并降低获客成本。"
            },
            {
                title: "概念验证(PoC)开发",
                description: "通过功能原型快速验证创新想法，降低风险，使利益相关者能够在全面投资前可视化概念。"
            },
            {
                title: "最小可行产品(MVP)创建",
                description: "功能完备、可扩展的初始版本，吸引早期用户，产生有价值的反馈，吸引潜在投资者，同时建立市场存在感。"
            },
            {
                title: "UI/UX设计",
                description: "通过以用户为中心的设计原则和可访问性标准，提供直观、美观的界面，提高参与度，降低跳出率，增加转化率。"
            }
        ]
    }
}