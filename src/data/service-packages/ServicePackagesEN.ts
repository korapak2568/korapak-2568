import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesEN: IServicePackages = {
    name: "Service Packages",
    premium: {
        name: "Premium Packages",
        description: "Compact engineering plans tailored for early-stage platforms, MVPs, internal tools, or quick turnaround projects. Designed for startups and businesses that need expert support without long-term commitment or full-scale team investment.",
        plans: [
            {
                name: "Tiny Project Plan",
                price: "$299 USD/Task",
                schedule: "Flexible (project-based, ≤1 week)",
                highlight: "Efficient solution for micro-tasks, fixes, or small features deliverable within a few days.",
                features: [
                    "Ideal for urgent tasks, quick prototypes, or isolated bug fixes",
                    "Turnaround typically within 2–5 business days",
                    "Includes planning, code delivery, and basic testing",
                    "Support for front-end, back-end, or API micro features",
                    "No recurring support or weekly meetings",
                    "Best for isolated or one-off requirements"
                ],
                link: "service-packages/"
            },
            {
                name: "Essential Care Plan",
                price: "$799 USD/month",
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
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "A suite of three shared-time service plans — Growth Support, Advanced Growth Plan, and Blockchain Pioneer — tailored for post-launch product support, strategic iteration, and scalable technical operations. Designed for startups, agencies, and enterprises seeking reliable engineering without the burden of full-time hiring.",
        plans: [
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
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
    platinum: {
        name: "Platinum Packages",
        description: "Three strategic, full-time engagement packages — Premium Innovation Plan, Web3 Core Plan, and NFT Evolution Plan — tailored for CEO, CTOs, Product Owners, and Founders seeking a trusted technical partner to accelerate product launches within 3 to 12 months. Designed for mission-critical initiatives demanding scalability, rapid iteration, and reduction of in-house hiring overhead.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,900 USD/month",
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
                price: "$6,900 USD/month",
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
                price: "$6,900 USD/month",
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
};