import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {PythonKO} from "@/data/fullstack/frameworks/python/PythonKO";
import {PhpKO} from "@/data/fullstack/frameworks/php/PhpKO";
import {NodejsKO} from "@/data/fullstack/frameworks/nodejs/NodejsKO";
import {JavaKO} from "@/data/fullstack/frameworks/java/JavaKO";
import {GoKO} from "@/data/fullstack/frameworks/go/GoKO";
import {DotnetKO} from "@/data/fullstack/frameworks/dotnet/DotnetKO";

export const FullStackKO: IFullStack = {
    title: "백엔드 개발",
    span: "백엔드 개발 경험",
    subTitle: "",

    dotnetcore: DotnetKO,
    go: GoKO,
    java: JavaKO,
    nodejs: NodejsKO,
    php: PhpKO,
    python: PythonKO,

    stacks: [],

    services: {
        title: "백엔드 개발",
        descriptions: [
            "백엔드 개발은 강력하고 안전하며 확장 가능한 웹 애플리케이션의 필수적인 기반입니다. 이 무대 뒤의 시스템은 데이터 처리, 데이터베이스 관리 및 보안에 필요하며, 기업이 많은 사용자를 동시에 수용하고, 원활한 경험을 만들고, 중요한 정보를 보호할 수 있게 합니다. 지원되는 기술에는 Node.js, Java Spring Boot, Python, Go, PHP 및 .NET Core가 포함되며, 개념 증명(PoC)부터 시장 출시 가능한 최소 실행 가능 제품(MVP)까지 모든 복잡성 수준의 프로젝트 요구 사항을 충족할 수 있습니다. 사용자 인터페이스와 서버 측 기능 간의 원활한 통합은 사용자에게 우수한 경험을 제공하고 기업이 효율적으로 목표를 달성하는 데 도움이 됩니다."
        ],
        items: [
            {
                title: "원활한 프론트엔드 및 백엔드 통합",
                description: "속도, 보안 및 확장성을 제공하는 완벽하게 동기화된 클라이언트 및 서버 구성 요소가 있는 응집력 있는 웹 애플리케이션."
            },
            {
                title: "포괄적인 SEO 및 성능 최적화",
                description: "최적화된 코드 구조, 빠른 로딩 시간 및 효율적인 리소스 관리를 통한 검색 엔진 가시성 및 사용자 경험 향상."
            },
            {
                title: "강력한 자동화 테스트",
                description: "개발 수명 주기 전체에 통합된 포괄적인 테스트 프레임워크가 있는 신뢰할 수 있고 안정적인 애플리케이션."
            },
            {
                title: "고급 데이터베이스 관리",
                description: "MySQL, MongoDB, PostgreSQL 및 기타 주요 기술을 포함한 최적화된 데이터베이스 솔루션으로 효과적으로 구조화되고 관리되는 데이터."
            },
            {
                title: "엔터프라이즈급 클라우드 서비스",
                description: "최적화된 인프라 구성으로 AWS, Azure, Google Cloud 또는 기타 클라우드 플랫폼을 사용하여 효율적으로 배포 및 확장된 애플리케이션."
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