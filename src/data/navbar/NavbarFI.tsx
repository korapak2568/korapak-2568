import {INavbar} from "@/data/navbar/model/INavbar";
import {SubMenuFrontEnd} from "@/data/navbar/submenu/SubMenuFrontEnd";

export const NavbarFI: INavbar[] = [
    {
        group: "/info",
        label: "Etusivu",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Tekninen Asiantuntemus",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Verkkosovelluskehitys",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Front-End-kehitys",
                link: "/technical-expertise/front-end-developer/",
                submenu: SubMenuFrontEnd,
            },
            {
                group: "/technical-expertise/",
                label: "Verkkosovelluskehitys",
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
                label: "LLM-AI LINE-integraatio",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI-integraatio",
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
                label: "Web3 ja Lohkoketju",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Pilvi DevOps",
                link: "/technical-expertise/cloud-devops/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Pilvi ja infrastruktuuri",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Galleria",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "Tietoa",
        link: "/about-chorn/",
        submenu: [],
    },
];
