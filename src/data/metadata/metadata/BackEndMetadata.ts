import {IBackEndMetadata} from "@/data/metadata/model/metadata/IBackEndMetadata";
import {OpenGraph} from "@/data/metadata/OpenGraph";

export const BackEndMetadata: IBackEndMetadata = {
    main: {
        title: "Back-End & API Development Services | CHORN",
        description: "CHORN offers expert Back-End & API Development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Back-End & API Development Services | CHORN",
            description: "CHORN provides Back-End & API Development services with expertise in Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build powerful and scalable applications for your business.",
            images: [
                {
                    url: OpenGraph.backend.main.url,
                    width: 1360,
                    height: 810,
                    alt: OpenGraph.backend.main.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Back-End & API Development Services | CHORN",
            description: "Leverage Back-End & API Development services by CHORN to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
            images: [
                OpenGraph.backend.main.url,
            ],
        },
        keywords: [
            // Core Full Stack Development Keywords
            "full stack development", "full stack services", "full stack developer", "custom full stack development",
            "front end and backend development", "full stack web applications", "enterprise full stack applications",

            // Senior/Principal Developer Keywords (Combined Frameworks)
            "Senior .NET Angular developer", "Principal .NET Angular developer", "Senior React Node.js developer",
            "Principal React Node.js developer", "Senior Java Spring Boot developer", "Senior full stack developer",
            "Principal full stack developer", "Senior Python Vue.js developer", "Senior PHP Laravel full stack developer",

            // Framework-Specific Full Stack Keywords
            ".NET Core Angular development", "React Java Spring developer", "React Node.js developer",
            ".NET Angular development", "Java Spring Boot full stack development", "Python Django full stack development",
            "PHP Laravel full stack development", "Node.js full stack developer", "custom software development",

            // Developer & Location-Specific Keywords
            "full stack developer Thailand", "full stack developer Bangkok", "full stack developer Chiangmai",
            "Senior full stack developer Thailand", "Principal full stack developer Thailand",
            "backend developer Thailand", "frontend developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software", "scalable web applications"
        ]
    },
    dotnetcore: {
        title: ".NET Core C# Full Stack Development | CHORN",
        description: "CHORN offers .NET Core C# full stack development services to build modern, scalable, and secure web applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/dotnetcore-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: ".NET Core C# Development | CHORN",
            description: "Build secure, scalable, and modern web applications with CHORN’s .NET Core C# full stack development services.",
            images: [
                {
                    url: OpenGraph.backend.dotnetcore.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.dotnetcore.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/dotnetcore-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: ".NET Core C# Full Stack Development | CHORN",
            description: "Expert .NET Core C# full stack development services from CHORN for modern and scalable web applications.",
            images: [
                OpenGraph.backend.dotnetcore.url,
            ],
        },
        keywords: [
            // Core .NET Core C# & service Keywords
            ".NET Core C# development", ".NET Core C# services", ".NET Core C# developer", "custom .NET Core C# development",
            "enterprise .NET Core C# applications", "ASP.NET Core C# development", ".NET Core C# web applications",
            "custom software development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "enterprise software solutions", "full stack development",
            "high-performance applications", "custom web applications", "API development",

            // Developer & Location-Specific Keywords
            ".NET Core C# developer Thailand", ".NET Core C# developer Bangkok", ".NET Core C# developer Chiangmai",
            "backend developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]

    },
    go: {
        title: "Go Full Stack Development | CHORN",
        description: "CHORN offers Go full stack development services for building efficient and scalable web applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/go-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Go Development | CHORN",
            description: "Build efficient and scalable web applications with CHORN’s Go full stack development services.",
            images: [
                {
                    url: OpenGraph.backend.go.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.go.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/go-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Go Full Stack Development | CHORN",
            description: "Expert Go full stack development services from CHORN for efficient and scalable web applications.",
            images: [
                OpenGraph.backend.go.url,
            ],
        },
        keywords: [
            // Core Go-lang & service Keywords
            "Go-lang development", "Go services", "Go developer", "custom Go-lang development", "Go web applications",
            "Go backend development", "Go microservices", "custom software development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "high-performance applications",
            "microservices development", "cloud-native development", "API development", "enterprise software",

            // Developer & Location-Specific Keywords
            "Go developer Thailand", "Go developer Bangkok", "Go developer Chiangmai", "backend developer Thailand",
            "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]

    },
    java: {
        title: "Java Spring Boot Full Stack Development | CHORN",
        description: "CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/java-spring-boot-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Java Spring Boot Development | CHORN",
            description: "Leverage CHORN’s Java Spring Boot full stack development services to build scalable, secure, and high-performance applications.",
            images: [
                {
                    url: OpenGraph.backend.java.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.java.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/java-spring-boot-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Java Spring Boot Full Stack Development | CHORN",
            description: "Expert Java Spring Boot full stack development services from CHORN to build secure and scalable applications.",
            images: [
                OpenGraph.backend.java.url,
            ],
        },
        keywords: [
            // Core Java Spring Boot & service Keywords
            "Spring Boot development", "Java Spring Boot services", "Spring Boot developer", "custom Java development",
            "Java Spring Boot applications", "enterprise Java development", "Spring Boot microservices",
            "custom software development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "enterprise software solutions",
            "high-performance applications", "Java web applications", "microservices development", "API development",

            // Developer & Location-Specific Keywords
            "Spring Boot developer Thailand", "Java developer Thailand", "Java developer Bangkok",
            "Java developer Chiangmai", "backend developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]

    },
    nodejs: {
        title: "Node.js Full Stack Development | CHORN",
        description: "CHORN offers Node.js full stack development services for building scalable and efficient applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/nodejs-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Node.js Development | CHORN",
            description: "Build scalable and high-performance applications with CHORN’s Node.js full stack development services.",
            images: [
                {
                    url: OpenGraph.backend.nodejs.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.nodejs.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/nodejs-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Node.js Full Stack Development | CHORN",
            description: "Expert Node.js full stack development services from CHORN for efficient and scalable applications.",
            images: [
                OpenGraph.backend.nodejs.url,
            ],
        },
        keywords: [
            // Core Node.js & service Keywords
            "Node.js development", "Node.js services", "Node.js developer", "custom Node.js development",
            "Node.js backend development", "Node.js full stack development", "Node.js microservices", "custom software development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "high-performance applications",
            "enterprise Node.js applications", "API development", "microservices development", "full stack developer",

            // Developer & Location-Specific Keywords
            "Node.js developer Thailand", "Node.js developer Bangkok", "Node.js developer Chiangmai",
            "backend developer Thailand", "full stack developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]

    },
    php: {
        title: "PHP Full Stack Development | CHORN",
        description: "CHORN offers PHP full stack development services for building dynamic and scalable web applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/php-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "PHP Development | CHORN",
            description: "Leverage CHORN’s PHP full stack development services to build scalable and dynamic web applications.",
            images: [
                {
                    url: OpenGraph.backend.php.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.php.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/php-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "PHP Full Stack Development | CHORN",
            description: "Expert PHP full stack development services from CHORN for dynamic and scalable web applications.",
            images: [
                OpenGraph.backend.php.url,
            ],
        },
        keywords: [
            // Core PHP & service Keywords
            "PHP development", "PHP services", "PHP developer", "custom PHP development", "PHP web applications",
            "PHP full stack development", "enterprise PHP applications", "custom software development",

            // PHP Frameworks
            "Symfony development", "Laravel development", "Yii Framework development", "Phalcon development",
            "custom Symfony development", "custom Laravel development", "custom Yii development", "custom Phalcon development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "high-performance web applications",
            "custom web applications", "API development", "enterprise software", "PHP frameworks",

            // Developer & Location-Specific Keywords
            "PHP developer Thailand", "PHP developer Bangkok", "PHP developer Chiangmai",
            "backend developer Thailand", "full stack developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]
    },
    python: {
        title: "Python Full Stack Development | CHORN",
        description: "CHORN offers Python full stack development services to build dynamic and scalable web applications.",
        alternates: {
            canonical: "https://chorn.in.th/services/full-stack-developer/python-developer/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Python Development | CHORN",
            description: "Build dynamic and scalable web applications with CHORN’s Python full stack development services.",
            images: [
                {
                    url: OpenGraph.backend.python.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.backend.python.alt,
                }
            ],
            url: "https://chorn.in.th/services/full-stack-developer/python-developer/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Python Full Stack Development | CHORN",
            description: "Expert Python full stack development services from CHORN for dynamic and scalable web applications.",
            images: [
                OpenGraph.backend.python.url,
            ],
        },
        keywords: [
            // Core Python & service Keywords
            "Python development", "Python services", "Python developer", "custom Python development",
            "Python web applications", "Python backend development", "Python full stack development",
            "custom software development",

            // Web & Application Development Keywords
            "scalable web applications", "backend development", "enterprise Python applications",
            "high-performance applications", "custom web applications", "API development", "machine learning development",

            // Developer & Location-Specific Keywords
            "Python developer Thailand", "Python developer Bangkok", "Python developer Chiangmai",
            "backend developer Thailand", "software engineer", "software developer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software"
        ]

    },
}