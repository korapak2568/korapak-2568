import {INavbar} from "@/data/navbar/model/INavbar";

export const NavbarTH: INavbar[] = [
    {
        group: "/info",
        label: "หน้าแรก",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "ความเชี่ยวชาญทางเทคนิค",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "การพัฒนาเว็บและ API",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การพัฒนา Front-End",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การพัฒนา Back-End & API",
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
                label: "LLM/AI LINE Chat Friend",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "การเชื่อมต่อกับ LLM/AI",
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
                label: "Web3 และ Blockchain",
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
                label: "โซลูชัน Cloud",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "แกลเลอรี่",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "เกี่ยวกับ",
        link: "/about-chorn/",
        submenu: [],
    },
];