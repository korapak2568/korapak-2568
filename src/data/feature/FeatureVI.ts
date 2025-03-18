import {IFeature} from "@/data/feature/model/IFeature";

export const FeatureVI: IFeature = {
    title: "System Analysis & Software Development",
    span: "Care Features",
    subTitle: "",
    stacks: [
        {
            title: "Front End Development",
            description: "UI frameworks and libraries such as React, Next.js, Angular, Vue, " +
                "and TypeScript, JavaScript, HTML3, and CSS3.",
            link: "/technical-expertise/front-end-developer/",
            icon: "bx bx-code-alt"
        },
        {
            title: "Back End Development",
            description: "Expertise in server-side technologies, including Node.js, Java, Spring Boot, Go, PHP, and Python, for building scalable and efficient back-end systems.",
            link: "/technical-expertise/full-stack-developer/",
            icon: "bx bx-server"
        },
        {
            title: "Web Development",
            description: "End-to-end web development solutions using modern technologies like Node.js, Java, Spring Boot, Go, PHP, and Python to create dynamic, responsive websites.",
            link: "/technical-expertise/web-development/",
            icon: "bx bx-globe"
        },
        {
            title: "Web3 & Blockchain",
            description: "We also specialize in cutting-edge technologies like Blockchain, Decentralized Finance (DeFi), Smart Contracts, and Web3, ensuring your financial technical-expertise stay ahead of the curve.",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
            icon: "bx bx-coin-stack"
        }
    ],
}
