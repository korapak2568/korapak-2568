import { IFooter } from "@/data/footer/model/IFooter";

export const FooterDE: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN verfolgt die neuesten Informationen über die sich schnell verändernden Technologien von heute, Softwareentwicklung, Informationstechnologie für verschiedene Geschäftsdomänen und interessante Nachrichten.",
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
            link: "https://github.com/chorn-digital",
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
            "label": "Über uns",
            "link": "/about-chorn"
        },
        {
            "label": "Kontakt",
            "link": "/contact"
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
            label: "Back-End-Entwicklung",
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
            label: "LLM-AI-Beratung",
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
