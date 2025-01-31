import {INavbar} from "@/data/navbar/model/INavbar";

export const Navbar2025: INavbar[] = [
    {
        group: "/info",
        label: "Home",
        link: "/",
        submenu: []
    },
    {
        group: "/ai-companions/",
        label: "AI Companions",
        link: "/ai-companions/",
        submenu: []
    },
    {
        group: "/services/",
        label: "Services",
        link: "/services/web-development/",
        submenu: [
            {
                group: "/services/",
                label: "AI Solutions Services",
                link: "/services/ai-solutions/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Web and API Development",
                link: "/services/web-development/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Front-End Development",
                link: "/services/front-end-developer/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Back-End & API Development",
                link: "/services/full-stack-developer/",
                submenu: []
            },
            {
                group: "/services/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/services/",
                label: "Web3 and Blockchain",
                link: "/services/web3-blockchain-smart-contract-development/",
                submenu: []
            },
            {
                group: "/services/",
                label: "DevOps Testing",
                link: "/services/devops-testing/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Cloud Solutions",
                link: "/services/cloud-infrastructure-systems-architecture/",
                submenu: []
            }
        ],
    },
    {
        group: "/gallery/",
        label: "Gallery",
        link: "/gallery/",
        submenu: []
    },
    {
        group: "/about-chorn/",
        label: "About",
        link: "/about-chorn/",
        submenu: []
    },
    {
        group: "/contact-chorn/",
        label: "Contact",
        link: "/contact-chorn/",
        submenu: []
    },
];