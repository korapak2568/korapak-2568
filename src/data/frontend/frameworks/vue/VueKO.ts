import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const VueKO: IFrontEndStack = {
    title: "Vue",
    description: "Vue의 직관적이고 유연한 설계를 통해 현대적인 반응형 웹 인터페이스를 신속하게 개발하세요.",
    image: ImageUrl.frontendThumbnails.vue.path,
    alt: "Vue.js 프레임워크를 나타내는 로고",
    readMore: "VueJS 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue 개발",
            description: "Vue.js는 사용자 인터페이스를 구축하기 위한 점진적인 JavaScript 프레임워크입니다. 점진적으로 적용할 수 있도록 설계되었으며, 핵심 라이브러리는 뷰 레이어에 초점을 맞추고 있습니다.",
            list: []
        },
        {
            title: "Vue의 강점",
            description: "Vue.js는 유연하고 성능이 뛰어난 프레임워크로 여러 가지 장점을 제공합니다.",
            list: [
                "반응형 데이터 바인딩",
                "컴포넌트 기반 구조",
                "가상 DOM",
                "쉬운 통합",
                "포괄적인 문서",
                "Vue CLI",
                "활발한 커뮤니티"
            ]
        },
        {
            title: "과제 및 해결책",
            description: "Vue.js는 직관적인 API, 반응형 데이터 바인딩, 쉬운 통합을 통해 웹 개발을 간소화합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Vue.js란 무엇인가요?",
            answer: "Vue.js는 사용자 인터페이스 구축을 위한 점진적인 JavaScript 프레임워크입니다."
        },
        {
            question: "가상 DOM이란 무엇인가요?",
            answer: "가상 DOM은 실제 DOM의 가벼운 사본으로, 업데이트와 성능을 최적화합니다."
        },
        {
            question: "Vue.js와 React의 차이점은 무엇인가요?",
            answer: "Vue.js는 React보다 더 유연하고 간단한 통합을 제공합니다."
        }
    ],
}