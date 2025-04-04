import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const ReactZH: IFrontEndStack = {
    title: "React",
    description: "通过React强大的基于组件的架构，轻松构建动态、高性能的用户界面。",
    image: ImageUrl.frontendThumbnails.react.path,
    alt: "代表React.js库的标志",
    readMore: "探索更多ReactJS前端开发解决方案",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React开发",
            description: "React.js是一个用于构建用户界面的流行JavaScript库。它使开发人员能够创建可重用的UI组件，提高开发效率和应用程序性能。",
            list: []
        },
        {
            title: "React.js的优势",
            description: "React.js提供了一套强大的功能，使其成为开发人员的首选。",
            list: [
                "基于组件的架构",
                "虚拟DOM提升性能",
                "单向数据流",
                "JSX语法",
                "丰富的生态系统和社区",
                "React Hooks",
                "广泛的开发工具"
            ]
        },
        {
            title: "挑战与解决方案",
            description: "React.js通过虚拟DOM、组件可重用性和活跃的社区解决了动态UI开发中的挑战。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是React.js？",
            answer: "React.js是一个由Facebook维护的用于构建用户界面的JavaScript库。"
        },
        {
            question: "什么是React Hooks？",
            answer: "React Hooks是允许您在函数组件中使用状态和生命周期功能的函数。"
        },
        {
            question: "虚拟DOM如何工作？",
            answer: "虚拟DOM只更新已更改的元素，提高应用程序性能。"
        }
    ]
}