// ServicePackagesZH.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesZH: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "三大高优先级服务包 — Premium Innovation Plan、Web3 Core Plan 和 NFT Evolution Plan — 专为全职投入、目标在 3–12 个月内上线的项目而设计。非常适合需要战略合作伙伴、可扩展架构并希望减少内部技术招聘负担的企业或创业团队。",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "周一至周五，8:30–17:30（全职专属支持）",
                highlight: "为非区块链项目提供专属全职支持，包括 MVP 构建、系统升级及可扩展性优化。",
                features: [
                    "系统升级、新功能开发、可扩展性优化、PoC 和 MVP 构建",
                    "支持主流编程语言与框架，涵盖前端、后端及 API 开发",
                    "兼容主流数据库及云平台（AWS、GCP、Azure 等）",
                    "支持现代与传统协议：gRPC、RPI、JMS 等"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "周一至周五，8:30–17:30（全职专属支持）",
                highlight: "提供端到端的区块链开发服务，支持完整 Web3 集成，包括 Tokenomics 与智能合约开发。",
                features: [
                    "基于 Solidity、Ethers.js 与 Ethereum 的区块链开发",
                    "智能合约的开发、审计与集成",
                    "支持前后端框架：Next.js、React、Node.js",
                    "Token 机制设计：空投、预售、奖励系统"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "周一至周五，8:30–17:30（全职专属支持）",
                highlight: "专注于 NFT 相关开发，包括新项目构建与旧合约的现代化升级。",
                features: [
                    "现代 NFT 应用开发及旧版合约升级",
                    "基于 Solidity 的智能合约创建或重构",
                    "支持主流前端/后端框架集成：Next.js、React、Node.js",
                    "支持 NFT 标准（ERC721、ERC1155）及主流市场"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "三款共享时间套餐——基础关怀计划、成长支持计划和区块链先锋计划——专为产品发布后持续开发与支持现有项目而设计，具备明确的时间安排与灵活的扩展能力。适合寻求可靠技术合作伙伴的企业、高管、创业团队及代理机构。",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/month",
                hourlyEquivalent: "$5.625 USD/hr",
                schedule: "周一至周五，08:30–17:30（共享时间）",
                highlight: "为开发需求有限的系统提供基础支持，特别适合MVP、概念验证（PoC）及早期运营阶段。",
                features: [
                    "轻量级搭建与核心功能优化",
                    "系统监控、细微调整及稳定性维护",
                    "文档编写及开发者入职指导",
                    "不包含复杂新功能开发",
                    "支持主流编程语言及数据库"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/month",
                hourlyEquivalent: "$12.49 USD/hr",
                schedule: "周一至周五，08:30–17:30（共享时间）",
                highlight: "适合需要持续开发但不需全职投入的成长型企业。",
                features: [
                    "定期维护与中级功能开发",
                    "每周与利益相关者同步一次（1–3人团队）",
                    "全栈支持，包括API、平台及内部工具",
                    "涵盖主流语言、框架、数据库和云平台",
                    "业务增长时可升级更大规模套餐"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/month",
                hourlyEquivalent: "$18.74 USD/hr",
                schedule: "周一至周五，08:30–17:30（共享时间）",
                highlight: "比成长支持计划更专注开发，适合需要频繁迭代和多方协作的平台。",
                features: [
                    "更广泛的功能升级、优化与性能提升",
                    "比成长支持更频繁的交付周期，适合快速迭代",
                    "每周1–2次与利益相关者（3–6人）同步规划与反馈",
                    "全栈工程，涵盖Web、后端及第三方集成",
                    "支持主流框架、数据库及云服务，应对不断增长的需求"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/month",
                hourlyEquivalent: "$24.99 USD/hr",
                schedule: "周一至周五，08:30–17:30（共享时间）",
                highlight: "为Web3、NFT及以太坊产品创新提供入门级区块链支持。",
                features: [
                    "以太坊智能合约及去中心化应用开发",
                    "Web2/3后台及代币生态系统集成",
                    "NFT铸造、元数据管理及市场准备",
                    "适合试点或推出Web3体验的企业"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "灵活的按小时计费开发方案——适合敏捷团队、初创企业和区块链创新者，提供按需支持。作为战略合作伙伴，助力业务扩展，减少内部团队负担。包括紧急问题快速修复服务。",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "每周20–40小时",
                highlight: "灵活的全栈开发服务，支持产品路线图加速与可扩展性提升。",
                features: [
                    "按需定制软件、网站及API开发",
                    "支持所有主流编程语言和框架",
                    "适合需要灵活且专业开发资源的团队"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "每周20–40小时",
                highlight: "专为Web3本地业务及NFT创新者设计的高级区块链服务。",
                features: [
                    "区块链、智能合约、NFT和以太坊开发",
                    "支持Next.js、React、Node.js等主流前后端框架集成",
                    "灵活的参与方式，适用于高级Web3项目"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "预留每日8小时",
                highlight: "快速响应紧急问题——当天诊断并解决。",
                features: [
                    "即时咨询与支持",
                    "当天交付解决方案",
                    "单次修复，适用于外部项目",
                    "无需长期合同"
                ],
                link: "service-packages/"
            }
        ]
    }
}