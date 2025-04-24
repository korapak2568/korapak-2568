import { INavbar } from "@/data/navbar/model/INavbar";
import {SubMenuFrontEnd} from "@/data/navbar/submenu/SubMenuFrontEnd";

export const NavbarJA: INavbar[] = [
    {
        group: "/info",
        label: "ホーム",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "技術専門知識",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "ウェブアプリケーション開発",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "フロントエンド開発",
                link: "/technical-expertise/front-end-developer/",
                submenu: SubMenuFrontEnd,
            },
            {
                group: "/technical-expertise/",
                label: "バックエンド開発",
                link: "/technical-expertise/full-stack-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI LINE 統合",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI 統合",
                link: "/technical-expertise/ai-solutions/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Web3およびブロックチェーン",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "クラウドDevOps",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "クラウドとインフラストラクチャ",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "ギャラリー",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "会社概要",
        link: "/about-chorn/",
        submenu: [],
    },
];
