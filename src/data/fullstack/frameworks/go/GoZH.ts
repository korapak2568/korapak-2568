import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";

export const GoZH: IFullStackStack = {
    title: "GO",
    description: "Go，也称为Golang，是由谷歌设计的静态类型、编译型编程语言。它以简洁、高效和强大的并发支持而闻名，使其成为开发微服务的理想选择。",
    image: "https://cdn.chorn.in.th/public/technical-expertise/full-stack-developer/go-developer.webp",
    alt: "代表Go编程语言的标志",
    readMore: "探索更多Go全栈开发解决方案",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go开发",
            description: "Go，也称为Golang，是由谷歌设计的静态类型、编译型编程语言。它以简洁、高效和强大的并发支持而闻名，使其成为开发微服务的理想选择。",
            list: []
        },
        {
            title: "高效并发",
            description: "Go的goroutines和channels为并发编程提供了强大的支持，使开发人员能够构建高效且可扩展的应用程序。这使得Go成为开发需要同时处理多个任务的微服务的首选语言。",
            list: [
                "并发编程",
                "快速编译",
                "简洁性",
                "强大性能",
                "静态类型",
                "垃圾回收",
                "非常适合微服务"
            ]
        },
        {
            title: "快速编译",
            description: "Go快速编译为机器代码，从而实现快速执行时间。这种效率，结合其垃圾回收和静态类型，确保Go应用程序即使在高负载下也能表现出色。",
            list: []
        },
        {
            title: "互操作性",
            description: "Go的简洁性和清晰性使其易于与其他编程语言集成。这种互操作性使开发人员能够在应用程序的性能关键部分利用Go的优势，同时为不同的组件使用其他语言。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是Go？",
            answer: "Go是一种为简洁和性能而设计的静态类型、编译型编程语言。"
        },
        {
            question: "为什么使用Go？",
            answer: "Go提供快速性能、简洁性和强大的并发功能，使其非常适合Web服务器和微服务。"
        },
        {
            question: "Go适合Web开发吗？",
            answer: "是的，Go非常适合构建快速且高效的Web服务器和API。"
        }
    ]
}