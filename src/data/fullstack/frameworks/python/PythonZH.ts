import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const PythonZH: IFullStackStack = {
    title: "Python",
    description: "Python是一种高级解释型编程语言，以其简单性、可读性和多功能性而闻名。它被广泛应用于各个领域，从网络开发和数据分析到人工智能和科学计算。",
    image: ImageUrl.fullstackThumbnails.python.path,
    alt: "代表Python与Flask框架的标志",
    readMore: "探索更多Python、Flask、Django全栈开发解决方案",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python开发",
            description: "Python是一种高级解释型编程语言，以其简单性、可读性和多功能性而闻名。它被广泛应用于各个领域，从网络开发和数据分析到人工智能和科学计算。",
            list: []
        },
        {
            title: "易学易用",
            description: "Python的简单语法和可读性使其成为初学者和有经验的开发者的绝佳选择。其丰富的标准库和社区贡献的模块为各种任务提供了现成的解决方案。",
            list: [
                "易于学习",
                "可读性强的语法",
                "多功能",
                "庞大的标准库",
                "强大的社区",
                "流行于AI/ML领域",
                "跨平台"
            ]
        },
        {
            title: "多样化应用",
            description: "Python被用于多个领域，包括使用Django和Flask等框架进行网络开发，使用pandas和NumPy等库进行数据科学，以及使用TensorFlow和scikit-learn进行机器学习。这种多功能性使Python成为许多开发者的首选语言。",
            list: []
        },
        {
            title: "强大的社区支持",
            description: "Python拥有一个活跃的社区，不断为其发展做出贡献。随着众多教程、论坛和开源项目的可用，开发者可以轻松找到支持和资源来提高技能和解决挑战。",
            list: []
        }
    ],
    faqs: [
        {
            question: "Python用来做什么？",
            answer: "Python用于网络开发、数据分析、人工智能、科学计算等多个领域。"
        },
        {
            question: "为什么Python如此受欢迎？",
            answer: "Python的简单性、可读性和多功能性使其成为初学者和有经验的开发者的热门选择。"
        },
        {
            question: "Python适合网络开发吗？",
            answer: "是的，Django和Flask等框架使Python成为网络开发的强大工具。"
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django是一个高级Web框架，鼓励快速开发和简洁、实用的设计。",
            strengths: [
                "内置功能齐全：自带许多内置功能，如ORM、认证和管理面板。",
                "可扩展性：适用于大型应用。",
                "安全性：包含针对许多常见安全威胁的内置保护。"
            ],
            useCases: [
                "大型Web应用",
                "电子商务网站",
                "内容管理系统"
            ]
        },
        {
            name: "Flask",
            overview: "Flask是一个微型Web框架，提供了启动Web应用所需的基本要素，无需大量样板代码。",
            strengths: [
                "轻量级：极简主义且灵活。",
                "可扩展：可以通过各种扩展轻松扩展。",
                "易于学习：简单易懂，容易上手。"
            ],
            useCases: [
                "中小型应用",
                "API接口",
                "原型设计"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI是一个现代、快速（高性能）的Web框架，用于基于Python 3.6+的标准类型提示建立API。",
            strengths: [
                "速度：异步支持和高性能。",
                "自动文档：生成OpenAPI和JSON Schema文档。",
                "类型安全：使用Python类型提示进行验证和序列化。"
            ],
            useCases: [
                "API接口",
                "微服务",
                "实时应用"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid是一个通用Web框架，旨在使编写Web应用变得容易。",
            strengths: [
                "灵活性：可用于小型和大型应用。",
                "定制化：高度可配置和模块化。",
                "安全性：提供多种安全功能。"
            ],
            useCases: [
                "从微服务到大型Web应用的多样化应用"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado是一个可扩展的、非阻塞的Web服务器和Web应用框架。",
            strengths: [
                "性能：设计用于处理长期网络连接。",
                "实时：适用于实时Web应用。",
                "可扩展性：可处理数千个并发连接。"
            ],
            useCases: [
                "实时应用",
                "WebSockets",
                "长轮询"
            ]
        }
    ]
}