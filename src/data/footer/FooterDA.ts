import {IFooter} from "@/data/footer/model/IFooter";

export const FooterDA: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN er din innovationspartner, der tilbyder avancerede softwareløsninger, " +
        "skalerbare websteder til millioner af brugere og fremtidsorienteret ekspertise. " +
        "Løft din digitale tilstedeværelse med os.",
    importantTitle: "Vigtige links",
    featureTitle: "Teknisk ekspertise",
    infoTitle: "Information",
    termOfService: {
        label: "Servicevilkår",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Privatlivspolitik",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Arbejdspladspolitik",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Følg os på GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Forbind med os på LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "Om CHORN",
            link: "/about-chorn"
        },
        {
            label: "Teknisk ekspertise",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Servicevilkår",
            link: "/terms-of-service"
        },
        {
            label: "Privatlivspolitik",
            link: "/privacy-policy"
        },
        {
            label: "Arbejdspladspolitik",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Webudvikling",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Front-End-udvikling",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End Udvikling",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps og Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM-AI LINE-integration",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI-integration",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 og Smart Contracts",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Arbejdsmodeller",
            linkText: "Fjernarbejde, Kontor, Hybrid",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        }
    ],
};
