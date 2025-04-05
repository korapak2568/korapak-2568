import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {GoZH} from "@/data/fullstack/frameworks/go/GoZH";
import {DotnetZH} from "@/data/fullstack/frameworks/dotnet/DotnetZH";
import {JavaZH} from "@/data/fullstack/frameworks/java/JavaZH";
import {NodejsZH} from "@/data/fullstack/frameworks/nodejs/NodejsZH";
import {PhpZH} from "@/data/fullstack/frameworks/php/PhpZH";
import {PythonZH} from "@/data/fullstack/frameworks/python/PythonZH";

export const FullStackZH: IFullStack = {
    title: "后端开发",
    span: "后端开发经验",
    subTitle: "",

    dotnetcore: DotnetZH,
    go: GoZH,
    java: JavaZH,
    nodejs: NodejsZH,
    php: PhpZH,
    python: PythonZH,

    stacks: [],

    services: {
        title: "后端开发",
        descriptions: [
            "后端开发是强大、安全和可扩展的网络应用程序的基础。这个幕后系统对于数据处理、数据库管理和安全性至关重要，使企业能够同时容纳众多用户，创造无缝体验，并保护关键信息。涵盖的技术包括Node.js、Java Spring Boot、Python、Go、PHP和.NET Core，能够满足各种复杂程度项目的需求，从概念验证（PoC）到市场就绪的最小可行产品（MVP）。用户界面与服务器端功能之间的平稳集成为用户提供卓越体验，并帮助企业高效实现目标。"
        ],
        items: [
            {
                title: "无缝前端与后端集成",
                description: "具有完美同步的客户端和服务器组件的网络应用程序，提供速度、安全性和可扩展性。"
            },
            {
                title: "全面的SEO和性能优化",
                description: "通过优化的代码结构、更快的加载时间和高效的资源管理，增强搜索引擎可见性和用户体验。"
            },
            {
                title: "强大的自动化测试",
                description: "具有贯穿整个开发生命周期的综合测试框架的可靠稳定的应用程序。"
            },
            {
                title: "高级数据库管理",
                description: "通过包括MySQL、MongoDB、PostgreSQL和其他领先技术在内的优化数据库解决方案，有效结构化和管理数据。"
            },
            {
                title: "企业级云服务",
                description: "使用AWS、Azure、Google Cloud或其他云平台，通过优化的基础设施配置高效部署和扩展应用程序。"
            }
        ]
    }
}

FullStackZH.stacks = [
    FullStackZH.nodejs,
    FullStackZH.go,
    FullStackZH.java,
    FullStackZH.python,
    FullStackZH.php,
    FullStackZH.dotnetcore
]