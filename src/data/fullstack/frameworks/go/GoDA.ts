import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const GoDA: IFullStackStack = {
    title: ".NET Core",
    description: ".NET Core is a versatile, open-source, cross-platform framework developed by Microsoft. It allows developers to build modern, high-performance, and scalable applications across various platforms, including Windows, macOS, and Linux. With support for building web applications, APIs, and microservices, .NET Core provides a robust environment for enterprise-level solutions.",
    image: ImageUrl.fullstackThumbnails.go.path,
    alt: "Logo representing .NET Core API development",
    readMore: "Explore more .NET Core API full-stack development solutions",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: ".NET Core Development",
            description: ".NET Core is a powerful, open-source framework for building high-performance applications. With a modular design and support for various programming languages, .NET Core is ideal for developing scalable web applications, APIs, and microservices that can run on any platform.",
            list: []
        },
        {
            title: "ASP.NET Core",
            description: "ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications. It is particularly suited for building web applications, APIs, and microservices with a focus on performance, security, and scalability.",
            list: [
                "Cross-platform",
                "High performance",
                "Built-in dependency injection",
                "Modular architecture",
                "Unified MVC and Web API framework",
                "Supports Razor Pages",
                "Secure authentication and authorization"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API provides developers with the tools to build RESTful technical-expertise and APIs that can be consumed by a wide range of clients, including browsers, mobile devices, and desktop applications. Its lightweight, modular design ensures high performance and easy integration with other technical-expertise.",
            list: []
        },
        {
            title: ".NET Core",
            description: ".NET Core is the primary language used for developing applications in .NET Core. Known for its simplicity, versatility, and modern features, C# allows developers to build robust, maintainable, and scalable applications with ease.",
            list: [
                "Modern syntax",
                "Object-oriented",
                "Rich standard library",
                "Supports asynchronous programming",
                "LINQ support",
                "Cross-platform compatibility",
                "Interoperability with other .NET languages"
            ]
        }
    ],
    faqs: [
        {
            question: "What is .NET Core?",
            answer: ".NET Core is an open-source, cross-platform framework for building modern applications that run on Windows, macOS, and Linux."
        },
        {
            question: "What is ASP.NET Core used for?",
            answer: "ASP.NET Core is a framework for building web applications, APIs, and microservices with high performance and cross-platform capabilities."
        },
        {
            question: "What makes .NET Core a good choice for development?",
            answer: "C# is a modern, versatile programming language that offers a wide range of features, making it ideal for developing scalable, maintainable applications in .NET Core."
        }
    ],
}