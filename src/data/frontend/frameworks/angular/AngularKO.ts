import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AngularKO: IFrontEndStack = {
    title: "Angular",
    description: "Angular의 포괄적이고 다재다능한 프레임워크를 활용하여 강력한 엔터프라이즈급 웹 애플리케이션을 개발하세요.",
    image: ImageUrl.frontendThumbnails.angular.path,
    alt: "Angular 프레임워크를 나타내는 로고",
    readMore: "Angular 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular 개발",
            description: "Angular는 Google이 개발한 강력한 웹 애플리케이션 프레임워크입니다. 포괄적인 도구 모음과 MVC 아키텍처를 통해 동적 단일 페이지 애플리케이션(SPA)을 쉽게 구축할 수 있습니다.",
            list: []
        },
        {
            title: "Angular의 강점",
            description: "Angular는 견고한 아키텍처와 풍부한 기능으로 돋보입니다.",
            list: [
                "양방향 데이터 바인딩",
                "의존성 주입",
                "컴포넌트 기반 구조",
                "TypeScript 통합",
                "포괄적인 테스트 도구",
                "강력한 CLI",
                "방대한 문서 자료"
            ]
        },
        {
            title: "도전 과제와 해결책",
            description: "Angular는 대규모 애플리케이션의 복잡성을 강력한 아키텍처, 효율적인 데이터 바인딩, 의존성 주입을 통해 해결합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Angular란 무엇인가요?",
            answer: "Angular는 Google에서 개발한 웹 애플리케이션 프레임워크로, 동적 웹 애플리케이션을 제작하는 데 사용됩니다."
        },
        {
            question: "양방향 데이터 바인딩이란 무엇인가요?",
            answer: "양방향 데이터 바인딩은 모델과 뷰를 동기화하여 한쪽에서 변경이 발생하면 다른 쪽에도 반영되도록 합니다."
        },
        {
            question: "Angular에서 TypeScript를 사용하는 이유는 무엇인가요?",
            answer: "TypeScript는 강력한 타입 지정, 최신 기능, 향상된 개발 도구를 제공하여 Angular 개발을 더욱 원활하게 만듭니다."
        }
    ],
}