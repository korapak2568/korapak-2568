import { IFooter } from "@/data/footer/model/IFooter";

export const FooterJA: IFooter = {
    title: "CHORN",
    link: "https://chorn.in.th/",
    www: "www.chorn.in.th",
    description: "CHORNは、最先端のソフトウェアソリューション、" +
        "数百万ユーザー向けのスケーラブルなウェブサイト、" +
        "そして未来を見据えた卓越性を提供するイノベーションパートナーです。" +
        "デジタルプレゼンスを私たちと共に向上させましょう。",
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
            link: "https://github.com/khachornchit",
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
            label: "バックエンド＆API開発",
            link: "/technical-expertise/full-stack-developer/"
        },
        {
            label: "DevOpsとクラウド",
            link: "/technical-expertise/cloud-devops/"
        },
        {
            label: "LLM/AI LINEチャット友達",
            link: "/ai-companions/fah/",
        },
        {
            label: "LLM/AIコンサルタント",
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
};
