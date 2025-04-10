import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaZH: IFullStackStack = {
    title: "Java开发",
    description: "Java是一种多功能的高级编程语言，以其可移植性、健壮性和高性能而著称。Spring Boot是一个简化生产级应用开发的框架。",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java和Spring Boot框架开发",
    readMore: "了解更多Java Spring Boot全栈开发解决方案",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Java开发",
            description: "Java是一种多功能的高级编程语言，以其可移植性、健壮性和高性能而著称。Spring Boot是一个简化生产级应用开发的框架。",
            list: []
        },
        {
            title: "强大的生态系统",
            description: "Java与Spring Boot的结合提供了一个强大的生态系统，用于构建可扩展、安全且高性能的应用程序。Spring Boot简化配置过程，加快开发和部署。",
            list: [
                "强大且可扩展",
                "成熟的生态系统",
                "面向对象",
                "Spring Boot框架",
                "高性能",
                "企业级应用"
            ]
        },
        {
            title: "现代语言特性",
            description: "Java持续发展，提供现代化功能、库和工具，提升开发效率、安全性和生产力。",
            list: []
        },
        {
            title: "企业级解决方案",
            description: "Java和Spring Boot因其可靠性和可扩展性在企业环境中广泛使用，适用于处理各行业的关键应用。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是Spring Boot？",
            answer: "Spring Boot是一个用于构建独立、生产级Spring应用程序的框架。"
        },
        {
            question: "Java有哪些优势？",
            answer: "Java以其健壮性、可扩展性以及适用于企业级应用的庞大生态系统而著称。"
        }
    ]
}