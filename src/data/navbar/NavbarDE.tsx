import { INavbar } from "@/data/navbar/model/INavbar";

export const NavbarDE: INavbar[] = [
    {
        group: "/info",
        label: "Startseite",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Technische Expertise",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Web-Anwendungsentwicklung",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Front-End-Entwicklung",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Backend-Entwicklung",
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
                label: "LLM-AI LINE-Integration",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI-Integration",
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
                label: "Web3 und Blockchain",
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
                label: "Cloud und Infrastruktur",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Galerie",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "Über uns",
        link: "/about-chorn/",
        submenu: [],
    },
];
