import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {GoZH} from "@/data/fullstack/frameworks/go/GoZH";
import {DotnetZH} from "@/data/fullstack/frameworks/dotnet/DotnetZH";
import {JavaZH} from "@/data/fullstack/frameworks/java/JavaZH";
import {NodejsZH} from "@/data/fullstack/frameworks/nodejs/NodejsZH";
import {PhpZH} from "@/data/fullstack/frameworks/php/PhpZH";
import {PythonZH} from "@/data/fullstack/frameworks/python/PythonZH";

export const FullStackZH: IFullStack = {
    title: "后端和 API 经验",
    span: "后端和 API 开发经验",
    subTitle: "",

    dotnetcore: DotnetZH,
    go: GoZH,
    java: JavaZH,
    nodejs: NodejsZH,
    php: PhpZH,
    python: PythonZH,

    stacks: [],

    services: {
        title: "后端和API开发",
        descriptions: [
            "通过我们专业的全栈开发服务，构建强大、安全且可扩展的网络应用程序。我们的开发人员在前端和后端技术方面都表现出色，创建针对您特定业务需求量身定制的综合解决方案。CHORN的技术专长涵盖多种技术栈，包括Node.js、.NET Core C#、Java Spring Boot、Python、Go和PHP，使我们能够处理任何复杂度的项目。无论您是启动初步概念验证(PoC)还是开发市场就绪的最小可行产品(MVP)，我们熟练的团队确保用户界面和服务器端功能之间的无缝集成，以提供卓越的用户体验。"
        ],
        items: [
            {
                title: "无缝前端和后端集成",
                description: "开发具有完美同步的客户端和服务器组件的完整网络应用程序，提供速度、安全性和可扩展性。"
            },
            {
                title: "全面的SEO和性能优化",
                description: "通过优化的代码结构、更快的加载时间和高效的资源管理，提高您网站的搜索引擎可见性和用户体验。"
            },
            {
                title: "强大的自动化测试",
                description: "通过整个开发生命周期中集成的综合测试框架，确保应用程序的可靠性和稳定性。"
            },
            {
                title: "高级数据库管理",
                description: "使用MySQL、MongoDB、PostgreSQL和其他领先技术的优化数据库解决方案，有效地构建和管理您的数据。"
            },
            {
                title: "企业级云服务",
                description: "使用AWS、Azure、Google Cloud或其他云平台高效部署和扩展您的应用程序，并优化基础设施配置。"
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