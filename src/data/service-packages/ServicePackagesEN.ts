import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesEN: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Three high-priority packages — Premium Innovation Plan, Web3 Core Plan, and NFT Evolution Plan — designed for dedicated, full-time development aimed at launching within 3–12 months. Ideal for mission-critical or time-sensitive projects.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "Exclusive full-time support for non-blockchain projects, including MVPs, system upgrades, and scaling.",
                features: [
                    "System upgrades, new feature development, scaling, PoC, MVP",
                    "Supports all major programming languages and frameworks, front-end, back-end, and API development",
                    "Supports all major databases and cloud platforms",
                    "Supports modern and legacy protocols: gRPC, RPI, JMS, etc."
                ],
                // link: "service-packages/premium-innovation-plan/",
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "End-to-end blockchain development with full Web3 integration, including tokenomics and smart contracts.",
                features: [
                    "Blockchain and Web3 development using Solidity, Ethers.js, Ethereum",
                    "Smart contract development, audits, and integration",
                    "Front-End and Back-End: Next.js, React, Node.js",
                    "Token mechanics: airdrops, presales, reward systems"
                ],
                // link: "service-packages/web3-core-plan/"
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "NFT-focused development including new builds and modernizing legacy contracts.",
                features: [
                    "Modern NFT development and legacy NFT upgrades",
                    "Solidity-based smart contract creation or refactoring",
                    "Support major front-end and backend frameworks integration: Next.js, React, Node.js",
                    "Support for NFT standards (ERC721, ERC1155) and marketplaces"
                ],
                // link: "service-packages/nft-evolution-plan/"
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Three shared-time packages — Essential Care Plan, Growth Support Plan, and Blockchain Pioneer Plan — designed for ongoing development or support of existing projects post-launch, with structured timelines and flexible scaling.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Reliable long-term support without new development. Ideal for stable systems.",
                features: [
                    "System monitoring, maintenance, and technical support",
                    "Documentation updates and team learning support",
                    "No new feature development included",
                    "Supports all major programming languages and databases"
                ],
                // link: "service-packages/essential-care-plan/"
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Flexible support with ongoing development for growing systems.",
                features: [
                    "Maintenance and new feature development",
                    "Supports all major programming languages and frameworks",
                    "Continuous improvement for web, API, or custom platforms",
                    "Supports all major databases and cloud platforms"
                ],
                // link: "service-packages/growth-support-plan/"
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/month",
                hourlyEquivalent: "$18.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Half-time, shared)",
                highlight: "Balanced development focus for scaling businesses with active needs.",
                features: [
                    "Dedicated hours for ongoing feature upgrades and refinements",
                    "Full-Stack development across Front-End and Back-End systems",
                    "Ideal for actively growing platforms requiring regular updates",
                    "Supports integration with third-party services and APIs",
                    "Covers major frameworks, databases, and cloud platforms"
                ],
                // link: "service-packages/advanced-growth-plan/"
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, shared)",
                highlight: "Shared-time blockchain development for emerging Web3, Blockchain, and NFT projects.",
                features: [
                    "Web3, Smart Contract, NFT, Ethereum support",
                    "Supports front-end and back-end integration for custom platforms",
                    "Ideal for growing blockchain projects in continuous development"
                ],
                // link: "service-packages/blockchain-pioneer-plan/"
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Flexible hourly-based development packages — suitable for agile teams, startups, and blockchain innovators needing on-demand support. Including Super Urgent fixing issue plan!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 hrs/week",
                highlight: "Part-time or full-time software development service with full-stack capabilities.",
                features: [
                    "On-demand custom software, web, and API development",
                    "Supports all major programming languages and frameworks",
                    "Ideal for teams needing flexible, skilled development resources"
                ],
                // link: "service-packages/pro-dev-flex-pack/"
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 hrs/week",
                highlight: "Advanced blockchain services for Web3-native businesses and NFT innovators.",
                features: [
                    "Blockchain, Smart Contract, NFT, Ethereum development",
                    "Support major front-end and backend frameworks integration: Next.js, React, Node.js",
                    "Supports front-end and back-end integration for custom platforms",
                    "Flexible engagement for advanced Web3 projects"
                ],
                // link: "service-packages/web3-elite-pack/"
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "Reserve 8 hrs/day",
                highlight: "Fast emergency response — issue diagnosed and resolved within a day.",
                features: [
                    "Immediate consultation and support",
                    "Same-day delivery",
                    "Single bug fix for external projects",
                    "No long-term contract required"
                ],
                // link: "service-packages/urgent-bug-fix/"
                link: "service-packages/"
            }
        ]
    }
};