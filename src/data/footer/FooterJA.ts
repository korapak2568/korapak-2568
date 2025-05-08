import { IFooter } from "@/data/footer/model/IFooter";

export const FooterJA: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORNは、現代の急速に変化するテクノロジー、ソフトウェア開発、様々なビジネスドメイン産業向けの情報技術、そして興味深いニュースに関する最新情報をフォローしています。",
    importantTitle: "重要リンク",
    featureTitle: "技術的専門知識",
    infoTitle: "情報",
    termOfService: {
        label: "利用規約",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "プライバシーポリシー",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "職場ポリシー",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "GitHubでフォロー"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "LinkedInで接続"
        }
    ],
    importantLinks: [
        {
            label: "CHORNについて",
            link: "/about-chorn"
        },
        {
            label: "技術専門知識",
            link: "/technical-expertise/web-development"
        },
        {
            label: "利用規約",
            link: "/terms-of-service"
        },
        {
            label: "プライバシーポリシー",
            link: "/privacy-policy"
        },
        {
            label: "職場ポリシー",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "ウェブ開発",
            link: "/technical-expertise/web-development"
        },
        {
            label: "フロントエンド開発",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "バックエンド開発",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOpsとクラウド",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM-AI LINE 統合",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM-AI 統合",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3およびスマートコントラクト",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "勤務形態",
            linkText: "リモート、オフィス、ハイブリッド",
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
