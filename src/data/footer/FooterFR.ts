import {IFooter} from "@/data/footer/model/IFooter";

export const FooterFR: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN suit les dernières informations sur les technologies en évolution rapide d'aujourd'hui, le développement de logiciels, les technologies de l'information pour diverses industries de domaines d'affaires, et les actualités intéressantes.",
    importantTitle: "Liens importants",
    featureTitle: "Expertise technique",
    infoTitle: "Informations",
    termOfService: {
        label: "Conditions d'utilisation",
        link: "/terms-of-services"
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
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Suivez-nous sur GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
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
            link: "/terms-of-services"
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
            label: "Développement Back-End",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps et Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "Intégration LLM-IA LINE",
            link: "/ai-companions/fah/",
        },
        {
            label: "Intégration LLM-IA",
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
        }
    ],
    frontend: {
        title: "Front-End",
        items: [
            {
                label: "Next.js",
                link: '/technical-expertise/front-end-developer/nextjs-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "React.js",
                link: '/technical-expertise/front-end-developer/react-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "Vue.js",
                link: '/technical-expertise/front-end-developer/vue-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "Angular",
                link: '/technical-expertise/front-end-developer/angular-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "JavaScript",
                link: '/technical-expertise/front-end-developer/javascript-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "TypeScript",
                link: '/technical-expertise/front-end-developer/typescript-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "CSS3",
                link: '/technical-expertise/front-end-developer/css3-developer',
                icon: "flaticon-speed hover-rotate"
            },
            {
                label: "HTML5",
                link: '/technical-expertise/front-end-developer/html5-developer',
                icon: "flaticon-speed hover-rotate"
            },
        ]
    },
    backend: {
        title: "Back-End",
        items: [
            {
                label: "Java",
                link: '/technical-expertise/full-stack-developer/java-spring-boot-developer',
            },
            {
                label: "Node.js",
                link: '/technical-expertise/full-stack-developer/nodejs-developer',
            },
            {
                label: "Python",
                link: '/technical-expertise/full-stack-developer/python-developer',
            },
            {
                label: "Go",
                link: '/technical-expertise/full-stack-developer/go-developer',
            },
            {
                label: "PHP",
                link: '/technical-expertise/full-stack-developer/php-developer',
            },
            {
                label: "DotNet Core",
                link: '/technical-expertise/full-stack-developer/dotnetcore-developer',
            },
        ]
    },
    devops: {
        title: "DevOps",
        items: [
            {
                label: "Docker",
                link: '/technical-expertise/cloud-devops/docker',
            },
            {
                label: "Kubernetes",
                link: '/technical-expertise/cloud-devops/kubernetes',
            },
            {
                label: "GitHub",
                link: '/technical-expertise/cloud-devops/github',
            },
            {
                label: "GitLab",
                link: '/technical-expertise/cloud-devops/gitlab',
            }
        ]
    }
};