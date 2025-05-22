// ServicePackagesKO.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesKO: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Premium Innovation Plan, Web3 Core Plan, NFT Evolution Plan의 세 가지 고우선순위 패키지. 3~12개월 내 출시를 목표로 하는 전담 풀타임 개발에 적합. 중요하거나 긴급한 프로젝트에 이상적입니다.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999/월",
                hourlyEquivalent: "$37.49/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 전담 또는 상주)",
                highlight: "MVP, 시스템 업그레이드, 확장 등을 포함한 블록체인이 아닌 풀타임 개발 지원.",
                features: [
                    "PoC, MVP, 기능 개발, 확장, 시스템 재구축",
                    "프론트엔드, 백엔드, API 등 주요 언어 및 프레임워크 지원",
                    "클라우드 및 주요 데이터베이스 통합",
                    "gRPC, RPI, JMS 등 레거시/모던 프로토콜 지원"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999/월",
                hourlyEquivalent: "$43.74/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 전담 또는 상주)",
                highlight: "토크노믹스부터 스마트 계약까지 포함된 Web3 통합 개발.",
                features: [
                    "Solidity, Ethers.js, Ethereum을 활용한 Web3/블록체인 개발",
                    "스마트 계약 생성, 감사, 통합",
                    "Next.js, React, Node.js 기반 프론트엔드 및 백엔드 구축",
                    "에어드랍, 프리세일, 보상 시스템 등 토큰 메커니즘 구현"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999/월",
                hourlyEquivalent: "$43.74/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 전담 또는 상주)",
                highlight: "기존 NFT 계약의 업그레이드 및 신규 NFT 개발 전담.",
                features: [
                    "모던 NFT 개발, 레거시 NFT 업그레이드",
                    "Solidity 기반 스마트 계약 개발 또는 재설계",
                    "Next.js, React, Node.js 등 주요 프레임워크 지원",
                    "ERC721, ERC1155 및 마켓플레이스 통합"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Essential Care Plan, Growth Support Plan, Blockchain Pioneer Plan의 세 가지 공유 시간 패키지. 기존 프로젝트의 지속적인 개발 또는 지원에 적합. 유연한 확장성과 명확한 일정 제공.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899/월",
                hourlyEquivalent: "$5.625/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 공유)",
                highlight: "안정된 시스템을 위한 장기적이고 신뢰할 수 있는 지원. 신규 기능은 포함되지 않습니다.",
                features: [
                    "모니터링, 유지보수, 기술 지원",
                    "문서 업데이트 및 팀 교육",
                    "신규 기능 개발은 포함되지 않음",
                    "주요 언어 및 데이터베이스 지원"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999/월",
                hourlyEquivalent: "$12.49/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 공유)",
                highlight: "성장 중인 시스템을 위한 지속적인 개발과 유연한 지원.",
                features: [
                    "유지보수 + 신규 기능 지속 개발",
                    "주요 프로그래밍 언어 및 프레임워크 지원",
                    "웹, API, 맞춤형 플랫폼 개선",
                    "주요 클라우드 및 DB 플랫폼 지원"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999/월",
                hourlyEquivalent: "$24.99/시간 환산",
                schedule: "월~금, 오전 8:30 ~ 오후 5:30 (풀타임, 공유)",
                highlight: "공유 기반 모델로 새로운 블록체인/Web3/NFT 개발을 지원.",
                features: [
                    "Web3, 스마트 계약, NFT, Ethereum 개발 지원",
                    "프론트엔드 및 백엔드 통합",
                    "성장 중인 블록체인 프로젝트에 최적"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "스타트업, 애자일 팀, 블록체인 개발자를 위한 유연한 시간 기반 패키지. 긴급 버그 수정도 지원!",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40/시간",
                hourlyEquivalent: "$40/시간",
                hours: "주 20~40시간",
                highlight: "파트타임 또는 풀타임의 풀스택 개발 서비스.",
                features: [
                    "온디맨드 Web, API, 커스텀 개발",
                    "모든 주요 기술 스택 지원",
                    "유연한 팀 구조에 이상적"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60/시간",
                hourlyEquivalent: "$60/시간",
                hours: "주 20~40시간",
                highlight: "Web3 기업 및 NFT 스타트업을 위한 고급 블록체인 서비스.",
                features: [
                    "블록체인, 스마트 계약, NFT, Ethereum 개발",
                    "주요 프론트엔드 및 백엔드 프레임워크 지원",
                    "맞춤형 플랫폼과 통합",
                    "선도적인 Web3 프로젝트에 유연하게 참여"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240/버그",
                hourlyEquivalent: "$30/시간 환산",
                hours: "하루 최대 8시간 확보",
                highlight: "당일 처리 가능한 긴급 버그 수정 서비스.",
                features: [
                    "즉각적인 상담 및 대응",
                    "당일 납품 보장",
                    "외부 프로젝트에 대한 건별 수정 지원",
                    "계약 없이 일회성 처리 가능"
                ],
                link: "service-packages/"
            }
        ]
    }
};