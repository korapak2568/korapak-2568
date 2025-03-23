import {IFeature} from "@/data/feature/model/IFeature";

export const FeatureKO: IFeature = {
    title: "웹사이트 개발 개요",
    span: "시스템 분석 및 소프트웨어 개발",
    subTitle: "",
    stacks: [
        {
            title: "프론트엔드 개발",
            description: "React, Next.js, Angular, Vue와 같은 UI 프레임워크 및 라이브러리, " +
                "그리고 TypeScript, JavaScript, HTML3, CSS3.",
            link: "/technical-expertise/front-end-developer/",
            icon: "bx bx-code-alt"
        },
        {
            title: "백엔드 개발",
            description: "확장 가능하고 효율적인 백엔드 시스템 구축을 위한 Node.js, Java, Spring Boot, Go, PHP, Python 등의 서버 측 기술 경험.",
            link: "/technical-expertise/full-stack-developer/",
            icon: "bx bx-server"
        },
        {
            title: "웹 API 개발",
            description: "동적이고 반응형 웹사이트를 만들기 위해 Node.js, Java, Spring Boot, Go, PHP, Python과 같은 현대적인 기술을 사용한 종합적인 웹 개발 솔루션.",
            link: "/technical-expertise/web-development/",
            icon: "bx bx-globe"
        },
        {
            title: "Web3 & 블록체인",
            description: "블록체인, 분산 금융(DeFi), 스마트 계약, Web3와 같은 최첨단 기술 경험으로 금융 기술 전문성이 항상 앞서 나가도록 보장합니다.",
            link: "/technical-expertise/web3-blockchain-smart-contract-development",
            icon: "bx bx-coin-stack"
        }
    ],
}
