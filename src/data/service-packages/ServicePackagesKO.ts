// ServicePackagesKO.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesKO: IServicePackages = {
    platinum: {
        name: "Platinum Packages",
        description: "Premium Innovation Plan, Web3 Core Plan, NFT Evolution Plan은 3~12개월 내 제품 출시를 목표로 하는 전략적인 스타트업 및 기업을 위한 전담 풀타임 개발 패키지입니다. 사내 인력을 대체하는 기술 파트너로서 확장성과 신속한 실행을 지원합니다.",
        plans: [
            {
                name: "Premium Innovation Plan",
                price: "$5,999 USD/month",
                hourlyEquivalent: "$37.49 USD/hr",
                schedule: "월–금, 오전 8:30 – 오후 5:30 (전담 풀타임)",
                highlight: "PoC, MVP 개발, 시스템 업그레이드 및 확장을 포함한 비블록체인 프로젝트 전용 풀타임 기술 지원.",
                features: [
                    "시스템 업그레이드, 신규 기능 개발, 확장성 확보, PoC 및 MVP 개발",
                    "프론트엔드 및 백엔드 개발에 사용되는 주요 언어 및 프레임워크 지원",
                    "주요 데이터베이스 및 클라우드 플랫폼 지원",
                    "gRPC, RPI, JMS 등 최신 및 레거시 프로토콜 지원"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Core Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "월–금, 오전 8:30 – 오후 5:30 (전담 풀타임)",
                highlight: "토크노믹스와 스마트 계약 개발을 포함한 완전한 Web3 통합 블록체인 개발.",
                features: [
                    "Solidity, Ethers.js, Ethereum 기반의 블록체인 및 Web3 개발",
                    "스마트 계약 개발, 보안 감사 및 통합",
                    "프론트엔드 및 백엔드: Next.js, React, Node.js",
                    "에어드롭, 프리세일, 보상 시스템 등 토큰 메커니즘"
                ],
                link: "service-packages/"
            },
            {
                name: "NFT Evolution Plan",
                price: "$6,999 USD/month",
                hourlyEquivalent: "$43.74 USD/hr",
                schedule: "월–금, 오전 8:30 – 오후 5:30 (전담 풀타임)",
                highlight: "최신 NFT 개발 및 레거시 계약 현대화를 위한 전담 개발 서비스.",
                features: [
                    "최신 NFT 개발 및 기존 NFT 스마트 계약 개선",
                    "Solidity 기반 스마트 계약 설계 및 재구성",
                    "Next.js, React, Node.js 등 주요 프레임워크 통합",
                    "ERC721, ERC1155 등 NFT 표준 및 마켓플레이스 지원"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "Gold Packages",
        description: "Essential Care, Growth Support, Blockchain Pioneer의 세 가지 파트타임 패키지는 제품 출시 이후의 안정적인 운영, 지속적인 개선, 그리고 기술적 성장 지원을 위해 설계되었습니다. 전담 개발자를 두기 어려운 스타트업, 에이전시, 그리고 기술 중심 조직에 이상적인 확장 가능한 파트너십 모델입니다.",
        plans: [
            {
                name: "Essential Care Plan",
                price: "$899 USD/월",
                hourlyEquivalent: "$5.625 USD/시간",
                schedule: "월–금, 08:30–17:30 (시간 공유)",
                highlight: "MVP, 내부 도구 또는 소규모 플랫폼을 위한 필수 기술 유지보수 및 운영 안정성 확보에 적합한 베이직 패키지입니다.",
                features: [
                    "경량 설정 및 핵심 기능 최적화",
                    "시스템 모니터링, 버그 수정, 안정성 유지",
                    "기술 문서화 및 온보딩 지원 문서 제공",
                    "복잡한 신규 기능 개발은 포함되지 않음",
                    "주요 언어 및 데이터베이스 기반 지원"
                ],
                link: "service-packages/"
            },
            {
                name: "Growth Support Plan",
                price: "$1,999 USD/월",
                hourlyEquivalent: "$12.49 USD/시간",
                schedule: "월–금, 08:30–17:30 (시간 공유)",
                highlight: "지속적인 개선과 적절한 개발 속도가 필요한 성장 단계의 팀에게 적합한 중간 수준의 개발 지원 패키지입니다.",
                features: [
                    "정기 유지보수 및 중간 난이도의 기능 개발",
                    "주 1회 이해관계자와의 동기화 미팅 (1–3인 팀 기준)",
                    "API, 웹 플랫폼, 내부 툴 전반에 대한 풀스택 지원",
                    "다양한 언어, 프레임워크, DB 및 클라우드 환경 대응",
                    "팀 확장 또는 상위 플랜으로 유연한 스케일링 가능"
                ],
                link: "service-packages/"
            },
            {
                name: "Advanced Growth Plan",
                price: "$2,999 USD/월",
                hourlyEquivalent: "$18.74 USD/시간",
                schedule: "월–금, 08:30–17:30 (시간 공유)",
                highlight: "자주 업데이트가 필요한 서비스 또는 복잡한 사용자 흐름을 다루는 프로젝트에 최적화된 고급 성장 플랜입니다.",
                features: [
                    "기능 확장, 성능 최적화, UI 개선 중심의 집중 개발",
                    "짧은 배포 주기와 빠른 피드백 루프를 위한 워크플로우",
                    "주 1~2회 이해관계자와의 미팅 (3~6인 기준)",
                    "웹, 서버, 제3자 통합 등 풀스택 기술 커버리지",
                    "고도화된 시스템 아키텍처 및 고성능 환경 대응"
                ],
                link: "service-packages/"
            },
            {
                name: "Blockchain Pioneer Plan",
                price: "$3,999 USD/월",
                hourlyEquivalent: "$24.99 USD/시간",
                schedule: "월–금, 08:30–17:30 (풀타임, 시간 공유)",
                highlight: "Web3, NFT, Ethereum 기반 프로젝트를 처음 시작하거나 실험하는 팀을 위한 블록체인 입문 패키지입니다.",
                features: [
                    "Ethereum 스마트 컨트랙트 및 dApp 개발",
                    "Web2/3 백엔드 시스템 및 토큰 이코노미 통합",
                    "NFT 발행, 메타데이터 관리, 마켓 연동 지원",
                    "PoC 또는 초기 Web3 제품 개발에 적합"
                ],
                link: "service-packages/"
            }
        ]
    },
    premium: {
        name: "Premium Packages",
        description: "유연한 시간제 개발 패키지 — 애자일 팀, 스타트업, Web3 프로젝트에 적합한 온디맨드 개발 지원. 내부 인력 고용 없이 확장성 확보. 긴급 버그 수정 포함.",
        plans: [
            {
                name: "Pro Dev Flex Pack",
                price: "$40 USD/hr",
                hourlyEquivalent: "$40 USD/hr",
                hours: "주 20–40시간",
                highlight: "전문적인 풀스택 개발 리소스를 유연하게 투입해 제품 로드맵을 빠르게 추진.",
                features: [
                    "요구에 맞춘 커스텀 소프트웨어, 웹, API 개발",
                    "주요 언어 및 프레임워크 모두 지원",
                    "고정 채용 없이 전문 개발 인력 확보 가능"
                ],
                link: "service-packages/"
            },
            {
                name: "Web3 Elite Pack",
                price: "$60 USD/hr",
                hourlyEquivalent: "$60 USD/hr",
                hours: "주 20–40시간",
                highlight: "NFT, 스마트컨트랙트, Web3 전용 블록체인 개발 전문 서비스.",
                features: [
                    "블록체인, NFT, 스마트컨트랙트, Ethereum 기반 개발",
                    "Next.js, React, Node.js 등 통합 지원",
                    "Web3 제품의 전략적 출시 및 확장을 위한 최적화"
                ],
                link: "service-packages/"
            },
            {
                name: "Urgent Bug Fix",
                price: "$240 USD/fix",
                hourlyEquivalent: "$30 USD/hr",
                hours: "하루 8시간 확보",
                highlight: "긴급 문제 발생 시 신속 대응 — 당일 진단 및 해결, 계약 없이 단발성 이용 가능.",
                features: [
                    "즉시 분석 및 대응, 당일 납품",
                    "외부 시스템에도 단일 버그 수정 가능",
                    "장기 계약 불필요",
                    "프로덕션 시스템 장애 최소화를 위한 빠른 해결"
                ],
                link: "service-packages/"
            }
        ]
    }
};