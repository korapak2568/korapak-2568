import {IFooter} from "@/data/footer/model/IFooter";

export const FooterFR: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN est votre partenaire en innovation, offrant des solutions logicielles de pointe, " +
        "des sites web évolutifs pour des millions d'utilisateurs, et une excellence prête pour l'avenir. " +
        "Élevez votre présence numérique avec nous.",
    importantTitle: "Liens importants",
    featureTitle: "Expertise technique",
    infoTitle: "Informations",
    termOfService: {
        label: "Conditions d'utilisation",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Politique de confidentialité",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Politique sur le lieu de travail",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Suivez-nous sur GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/khachornchit",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Connectez-vous avec nous sur LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "À propos de CHORN",
            link: "/about-chorn"
        },
        {
            label: "Expertise technique",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Conditions d'utilisation",
            link: "/terms-of-service"
        },
        {
            label: "Politique de confidentialité",
            link: "/privacy-policy"
        },
        {
            label: "Politique sur le lieu de travail",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Développement web",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Développement Front-End",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Développement Back-End & API",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps et Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "Ami de discussion LINE LLM/IA",
            link: "/ai-companions/fah/",
        },
        {
            label: "Consultant LLM/AI",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 et Smart Contract",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Modèles de travail",
            linkText: "Télétravail, Bureau, Hybride",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        },
        {
            label: "Modèles de service",
            linkText: "Permanent, Contrat, Basé sur le projet",
            link: "/",
            icon: "flaticon-connection hover-rotate",
        },
    ],
};