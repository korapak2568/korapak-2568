import {IChornMetadata} from "@/data/metadata/model/metadata/IChornMetadata";
import {FrontEndMetadata} from "@/data/metadata/metadata/FrontEndMetadata";
import {BackEndMetadata} from "@/data/metadata/metadata/BackEndMetadata";
import {DevOpsMetadata} from "@/data/metadata/metadata/DevOpsMetadata";
import {ImageVersion} from "@/data/metadata/ImageVersion";
import {OpenGraph} from "@/data/metadata/OpenGraph";

export const ChornMetadata: IChornMetadata = {

    home: {
        title: "CHORN | AI & Software Solutions",
        description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud computing, and system modernization to drive innovation and efficiency.",
        icons: {
            icon: '/favicon.ico',
        },
        alternates: {
            canonical: 'https://chorn.in.th', // Add canonical URL here
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "CHORN | AI & Software Solutions",
            description: "Empower your business with expert system analysis and cutting-edge software solutions. CHORN specializes in full-stack development, AI-driven automation, cloud computing, and system modernization to drive innovation and efficiency.",
            images: [
                {
                    url: OpenGraph.home.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.home.alt,
                },
            ],
            url: "https://chorn.in.th",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "CHORN | AI & Software Solutions",
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
            "software outsourcing services", "software development outsourcing", "software development outsourcing companies",
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
    aiCompanions: {
        title: "AI Chat Companion | CHORN AI Integration",
        description: "Welcome to the AI Chat Companion, a demo of AI-powered integration. Explore AI companions with unique personalities, designed for seamless interaction via the LINE app, supporting multiple languages.",
        alternates: {
            canonical: "https://chorn.in.th/ai-companions",
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
            url: "https://chorn.in.th/ai-companions",
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
    gallery: {
        title: "Global Business Trip | CHORN Gallery",
        description: "Explore highlights from CHORN's international business trips, including experiences in Los Angeles, California, and premium travel with Singapore Airlines.",
        alternates: {
            canonical: "https://chorn.in.th/gallery/",
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
            url: "https://chorn.in.th/gallery/",
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
        title: "About CHORN | System Analysis & Full-Stack Development",
        description: "Discover CHORN's expertise in system analysis, full-stack development, and modern software solutions that drive business success.",
        alternates: {
            canonical: "https://chorn.in.th/about-chorn/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "CHORN - Experts in System Analysis & Full-Stack Development",
            description: "Explore CHORN's commitment to delivering cutting-edge system modernization, full-stack development, and technical support for businesses.",
            images: [
                {
                    url: OpenGraph.about.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.about.alt,
                },
            ],
            url: "https://chorn.in.th/about-chorn/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "CHORN - Leading System Analysis & Full-Stack Development",
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
            canonical: "https://chorn.in.th/contact-chorn/",
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
            url: "https://chorn.in.th/contact-chorn/",
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
        description: "Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more.",
        alternates: {
            canonical: "https://chorn.in.th/services/web-development/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Top Web Development Services | CHORN",
            description: "CHORN provides cutting-edge web development services with expertise in popular frameworks like Next.js, React, Angular, and more. CHORN caters to diverse business needs including Digital Marketing, E-Commerce, Blockchain, and more.",
            images: [
                {
                    url: OpenGraph.webDevelopment.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.webDevelopment.alt
                },
            ],
            url: "https://chorn.in.th/services/web-development/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Web Development Services | CHORN",
            description: "Discover CHORN’s expert web development services. From Next.js to Angular and beyond, CHORN offers solutions for all business needs including Digital Marketing, Blockchain, E-Commerce, and more.",
            images: [
                OpenGraph.webDevelopment.url,
            ],
        },
        keywords: [
            // Core Web Development Keywords
            "web development", "web development services", "web developer", "custom web development",
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
        description: "CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency.",
        alternates: {
            canonical: "https://chorn.in.th/services/cloud-solution-architecture-systems-analysis/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Cloud Solution Architecture & Systems Analysis | CHORN",
            description: "Explore CHORN’s cloud solution architecture and systems analysis services. We design resilient, scalable, and optimized cloud solutions across AWS, Azure, GCP, and DigitalOcean.",
            images: [
                {
                    url: OpenGraph.cloudSolutions.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.cloudSolutions.alt,
                },
            ],
            url: "https://chorn.in.th/services/cloud-solution-architecture-systems-analysis/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Cloud Solution Architecture & Systems Analysis | CHORN",
            description: "Optimize your cloud infrastructure with CHORN’s cloud solution architecture and systems analysis services, covering AWS, Azure, GCP, and DigitalOcean.",
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
            "cloud migration services", "cloud performance tuning", "multi-cloud integration", "cloud-native applications",

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
            canonical: "https://chorn.in.th/services/web3-blockchain-smart-contract-development/",
        },
        authors: [
            {
                name: "CHORN"
            }
        ],
        openGraph: {
            title: "Top Web3 Blockchain Smart Contract Development Services | CHORN",
            description: "CHORN offers specialized Web3 blockchain and smart contract development services. CHORN expertise includes building DApps with Solidity, Ethereum, Polygon, and integrating with Hardhat, Ganache, and MetaMask.",
            images: [
                {
                    url: OpenGraph.blockchain.url,
                    width: 1200,
                    height: 630,
                    alt: OpenGraph.blockchain.alt,
                },
            ],
            url: "https://chorn.in.th/services/web3-blockchain-smart-contract-development/",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Web3 Blockchain Smart Contract Development | CHORN",
            description: "Explore CHORN’s Web3 and blockchain smart contract development services. CHORN creates decentralized applications (DApps) with Solidity, Ethereum, Polygon, and integrate with Hardhat, Ganache, and MetaMask.",
            images: [
                "https://chorn.in.th/chorn-images/metadata/banner-logo.png" + ImageVersion
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

    frontend: FrontEndMetadata,
    backend: BackEndMetadata,
    devops: DevOpsMetadata
}