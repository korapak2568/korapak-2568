import { INavbar } from "@/data/navbar/model/INavbar";
import {SubMenuFrontEnd} from "@/data/navbar/submenu/SubMenuFrontEnd";

export const NavbarNL: INavbar[] = [
    {
        group: "/info",
        label: "Startpagina",
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
                label: "Webapplicatie Ontwikkeling",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Front-End Ontwikkeling",
                link: "/technical-expertise/front-end-developer/",
                submenu: SubMenuFrontEnd,
            },
            {
                group: "/technical-expertise/",
                label: "Back-End Ontwikkeling",
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
                label: "LLM-AI LINE-integratie",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI-integratie",
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
                label: "Web3 en Blockchain",
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
                label: "Cloud en Infrastructuur",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Galerij",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "Over ons",
        link: "/about-chorn/",
        submenu: [],
    },
];
