import { INavbar } from "@/data/navbar/model/INavbar";

export const NavbarZH: INavbar[] = [
    {
        group: "/info",
        label: "首页",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "技术专长",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Web 和 API 开发",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "前端开发",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "后端与 API 开发",
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
                label: "LLM/AI 连接 (LLM/AI Liánjiē)",
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
                label: "Web3 和区块链",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "云 DevOps",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "云解决方案",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "图库",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "关于我们",
        link: "/about-chorn/",
        submenu: [],
    },
];
