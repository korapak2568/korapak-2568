import { INavbar } from "@/data/navbar/model/INavbar";

export const NavbarVI: INavbar[] = [
    {
        group: "/info",
        label: "Trang chủ",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Chuyên môn kỹ thuật",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Phát triển Web và API",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Phát triển Front-End",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Phát triển Back-End & API",
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
                label: "Kết nối LLM/AI",
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
                label: "Web3 và Blockchain",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Cloud DevOps",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Giải pháp đám mây",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Thư viện",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "Giới thiệu",
        link: "/about-chorn/",
        submenu: [],
    },
];
