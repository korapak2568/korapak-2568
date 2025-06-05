import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesEN: IServicePackages = {
    name: "Service Packages",
    platinum: {
        name: "Platinum Packages",
        description: "Three strategic, full-time engagement packages — Premium Innovation Plan, Web3 Core Plan, and NFT Evolution Plan — tailored for CTOs, Product Owners, and Founders seeking a trusted technical partner to accelerate product launches within 3 to 12 months. Designed for mission-critical initiatives demanding scalability, rapid iteration, and reduction of in-house hiring overhead.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "Dedicated full-time technical partnership for non-blockchain projects focused on MVP delivery, system modernization, and scalable growth.",
                features: [
                    "Comprehensive system upgrades, new feature rollouts, and scaling strategies",
                    "Expertise across major programming languages, front-end, back-end, and API development",
                    "Full support for leading databases and cloud infrastructure",
                    "Integration with modern and legacy protocols including gRPC, RPI, JMS, and more"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "End-to-end blockchain development package enabling full Web3 integration, tokenomics design, and secure smart contract delivery.",
                features: [
                    "Expert blockchain and Web3 development using Solidity, Ethers.js, and Ethereum ecosystems",
                    "Smart contract development, security audits, and seamless integrations",
                    "Robust front-end and back-end development with Next.js, React, and Node.js",
                    "Comprehensive token mechanics including airdrops, presales, and rewards systems"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (Full-time, dedicated, or permanent)",
                highlight: "Focused NFT development and modernization service, bridging new builds with legacy contract upgrades for evolving digital asset strategies.",
                features: [
                    "Development of modern NFT projects alongside legacy NFT contract modernization",
                    "Solidity smart contract creation, refactoring, and optimization",
                    "Integration support for major front-end and back-end frameworks including Next.js, React, and Node.js",
                    "Compliance with NFT standards (ERC721, ERC1155) and marketplace interoperability"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "A suite of three shared-time service plans — Essential Care, Growth Support, and Blockchain Pioneer — tailored for post-launch product support, strategic iteration, and scalable technical operations. Designed for startups, agencies, and enterprises seeking reliable engineering without the burden of full-time hiring.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (shared)",
                highlight: "Foundational engineering support for MVPs, internal tools, or early-stage platforms requiring minimal development effort.",
                features: [
                    "Lightweight setup and core feature stabilization",
                    "Routine monitoring, bug fixes, and technical housekeeping",
                    "Documentation and technical handover for internal teams",
                    "Excludes complex feature development",
                    "Compatible with widely adopted languages and databases"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (shared)",
                highlight: "Ideal for growing teams that require continuous enhancements and technical agility without full-time overhead.",
                features: [
                    "Ongoing maintenance and mid-tier feature development",
                    "Weekly sync with your team (1–3 stakeholders)",
                    "Full-stack implementation for APIs, admin tools, and user-facing features",
                    "Supports mainstream tech stacks, cloud platforms, and modern frameworks",
                    "Seamlessly scalable into higher-tier plans as your product evolves"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/month",
                hourlyEquivalent: "$18.74 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (shared)",
                highlight: "Strategic development partner for high-velocity platforms requiring continuous delivery and deeper stakeholder alignment.",
                features: [
                    "Expanded feature rollouts, optimization cycles, and performance tuning",
                    "Accelerated delivery cadence (ideal for weekly sprints)",
                    "1–2 stakeholder syncs per week (team of 3–6 participants)",
                    "Robust full-stack engineering across web, backend, and integrations",
                    "Built to support growing product teams with evolving technical needs"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "Mon–Fri, 8:30–17:30 (shared full-time)",
                highlight: "Professional-grade entry into blockchain innovation — ideal for Web3 prototypes, NFT utilities, and Ethereum-based platforms.",
                features: [
                    "Development of smart contracts and Ethereum-based dApps",
                    "End-to-end integration with Web2/Web3 backend systems",
                    "NFT minting pipelines, metadata management, and marketplace deployment",
                    "Best suited for forward-thinking teams entering the decentralized space"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "Flexible, hourly-based development packages tailored for agile product teams, innovation-driven startups, and Web3 ventures. Ideal for organizations seeking strategic scalability without the overhead of full-time hires. Includes rapid response support for urgent production issues.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "20–40 hrs/week",
                highlight: "Flexible full-stack development resource to augment your in-house capabilities on-demand.",
                features: [
                    "On-demand development across custom software, web applications, APIs, and platform features",
                    "Supports a wide range of technologies: modern frameworks, legacy systems, and hybrid stacks",
                    "Strategic partner model — ideal for scaling teams without long-term hiring commitments"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "20–40 hrs/week",
                highlight: "Specialized blockchain engineering for Web3-native teams requiring token mechanics, smart contracts, or NFT infrastructure.",
                features: [
                    "Full-cycle blockchain development: smart contracts, NFT standards (ERC721/1155), token utilities",
                    "Seamless integration with modern front-end and backend tech stacks (React, Next.js, Node.js)",
                    "Designed for scalability — plug Web3 expertise into existing agile workflows"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "Reserve 8 hrs/day",
                highlight: "Same-day resolution for critical production issues without needing long-term contracts.",
                features: [
                    "Immediate triage, diagnostics, and fix deployment",
                    "Guaranteed same-day turnaround for one-off issues",
                    "No retainer or subscription required — perfect for emergency technical gaps",
                    "Supports external or legacy project infrastructures"
                ],
                link: "service-packages/"
            }
        ]
    }
};