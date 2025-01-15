import {INavbar} from "@/data/navbar/model/INavbar";

export const Navbar2025: INavbar[] = [
    {
        group: "/info",
        label: "Home",
        link: "/",
        submenu: []
    },
    {
        group: "/ai-solutions/",
        label: "AI Solutions",
        link: "/ai-solutions/",
        submenu: []
    },
    {
        group: "/services/",
        label: "Services",
        link: "/services/web-development/",
        submenu: [
            {
                group: "/services/",
                label: "AI Solutions",
                link: "/ai-solutions/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Web Development",
                link: "/services/web-development/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Web3 & Blockchain",
                link: "/services/web3-blockchain-smart-contract-development/",
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