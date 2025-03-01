import {IFooter} from "@/data/footer/model/IFooter";

export const Footer: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN is your innovation partner, delivering state-of-the-art software solutions, " +
        "scalable websites for millions of users, and future-ready excellence. " +
        "Elevate your digital presence with us.",
    importantTitle: "Important Links",
    featureTitle: "Feature Services",
    infoTitle: "Information",
    termOfService: {
        label: "Terms of service",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Privacy Policy",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Workplace Policy",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Follow us on GitHub"
        },
        {
            label: "Linked",
            link: "https://www.linkedin.com/in/khachornchit",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Connect with us on LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "About",
            link: "/about-chorn"
        },
        {
            label: "Technical Expertise",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Contact",
            link: "/contact-chorn"
        },
        {
            label: "Terms of service",
            link: "/terms-of-service"
        },
        {
            label: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            label: "Workplace Policy",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Web Development",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Front End Development",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End & API Development",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps and Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/AI CRM Demo",
            link: "/ai-companions"
        },
        {
            label: "LLM/AI System Integration",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 and Smart Contract",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Work Models",
            linkText: "Remote, Office, Hybrid",
            link: "/",
            icon: "flaticon-speed hover-rotate", // Represents work or career
        },
        {
            label: "Service Models",
            linkText: "Permanent, Contract, Freelance",
            link: "/",
            icon: "flaticon-connection hover-rotate", // Represents flexibility and service customization
        },
    ],
}