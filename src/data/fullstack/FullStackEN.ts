import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetEN} from "@/data/fullstack/frameworks/dotnet/DotnetEN";
import {GoEN} from "@/data/fullstack/frameworks/go/GoEN";
import {JavaEN} from "@/data/fullstack/frameworks/java/JavaEN";
import {NodejsEN} from "@/data/fullstack/frameworks/nodejs/NodejsEN";
import {PhpEN} from "@/data/fullstack/frameworks/php/PhpEN";
import {PythonEN} from "@/data/fullstack/frameworks/python/PythonEN";

export const FullStackEN: IFullStack = {
    title: "Back-End and API Experience",
    span: "Back-End and API Development Experience",
    subTitle: "",

    dotnetcore: DotnetEN,
    go: GoEN,
    java: JavaEN,
    nodejs: NodejsEN,
    php: PhpEN,
    python: PythonEN,

    stacks: [],

    services: {
        title: "Back-End and API Development",
        descriptions: [
            "Build powerful, secure, and scalable web applications with our expert full-stack development services. Our developers excel in both front-end and back-end technologies, creating comprehensive solutions tailored to your specific business requirements. CHORN's technical expertise spans multiple technology stacks including Node.js, .NET Core C#, Java Spring Boot, Python, Go, and PHP, allowing us to handle projects of any complexity. Whether you're launching an initial Proof of Concept (PoC) or developing a market-ready Minimum Viable Product (MVP), our skilled team ensures seamless integration between user interfaces and server-side functionality for an exceptional user experience."
        ],
        items: [
            {
                title: "Seamless Front-End & Back-End Integration",
                description: "Develop cohesive web applications with perfectly synchronized client and server components that deliver speed, security, and scalability."
            },
            {
                title: "Comprehensive SEO & Performance Optimization",
                description: "Improve your website's search engine visibility and user experience through optimized code structure, faster loading times, and efficient resource management."
            },
            {
                title: "Robust Automation Testing",
                description: "Ensure application reliability and stability with comprehensive testing frameworks integrated throughout the development lifecycle."
            },
            {
                title: "Advanced Database Management",
                description: "Structure and manage your data effectively with optimized database solutions including MySQL, MongoDB, PostgreSQL, and other leading technologies."
            },
            {
                title: "Enterprise-Grade Cloud Services",
                description: "Deploy and scale your applications efficiently using AWS, Azure, Google Cloud, or other cloud platforms with optimized infrastructure configurations."
            }
        ]
    }
}

FullStackEN.stacks = [
    FullStackEN.nodejs,
    FullStackEN.go,
    FullStackEN.java,
    FullStackEN.python,
    FullStackEN.php,
    FullStackEN.dotnetcore
]