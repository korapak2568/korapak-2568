import { IFullStackStack } from "@/data/fullstack/model/IFullStackStack";
import { ImageUrl } from "@/image/ImageUrl";

export const JavaKO: IFullStackStack = {
    title: "Java 개발",
    description: "Java는 강력하고 유연한 언어로, 현대의 엔터프라이즈 및 클라우드 애플리케이션에 적합합니다. Spring Boot 프레임워크, gRPC 기술, RMI와 같은 레거시 시스템 호환 도구를 통해 Java는 여전히 확장 가능한 풀스택 솔루션의 핵심 언어로 자리 잡고 있습니다.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java, Spring Boot, gRPC 및 RMI 개발",
    readMore: "Java 및 Spring Boot 기반 풀스택 개발 더 알아보기",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "현대 Java 개발",
            description: "Java는 record, pattern matching, virtual thread와 같은 최신 기능으로 지속적으로 진화하며, 생산성과 성능을 동시에 향상시킵니다.",
            list: [
                "Java 17+ LTS 지원",
                "virtual thread로 향상된 성능",
                "강력한 타입 안정성과 유지 보수 용이성",
                "마이크로서비스 및 엔터프라이즈에 널리 사용됨"
            ]
        },
        {
            title: "Spring Boot 및 클라우드 네이티브 앱",
            description: "Spring Boot는 사전 구성된 컴포넌트와 클라우드 통합을 통해 빠른 애플리케이션 개발을 지원하며, REST API, 마이크로서비스, 풀스택 솔루션 구축을 용이하게 합니다.",
            list: [
                "자동 구성 및 의존성 관리",
                "마이크로서비스 아키텍처에 적합",
                "RESTful API 및 WebSocket 지원",
                "Spring Cloud를 통한 클라우드 배포"
            ]
        },
        {
            title: "gRPC 및 RMI를 통한 서비스 간 통신",
            description: "Java는 고성능 다국어 서비스 통신을 위해 gRPC를 활용하고, 레거시 Java 시스템과의 통합에는 RMI가 여전히 안정적인 선택지입니다.",
            list: [
                "gRPC를 통한 효율적인 이진 통신",
                "RMI로 레거시 시스템 호환 가능",
                "보안 및 제어 가능한 원격 접근",
                "현대 시스템과 레거시 시스템의 통합"
            ]
        },
        {
            title: "엔터프라이즈급 시스템 및 Java EE 현대화",
            description: "Java EE는 엔터프라이즈 애플리케이션의 기반을 제공했지만, Jakarta EE와 Spring 같은 현대적인 Java 프레임워크는 더 나은 모듈성, 속도, 클라우드 지원을 통해 기존 시스템을 현대화하면서도 레거시 호환성을 유지합니다.",
            list: [
                "Java EE의 진화인 Jakarta EE",
                "Docker 및 Kubernetes를 활용한 현대적인 배포",
                "보안이 강화된 엔터프라이즈급 아키텍처",
                "현대적인 API를 통한 기존 시스템 지원"
            ]
        }
    ],
    faqs: [
        {
            question: "Spring Boot란 무엇인가요?",
            answer: "Spring Boot는 독립 실행형 및 프로덕션 수준의 Spring 기반 애플리케이션을 쉽게 개발할 수 있는 프레임워크입니다. 자동 구성, 의존성 관리, 내장 서버 기능을 제공합니다."
        },
        {
            question: "Java는 어떻게 현대 시스템과 레거시 시스템을 지원하나요?",
            answer: "Java는 Spring Boot와 gRPC를 통해 최신 개발을 지원하며, 동시에 RMI와 J2EE를 통해 기존 시스템과의 호환성도 유지합니다."
        },
        {
            question: "gRPC란 무엇이며 Java에서 어떻게 사용하나요?",
            answer: "gRPC는 고성능 오픈소스 RPC 프레임워크로, 마이크로서비스 아키텍처에서 서비스 간 통신에 사용됩니다. Java에서는 Protocol Buffers를 사용하여 효율적인 이진 데이터 직렬화를 수행합니다."
        }
    ]
};