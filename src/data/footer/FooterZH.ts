import { IFooter } from "@/data/footer/model/IFooter";

export const FooterZH: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORN 是您的创新合作伙伴，提供最先进的软件解决方案，" +
        "为数百万用户提供可扩展的网站，并实现面向未来的卓越性能。" +
        "与我们一起提升您的数字化存在。",
    importantTitle: "重要链接",
    featureTitle: "技术专长",
    infoTitle: "信息",
    termOfService: {
        label: "服务条款",
        link: "/terms-of-service"
    },
    privacyPolicy: {
        label: "隐私政策",
        link: "/privacy-policy"
    },
    workplacePolicy: {
        label: "工作场所政策",
        link: "/workplace-policy"
    },
    socialLinks: [
        {
            label: "GitHub",
            link: "https://github.com/khachornchit",
            icon: "bx bxl-github hover-rotate",
            iconClass: "facebook",
            ariaLabel: "在 GitHub 上关注我们"
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/khachornchit",
            icon: "bx bxl-linkedin hover-rotate",
            iconClass: "linkedin",
            ariaLabel: "在 LinkedIn 上与我们联系"
        }
    ],
    importantLinks: [
        {
            label: "关于 CHORN",
            link: "/about-chorn"
        },
        {
            label: "技术专长",
            link: "/technical-expertise/web-development"
        },
        {
            label: "服务条款",
            link: "/terms-of-service"
        },
        {
            label: "隐私政策",
            link: "/privacy-policy"
        },
        {
            label: "工作场所政策",
            link: "/workplace-policy"
        }
    ],
    featuredLinks: [
        {
            label: "网站开发",
            link: "/technical-expertise/web-development"
        },
        {
            label: "前端开发",
            link: "/technical-expertise/front-end-developer/"
        },
        {
            label: "后端与 API 开发",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOps 和云计算",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/AI LINE聊天好友",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM/AI 顾问",
            link: "/technical-expertise/ai-solutions"
        },
        {
            label: "Web3 和智能合约",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
        },
    ],
    infoLinks: [
        {
            label: "工作模式",
            linkText: "远程、办公室、混合",
            link: "/",
            icon: "flaticon-speed hover-rotate",
        }
    ],
};
