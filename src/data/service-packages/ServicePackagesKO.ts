// ServicePackagesKO.ts
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export const ServicePackagesKO: IServicePackages = {
    name: "서비스 패키지",
    premium: {
        name: "프리미엄 패키지",
        description: "초기 단계 플랫폼, MVP, 내부 도구 또는 빠른 납품이 필요한 프로젝트를 위한 컴팩트한 엔지니어링 플랜입니다. 장기 계약이나 전체 팀 투자 없이 전문가 지원이 필요한 스타트업과 기업을 위해 설계되었습니다.",
        plans: [
            {
                name: "소규모 프로젝트 플랜",
                price: "USD 299 / 1~3일",
                schedule: "유연함 (프로젝트 기반, ≤1주)",
                highlight: "수일 내 납품 가능한 마이크로 작업, 버그 수정 또는 소규모 기능에 적합한 효율적인 솔루션.",
                features: [
                    "긴급 작업, 빠른 프로토타입, 단일 버그 수정에 이상적",
                    "일반적으로 2~5 영업일 내 납품",
                    "기획, 코드 전달, 기본 테스트 포함",
                    "프론트엔드, 백엔드 또는 API 소규모 기능 지원",
                    "정기적인 지원 또는 주간 미팅 없음",
                    "일회성 또는 단일 요구사항에 가장 적합"
                ],
                link: "service-packages/"
            },
            {
                name: "빠른 제공 계획",
                price: "USD 499 / 1–2주",
                schedule: "유연한 일정 (프로젝트 기반, 약 1–2주)",
                highlight: "소규모 기능, 통합 또는 향상 작업을 몇 주 내에 제공하는 스프린트 스타일의 집중 패키지입니다.",
                features: [
                    "중간 수준의 복잡도를 가진 기능, 컴포넌트 업그레이드 또는 통합 작업에 적합",
                    "기획, 디자인 반복, 구현, 기능 테스트를 포함",
                    "풀스택 작업 또는 특정 모듈(API, 대시보드, 자동화 등)을 지원",
                    "기획 및 전달을 위한 최대 2회의 동기화 포함",
                    "장기 계약 없이 빠른 납품 가능",
                    "초기 스타트업 팀, POC 또는 내부 툴 확장에 적합"
                ],
                link: "service-packages/"
            },
            {
                name: "기본 케어 플랜",
                price: "USD 900 / 월",
                schedule: "월–금, 8:30–17:30 (공유)",
                highlight: "개발 리소스가 제한된 MVP, 내부 도구, 초기 플랫폼에 적합한 기본 엔지니어링 지원.",
                features: [
                    "간소한 구성 및 핵심 기능 안정화",
                    "정기적인 모니터링, 버그 수정, 기술 유지 관리",
                    "내부 팀을 위한 문서화 및 기술 인수인계",
                    "복잡한 기능 개발은 제외됨",
                    "일반적으로 사용되는 언어 및 데이터베이스와 호환"
                ],
                link: "service-packages/"
            }
        ]
    },
    gold: {
        name: "골드 패키지",
        description: "Growth Support, Advanced Growth Plan, Blockchain Pioneer로 구성된 3가지 공유형 서비스 플랜 세트로, 출시 이후 제품 지원, 전략적 반복 개선, 확장 가능한 기술 운영을 위해 설계되었습니다. 전담 인력 채용 없이도 안정적인 엔지니어링을 원하는 스타트업, 에이전시 및 기업을 위한 솔루션입니다.",
        plans: [
            {
                name: "성장 지원 플랜",
                price: "USD 1,999 / 월",
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
                name: "고급 성장 플랜",
                price: "USD 2,999 / 월",
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
                name: "블록체인 개척자 플랜",
                price: "USD 3,999 / 월",
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
    platinum: {
        name: "플래티넘 패키지",
        description: "CEO, CTO, 프로덕트 오너, 창업자를 위한 전략적인 풀타임 참여 패키지 3종 — 프리미엄 혁신 플랜, Web3 핵심 플랜, NFT 진화 플랜 — 제품 출시를 3~12개월 내 가속화하고자 하는 기업을 위한 신뢰할 수 있는 기술 파트너를 목표로 설계되었습니다. 확장성, 빠른 반복 개발, 내부 채용 부담 완화가 필요한 미션 크리티컬 이니셔티브에 적합합니다.",
        plans: [
            {
                name: "프리미엄 혁신 플랜",
                price: "USD 5,900 / month",
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
                name: "Web3 핵심 플랜",
                price: "USD 7,900 / month",
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
                name: "NFT 진화 플랜",
                price: "USD 7,900 / month",
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
};