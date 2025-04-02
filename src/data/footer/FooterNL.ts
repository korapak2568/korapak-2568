import { IFooter } from "@/data/footer/model/IFooter";

export const FooterNL: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN is uw innovatiepartner en biedt geavanceerde softwareoplossingen, " +
        "schaalbare websites voor miljoenen gebruikers en toekomstgerichte excellentie. " +
        "Verhoog uw digitale aanwezigheid met ons.",
    importantTitle: "Belangrijke links",
    featureTitle: "Technische expertise",
    infoTitle: "Informatie",
    termOfService: {
        label: "Servicevoorwaarden",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Privacybeleid",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Werkplekbeleid",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Volg ons op GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Verbind met ons op LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "Over CHORN",
            link: "/about-chorn"
        },
        {
            label: "Technische expertise",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Servicevoorwaarden",
            link: "/terms-of-service"
        },
        {
            label: "Privacybeleid",
            link: "/privacy-policy"
        },
        {
            label: "Werkplekbeleid",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Webontwikkeling",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Front-End ontwikkeling",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End & API-ontwikkeling",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps en Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/AI LINE-chatvriend",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM/AI-consultancy",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 en Smart Contracts",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Werkmodellen",
            linkText: "Op afstand, Kantoor, Hybride",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        }
    ],
};
