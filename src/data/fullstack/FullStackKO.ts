import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonKO} from "@/data/fullstack/frameworks/python/PythonKO";
import {PhpKO} from "@/data/fullstack/frameworks/php/PhpKO";
import {NodejsKO} from "@/data/fullstack/frameworks/nodejs/NodejsKO";
import {JavaKO} from "@/data/fullstack/frameworks/java/JavaKO";
import {GoKO} from "@/data/fullstack/frameworks/go/GoKO";
import {DotnetKO} from "@/data/fullstack/frameworks/dotnet/DotnetKO";

export const FullStackKO: IFullStack = {
    title: "백엔드 및 API 경험",
    span: "백엔드 및 API 개발 경험",
    subTitle: "",

    dotnetcore: DotnetKO,
    go: GoKO,
    java: JavaKO,
    nodejs: NodejsKO,
    php: PhpKO,
    python: PythonKO,

    stacks: [],

    services: {
        title: "백엔드 및 API 개발",
        descriptions: [
            "전문적인 풀스택 개발 서비스로 강력하고 안전하며 확장 가능한 웹 애플리케이션을 구축하세요. 우리 개발자들은 프론트엔드와 백엔드 기술 모두에서 뛰어난 역량을 발휘하며, 비즈니스 요구에 맞춘 종합적인 솔루션을 제공합니다. CHORN의 기술 전문성은 Node.js, .NET Core C#, Java Spring Boot, Python, Go, PHP 등 다양한 기술 스택을 포괄하며, 복잡한 프로젝트도 처리할 수 있습니다. 초기 개념 증명(PoC)을 출시하거나 시장 준비가 된 최소 기능 제품(MVP)을 개발하든, 우리 팀은 사용자 인터페이스와 서버 측 기능 간의 원활한 통합을 보장하여 뛰어난 사용자 경험을 제공합니다."
        ],
        items: [
            {
                title: "프론트엔드 및 백엔드 통합",
                description: "클라이언트와 서버 컴포넌트가 완벽하게 동기화된 웹 애플리케이션을 개발하여 속도, 보안 및 확장성을 제공합니다."
            },
            {
                title: "종합 SEO 및 성능 최적화",
                description: "최적화된 코드 구조, 더 빠른 로딩 시간 및 효율적인 리소스 관리를 통해 웹사이트의 검색 엔진 가시성과 사용자 경험을 향상시킵니다."
            },
            {
                title: "강력한 자동화 테스트",
                description: "개발 주기 전반에 걸쳐 통합된 테스트 프레임워크로 애플리케이션의 신뢰성과 안정성을 보장합니다."
            },
            {
                title: "고급 데이터베이스 관리",
                description: "MySQL, MongoDB, PostgreSQL 및 기타 주요 기술을 포함한 최적화된 데이터베이스 솔루션을 통해 데이터를 효과적으로 구조화하고 관리합니다."
            },
            {
                title: "기업 수준의 클라우드 서비스",
                description: "AWS, Azure, Google Cloud 또는 기타 클라우드 플랫폼을 사용하여 최적화된 인프라 구성으로 애플리케이션을 효율적으로 배포하고 확장합니다."
            }
        ]
    }
}

FullStackKO.stacks = [
    FullStackKO.nodejs,
    FullStackKO.go,
    FullStackKO.java,
    FullStackKO.python,
    FullStackKO.php,
    FullStackKO.dotnetcore
]