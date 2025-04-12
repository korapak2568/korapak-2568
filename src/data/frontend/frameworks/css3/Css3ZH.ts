import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const Css3ZH: IFrontEndStack = {
    title: "CSS3",
    description: "使用CSS3的高级样式技术增强您网站的外观。",
    image:  ImageUrl.frontend.frameworks.css3.thumbnail,
    alt: "代表CSS3技术的标志",
    readMore: "探索更多CSS3前端开发解决方案",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3网页设计",
            description: "CSS3是层叠样式表的最新演进，提供增强网页视觉呈现的高级功能。",
            list: []
        },
        {
            title: "CSS3的强大优势",
            description: "CSS3为网页开发带来现代化的样式能力。",
            list: [
                "高级选择器",
                "弹性盒子布局",
                "网格布局",
                "动画和过渡效果",
                "媒体查询",
                "自定义属性",
                "改进的排版"
            ]
        },
        {
            title: "挑战与解决方案",
            description: "CSS3通过强大的新功能满足了响应式、视觉吸引力网页设计的需求。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是CSS3？",
            answer: "CSS3是层叠样式表的最新版本，为网页样式提供了新功能。"
        },
        {
            question: "什么是媒体查询？",
            answer: "媒体查询通过基于设备特性应用样式，实现响应式设计。"
        },
        {
            question: "什么是Flexbox布局？",
            answer: "Flexbox布局提供了一种更高效的方式来设计布局、分配空间和对齐项目。"
        },
        {
            question: "有哪些流行的CSS框架？",
            answer: "流行的CSS框架有Bootstrap、Tailwind CSS、Bulma、Foundation和Materialize。"
        }
    ]
}