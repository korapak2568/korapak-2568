import {INavbar} from "@/data/navbar/model/INavbar";

export const NavbarKO: INavbar[] = [
    {
        group: "/info",
        label: "홈",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "기술 전문성",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "웹 및 API 개발",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "프론트엔드 개발",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "백엔드 및 API 개발",
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
                label: "LLM/AI LINE 챗 친구",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM/AI 컨설턴트",
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
                label: "웹3 및 블록체인",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "클라우드 데브옵스",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "클라우드 및 인프라",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "갤러리",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "소개",
        link: "/about-chorn/",
        submenu: [],
    },
];
