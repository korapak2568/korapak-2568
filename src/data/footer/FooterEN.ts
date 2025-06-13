import {IFooter} from "@/data/footer/model/IFooter";

export const FooterEN: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN follows the latest information about rapidly changing technology today, software development, information technology for various business domain industries, and interesting news.",
    importantTitle: "Important Links",
    featureTitle: "Technical Expertise",
    infoTitle: "FooterInformation",
    termOfService: {
        label: "Terms of services",
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
            label: "Linked",
            link: "https://www.linkedin.com/company/chorn",
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
            label: "Contact",
            link: "/contact"
        },
        {
            label: "Technical Expertise",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Terms of services",
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
            label: "Front-End Development",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Back-End Development",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps and Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM-AI LINE Integration",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI Integration",
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
}