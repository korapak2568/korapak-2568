import {INavbar} from "@/data/model/navbar/INavbar";

export const NAVBAR: INavbar[] = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About",
        link: "/about-chorn/",
    },
    {
        label: "Contact",
        link: "/contact-chorn/",
    },
    {
        label: "Services",
        link: "#",
        submenu: [
            {
                label: "Web Development",
                link: "/services/web-development",
            },
            {
                label: "Front-End Development",
                link: "/services/frontend-development",
            },
            {
                label: "Full-Stack Development",
                link: "/services/fullstack-development",
            },
            {
                label: "Web3 & Blockchain",
                link: "/services/web3-blockchain-smart-contract-development",
            },
            {
                label: "...",
                link: "",
                isSeparated: true
            },
            {
                label: "Mobile Development",
                link: "/services/mobile-development",
            },
            {
                label: "DevOps Testing",
                link: "/services/devops-testing",
            },
        ],
    },
    {
        label: "Outsourcing",
        link: "/services/frontend-development",
        submenu: [
            {
                label: "Next.js Development",
                link: "/services/frontend-development/next.js",
            },
            {
                label: "React Development",
                link: "/services/frontend-development/react",
            },
            {
                label: "Angular Development",
                link: "/services/frontend-development/angular",
            },
            {
                label: "Vue Development",
                link: "/services/frontend-development/vue",
            },
            {
                label: "...",
                link: "",
                isSeparated: true
            },
            {
                label: "Node.js Development",
                link: "/services/fullstack-development/nodejs",
            },
            {
                label: "Java Spring Boot Development",
                link: "/services/fullstack-development/java-spring-boot",
            },
            {
                label: ".NET Core Development",
                link: "/services/fullstack-development/dotnetcore",
            },
            {
                label: "PHP Development",
                link: "/services/fullstack-development/php",
            },
            {
                label: "...",
                link: "",
                isSeparated: true
            },
            {
                label: "Python Development",
                link: "/services/fullstack-development/python",
            },
            {
                label: "Go-Lang Development",
                link: "/services/fullstack-development/go-lang",
            },
        ],
    },
];