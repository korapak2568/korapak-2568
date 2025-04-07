import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const ReactKO: IFrontEndStack = {
    title: "React",
    description: "React의 강력한 컴포넌트 기반 아키텍처를 활용하여 동적이고 고성능의 사용자 인터페이스를 쉽게 구축하세요.",
    image: ImageUrl.frontendThumbnails.react.path,
    alt: "React.js 라이브러리를 나타내는 로고",
    readMore: "ReactJS 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React 개발",
            description: "React.js는 사용자 인터페이스를 구축하기 위한 인기 있는 JavaScript 라이브러리입니다. 재사용 가능한 UI 컴포넌트를 쉽게 만들 수 있어 개발 효율성과 애플리케이션 성능을 향상시킵니다.",
            list: []
        },
        {
            title: "React.js의 강점",
            description: "React.js는 개발자들에게 선호되는 강력한 기능을 제공합니다.",
            list: [
                "컴포넌트 기반 아키텍처",
                "가상 DOM을 활용한 성능 최적화",
                "단방향 데이터 흐름",
                "JSX 문법",
                "풍부한 생태계와 커뮤니티 지원",
                "React Hooks",
                "강력한 개발자 도구"
            ]
        },
        {
            title: "도전 과제와 해결책",
            description: "React.js는 가상 DOM, 컴포넌트 재사용, 강력한 커뮤니티 지원을 통해 동적 UI 개발의 문제를 해결합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "React.js란 무엇인가요?",
            answer: "React.js는 Facebook이 유지 관리하는 사용자 인터페이스 개발을 위한 JavaScript 라이브러리입니다."
        },
        {
            question: "React Hooks란 무엇인가요?",
            answer: "React Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있도록 해주는 함수입니다."
        },
        {
            question: "가상 DOM은 어떻게 동작하나요?",
            answer: "가상 DOM은 변경된 요소만 업데이트하여 애플리케이션 성능을 최적화합니다."
        }
    ],
}