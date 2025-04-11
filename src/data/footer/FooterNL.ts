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
            link: "https://github.com/chorn-digital",
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
            label: "Back-End Ontwikkeling",
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
            label: "LLM-AI LINE-integratie",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI-integratie",
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
