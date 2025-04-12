import { IFooter } from "@/data/footer/model/IFooter";

export const FooterVI: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN theo dõi thông tin mới nhất về công nghệ đang thay đổi nhanh chóng hiện nay, phát triển phần mềm, công nghệ thông tin cho các ngành lĩnh vực kinh doanh khác nhau, và những tin tức thú vị.",
    importantTitle: "Liên kết quan trọng",
    featureTitle: "Chuyên môn kỹ thuật",
    infoTitle: "Thông tin",
    termOfService: {
        label: "Điều khoản dịch vụ",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "Chính sách bảo mật",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "Chính sách nơi làm việc",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/chorn-digital",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "Theo dõi chúng tôi trên GitHub"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/chorn",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "Kết nối với chúng tôi trên LinkedIn"
        }
    ],
    importantLinks: [
        {
            label: "Về CHORN",
            link: "/about-chorn"
        },
        {
            label: "Chuyên môn kỹ thuật",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Phát triển Back-End",
            link: "/terms-of-service"
        },
        {
            label: "Chính sách bảo mật",
            link: "/privacy-policy"
        },
        {
            label: "Chính sách nơi làm việc",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "Phát triển website",
            link: "/technical-expertise/web-development"
        },
        {
            label: "Phát triển Front-End",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "Phát triển Back-End & API",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps và Cloud",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "Tích hợp LLM-AI LINE",
            link: "/ai-companions/fah/",
        },
        {
            label: "Tư vấn LLM-AI",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 và Hợp đồng thông minh",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "Mô hình làm việc",
            linkText: "Từ xa, Văn phòng, Kết hợp",
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
