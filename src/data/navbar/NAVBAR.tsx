import {INavbar} from "@/data/model/navbar/INavbar";

export const NAVBAR: INavbar[] = [
    {
        group: "/home",
        label: "Home",
        link: "/",
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
    {
        group: "/services/",
        label: "Services",
        link: "/services",
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
        ],
    },
    {
        group: "/outsourcing-software-development/",
        label: "Outsourcing",
        link: "/services/outsourcing",
        submenu: [
            {
                group: "/services/",
                label: "Front-End Development",
                link: "/outsourcing-software-development/front-end-developer/",
                submenu: []
            },
            {
                group: "/services/",
                label: "Full-Stack Development",
                link: "/outsourcing-software-development/full-stack-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Next.js Development",
                link: "/outsourcing-software-development/front-end-developer/nextjs-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "React Development",
                link: "/outsourcing-software-development/front-end-developer/react-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Angular Development",
                link: "/outsourcing-software-development/front-end-developer/angular-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Vue Development",
                link: "/outsourcing-software-development/front-end-developer/vue-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Node.js Development",
                link: "/outsourcing-software-development/full-stack-developer/nodejs-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Java Spring Boot Development",
                link: "/outsourcing-software-development/full-stack-developer/java-spring-boot-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: ".NET Core Development",
                link: "/outsourcing-software-development/full-stack-developer/dotnetcore-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "PHP Development",
                link: "/outsourcing-software-development/full-stack-developer/php-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "...",
                link: "",
                isSeparated: true,
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Python Development",
                link: "/outsourcing-software-development/full-stack-developer/python-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "Go Development",
                link: "/outsourcing-software-development/full-stack-developer/go-developer/",
                submenu: []
            },
            {
                group: "/outsourcing-software-development/",
                label: "TypeScript JavaScript Development",
                link: "/outsourcing-software-development/full-stack-developer/typescript-javascript-developer/",
                submenu: []
            },
        ],
    },
];