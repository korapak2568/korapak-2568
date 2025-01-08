import {IFooter} from "@/data/footer/model/IFooter";

export const Footer: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN is your innovation partner, delivering state-of-the-art software solutions, " +
        "scalable websites for millions of users, and future-ready excellence. " +
        "Elevate your digital presence with us.",
    importantTitle: "Important Links",
    featureTitle: "Featured Services",
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
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Follow us on GitHub"
        },
        {
            label: "GitLab",
            link: "https://gitlab.com/chorn-digital",
            icon: "bx bxl-gitlab hover-rotate",
            iconClass: "pinterest",
            ariaLabel: "Follow us on GitLab"
        },
        {
            label: "Linked",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Connect with us on LinkedIn"
        },
        {
            label: "Facebook",
            link: "https://www.facebook.com/chorn.digital",
            icon: "bx bxl-facebook hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Like us on Facebook"
        },
        {
            label: "Tiktok",
            link: "https://tiktok.com/@chorndigital",
            icon: "bx bxl-tiktok hover-rotate",
            iconClass: "twitter bg-tiktok",
            ariaLabel: "Like us on Tiktok"
        },
    ],
    importantLinks: [
        {
            label: "About",
            link: "/about-chorn"
        },
        {
            label: "Services",
            link: "/services/web-development"
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
            label: "Privacy model",
            link: "/privacy-model"
        },
        {
            label: "Workplace model",
            link: "/workplace-model"
        }
    ],
    featuredLinks: [
        {
            label: "Web Development",
            link: "/services/web-development"
        },
        {
            label: "Front End Development",
            link: "/outsourcing-software-development/front-end-developer/"
        },
        {
            label: "Full Stack Development",
            link: "/outsourcing-software-development/full-stack-developer/"
        },
        {
            label: "Web3 Blockchain Smart Contract",
            link: "/services/web3-blockchain-smart-contract-development",
        },
        {
            label: "Mobile Development",
            link: "/services/mobile-development"
        },
        {
            label: "DevOps Testing",
            link: "/services/devops-testing"
        },
    ],
    infoLinks: [
        {
            label: "Address",
            link: "Chiang Mai, Thailand",
            icon: "flaticon-pin hover-rotate",
        },
    ],
}