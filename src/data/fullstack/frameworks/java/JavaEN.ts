import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const JavaEN: IFullStackStack = {
    title: "Java, Spring Boot",
    description: "Java is a versatile, high-level programming language renowned for its portability, robustness, and performance. Spring Boot is a framework that simplifies the development of production-ready applications. Kotlin, a modern programming language, interoperates with Java, enhancing productivity and safety.",
    image: ImageUrl.fullstackThumbnails.java.path,
    alt: "Logo representing Java with Spring Boot framework",
    readMore: "Explore more Java Spring Boot full-stack development solutions",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Java Spring Boot Development",
            description: "Java is a versatile, high-level programming language renowned for its portability, robustness, and performance. Spring Boot is a framework that simplifies the development of production-ready applications. Kotlin, a modern programming language, interoperates with Java, enhancing productivity and safety.",
            list: []
        },
        {
            title: "Robust Ecosystem",
            description: "The combination of Java and Spring Boot provides a robust ecosystem for building scalable, secure, and high-performance applications. Spring Boot simplifies the setup and development process, enabling rapid development and deployment.",
            list: [
                "Robust and scalable",
                "Mature ecosystem",
                "Object-oriented",
                "Spring Boot framework",
                "Kotlin integration",
                "High performance",
                "Enterprise-grade applications"
            ]
        },
        {
            title: "Modern Languages Features",
            description: "Kotlin offers modern language features such as null safety, extension functions, and coroutines, making it a preferred choice for new projects. Its seamless interoperability with Java allows developers to leverage existing Java libraries and frameworks while enjoying Kotlin's enhancements.",
            list: []
        },
        {
            title: "Enterprise-Grade Solutions",
            description: "Java and Spring Boot are widely used in enterprise environments due to their reliability and scalability. These technologies power mission-critical applications across various industries, ensuring that they can handle large-scale operations with ease.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Spring Boot?",
            answer: "Spring Boot is a framework for building stand-alone, production-grade Spring-based applications."
        },
        {
            question: "Why use Kotlin with Java?",
            answer: "Kotlin is fully interoperable with Java and offers modern language features for more concise and safer code."
        },
        {
            question: "What are the advantages of Java?",
            answer: "Java is known for its robustness, scalability, and extensive ecosystem for enterprise applications."
        }
    ],
}