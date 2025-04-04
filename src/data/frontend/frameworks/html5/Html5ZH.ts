import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Html5ZH: IFrontEndStack = {
    title: "HTML5",
    description: "掌握网页开发的最新标准，创建丰富、交互式内容。",
    image: ImageUrl.frontendThumbnails.html5.path,
    alt: "代表HTML5技术的标志",
    readMore: "探索更多HTML5前端开发解决方案",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "HTML5网页设计",
            description: "HTML5是超文本标记语言的最新版本，引入了新元素和API，为网页体验提供更丰富的内容。",
            list: []
        },
        {
            title: "HTML5的优势",
            description: "HTML5通过其现代功能和能力增强了网页开发。",
            list: [
                "新的语义元素",
                "音频和视频支持",
                "Canvas元素",
                "改进的表单控件",
                "离线功能",
                "地理位置API",
                "增强的可访问性"
            ]
        },
        {
            title: "挑战与解决方案",
            description: "HTML5通过新元素和API解决了对更具交互性和媒体丰富的网页体验的需求。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是HTML5？",
            answer: "HTML5是超文本标记语言的最新版本，引入了新功能和元素。"
        },
        {
            question: "什么是新的语义元素？",
            answer: "新的语义元素包括<article>、<section>、<header>、<footer>等，用于更好的内容结构。"
        },
        {
            question: "什么是Canvas元素？",
            answer: "Canvas元素提供了一个通过JavaScript绘制图形的空间。"
        }
    ]
}