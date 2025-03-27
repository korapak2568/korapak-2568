import {IFullStack} from "@/data/fullstack/model/IFullStack";

export const FullStackZH: IFullStack = {
    title: "后端和 API 经验",
    span: "后端和 API 开发经验",
    subTitle: "",

    dotnetcore: {
        title: ".NET Core C#",
        description: ".NET Core C# 是一个由 Microsoft 开发的多功能、开源、跨平台框架。它允许开发人员在多个平台上构建现代化、高性能、可扩展的应用程序，包括 Windows、macOS 和 Linux。通过支持构建 Web 应用程序、API 和微服务，.NET Core C# 提供了一个强大的企业级解决方案环境。",
        image: "/chorn-images/technical-expertise/full-stack-developer/dotnetcore-developer.webp",
        alt: "代表 .NET Core API 开发的 Logo",
        readMore: "探索更多 .NET Core API 全栈开发解决方案",
        link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
        features: [
            {
                title: "C# .NET Core 开发",
                description: ".NET Core C# 是一个强大的开源框架，用于构建高性能的应用程序。它具有模块化设计，并支持多种编程语言，.NET Core C# 是开发可在任何平台上运行的可扩展 Web 应用程序、API 和微服务的理想选择。",
                list: []
            },
            {
                title: "ASP.NET Core C#",
                description: "ASP.NET Core C# 是一个跨平台、高性能的框架，用于构建现代的、基于云的和互联网连接的应用程序。它特别适用于构建 Web 应用程序、API 和微服务，注重性能、安全性和可扩展性。",
                list: [
                    "跨平台",
                    "高性能",
                    "内置依赖注入",
                    "模块化架构",
                    "统一的 MVC 和 Web API 框架",
                    "支持 Razor Pages",
                    "安全认证和授权"
                ]
            },
            {
                title: ".NET Core API",
                description: ".NET Core API 为开发人员提供构建 RESTful 技术和 API 的工具，这些技术和 API 可以被多种客户端使用，包括浏览器、移动设备和桌面应用程序。其轻量级、模块化的设计确保了高性能，并能与其他技术轻松集成。",
                list: []
            },
            {
                title: "C# .NET Core",
                description: "C# .NET Core 是在 .NET Core C# 中开发应用程序的主要语言。C# 以其简洁、灵活和现代化的功能而闻名，使开发人员能够轻松构建强大、可维护和可扩展的应用程序。",
                list: [
                    "现代语法",
                    "面向对象",
                    "丰富的标准库",
                    "支持异步编程",
                    "支持 LINQ",
                    "跨平台兼容性",
                    "与其他 .NET 语言的互操作性"
                ]
            }
        ],
        faqs: [
            {
                question: ".NET Core C# 是什么？",
                answer: ".NET Core C# 是一个开源的跨平台框架，用于构建可以在 Windows、macOS 和 Linux 上运行的现代应用程序。"
            },
            {
                question: "ASP.NET Core C# 用于什么？",
                answer: "ASP.NET Core C# 是一个框架，用于构建高性能的 Web 应用程序、API 和微服务，支持跨平台功能。"
            },
            {
                question: "为什么 C# .NET Core 是开发的好选择？",
                answer: "C# 是一种现代、灵活的编程语言，提供广泛的功能，使其成为在 .NET Core C# 中开发可扩展、可维护应用程序的理想选择。"
            }
        ],
    },
    go: {
        title: "GO",
        description: "Go，也称为Golang，是由谷歌设计的静态类型、编译型编程语言。它以简洁、高效和强大的并发支持而闻名，使其成为开发微服务的理想选择。",
        image: "/chorn-images/technical-expertise/full-stack-developer/go-developer.webp",
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
    },
    java: {
        title: "Java, Spring Boot",
        description: "Java是一种多功能的高级编程语言，以其可移植性、健壮性和性能而闻名。Spring Boot是一个简化生产就绪应用程序开发的框架。Kotlin是一种现代编程语言，可与Java互操作，提高生产力和安全性。",
        image: "/chorn-images/technical-expertise/full-stack-developer/java-spring-boot-developer.webp",
        alt: "代表Java与Spring Boot框架的标志",
        readMore: "探索更多Java Spring Boot全栈开发解决方案",
        link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
        features: [
            {
                title: "Java Spring Boot开发",
                description: "Java是一种多功能的高级编程语言，以其可移植性、健壮性和性能而闻名。Spring Boot是一个简化生产就绪应用程序开发的框架。Kotlin是一种现代编程语言，可与Java互操作，提高生产力和安全性。",
                list: []
            },
            {
                title: "强大的生态系统",
                description: "Java和Spring Boot的组合为构建可扩展、安全和高性能的应用程序提供了强大的生态系统。Spring Boot简化了设置和开发过程，实现快速开发和部署。",
                list: [
                    "强大且可扩展",
                    "成熟的生态系统",
                    "面向对象",
                    "Spring Boot框架",
                    "Kotlin集成",
                    "高性能",
                    "企业级应用"
                ]
            },
            {
                title: "现代语言特性",
                description: "Kotlin提供现代语言特性，如空安全、扩展函数和协程，使其成为新项目的首选。它与Java的无缝互操作性使开发人员能够利用现有的Java库和框架，同时享受Kotlin的增强功能。",
                list: []
            },
            {
                title: "企业级解决方案",
                description: "由于其可靠性和可扩展性，Java和Spring Boot在企业环境中被广泛使用。这些技术为各行业的关键任务应用程序提供动力，确保它们能够轻松处理大规模操作。",
                list: []
            }
        ],
        faqs: [
            {
                question: "什么是Spring Boot？",
                answer: "Spring Boot是一个用于构建独立的、生产级的基于Spring的应用程序的框架。"
            },
            {
                question: "为什么与Java一起使用Kotlin？",
                answer: "Kotlin与Java完全互操作，并提供现代语言特性，使代码更简洁、更安全。"
            },
            {
                question: "Java有哪些优势？",
                answer: "Java以其健壮性、可扩展性以及用于企业应用程序的广泛生态系统而闻名。"
            }
        ],
    },
    nodejs: {
        title: "NodeJS",
        description: "Node.js是一个强大的、开源的、跨平台的JavaScript运行环境，使开发人员能够高效地构建可扩展的网络应用程序。凭借事件驱动、非阻塞I/O模型，Node.js非常适合构建快速、轻量级的应用程序、实时通信系统和数据密集型任务，使其成为现代软件开发（包括AI集成）的流行选择。",
        image: "/chorn-images/technical-expertise/full-stack-developer/nodejs-developer.webp",
        alt: "Logo representing NodeJS technology",
        readMore: "探索更多NodeJS全栈开发解决方案",
        link: "/technical-expertise/full-stack-developer/nodejs-developer",
        features: [
            {
                title: "NodeJS开发",
                description: "Node.js提供了一个事件驱动、非阻塞架构，非常适合构建可扩展的实时应用程序。" +
                    "它擅长处理大量的并发连接，能够以最小的延迟开发数据密集型技术专业知识。" +
                    "Node.js还用于服务器端脚本编写、微服务和AI相关功能，或与外部AI技术专业知识集成。",
                list: [
                    "非阻塞I/O",
                    "事件驱动架构",
                    "高负载下的高性能",
                    "轻量级且快速",
                    "支持实时应用程序",
                    "AI和机器学习集成"
                ]
            },
            {
                title: "多功能框架",
                description: "Node.js支持各种为构建可扩展、强大的服务器端应用程序而量身定制的框架。" +
                    "Nest.js、Express和Koa.js是最突出的。凭借现代ES6+支持，这些框架使构建高效的API、Web应用程序和微服务变得容易。此外，Nest.js与TypeScript无缝集成，实现静态类型代码，提高代码质量和可维护性。",
                list: [
                    "异步I/O和事件循环",
                    "单线程，高并发",
                    "微服务架构支持",
                    "RESTful和GraphQL API",
                    "使用Nest.js实现模块化和可扩展性",
                    "与TypeScript轻松集成",
                    "内置WebSocket支持实时应用程序"
                ]
            },
            {
                title: "实时能力",
                description: "Node.js通过Socket.io等框架使构建实时应用程序成为可能，如实时聊天应用、协作工具和游戏服务器。它允许服务器和客户端之间即时数据交换，使其成为需要低延迟通信的应用程序的理想选择。",
                list: [
                    "WebSocket支持",
                    "实时数据同步",
                    "低延迟消息传递",
                    "协作应用程序",
                    "IoT支持"
                ]
            },
            {
                title: "丰富的生态系统和NPM",
                description: "Node.js拥有丰富的库和工具生态系统，可通过npm（最大的软件注册中心）访问。这种广泛的选择简化了开发过程，从处理数据库操作到实现复杂的业务逻辑和AI功能。开发人员可以利用预构建的模块来提高生产力并简化开发过程。",
                list: [
                    "npm中超过100万个软件包",
                    "为数据库、AI、安全等提供预构建集成",
                    "通过框架和库支持微服务",
                    "无服务器架构工具"
                ]
            },
            {
                title: "AI集成",
                description: "Node.js凭借其高性能、事件驱动的特性，是将AI集成到应用程序中的绝佳选择。" +
                    "使用TensorFlow.js等库，Node.js可以在浏览器或服务器上处理AI模型推理。此外，Node.js可以作为中间件与AI驱动的云API（如AWS、Azure AI或Google Cloud AI）通信，实现自然语言处理、图像识别和推荐系统等智能功能。",
                list: [
                    "与TensorFlow.js集成",
                    "服务器上的AI模型推理",
                    "与云AI API通信",
                    "实时AI驱动功能",
                    "可扩展的AI驱动微服务"
                ]
            }
        ],
        faqs: [
            {
                question: "什么是Node.js？",
                answer: "Node.js是一个JavaScript运行时，能够构建快速且可扩展的网络应用程序，使其非常适合I/O密集型任务和实时技术专业知识。"
            },
            {
                question: "Express.js用于什么？",
                answer: "Express.js是Node.js的轻量级框架，广泛用于以简单灵活的方式构建RESTful API和Web应用程序。"
            },
            {
                question: "Nest.js与Express.js有何不同？",
                answer: "Nest.js建立在Express.js之上，为构建可扩展、可维护和可测试的服务器端应用程序提供了一个有主见的架构，并强调TypeScript集成。"
            },
            {
                question: "Node.js可以用于AI吗？",
                answer: "是的，Node.js可以用于AI任务，利用TensorFlow.js等库或连接云AI技术专业知识进行自然语言处理、图像识别等。"
            }
        ]
    },
    php: {
        title: "PHP",
        description: "PHP是一种广泛用于Web开发的流行服务器端脚本语言。像Symfony、Laravel、Phalcon等框架，以及像Twig这样的模板引擎，再加上WordPress及其无头变体等平台，通过提供结构化、高效且可扩展的解决方案来构建复杂的Web应用程序，从而提升了PHP开发水平。",
        image: "/chorn-images/technical-expertise/full-stack-developer/php-developer.webp",
        alt: "代表PHP编程语言的标志",
        readMore: "探索更多PHP全栈开发解决方案",
        link: "/technical-expertise/full-stack-developer/php-developer",
        features: [
            {
                title: "PHP开发",
                description: "PHP是一种广泛用于Web开发的流行服务器端脚本语言。像Symfony、Laravel、Phalcon等框架，以及像Twig这样的模板引擎，再加上WordPress及其无头变体等平台，通过提供结构化、高效且可扩展的解决方案来构建复杂的Web应用程序，从而提升了PHP开发水平。",
                list: []
            },
            {
                title: "结构化开发",
                description: "Symfony和Laravel为PHP开发提供了结构化的方法，推广最佳实践和设计模式。Symfony提供了一套可重用的组件，而Laravel则专注于通过其优雅的语法和工具提高开发人员的生产力。Symfony中使用的模板引擎Twig提供了灵活、安全和快速的模板设计方式。Phalcon作为以C扩展形式提供的高性能框架，提供低级优化和卓越的速度，确保高效的资源管理。",
                list: [
                    "服务器端脚本",
                    "易于学习",
                    "庞大的生态系统",
                    "流行的框架",
                    "WordPress集成",
                    "适合Web开发",
                    "强大的社区"
                ]
            },
            {
                title: "快速开发",
                description: "Laravel以其表达性语法和强大的工具而闻名，能够快速开发和部署Web应用程序。像Eloquent ORM、Blade模板引擎和Laravel Artisan命令行工具等功能简化了开发任务。Phalcon凭借其强大的性能和低级架构增强了快速开发。WordPress提供快速设置和大量插件和主题，使开发人员能够快速部署功能丰富的网站。无头WordPress将前端和后端分离，使用像React或Vue这样的现代JavaScript框架，实现动态和响应式的用户体验。",
                list: []
            },
            {
                title: "社区和生态系统",
                description: "PHP拥有庞大的社区和丰富的库、插件和框架生态系统。Symfony和Laravel都受益于活跃的社区支持、广泛的文档和许多第三方包，使PHP开发高效愉快。Phalcon拥有不断增长的社区，并提供详细的文档和教程来帮助开发人员。WordPress拥有庞大的生态系统和大量用户基础，提供众多插件和主题，而无头WordPress则利用现代前端框架的灵活性，得到强大社区和资源的支持。",
                list: []
            }
        ],
        faqs: [
            {
                question: "PHP用来做什么？",
                answer: "PHP是为Web开发设计的服务器端脚本语言，广泛用于创建动态网页。"
            },
            {
                question: "什么是Symfony和Laravel？",
                answer: "Symfony和Laravel是流行的PHP框架，有助于开发强大且可扩展的Web应用程序。"
            },
            {
                question: "为什么使用WordPress？",
                answer: "WordPress是基于PHP构建的多功能内容管理系统，非常适合创建博客、网站和在线商店。"
            }
        ]
    },
    python: {
        title: "Python",
        description: "Python是一种高级解释型编程语言，以其简单性、可读性和多功能性而闻名。它被广泛应用于各个领域，从网络开发和数据分析到人工智能和科学计算。",
        image: "/chorn-images/technical-expertise/full-stack-developer/python-developer.webp",
        alt: "代表Python与Flask框架的标志",
        readMore: "探索更多Python、Flask、Django全栈开发解决方案",
        link: "/technical-expertise/full-stack-developer/python-developer",
        features: [
            {
                title: "Python开发",
                description: "Python是一种高级解释型编程语言，以其简单性、可读性和多功能性而闻名。它被广泛应用于各个领域，从网络开发和数据分析到人工智能和科学计算。",
                list: []
            },
            {
                title: "易学易用",
                description: "Python的简单语法和可读性使其成为初学者和有经验的开发者的绝佳选择。其丰富的标准库和社区贡献的模块为各种任务提供了现成的解决方案。",
                list: [
                    "易于学习",
                    "可读性强的语法",
                    "多功能",
                    "庞大的标准库",
                    "强大的社区",
                    "流行于AI/ML领域",
                    "跨平台"
                ]
            },
            {
                title: "多样化应用",
                description: "Python被用于多个领域，包括使用Django和Flask等框架进行网络开发，使用pandas和NumPy等库进行数据科学，以及使用TensorFlow和scikit-learn进行机器学习。这种多功能性使Python成为许多开发者的首选语言。",
                list: []
            },
            {
                title: "强大的社区支持",
                description: "Python拥有一个活跃的社区，不断为其发展做出贡献。随着众多教程、论坛和开源项目的可用，开发者可以轻松找到支持和资源来提高技能和解决挑战。",
                list: []
            }
        ],
        faqs: [
            {
                question: "Python用来做什么？",
                answer: "Python用于网络开发、数据分析、人工智能、科学计算等多个领域。"
            },
            {
                question: "为什么Python如此受欢迎？",
                answer: "Python的简单性、可读性和多功能性使其成为初学者和有经验的开发者的热门选择。"
            },
            {
                question: "Python适合网络开发吗？",
                answer: "是的，Django和Flask等框架使Python成为网络开发的强大工具。"
            }
        ],
        frameworks: [
            {
                name: "Django",
                overview: "Django是一个高级Web框架，鼓励快速开发和简洁、实用的设计。",
                strengths: [
                    "内置功能齐全：自带许多内置功能，如ORM、认证和管理面板。",
                    "可扩展性：适用于大型应用。",
                    "安全性：包含针对许多常见安全威胁的内置保护。"
                ],
                useCases: [
                    "大型Web应用",
                    "电子商务网站",
                    "内容管理系统"
                ]
            },
            {
                name: "Flask",
                overview: "Flask是一个微型Web框架，提供了启动Web应用所需的基本要素，无需大量样板代码。",
                strengths: [
                    "轻量级：极简主义且灵活。",
                    "可扩展：可以通过各种扩展轻松扩展。",
                    "易于学习：简单易懂，容易上手。"
                ],
                useCases: [
                    "中小型应用",
                    "API接口",
                    "原型设计"
                ]
            },
            {
                name: "FastAPI",
                overview: "FastAPI是一个现代、快速（高性能）的Web框架，用于基于Python 3.6+的标准类型提示建立API。",
                strengths: [
                    "速度：异步支持和高性能。",
                    "自动文档：生成OpenAPI和JSON Schema文档。",
                    "类型安全：使用Python类型提示进行验证和序列化。"
                ],
                useCases: [
                    "API接口",
                    "微服务",
                    "实时应用"
                ]
            },
            {
                name: "Pyramid",
                overview: "Pyramid是一个通用Web框架，旨在使编写Web应用变得容易。",
                strengths: [
                    "灵活性：可用于小型和大型应用。",
                    "定制化：高度可配置和模块化。",
                    "安全性：提供多种安全功能。"
                ],
                useCases: [
                    "从微服务到大型Web应用的多样化应用"
                ]
            },
            {
                name: "Tornado",
                overview: "Tornado是一个可扩展的、非阻塞的Web服务器和Web应用框架。",
                strengths: [
                    "性能：设计用于处理长期网络连接。",
                    "实时：适用于实时Web应用。",
                    "可扩展性：可处理数千个并发连接。"
                ],
                useCases: [
                    "实时应用",
                    "WebSockets",
                    "长轮询"
                ]
            }
        ]
    },

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