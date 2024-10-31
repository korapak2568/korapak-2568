import {INavbar} from "@/data/model/navbar/INavbar";

export const NAVBAR: INavbar[] = [
    {
        group: "/home",
        label: "Home",
        link: "/",
        submenu: []
    },

    {
        group: "/services/",
        label: "Services",
        link: "/services/web-development/",
        submenu: [
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
                label: "Mobile Development",
                link: "/services/mobile-development/",
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
                label: "...",
                link: "",
                isSeparated: true,
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