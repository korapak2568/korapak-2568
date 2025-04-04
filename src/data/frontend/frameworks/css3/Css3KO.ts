import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Css3KO: IFrontEndStack = {
    title: "CSS3",
    description: "CSS3를 사용하여 고급 스타일링 기술로 웹사이트의 외형을 향상하세요.",
    image: ImageUrl.frontendThumbnails.css3.path,
    alt: "CSS3 기술을 나타내는 로고",
    readMore: "CSS3 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3 반응형 디자인",
            description: "CSS3는 최신 스타일시트 기술로, 웹 페이지의 시각적 표현을 향상시키는 고급 기능을 제공합니다.",
            list: []
        },
        {
            title: "CSS3의 강점",
            description: "CSS3는 웹 개발에 현대적인 스타일링 기능을 제공합니다.",
            list: [
                "고급 선택자",
                "유연한 박스 레이아웃",
                "그리드 레이아웃",
                "애니메이션 및 전환 효과",
                "미디어 쿼리",
                "사용자 정의 속성",
                "향상된 타이포그래피"
            ]
        },
        {
            title: "도전 과제와 해결책",
            description: "CSS3는 반응형이며 시각적으로 매력적인 웹 디자인의 요구를 강력한 새로운 기능으로 충족합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "CSS3란 무엇인가요?",
            answer: "CSS3는 최신 스타일시트 버전으로, 웹 디자인을 위한 새로운 기능을 제공합니다."
        },
        {
            question: "미디어 쿼리란 무엇인가요?",
            answer: "미디어 쿼리는 장치 특성에 따라 스타일을 적용하여 반응형 디자인을 가능하게 합니다."
        },
        {
            question: "Flexbox 레이아웃이란 무엇인가요?",
            answer: "Flexbox 레이아웃은 더 효율적인 레이아웃 설계, 공간 분배 및 정렬 기능을 제공합니다."
        },
        {
            question: "인기 있는 CSS 프레임워크는 무엇인가요?",
            answer: "인기 있는 CSS 프레임워크로는 Bootstrap, Tailwind CSS, Bulma, Foundation, Materialize가 있습니다."
        }
    ],
}
