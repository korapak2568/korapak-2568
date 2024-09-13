import {IServiceLegacy} from "../model/services/IServiceLegacy";
import {IServiceImage} from "@/data/model/services/IServiceImage";

export const FEATURE_SERVICE_INFO: IServiceImage = {
    title: "Software Development Services",
    span: "Care Features",
    subTitle: "",
    description: [],
    additions: [
        {
            title: "Front End Development",
            description: "UI frameworks and libraries such as React, Next.js, Angular, Vue, " +
                "and TypeScript, JavaScript, HTML3, and CSS3.",
            image: "",
            readMore: "Read More",
            link: "/services/front-end-developer",
            details: [],
            faq: [],
            icon: "bx bx-code-alt"
        },
        {
            title: "Full Stack Development",
            description: "Comprehensive full-stack-developer development services using Node.js, " +
                "Java, Spring Boot, Go-lang, PHP, and Python.",
            image: "",
            readMore: "Read More",
            link: "/services/full-stack-developer",
            details: [],
            faq: [],
            icon: "bx bx-layer"
        },
        {
            title: "Web3 & Blockchain",
            description: "We also specialize in cutting-edge technologies like Blockchain, Decentralized Finance (DeFi), Smart Contracts, and Web3, ensuring your financial services stay ahead of the curve.",
            image: "",
            readMore: "Read More",
            link: "/services/web3-blockchain-smart-contract-development",
            details: [],
            faq: [],
            icon: "bx bx-coin-stack"
        },
        {
            title: "Mobile Development",
            description: "Hybrid mobile applications for iOS and Android using React Native and Flutter.",
            image: "",
            readMore: "Read More",
            link: "/services/mobile-development",
            details: [],
            faq: [],
            icon: "bx bx-mobile"
        },
    ]
}
