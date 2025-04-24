import {INavbar} from "@/data/navbar/model/INavbar";
import {SubMenuFrontEnd} from "@/data/navbar/submenu/SubMenuFrontEnd";

export const NavbarEN: INavbar[] = [
    {
        group: "/info",
        label: "Home",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Technical Expertise",
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
                label: "Front-End Development",
                link: "/technical-expertise/front-end-developer/",
                submenu: SubMenuFrontEnd,
            },
            {
                group: "/technical-expertise/",
                label: "Back-End Development",
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
                label: "LLM-AI LINE Integration",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI Integration",
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
                label: "Web3 and Blockchain",
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
                label: "Cloud Infrastructure",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Gallery",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "About",
        link: "/about-chorn/",
        submenu: [],
    },
];
