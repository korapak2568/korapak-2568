import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";

export const PythonKO: IFullStackStack = {
    title: "Python",
    description: "Python은 단순성, 가독성 및 다재다능성으로 잘 알려진 고급 인터프리터형 프로그래밍 언어입니다. 웹 개발, 데이터 분석, 인공지능 및 과학 컴퓨팅을 비롯한 다양한 분야에서 널리 사용됩니다.",
    image: "/chorn-images/technical-expertise/full-stack-developer/python-developer.webp",
    alt: "Logo representing Python with Flask framework",
    readMore: "Python, Flask, Django 풀스택 개발 솔루션 더 알아보기",
    link: "/technical-expertise/full-stack-developer/python-developer",
    features: [
        {
            title: "Python 개발",
            description: "Python은 단순성, 가독성 및 다재다능성으로 잘 알려진 고급 인터프리터형 프로그래밍 언어입니다. 웹 개발, 데이터 분석, 인공지능 및 과학 컴퓨팅을 비롯한 다양한 분야에서 널리 사용됩니다.",
            list: []
        },
        {
            title: "배우기 쉽고 사용하기 쉬움",
            description: "Python의 간단한 문법과 가독성은 초보자와 경험이 많은 개발자 모두에게 탁월한 선택이 됩니다. 방대한 표준 라이브러리와 커뮤니티 기여 모듈은 다양한 작업을 위한 즉시 사용할 수 있는 솔루션을 제공합니다.",
            list: [
                "배우기 쉬움",
                "가독성 높은 문법",
                "다재다능",
                "방대한 표준 라이브러리",
                "강력한 커뮤니티",
                "AI/ML에 인기 있음",
                "다중 플랫폼"
            ]
        },
        {
            title: "다양한 응용 프로그램",
            description: "Python은 Django 및 Flask와 같은 프레임워크를 사용한 웹 개발, pandas 및 NumPy와 같은 라이브러리를 사용한 데이터 과학, TensorFlow 및 scikit-learn을 사용한 머신 러닝 등 다양한 분야에서 사용됩니다. 이 다재다능성 덕분에 Python은 많은 개발자들이 선택하는 언어입니다.",
            list: []
        },
        {
            title: "강력한 커뮤니티 지원",
            description: "Python은 활발하고 활동적인 커뮤니티가 있어 계속해서 성장하고 있습니다. 수많은 튜토리얼, 포럼 및 오픈 소스 프로젝트를 통해 개발자들은 쉽게 지원과 리소스를 찾아 기술을 향상시키고 문제를 해결할 수 있습니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Python은 무엇에 사용되나요?",
            answer: "Python은 웹 개발, 데이터 분석, 인공지능, 과학 컴퓨팅 등 다양한 분야에서 사용됩니다."
        },
        {
            question: "Python이 인기 있는 이유는 무엇인가요?",
            answer: "Python의 단순성, 가독성 및 다재다능성 덕분에 초보자와 경험이 많은 개발자 모두에게 인기가 많습니다."
        },
        {
            question: "Python은 웹 개발에 적합한가요?",
            answer: "네, Django와 Flask와 같은 프레임워크 덕분에 Python은 웹 개발에 강력한 도구입니다."
        }
    ],
    frameworks: [
        {
            name: "Django",
            overview: "Django는 빠른 개발과 깔끔하고 실용적인 디자인을 장려하는 고급 웹 프레임워크입니다.",
            strengths: [
                "배터리 포함: ORM, 인증 및 관리자 패널과 같은 많은 내장 기능 제공.",
                "확장성: 대규모 애플리케이션에 적합.",
                "보안: 많은 일반적인 보안 위협에 대한 내장된 보호 기능 포함."
            ],
            useCases: [
                "대규모 웹 애플리케이션",
                "전자상거래 사이트",
                "콘텐츠 관리 시스템"
            ]
        },
        {
            name: "Flask",
            overview: "Flask는 웹 애플리케이션을 실행하기 위한 필수 요소만을 제공하는 마이크로 웹 프레임워크입니다.",
            strengths: [
                "경량화: 최소화되고 유연한 프레임워크.",
                "확장성: 다양한 확장 프로그램을 통해 쉽게 확장 가능.",
                "배우기 쉬움: 간단하게 이해하고 시작할 수 있음."
            ],
            useCases: [
                "소형에서 중형 애플리케이션",
                "API",
                "프로토타이핑"
            ]
        },
        {
            name: "FastAPI",
            overview: "FastAPI는 표준 Python 타입 힌트를 기반으로 Python 3.6+를 위한 최신 고속 웹 프레임워크입니다.",
            strengths: [
                "속도: 비동기 지원 및 높은 성능.",
                "자동 문서화: OpenAPI 및 JSON Schema 문서 생성.",
                "타입 안전성: Python 타입 힌트를 이용한 검증 및 직렬화."
            ],
            useCases: [
                "API",
                "마이크로서비스",
                "실시간 애플리케이션"
            ]
        },
        {
            name: "Pyramid",
            overview: "Pyramid는 웹 애플리케이션을 쉽게 작성할 수 있도록 설계된 범용 웹 프레임워크입니다.",
            strengths: [
                "유연성: 작은 애플리케이션과 대규모 애플리케이션에 모두 적합.",
                "맞춤화: 매우 구성 가능하고 모듈화됨.",
                "보안: 여러 보안 기능 제공."
            ],
            useCases: [
                "마이크로서비스에서 대규모 웹 애플리케이션에 이르는 다양한 애플리케이션"
            ]
        },
        {
            name: "Tornado",
            overview: "Tornado는 확장 가능하고 블로킹되지 않는 웹 서버이자 웹 애플리케이션 프레임워크입니다.",
            strengths: [
                "성능: 장기 연결을 처리할 수 있도록 설계됨.",
                "실시간: 실시간 웹 기술 전문.",
                "확장성: 수천 개의 동시 연결을 처리할 수 있음."
            ],
            useCases: [
                "실시간 애플리케이션",
                "WebSockets",
                "롱 폴링"
            ]
        }
    ]
}
