import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GoEN: IFullStackStack = {
    title: "GO",
    description: "Go, also known as Golang, is a statically typed, compiled programming language designed by Google. It is known for its simplicity, efficiency, and strong concurrency support, making it an ideal choice for developing microservices.",
    image: ImageUrl.backend.frameworks.go.thumbnail,
    alt: "Logo representing Go programming language",
    readMore: "Explore more Go full-stack development solutions",
    link: "/technical-expertise/full-stack-developer/go-developer",
    features: [
        {
            title: "Go Development",
            description: "Go, also known as Golang, is a statically typed, compiled programming language designed by Google. It is known for its simplicity, efficiency, and strong concurrency support, making it an ideal choice for developing microservices.",
            list: []
        },
        {
            title: "Efficient Concurrency",
            description: "Go's goroutines and channels provide robust support for concurrent programming, allowing developers to build highly efficient and scalable applications. This makes Go a preferred language for developing microservices that require handling multiple tasks simultaneously.",
            list: [
                "Concurrent programming",
                "Fast compilation",
                "Simplicity",
                "Strong performance",
                "Statically typed",
                "Garbage collection",
                "Great for microservices"
            ]
        },
        {
            title: "Fast Compilation",
            description: "Go compiles quickly to machine code, resulting in fast execution times. This efficiency, combined with its garbage collection and static typing, ensures that Go applications perform well, even under heavy loads.",
            list: []
        },
        {
            title: "Interoperability",
            description: "Go's simplicity and clarity make it easy to integrate with other programming languages. This interoperability allows developers to leverage Go's strengths in performance-critical parts of an application while using other languages for different component.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Go?",
            answer: "Go is a statically typed, compiled programming language designed for simplicity and performance."
        },
        {
            question: "Why use Go?",
            answer: "Go offers fast performance, simplicity, and powerful concurrency features, making it ideal for web servers and microservices."
        },
        {
            question: "Is Go good for web development?",
            answer: "Yes, Go is well-suited for building fast and efficient web servers and APIs."
        }
    ],
}