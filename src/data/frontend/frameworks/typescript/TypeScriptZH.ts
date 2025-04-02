import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const TypeScriptZH: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript 是 JavaScript 的强类型超集，它添加了静态类型，通过及早捕获错误并提高代码质量来增强开发体验。它编译为纯 JavaScript，使其与所有浏览器和框架兼容。",
    image: ImageUrl.frontend.typescript.path,
    alt: "代表 TypeScript 编程语言的标志",
    readMore: "探索更多 TypeScript 全栈开发解决方案",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript 开发",
            description: "TypeScript 通过引入静态类型和面向对象编程特性来增强开发，使开发人员能够自信地构建可扩展和可维护的应用程序。",
            list: []
        },
        {
            title: "增强的代码质量",
            description: "TypeScript 的类型检查功能确保在开发阶段捕获潜在错误，减少运行时错误并提高大型项目的可维护性。",
            list: [
                "静态类型",
                "高级错误检查",
                "提高代码质量",
                "增强的 IDE 支持",
                "可扩展的应用程序架构",
                "大型社区支持"
            ]
        },
        {
            title: "提高开发者生产力",
            description: "借助类型推断、接口和泛型等功能，TypeScript 使管理复杂代码库变得更加容易。它与现代工具无缝集成，提高生产力和协作。",
            list: []
        },
        {
            title: "与框架无缝集成",
            description: "TypeScript 与流行的 JavaScript 框架（如 React、Angular 和 Vue.js）无缝集成。开发人员可以在现有 JavaScript 项目中逐步采用 TypeScript，确保兼容性和可扩展性。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是 TypeScript？",
            answer: "TypeScript 是 JavaScript 的超集，它添加了静态类型和其他高级功能，以改进开发。"
        },
        {
            question: "为什么使用 TypeScript 而不是 JavaScript？",
            answer: "TypeScript 的静态类型和强大的工具可以及早捕获错误，提高代码质量，并增强开发人员的生产力。"
        },
        {
            question: "TypeScript 可以与 JavaScript 框架一起使用吗？",
            answer: "是的，TypeScript 与 JavaScript 框架（如 React、Angular 和 Vue.js）完全兼容。"
        }
    ]
}