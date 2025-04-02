import { IFooter } from "@/data/footer/model/IFooter";

export const FooterDE: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN ist Ihr Innovationspartner und bietet fortschrittliche Softwarelösungen, " +
        "skalierbare Websites für Millionen von Nutzern und zukunftsorientierte Exzellenz. " +
        "Steigern Sie Ihre digitale Präsenz mit uns.",
    importantTitle: "Wichtige Links",
    featureTitle: "Technische Expertise",
    infoTitle: "Informationen",
    termOfService: {
        label: "Nutzungsbedingungen",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Datenschutzrichtlinie",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Arbeitsplatzrichtlinie",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Folgen Sie uns auf GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Vernetzen Sie sich mit uns auf LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "Über CHORN",
            link: "/about-chorn"
        },
        {
            label: "Technische Expertise",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Nutzungsbedingungen",
            link: "/terms-of-service"
        },
        {
            label: "Datenschutzrichtlinie",
            link: "/privacy-policy"
        },
        {
            label: "Arbeitsplatzrichtlinie",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Webentwicklung",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Front-End-Entwicklung",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End- & API-Entwicklung",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps und Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/KI LINE-Chat-Freund",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM/AI-Beratung",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 und Smart Contracts",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Arbeitsmodelle",
            linkText: "Remote, Büro, Hybrid",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        }
    ],
};
