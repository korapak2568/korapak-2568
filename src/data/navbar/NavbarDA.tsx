import {INavbar} from "@/data/navbar/model/INavbar";

export const NavbarDA: INavbar[] = [
    {
        group: "/info",
        label: "Hjem",
        link: "/",
        submenu: [],
    },
    {
        group: "/technical-expertise/",
        label: "Teknisk Ekspertise",
        link: "/technical-expertise/web-development/",
        submenu: [
            {
                group: "/technical-expertise/",
                label: "Webapplikationsudvikling",
                link: "/technical-expertise/web-development/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Front-End Udvikling",
                link: "/technical-expertise/front-end-developer/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "Backend-udvikling",
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
                label: "LLM-AI LINE-integration",
                link: "/ai-companions/fah/",
                submenu: [],
            },
            {
                group: "/technical-expertise/",
                label: "LLM-AI-integration",
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
                label: "Web3 og Blockchain",
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
                label: "Cloud og Infrastruktur",
                link: "/technical-expertise/cloud-infrastructure-systems-architecture/",
                submenu: [],
            },
        ],
    },
    {
        group: "/gallery/",
        label: "Galleri",
        link: "/gallery/",
        submenu: [],
    },
    {
        group: "/about-chorn/",
        label: "Om os",
        link: "/about-chorn/",
        submenu: [],
    },
];
