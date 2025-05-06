import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaZH: IFullStackStack = {
    title: "Java开发",
    description: "Java是一种强大而灵活的编程语言，适用于现代企业和云应用。通过Spring Boot、gRPC以及对RMI的支持，Java仍是构建可扩展全栈解决方案的核心。",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java、Spring Boot、gRPC、RMI开发",
    readMore: "探索更多关于Java和Spring Boot的全栈开发方案",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "现代Java开发",
            description: "Java引入record、模式匹配、虚拟线程等新特性，提升开发效率与系统性能。",
            list: [
                "支持Java 17+ LTS",
                "虚拟线程提升并发处理能力",
                "强类型安全、易于维护",
                "广泛用于微服务和企业开发"
            ]
        },
        {
            title: "Spring Boot与云原生应用",
            description: "Spring Boot通过自动配置和云集成，支持快速开发REST API、微服务及全栈解决方案。",
            list: [
                "自动配置与依赖管理",
                "微服务架构支持",
                "REST API与WebSocket支持",
                "Spring Cloud集成"
            ]
        },
        {
            title: "gRPC与RMI的服务通信",
            description: "gRPC用于高效的服务间通信，RMI则帮助Java系统与传统组件兼容。",
            list: [
                "gRPC高性能二进制通信",
                "RMI兼容传统Java系统",
                "安全的远程访问机制",
                "支持新旧系统集成"
            ]
        },
        {
            title: "企业级系统与Java EE现代化",
            description: "虽然Java EE为企业应用提供了基础，但现代Java框架如Jakarta EE和Spring通过更好的模块化、速度和云支持，在不失去对旧系统兼容性的情况下实现了系统现代化。",
            list: [
                "Jakarta EE是Java EE的演进",
                "使用Docker和Kubernetes实现现代化部署",
                "安全的企业级架构",
                "使用现代API支持现有系统"
            ]
        }
    ],
    faqs: [
        {
            question: "什么是Spring Boot？",
            answer: "Spring Boot是一个快速构建独立、可部署Spring应用的框架，拥有自动配置和内嵌服务器支持。"
        },
        {
            question: "Java如何支持现代系统和旧系统？",
            answer: "Java通过Spring Boot和gRPC支持现代开发，同时借助RMI和J2EE与旧系统保持兼容。"
        },
        {
            question: "什么是gRPC？在Java中如何使用？",
            answer: "gRPC是一种高性能RPC框架，Java中结合Protocol Buffers用于微服务间通信。"
        }
    ]
}
