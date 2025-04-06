import {INavbar} from "@/data/navbar/model/INavbar";

export const NavbarFR: INavbar[] = [
    {
        group: "/info",
        label: "Accueil",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Expertise Technique",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Web Application Development",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Développement Front-End",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label:  "Développement Back-End",
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
                label: "Intégration LLM-IA LINE",
                link: "/ai-companions/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Intégration LLM-IA",
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
                label: "Web3 et Blockchain",
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
                label: "Cloud et Infrastructure",
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
        label: "À propos",
        link: "/about-chorn/",
        submenu: [],
    },
];