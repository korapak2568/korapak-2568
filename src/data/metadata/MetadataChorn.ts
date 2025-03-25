import {IMetadataChorn} from "@/data/metadata/model/metadata/IMetadataChorn";
import {MetadataFrontEnd} from "@/data/metadata/metadata/MetadataFrontEnd";
import {MetadataBackEnd} from "@/data/metadata/metadata/MetadataBackEnd";
import {MetadataDevOps} from "@/data/metadata/metadata/MetadataDevOps";
import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";

export const MetadataChorn: IMetadataChorn = {

    home: {
        title: "CHORN | System Analysis & Full-Stack Software Development Engineering",
        description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud computing, and system modernization to drive innovation and efficiency.",
        icons: {
            icon: '/favicon.ico',
        },
        alternates: {
            canonical: 'https://chorn.in.th/en',
            languages: {
                "en": "https://chorn.in.th/en",
                "th": "https://chorn.in.th/th",
                "fr": "https://chorn.in.th/fr",
                "ja": "https://chorn.in.th/ja",
                "vi": "https://chorn.in.th/vi",
                "zh": "https://chorn.in.th/zh",
                "de": "https://chorn.in.th/de",
                "nl": "https://chorn.in.th/nl",
                "da": "https://chorn.in.th/da",
                "fi": "https://chorn.in.th/fi",
                "ko": "https://chorn.in.th/ko",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "CHORN | System Analysis & Full-Stack Software Development Engineering",
            description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud computing, and system modernization to drive innovation and efficiency.",
            images: [
                {
                    url: OpenGraph.home.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.home.alt,
                },
            ],
            url: "https://chorn.in.th/en",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "CHORN | System Analysis & Full-Stack Software Development Engineering",
            description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud computing, and system modernization to drive innovation and efficiency.",
            images: [
                OpenGraph.home.url,
            ],
        },
        keywords: [
            // Brand Keywords
            "CHORN", "CHORN custom software development", "CHORN software outsourcing", "What is chorn",
            "CHORN software development thailand", "CHORN software developer chiangmai", "CHORN software developer bangkok",

            // Core service Keywords
            "custom software development", "custom software development companies", "software outsourcing",
            "software outsourcing technical-expertise", "software development outsourcing", "software development outsourcing companies",
            "top software outsourcing companies", "web development outsourcing companies", "IT development companies",
            "outsourcing development company", "outsourcing thailand", "outsourcing company in thailand",
            "software development chiangmai", "software outsourcing chiangmai", "software outsourcing bangkok",

            // Developer & Technical Roles
            "software engineer", "software developer", "frontend developer", "backend developer", "full stack developer",
            "web developer", "mobile developer", "react-developer developer", "angular-developer developer", "java developer",
            "node.js developer", ".net core developer", "php-developer developer", "API developer", "blockchain developer",
            "web3 developer", "microservices developer", "digital innovation", "enterprise software", "scalable websites",

            // Developer Locations
            "software developer thailand", "software developer chiangmai", "software developer bangkok",
            "software engineer thailand", "frontend developer thailand", "backend developer thailand",
            "full stack developer thailand", "web developer jobs in thailand", "mobile developer thailand",
            "full stack developer chiangmai", "software developer remote jobs", "outsourcing programmers thailand",

            // Senior Leadership & Engineering Roles
            "head of engineering", "head of engineering department thailand", "director of engineering",
            "director of engineering thailand", "head of software development", "head of software development thailand",
            "head of software engineering", "head of software engineering thailand", "IT project manager",
            "software development manager", "head of technology", "system analyst",

            // Technologies & Frameworks
            "nextjs-developer", "react-developer.js", "spring boot", "front end framework", "front end architecture",
            "full stack web developer", "front end back end development", "microservices",

            // Outsourcing-Related Keywords
            "outsourcing development", "outsourcing company in thailand", "outsourcing programming",
            "outsourcing programming tasks", "outsourcing program jobs", "outsourcing program task",
            "outsourcing program online"
        ],
    },
    llmAi: {
        title: "LLM/AI Integration | CHORN",
        description: "Discover CHORN's advanced LLM/AI agent development services, offering intelligent solutions tailored to enhance automation, legacy system integration, and predictive analytics.",
        alternates: {
            canonical: "https://www.chorn.in.th/en/technical-expertise/ai-solutions/",
            languages: {
                "en": "https://chorn.in.th/en/technical-expertise/ai-solutions/",
                "th": "https://chorn.in.th/th/technical-expertise/ai-solutions/",
                "fr": "https://chorn.in.th/fr/technical-expertise/ai-solutions/",
                "ja": "https://chorn.in.th/ja/technical-expertise/ai-solutions/",
                "vi": "https://chorn.in.th/vi/technical-expertise/ai-solutions/",
                "zh": "https://chorn.in.th/zh/technical-expertise/ai-solutions/",
                "de": "https://chorn.in.th/de/technical-expertise/ai-solutions/",
                "nl": "https://chorn.in.th/nl/technical-expertise/ai-solutions/",
                "da": "https://chorn.in.th/da/technical-expertise/ai-solutions/",
                "fi": "https://chorn.in.th/fi/technical-expertise/ai-solutions/",
                "ko": "https://chorn.in.th/ko/technical-expertise/ai-solutions/",
            }
        },
        authors: [
            {
                "name": "CHORN"
            }
        ],
        openGraph: {
            title: "LLM/AI Integration - CHORN",
            description: "Explore CHORN's cutting-edge LLM/AI agent development, custom LLM solutions, and AI workflow automation to optimize business operations.",
            images: [
                {
                    url: OpenGraph.llmAi.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.llmAi.alt
                }
            ],
            url: "https://www.chorn.in.th/en/technical-expertise/ai-solutions/",
            type: "website"
        },
        twitter: {
            "card": "summary_large_image",
            title: "LLM/AI Integration - CHORN",
            description: "Unlock the power of AI with CHORN's LLM/AI agent development, predictive analytics, and intelligent workflow automation services.",
            images: [
                OpenGraph.llmAi.url
            ]
        }
    },

    aiCompanions: {
        title: "AI Chat Companion | CHORN AI Integration",
        description: "Welcome to the AI Chat Companion, a demo of AI-powered integration. Explore AI companions with unique personalities, designed for seamless interaction via the LINE app, supporting multiple languages.",
        alternates: {
            canonical: "https://chorn.in.th/en/ai-companions",
            languages: {
                "en": "https://chorn.in.th/en/ai-companions",
                "th": "https://chorn.in.th/th/ai-companions",
                "fr": "https://chorn.in.th/fr/ai-companions",
                "ja": "https://chorn.in.th/ja/ai-companions",
                "vi": "https://chorn.in.th/vi/ai-companions",
                "zh": "https://chorn.in.th/zh/ai-companions",
                "de": "https://chorn.in.th/de/ai-companions",
                "nl": "https://chorn.in.th/nl/ai-companions",
                "da": "https://chorn.in.th/da/ai-companions",
                "fi": "https://chorn.in.th/fi/ai-companions",
                "ko": "https://chorn.in.th/ko/ai-companions",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "AI Chat Companion - AI-Powered Integration",
            description: "Discover AI companions with unique personalities, interacting seamlessly via the LINE app in Thai, English, Chinese, Japanese, Korean, French, and Vietnamese.",
            images: [
                {
                    url: OpenGraph.aiCompanions.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.aiCompanions.alt,
                },
            ],
            url: "https://chorn.in.th/en/ai-companions",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "AI Chat Companion - Explore AI-Powered Interactions",
            description: "Engage with AI companions that communicate in multiple languages via the LINE app. Discover seamless AI integration today!",
            images: [
                OpenGraph.aiCompanions.url,
            ],
        },
    },
    aiFah: {
        title: "AI Chat Companion | CHORN AI Integration",
        description: "Fah is your AI chat friend on the LINE Application. She's a 20-year-old Thai-inspired companion who's cheerful and approachable. Add her with one click or scan her QR Code to discover Thailand's top destinations, dishes, and cultural gems. Chat in multiple languages while she guides you through Thai culture with youthful energy.",
        alternates: {
            canonical: "https://chorn.in.th/en/ai-companions/fah",
            languages: {
                "en": "https://chorn.in.th/en/ai-companions/fah",
                "th": "https://chorn.in.th/th/ai-companions/fah",
                "fr": "https://chorn.in.th/fr/ai-companions/fah",
                "ja": "https://chorn.in.th/ja/ai-companions/fah",
                "vi": "https://chorn.in.th/vi/ai-companions/fah",
                "zh": "https://chorn.in.th/zh/ai-companions/fah",
                "de": "https://chorn.in.th/de/ai-companions/fah",
                "nl": "https://chorn.in.th/nl/ai-companions/fah",
                "da": "https://chorn.in.th/da/ai-companions/fah",
                "fi": "https://chorn.in.th/fi/ai-companions/fah",
                "ko": "https://chorn.in.th/ko/ai-companions/fah",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Meet Fah - Your Thai AI Chat Friend on LINE",
            description: "Meet Fah, your 20-year-old Thai AI friend on LINE who recommends Thailand's best destinations, dishes, and cultural experiences in multiple languages. Add her today!",
            images: [
                {
                    url: OpenGraph.aiFah.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.aiFah.alt,
                },
            ],
            url: "https://chorn.in.th/en/ai-companions/fah",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Fah - Your Thai Culture Guide on LINE",
            description: "Add Fah, your cheerful 20-year-old Thai AI companion on LINE who helps you explore Thailand's destinations, cuisine, and culture in multiple languages.",
            images: [
                OpenGraph.aiFah.url,
            ],
        },
    },
    aiAom: {
        title: "AI Chat Companion | CHORN AI Integration",
        description: "Aom can be accessed through the LINE Application. You can press the Add Friend button or scan the LINE QR Code to add her as a friend. At 21, she's a friendly, vibrant AI companion passionate about healthy living and wellness who provides nutritional tips, exercise routines, and mindfulness practices. With her ability to chat in multiple languages, Aom helps you maintain a balanced lifestyle while keeping things fun.",
        alternates: {
            canonical: "https://chorn.in.th/en/ai-companions/aom",
            languages: {
                "en": "https://chorn.in.th/en/ai-companions/aom",
                "th": "https://chorn.in.th/th/ai-companions/aom",
                "fr": "https://chorn.in.th/fr/ai-companions/aom",
                "ja": "https://chorn.in.th/ja/ai-companions/aom",
                "vi": "https://chorn.in.th/vi/ai-companions/aom",
                "zh": "https://chorn.in.th/zh/ai-companions/aom",
                "de": "https://chorn.in.th/de/ai-companions/aom",
                "nl": "https://chorn.in.th/nl/ai-companions/aom",
                "da": "https://chorn.in.th/da/ai-companions/aom",
                "fi": "https://chorn.in.th/fi/ai-companions/aom",
                "ko": "https://chorn.in.th/ko/ai-companions/aom",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Meet Aom - Your Wellness Guide on LINE",
            description: "Connect with Aom, a 21-year-old wellness-focused AI companion on LINE who provides nutritional advice, exercise routines, and mindfulness practices in multiple languages to help you live your healthiest life.",
            images: [
                {
                    url: OpenGraph.aiAom.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.aiAom.alt,
                },
            ],
            url: "https://chorn.in.th/en/ai-companions/aom",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Aom - Your Healthy Living Coach on LINE",
            description: "Add Aom, your vibrant 21-year-old wellness AI companion on LINE who motivates you with nutritional tips, exercise routines, and mindfulness practices in multiple languages.",
            images: [
                OpenGraph.aiAom.url,
            ],
        },
    },
    aiPloy: {
        title: "AI Chat Companion | CHORN AI Integration",
        description: "Ploy is an AI chat friend using LINE Application. Add her with the Add Friend button or QR code scan. As a creative 17-year-old Thai high school student, she's passionate about drawing, music, photography, and learning. Speaking seven languages, Ploy helps with various subjects and inspires creative expression. She's your friendly guide whether exploring art or doing homework.",
        alternates: {
            canonical: "https://chorn.in.th/en/ai-companions/ploy",
            languages: {
                "en": "https://chorn.in.th/en/ai-companions/ploy",
                "th": "https://chorn.in.th/th/ai-companions/ploy",
                "fr": "https://chorn.in.th/fr/ai-companions/ploy",
                "ja": "https://chorn.in.th/ja/ai-companions/ploy",
                "vi": "https://chorn.in.th/vi/ai-companions/ploy",
                "zh": "https://chorn.in.th/zh/ai-companions/ploy",
                "de": "https://chorn.in.th/de/ai-companions/ploy",
                "nl": "https://chorn.in.th/nl/ai-companions/ploy",
                "da": "https://chorn.in.th/da/ai-companions/ploy",
                "fi": "https://chorn.in.th/fi/ai-companions/ploy",
                "ko": "https://chorn.in.th/ko/ai-companions/ploy",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Meet Ploy - Your Creative Teen AI Friend on LINE",
            description: "Connect with Ploy, a creative 17-year-old Thai student AI who speaks seven languages and shares your passion for art, music, photography, and learning. Add her on LINE today!",
            images: [
                {
                    url: OpenGraph.aiPloy.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.aiPloy.alt,
                },
            ],
            url: "https://chorn.in.th/en/ai-companions/ploy",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Ploy - Your Creative Teen Guide on LINE",
            description: "Add Ploy, your cheerful 17-year-old Thai AI companion on LINE who helps with homework and inspires creativity through art, music, and photography in seven languages.",
            images: [
                OpenGraph.aiPloy.url,
            ],
        },
    },

    gallery: {
        title: "Global Business Trip | CHORN Gallery",
        description: "Explore highlights from CHORN's international business trips, including experiences in Los Angeles, California, and premium travel with Singapore Airlines.",
        alternates: {
            canonical: "https://chorn.in.th/en/gallery/",
            languages: {
                "en": "https://chorn.in.th/en/gallery/",
                "th": "https://chorn.in.th/th/gallery/",
                "fr": "https://chorn.in.th/fr/gallery/",
                "ja": "https://chorn.in.th/ja/gallery/",
                "vi": "https://chorn.in.th/vi/gallery/",
                "zh": "https://chorn.in.th/zh/gallery/",
                "de": "https://chorn.in.th/de/gallery/",
                "nl": "https://chorn.in.th/nl/gallery/",
                "da": "https://chorn.in.th/da/gallery/",
                "fi": "https://chorn.in.th/fi/gallery/",
                "ko": "https://chorn.in.th/ko/gallery/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Global Business Trip - CHORN Gallery",
            description: "Discover CHORN's global expertise through international business trips, premium travel experiences, and advanced training capabilities.",
            images: [
                {
                    url: OpenGraph.gallery.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.gallery.alt,
                },
            ],
            url: "https://chorn.in.th/en/gallery/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Global Business Trip - CHORN Gallery",
            description: "Experience CHORN’s international business journey, premium travel, and global training expertise.",
            images: [
                OpenGraph.gallery.url,
            ],
        },
    },
    about: {
        title: "About CHORN | System Analysis & Full-Stack Software Development Engineering",
        description: "Discover CHORN's expertise in system analysis, full-stack development, and modern software solutions that drive business success.",
        alternates: {
            canonical: "https://chorn.in.th/en/about-chorn/",
            languages: {
                "en": "https://chorn.in.th/en/about-chorn/",
                "th": "https://chorn.in.th/th/about-chorn/",
                "fr": "https://chorn.in.th/fr/about-chorn/",
                "ja": "https://chorn.in.th/ja/about-chorn/",
                "vi": "https://chorn.in.th/vi/about-chorn/",
                "zh": "https://chorn.in.th/zh/about-chorn/",
                "de": "https://chorn.in.th/de/about-chorn/",
                "nl": "https://chorn.in.th/nl/about-chorn/",
                "da": "https://chorn.in.th/da/about-chorn/",
                "fi": "https://chorn.in.th/fi/about-chorn/",
                "ko": "https://chorn.in.th/ko/about-chorn/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "CHORN - Experts in System Analysis & Full-Stack Software Development Engineering",
            description: "Explore CHORN's commitment to delivering cutting-edge system modernization, full-stack development, and technical support for businesses.",
            images: [
                {
                    url: OpenGraph.about.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.about.alt,
                },
            ],
            url: "https://chorn.in.th/en/about-chorn/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "CHORN - Leading System Analysis & Full-Stack Software Development Engineering",
            description: "Unlock business potential with CHORN's advanced system analysis, full-stack development, and modern software solutions.",
            images: [
                OpenGraph.about.url,
            ],
        },
    },
    contact: {
        title: "Contact | CHORN - Get in Touch for Custom Software Solutions",
        description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
        alternates: {
            canonical: "https://chorn.in.th/en/contact-chorn/",
            languages: {
                "en": "https://chorn.in.th/en/contact-chorn/",
                "th": "https://chorn.in.th/th/contact-chorn/",
                "fr": "https://chorn.in.th/fr/contact-chorn/",
                "ja": "https://chorn.in.th/ja/contact-chorn/",
                "vi": "https://chorn.in.th/vi/contact-chorn/",
                "zh": "https://chorn.in.th/zh/contact-chorn/",
                "de": "https://chorn.in.th/de/contact-chorn/",
                "nl": "https://chorn.in.th/nl/contact-chorn/",
                "da": "https://chorn.in.th/da/contact-chorn/",
                "fi": "https://chorn.in.th/fi/contact-chorn/",
                "ko": "https://chorn.in.th/ko/contact-chorn/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Contact CHORN - Custom Software Development Experts",
            description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
            images: [
                {
                    url: OpenGraph.contact.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.contact.alt,
                },
            ],
            url: "https://chorn.in.th/en/contact-chorn/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact CHORN - Let's Build Something Great Together",
            description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact us for inquiries or support.",
            images: [
                OpenGraph.contact.url,
            ],
        },
    },

    webDevelopment: {
        title: "Web Development Services | CHORN | Custom Software & Technology Solutions",
        description: "Explore CHORN's web development technical-expertise, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more.",
        alternates: {
            canonical: "https://chorn.in.th/en/technical-expertise/web-development/",
            languages: {
                "en": "https://chorn.in.th/en/technical-expertise/web-development/",
                "th": "https://chorn.in.th/th/technical-expertise/web-development/",
                "fr": "https://chorn.in.th/fr/technical-expertise/web-development/",
                "ja": "https://chorn.in.th/ja/technical-expertise/web-development/",
                "vi": "https://chorn.in.th/vi/technical-expertise/web-development/",
                "zh": "https://chorn.in.th/zh/technical-expertise/web-development/",
                "de": "https://chorn.in.th/de/technical-expertise/web-development/",
                "nl": "https://chorn.in.th/nl/technical-expertise/web-development/",
                "da": "https://chorn.in.th/da/technical-expertise/web-development/",
                "fi": "https://chorn.in.th/fi/technical-expertise/web-development/",
                "ko": "https://chorn.in.th/ko/technical-expertise/web-development/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Top Web Development Services | CHORN",
            description: "CHORN provides cutting-edge web development technical-expertise with expertise in popular frameworks like Next.js, React, Angular, and more. CHORN caters to diverse business needs including Digital Marketing, E-Commerce, Blockchain, and more.",
            images: [
                {
                    url: OpenGraph.webDevelopment.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.webDevelopment.alt
                },
            ],
            url: "https://chorn.in.th/en/technical-expertise/web-development/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Web Development Services | CHORN",
            description: "Discover CHORN’s expert web development technical-expertise. From Next.js to Angular and beyond, CHORN offers solutions for all business needs including Digital Marketing, Blockchain, E-Commerce, and more.",
            images: [
                OpenGraph.webDevelopment.url,
            ],
        },
        keywords: [
            // Core Web Development Keywords
            "web development", "web development technical-expertise", "web developer", "custom web development",
            "responsive web development", "dynamic websites", "enterprise web development",
            "scalable web applications", "custom web applications", "custom software development",

            // Senior/Principal Developer Keywords (Combined Frameworks)
            "Senior full stack web developer", "Principal web developer", "Senior .NET Core Angular web developer",
            "Senior React Node.js web developer", "Principal React Java developer",
            "Senior Angular Spring Boot developer", "Principal PHP Laravel web developer", "Senior web developer",

            // Framework-Specific Web Development Keywords
            ".NET Core web development", "React web development", "Angular web development",
            "Vue.js web development", "Node.js web development", "Java Spring Boot web development",
            "PHP Laravel web development", "custom React web development", "enterprise Angular web development",

            // Developer & Location-Specific Keywords
            "web developer Thailand", "web developer Bangkok", "web developer Chiangmai",
            "Senior web developer Thailand", "Principal web developer Thailand",
            "backend developer Thailand", "frontend developer Thailand", "software engineer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "enterprise software", "scalable web applications"
        ]
    },
    cloudSolutions: {
        title: "Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean",
        description: "CHORN delivers expert cloud solution architecture and system analysis technical-expertise. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency.",
        alternates: {
            canonical: "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
            languages: {
                "en": "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
                "th": "https://chorn.in.th/th/technical-expertise/cloud-infrastructure-systems-architecture/",
                "fr": "https://chorn.in.th/fr/technical-expertise/cloud-infrastructure-systems-architecture/",
                "ja": "https://chorn.in.th/ja/technical-expertise/cloud-infrastructure-systems-architecture/",
                "vi": "https://chorn.in.th/vi/technical-expertise/cloud-infrastructure-systems-architecture/",
                "zh": "https://chorn.in.th/zh/technical-expertise/cloud-infrastructure-systems-architecture/",
                "de": "https://chorn.in.th/de/technical-expertise/cloud-infrastructure-systems-architecture/",
                "nl": "https://chorn.in.th/nl/technical-expertise/cloud-infrastructure-systems-architecture/",
                "da": "https://chorn.in.th/da/technical-expertise/cloud-infrastructure-systems-architecture/",
                "fi": "https://chorn.in.th/fi/technical-expertise/cloud-infrastructure-systems-architecture/",
                "ko": "https://chorn.in.th/ko/technical-expertise/cloud-infrastructure-systems-architecture/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Cloud Solution Architecture & Systems Analysis | CHORN",
            description: "Explore CHORN’s cloud solution architecture and systems analysis technical-expertise. We design resilient, scalable, and optimized cloud solutions across AWS, Azure, GCP, and DigitalOcean.",
            images: [
                {
                    url: OpenGraph.cloudSolutions.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.cloudSolutions.alt,
                },
            ],
            url: "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Cloud Solution Architecture & Systems Analysis | CHORN",
            description: "Optimize your cloud infrastructure with CHORN’s cloud solution architecture and systems analysis technical-expertise, covering AWS, Azure, GCP, and DigitalOcean.",
            images: [
                OpenGraph.cloudSolutions.url,
            ],
        },
        keywords: [
            // Core Cloud Architecture Keywords
            "cloud solution architecture", "system analysis", "AWS architecture", "Azure cloud solutions",
            "GCP architecture", "DigitalOcean infrastructure", "cloud optimization", "multi-cloud strategies",
            "cloud scalability", "cloud infrastructure design", "cloud security analysis",

            // service-Specific Keywords
            "AWS cloud consulting", "Azure system integration", "GCP cost optimization", "DigitalOcean solutions",
            "cloud migration technical-expertise", "cloud performance tuning", "multi-cloud integration", "cloud-native applications",

            // Developer & Location-Specific Keywords
            "cloud architect Thailand", "AWS architect Thailand", "Azure architect Thailand", "GCP architect Thailand",
            "DigitalOcean developer Thailand", "system analyst Thailand", "cloud infrastructure expert Thailand",

            // Brand & Innovation Keywords
            "CHORN", "cloud solutions", "digital innovation", "cloud infrastructure design", "scalable cloud systems"
        ]
    },
    blockchain: {
        title: "Web3 Blockchain Smart Contract Development | CHORN | Custom Blockchain Solutions",
        description: "Discover CHORN’s expertise in Web3 blockchain and smart contract development. We build decentralized applications (DApps) using Solidity, Ethereum, Polygon, and integrate with technologies like Hardhat, Ganache, and MetaMask.",
        alternates: {
            canonical: "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
            languages: {
                "en": "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
                "th": "https://chorn.in.th/th/technical-expertise/web3-blockchain-smart-contract-development/",
                "fr": "https://chorn.in.th/fr/technical-expertise/web3-blockchain-smart-contract-development/",
                "ja": "https://chorn.in.th/ja/technical-expertise/web3-blockchain-smart-contract-development/",
                "vi": "https://chorn.in.th/vi/technical-expertise/web3-blockchain-smart-contract-development/",
                "zh": "https://chorn.in.th/zh/technical-expertise/web3-blockchain-smart-contract-development/",
                "de": "https://chorn.in.th/de/technical-expertise/web3-blockchain-smart-contract-development/",
                "nl": "https://chorn.in.th/nl/technical-expertise/web3-blockchain-smart-contract-development/",
                "da": "https://chorn.in.th/da/technical-expertise/web3-blockchain-smart-contract-development/",
                "fi": "https://chorn.in.th/fi/technical-expertise/web3-blockchain-smart-contract-development/",
                "ko": "https://chorn.in.th/ko/technical-expertise/web3-blockchain-smart-contract-development/",
            }
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Top Web3 Blockchain Smart Contract Development Services | CHORN",
            description: "CHORN offers specialized Web3 blockchain and smart contract development technical-expertise. CHORN expertise includes building DApps with Solidity, Ethereum, Polygon, and integrating with Hardhat, Ganache, and MetaMask.",
            images: [
                {
                    url: OpenGraph.blockchain.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.blockchain.alt,
                },
            ],
            url: "https://chorn.in.th/en/technical-expertise/web3-blockchain-smart-contract-development/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Web3 Blockchain Smart Contract Development | CHORN",
            description: "Explore CHORN’s Web3 and blockchain smart contract development technical-expertise. CHORN creates decentralized applications (DApps) with Solidity, Ethereum, Polygon, and integrate with Hardhat, Ganache, and MetaMask.",
            images: [
                OpenGraph.blockchain.url,
            ],
        },
        keywords: [
            // Core Web3 & Blockchain Keywords
            "Web3 development", "blockchain development", "smart contract development", "Solidity development",
            "decentralized applications", "DApp development", "Ethereum development", "Polygon development",
            "Hardhat development", "Ganache development", "MetaMask integration", "blockchain smart contracts",
            "custom blockchain development", "blockchain solutions", "custom smart contracts",

            // Framework-Specific Keywords
            "Solidity smart contracts", "Ethereum DApps", "Polygon blockchain development", "Hardhat blockchain tools",
            "Ganache blockchain testing", "MetaMask integration", "custom Ethereum development", "custom Polygon development",

            // Developer & Location-Specific Keywords
            "blockchain developer Thailand", "Web3 developer Thailand", "smart contract developer Thailand",
            "Ethereum developer Thailand", "Solidity developer Thailand", "Senior blockchain developer Thailand",
            "Principal Web3 developer Thailand", "DApp developer Thailand", "software engineer Thailand",

            // Brand & Innovation Keywords
            "CHORN", "digital innovation", "blockchain technology", "scalable blockchain solutions"
        ]
    },

    frontend: MetadataFrontEnd,
    backend: MetadataBackEnd,
    devops: MetadataDevOps
}