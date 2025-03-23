import {IService} from "@/data/service/model/IService";

export const ServiceKO: IService = {
    title: "LLM/AI 통합",
    description: "CHORN은 LLM/AI 에이전트 개발에 특화되어 있으며, 특정 요구사항을 충족시키기 위한 지능적이고 반응성이 뛰어난 솔루션을 제공합니다. 전문 분야에는 확장 가능한 웹사이트, 모바일 애플리케이션 및 풀스택 소프트웨어 시스템이 포함됩니다. LINE을 통한 <strong>LLM 기반</strong> 대화형 기술 전문 서비스는 ChatGPT, Perplexity, DeepSeek와 같은 대규모 언어 모델의 기능을 보여주며, 디지털 존재감을 강화하고 운영 효율성을 간소화하는 혁신적인 접근 방식을 선보입니다.",

    services: [
        {
            title: "LLM 에이전트 개발",
            description: "ChatGPT 및 DeepSeek과 같은 고급 LLM을 활용한 지능형 AI 에이전트를 설계하고 배포하여 자동화와 효율성을 향상시키기 위해 기존 시스템과 원활하게 통합합니다."
        },
        {
            title: "레거시 시스템 통합",
            description: "고급 AI 기능을 통합하여 기존 시스템을 현대화하고, 원활한 데이터 흐름과 향상된 기능성을 보장합니다."
        },
        {
            title: "맞춤형 LLM 솔루션",
            description: "특정 비즈니스 과제를 해결하고 운영을 최적화하기 위해 최첨단 LLM을 활용한 맞춤형 AI 모델을 개발합니다."
        },
        {
            title: "AI 워크플로우 자동화",
            description: "AI 기반 자동화 솔루션을 사용하여 반복적인 작업을 간소화하고 워크플로우를 최적화하여 생산성을 향상시킵니다."
        },
        {
            title: "예측 분석 및 인사이트",
            description: "AI를 활용하여 데이터 패턴을 분석하고, 트렌드를 예측하며, 더 나은 의사 결정을 위한 실행 가능한 인사이트를 제공합니다."
        }
    ],

    demo: {
        title: "LLM/AI 통합 데모",
        description: "AI 기반 통합의 데모인 AI 채팅 컴패니언에 오신 것을 환영합니다. LINE 애플리케이션을 통해 사용자와 원활하게 상호작용하도록 설계된 " +
            "다양한 AI 컴패니언을 탐색해보세요. 각각 고유한 성격을 가지고 있습니다. " +
            "이러한 AI 컴패니언은 태국어, 영어, 중국어, 일본어, 한국어, 프랑스어 및 베트남어를 포함한 " +
            "여러 언어로 소통할 수 있습니다.",
        link: {
            text: "<a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>틱톡</a>에서 작동 중인 데모를 확인해보세요.",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "작동 방식",
            steps: [
                {
                    title: "AI 컴패니언 선택",
                    description: "사용 가능한 AI 컴패니언 목록을 탐색하고 가장 마음에 드는 것을 선택하세요."
                },
                {
                    title: "AI를 친구로 추가",
                    description: "선택한 AI의 '친구 추가' 버튼을 클릭하거나 LINE 앱을 사용하여 제공된 QR 코드를 스캔하세요."
                },
                {
                    title: "채팅 시작",
                    description: "AI와의 대화를 시작하세요. 기본 언어는 태국어이지만, AI는 태국어 번역과 함께 사용자의 언어로 응답합니다."
                },
                {
                    title: "더 많은 컴패니언 추가",
                    description: "사용 가능한 모든 AI 컴패니언과 자유롭게 연결하여 다양한 상호작용을 즐겨보세요."
                }
            ]
        },
        note: [
            {
                title: "참고",
                description: "이 데모는 테스트 서버에서 실행 중입니다. AI가 첫 번째 메시지에 응답하지 않는 경우, 응답할 때까지 추가 메시지를 보내주세요."
            },
            {
                title: "",
                description: "오늘 다국어 대화를 경험하고 각 AI 컴패니언의 독특한 성격을 발견해보세요!"
            }]
    }
};
