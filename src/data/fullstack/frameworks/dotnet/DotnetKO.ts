import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const DotnetKO: IFullStackStack = {
    title: ".NET Core",
    description: ".NET Core는 Microsoft에서 개발한 다목적 오픈 소스 크로스 플랫폼 프레임워크입니다. 이를 통해 개발자는 Windows, macOS, Linux 등 다양한 플랫폼에서 현대적이고 고성능의 확장 가능한 애플리케이션을 구축할 수 있습니다. 웹 애플리케이션, API 및 마이크로서비스 개발을 지원하며, .NET Core는 기업 수준의 솔루션을 위한 강력한 환경을 제공합니다.",
    image: ImageUrl.fullstackThumbnails.dotnetcore.path,
    alt: "Logo representing .NET Core API development",
    readMore: ".NET Core API 풀스택 개발 솔루션 더 알아보기",
    link: "/technical-expertise/full-stack-developer/dotnetcore-developer",
    features: [
        {
            title: ".NET Core 개발",
            description: ".NET Core은 고성능 애플리케이션을 구축할 수 있는 강력한 오픈 소스 프레임워크입니다. 모듈화된 디자인과 다양한 프로그래밍 언어를 지원하는 .NET Core은 모든 플랫폼에서 실행할 수 있는 확장 가능한 웹 애플리케이션, API 및 마이크로서비스를 개발하는 데 이상적입니다.",
            list: []
        },
        {
            title: "ASP.NET Core",
            description: "ASP.NET Core은 현대적이고 클라우드 기반의 인터넷 연결 애플리케이션을 구축하기 위한 크로스 플랫폼 고성능 프레임워크입니다. 성능, 보안, 확장성에 중점을 두어 웹 애플리케이션, API 및 마이크로서비스 구축에 적합합니다.",
            list: [
                "크로스 플랫폼",
                "고성능",
                "내장된 의존성 주입",
                "모듈화된 아키텍처",
                "통합 MVC 및 Web API 프레임워크",
                "Razor 페이지 지원",
                "보안 인증 및 권한 부여"
            ]
        },
        {
            title: ".NET Core API",
            description: ".NET Core API는 개발자들에게 RESTful 기술 및 API를 구축할 수 있는 도구를 제공하여 브라우저, 모바일 장치, 데스크톱 애플리케이션 등 다양한 클라이언트에서 사용할 수 있습니다. 경량화된 모듈 디자인은 높은 성능과 다른 기술과의 통합을 보장합니다.",
            list: []
        },
        {
            title: ".NET Core",
            description: ".NET Core는 .NET Core에서 애플리케이션을 개발하는 데 사용하는 주요 언어입니다. C#은 현대적인 문법, 다목적성 및 최신 기능으로 잘 알려져 있으며, 개발자가 강력하고 유지 관리가 용이하며 확장 가능한 애플리케이션을 쉽게 구축할 수 있도록 합니다.",
            list: [
                "현대적인 문법",
                "객체 지향적",
                "풍부한 표준 라이브러리",
                "비동기 프로그래밍 지원",
                "LINQ 지원",
                "크로스 플랫폼 호환성",
                "기타 .NET 언어와의 상호 운용성"
            ]
        }
    ],
    faqs: [
        {
            question: ".NET Core이란 무엇인가요?",
            answer: ".NET Core은 Windows, macOS, Linux에서 실행되는 현대적인 애플리케이션을 구축할 수 있는 오픈 소스 크로스 플랫폼 프레임워크입니다."
        },
        {
            question: "ASP.NET Core은 무엇에 사용되나요?",
            answer: "ASP.NET Core은 고성능과 크로스 플랫폼 기능을 갖춘 웹 애플리케이션, API 및 마이크로서비스를 구축하는 프레임워크입니다."
        },
        {
            question: "왜 .NET Core가 개발에 좋은 선택인가요?",
            answer: "C#은 현대적이고 다목적으로 널리 사용되는 프로그래밍 언어로, .NET Core에서 확장 가능하고 유지 보수가 용이한 애플리케이션을 개발하는 데 이상적입니다."
        }
    ],
}
