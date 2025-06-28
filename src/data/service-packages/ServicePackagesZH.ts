// ServicePackagesZH.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesZH: IServicePackages = {
    name: "服务套餐",
    premium: {
        name: "高端套餐",
        description: "为早期平台、MVP、内部工具或需要快速交付的项目量身定制的紧凑型工程方案。专为需要专业支持但不希望长期承诺或全职团队投入的初创企业和公司设计。",
        plans: [
            {
                name: "小型项目计划",
                price: "USD 299 / 1–5天",
                schedule: "灵活（按项目计，≤1周）",
                highlight: "为可在几天内交付的微任务、修复或小功能提供高效解决方案。",
                features: [
                    "适用于紧急任务、快速原型或独立的错误修复",
                    "通常在2–5个工作日内完成",
                    "包括规划、代码交付和基础测试",
                    "支持前端、后端或API的微功能",
                    "不包含周期性支持或每周会议",
                    "适合一次性或孤立需求"
                ],
                link: "service-packages/"
            },
            {
                name: "快速交付方案",
                price: "USD 499 / 1–2周",
                schedule: "灵活安排（基于项目，约1–2周）",
                highlight: "专注于小型功能集、系统集成或功能增强的短周期冲刺式服务包，可在数周内交付。",
                features: [
                    "适用于中等复杂度的功能、组件升级或集成任务",
                    "涵盖规划、设计迭代、开发实现及功能测试",
                    "支持全栈开发任务或聚焦模块（如 API、仪表盘、自动化）",
                    "包含最多2次同步会议，用于规划与交接",
                    "无需长期合同即可快速交付",
                    "适合早期团队、POC 或内部工具扩展"
                ],
                link: "service-packages/"
            },
            {
                name: "基础保障计划",
                price: "USD 900 / 月",
                schedule: "周一至周五，8:30–17:30（共享）",
                highlight: "为MVP、内部工具或初期平台提供基础技术支持，适合开发工作量有限的场景。",
                features: [
                    "轻量级配置和核心功能稳定",
                    "定期监控、错误修复和技术维护",
                    "为内部团队提供文档和技术交接",
                    "不包括复杂功能开发",
                    "兼容主流编程语言和数据库"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "黄金套餐",
        description: "一套包含三个共享时间服务计划的组合——Growth Support、Advanced Growth Plan 和 Blockchain Pioneer，专为产品上线后的支持、战略性迭代以及可扩展的技术运营而设计。适用于寻求可靠工程支持但又不希望承担全职雇佣成本的初创公司、代理机构和企业。",
        plans: [
            {
                name: "增长支持计划",
                price: "USD 1,999 / month",
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
                name: "高级增长计划",
                price: "USD 2,999 / month",
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
                name: "区块链先锋计划",
                price: "USD 3,999 / month",
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
    platinum: {
        name: "白金套餐",
        description: "三大全职战略合作方案 — 高端创新计划、Web3核心计划 和 NFT演进计划 — 专为希望在3至12个月内加速产品发布的CEO、CTO、产品负责人和创业者量身打造。适用于需要可扩展性、快速迭代以及减少内部招聘压力的关键性项目。",
        plans: [
            {
                name: "高端创新计划",
                price: "USD 5,900 / month",
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
                name: "Web3核心计划",
                price: "USD 6,900 / month",
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
                name: "NFT演进计划",
                price: "USD 6,900 / month",
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
}