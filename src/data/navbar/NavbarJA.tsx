import { INavbar } from "@/data/navbar/model/INavbar";

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
                label: "WebおよびAPI開発",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "フロントエンド開発",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "バックエンドおよびAPI開発",
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
                label: "LLM/AI接続 (LLM/AI Setsuzoku)",
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
                label: "クラウドソリューション",
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
