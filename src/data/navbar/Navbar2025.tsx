import {INavbar} from "@/data/navbar/model/INavbar";

export const Navbar2025: INavbar[] = [
    {
        group: "/info",
        label: "Home",
        link: "/",
        submenu: []
    },
    {
        group: "/technical-expertise/",
        label: "Technical Expertise",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Web and API Development",
                link: "/technical-expertise/web-development/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "Front-End Development",
                link: "/technical-expertise/front-end-developer/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "Back-End & API Development",
                link: "/technical-expertise/full-stack-developer/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "AI Solutions Services",
                link: "/technical-expertise/ai-solutions/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "Web3 and Blockchain",
                link: "/technical-expertise/web3-blockchain-smart-contract-development/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "DevOps Testing",
                link: "/technical-expertise/devops-testing/",
                submenu: []
            },
            {
                group: "/technical-expertise/",
                label: "Cloud Solutions",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
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