import {IFooter} from "@/data/footer/model/IFooter";

export const FooterKO: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN은 혁신적인 파트너로서 최첨단 소프트웨어 솔루션, " +
        "수백만 사용자를 위한 확장 가능한 웹사이트, 그리고 미래를 대비한 우수성을 제공합니다. " +
        "저희와 함께 디지털 존재감을 향상시키세요.",
    importantTitle: "중요 링크",
    featureTitle: "기술 전문 지식",
    infoTitle: "정보",
    termOfService: {
        label: "서비스 이용약관",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "개인정보 보호정책",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "직장 정책",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "GitHub에서 팔로우하기"
        },
        {
            label: "Linked",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "LinkedIn에서 연결하기"
        }
    ],
    importantLinks: [
        {
            label: "CHORN 소개",
            link: "/about-chorn"
        },
        {
            label: "기술 전문성",
            link: "/technical-expertise/web-development"
        },
        {
            label: "백엔드 개발",
            link: "/terms-of-service"
        },
        {
            label: "개인정보 보호정책",
            link: "/privacy-policy"
        },
        {
            label: "직장 정책",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "웹 개발",
            link: "/technical-expertise/web-development"
        },
        {
            label: "프론트엔드 개발",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "백엔드 & API 개발",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps 및 클라우드",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM-AI LINE 통합",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI 통합",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 및 스마트 계약",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "근무 모델",
            linkText: "원격, 사무실, 하이브리드",
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