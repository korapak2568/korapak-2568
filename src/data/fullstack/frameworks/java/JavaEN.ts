import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaEN: IFullStackStack = {
    title: "Java Development",
    description:
        "Java is a robust and versatile language ideal for modern enterprise and cloud-native applications. With frameworks like Spring Boot, technologies such as gRPC, and legacy-friendly tools like RMI, Java remains a cornerstone for scalable full-stack solutions.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java, Spring Boot, gRPC, and RMI development",
    readMore: "Explore full-stack development with modern Java and Spring Boot",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Modern Java Development",
            description:
                "Java continues to evolve with features like records, pattern matching, and virtual threads, boosting developer productivity and performance for full-stack development.",
            list: [
                "Java 17+ LTS support",
                "Improved performance with virtual threads",
                "Strong type safety and maintainability",
                "Wide adoption in enterprise and microservices"
            ]
        },
        {
            title: "Spring Boot & Cloud-Native Applications",
            description:
                "Spring Boot streamlines application development by providing preconfigured component and integrations with cloud platforms. It enables rapid development of REST APIs, microservices, and full-stack solutions.",
            list: [
                "Auto-configuration and dependency management",
                "Microservice-ready architecture",
                "RESTful APIs and WebSocket support",
                "Seamless cloud deployment with Spring Cloud"
            ]
        },
        {
            title: "Inter-services Communication with gRPC and RMI",
            description:
                "For high-performance, language-agnostic services, Java applications leverage gRPC. To maintain legacy systems, RMI (Remote Method Invocation) remains a proven solution for Java-to-Java communication.",
            list: [
                "Efficient binary communication with gRPC",
                "Backward compatibility with RMI",
                "Secure and controlled remote access",
                "Hybrid integration for modernizing legacy apps"
            ]
        },
        {
            title: "Enterprise-Grade Systems & Java EE Modernization",
            description:
                "While Java EE provided a foundation for enterprise apps, modern Java frameworks like Jakarta EE and Spring modernize these systems with better modularity, speed, and cloud support—without losing legacy compatibility.",
            list: [
                "Jakarta EE as the evolution of Java EE",
                "Modernized deployment with Docker and Kubernetes",
                "Secure enterprise-grade architectures",
                "Support for existing systems with modern APIs"
            ]
        }
    ],
    faqs: [
        {
            question: "What is Spring Boot?",
            answer:
                "Spring Boot is a framework for creating stand-alone, production-grade Spring applications with minimal configuration. It accelerates backend development with built-in features like auto-configuration, dependency injection, and embedded servers."
        },
        {
            question: "How does Java support modern and legacy systems?",
            answer:
                "Java supports modern development through tools like Spring Boot and gRPC while maintaining compatibility with legacy technologies like RMI and J2EE. This ensures smooth transitions and integration in enterprise environments."
        },
        {
            question: "What is gRPC and how is it used in Java?",
            answer:
                "gRPC is a high-performance, open-source universal RPC framework. In Java, it’s used for inter-services communication in microservice architectures, offering efficient binary serialization via Protocol Buffers."
        }
    ]
};