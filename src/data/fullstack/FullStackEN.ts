import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {DotnetEN} from "@/data/fullstack/frameworks/dotnet/DotnetEN";
import {GoEN} from "@/data/fullstack/frameworks/go/GoEN";
import {JavaEN} from "@/data/fullstack/frameworks/java/JavaEN";
import {NodejsEN} from "@/data/fullstack/frameworks/nodejs/NodejsEN";
import {PhpEN} from "@/data/fullstack/frameworks/php/PhpEN";
import {PythonEN} from "@/data/fullstack/frameworks/python/PythonEN";

export const FullStackEN: IFullStack = {
    title: "Back-End Development",
    span: "Back-End Development Experience",
    subTitle: "",

    dotnetcore: DotnetEN,
    go: GoEN,
    java: JavaEN,
    nodejs: NodejsEN,
    php: PhpEN,
    python: PythonEN,

    stacks: [
        NodejsEN,
        GoEN,
        JavaEN,
        PythonEN,
        PhpEN,
        DotnetEN,
    ],

    services: {
        title: "Back-End Development",
        descriptions: [
            "Back-end development is the essential foundation for powerful, secure, and scalable web applications. This behind-the-scenes system is necessary for data processing, database management, and security, enabling businesses to accommodate many users simultaneously, create seamless experiences, and protect critical information. Technologies covered include Node.js, Java Spring Boot, Python, Go, PHP, and .NET Core, capable of meeting the needs of projects at all complexity levels, from Proof of Concept (PoC) to market-ready Minimum Viable Product (MVP). The smooth integration between user interfaces and server-side functionality provides users with superior experiences and helps businesses achieve their goals efficiently."
        ],
        items: [
            {
                title: "Seamless Front-End & Back-End Integration",
                description: "Cohesive web applications with perfectly synchronized client and server components delivering speed, security, and scalability."
            },
            {
                title: "Comprehensive SEO & Performance Optimization",
                description: "Enhanced search engine visibility and user experience through optimized code structure, faster loading times, and efficient resource management."
            },
            {
                title: "Robust Automation Testing",
                description: "Reliable and stable applications with comprehensive testing frameworks integrated throughout the development lifecycle."
            },
            {
                title: "Advanced Database Management",
                description: "Effectively structured and managed data with optimized database solutions including MySQL, MongoDB, PostgreSQL, and other leading technologies."
            },
            {
                title: "Enterprise-Grade Cloud Services",
                description: "Efficiently deployed and scaled applications using AWS, Azure, Google Cloud, or other cloud platforms with optimized infrastructure configurations."
            }
        ]
    }
}