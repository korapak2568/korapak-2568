import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesZH: Metadata = {
    title: "服务套餐 | 系统分析与全栈软件开发",
    description: "CHORN提供创新的软件开发服务套餐，支持Web3、区块链、NFT等现代技术。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.servicePackages).alternates,
    authors: [{name: "CHORN"}],
    openGraph: {
        title: "服务套餐 | 全栈开发与区块链技术",
        description: "适用于需要快速开发、共享支持和Web3解决方案的企业。",
        images: metadataLink(LanguageCode.zh, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN 服务套餐 - 软件开发与Web3",
        description: "支持定制开发、NFT、区块链和现代系统升级的专业服务。",
        images: metadataLink(LanguageCode.zh, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // 品牌关键词
        "CHORN", "CHORN 定制软件开发", "CHORN 软件外包", "CHORN 是什么",
        "CHORN 泰国软件开发", "CHORN 清迈开发者", "CHORN 曼谷开发者",

        // 核心服务关键词
        "定制软件开发", "软件外包公司", "软件开发外包", "网站开发外包", "泰国 IT 开发公司", "清迈软件外包", "曼谷软件开发",

        // 技术岗位关键词
        "软件工程师", "前端开发工程师", "后端开发工程师", "全栈开发工程师",
        "网站开发者", "React 开发者", "Java 开发者", "Node.js 开发者", "API 开发者",
        "区块链开发者", "Web3 开发者", "微服务开发", "企业级软件开发",

        // 技术与框架
        "Next.js 开发者", "React.js 开发者", "Spring Boot", "前端架构", "Web3 解决方案"
    ]
};