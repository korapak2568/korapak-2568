// ServicePackagesZH.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesZH: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "三项高优先级计划 —— Premium Innovation Plan、Web3 Core Plan 和 NFT Evolution Plan —— 旨在全职专注开发，在 3–12 个月内启动。非常适合关键或紧迫的项目。",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999/月",
                hourlyEquivalent: "$37.49/小时",
                schedule: "周一至周五，8:30–17:30（全职、专注或长期）",
                highlight: "专为非区块链项目提供的全职支持，包括 MVP、系统升级与扩展。",
                features: [
                    "系统升级、新功能开发、扩展、PoC、MVP",
                    "支持所有主流编程语言和框架，前端、后端及 API 开发",
                    "支持主流数据库和云平台",
                    "支持现代与传统协议：gRPC、RPI、JMS 等"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999/月",
                hourlyEquivalent: "$43.74/小时",
                schedule: "周一至周五，8:30–17:30（全职、专注或长期）",
                highlight: "端到端区块链开发，涵盖 Web3 集成、Tokenomics 和智能合约。",
                features: [
                    "基于 Solidity、Ethers.js、Ethereum 的区块链与 Web3 开发",
                    "智能合约开发、审计与集成",
                    "前后端支持：Next.js、React、Node.js",
                    "代币机制：空投、预售、奖励系统"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999/月",
                hourlyEquivalent: "$43.74/小时",
                schedule: "周一至周五，8:30–17:30（全职、专注或长期）",
                highlight: "专注于 NFT 的开发，包括新项目和旧合约的现代化升级。",
                features: [
                    "现代 NFT 开发和传统 NFT 升级",
                    "使用 Solidity 编写或重构智能合约",
                    "支持主流前端和后端框架：Next.js、React、Node.js",
                    "支持 NFT 标准（ERC721、ERC1155）和主流市场"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "三项共享时间计划 —— Essential Care Plan、Growth Support Plan 和 Blockchain Pioneer Plan —— 专为产品上线后的持续开发与支持而设，时间结构明确、可灵活扩展。",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899/月",
                hourlyEquivalent: "$5.625/小时",
                schedule: "周一至周五，8:30–17:30（全职，共享）",
                highlight: "提供稳定系统的长期支持，不含新功能开发。",
                features: [
                    "系统监控、维护与技术支持",
                    "文档更新与团队协助",
                    "不包含新功能开发",
                    "支持主流编程语言与数据库"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999/月",
                hourlyEquivalent: "$12.49/小时",
                schedule: "周一至周五，8:30–17:30（全职，共享）",
                highlight: "为成长型系统提供持续开发与维护的灵活支持。",
                features: [
                    "维护与新功能开发",
                    "支持主流编程语言与框架",
                    "持续优化 Web、API 或定制平台",
                    "支持主流数据库与云平台"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999/月",
                hourlyEquivalent: "$24.99/小时",
                schedule: "周一至周五，8:30–17:30（全职，共享）",
                highlight: "共享时间区块链开发计划，适用于 Web3、区块链与 NFT 项目。",
                features: [
                    "Web3、智能合约、NFT 与 Ethereum 支持",
                    "前后端集成支持定制平台",
                    "适用于持续开发的成长型区块链项目"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "灵活的按小时计费开发套餐——适合敏捷团队、初创企业和区块链创新者需要按需支持。包括超级紧急修复方案！",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40/hour",
                hourlyEquivalent: "$40/hr",
                hours: "20–40 hrs/week",
                highlight: "兼职或全职软件开发服务，具备全栈能力。",
                features: [
                    "按需定制软件、Web及API开发",
                    "支持所有主流编程语言和框架",
                    "适合需要灵活且高技能开发资源的团队"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60/hour",
                hourlyEquivalent: "$60/hr",
                hours: "20–40 hrs/week",
                highlight: "为Web3原生企业和NFT创新者提供高级区块链服务。",
                features: [
                    "区块链、智能合约、NFT、Ethereum开发",
                    "支持主要前端和后端框架集成：Next.js、React、Node.js",
                    "支持定制平台的前后端集成",
                    "灵活参与高级Web3项目"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240/fix",
                hourlyEquivalent: "$30/hr",
                hours: "Reserve 8 hrs/day",
                highlight: "快速紧急响应——在一天内诊断并解决问题。",
                features: [
                    "即时咨询与支持",
                    "当天交付",
                    "单次错误修复，适用于外部项目",
                    "无需长期合同"
                ],
                link: "service-packages/"
            }
        ]
    }
}