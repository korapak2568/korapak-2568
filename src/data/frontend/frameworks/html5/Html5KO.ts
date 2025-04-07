import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const Html5KO: IFrontEndStack = {
    title: "HTML5",
    description: "최신 웹 개발 표준을 익히고 풍부하고 인터랙티브한 콘텐츠를 제작하세요.",
    image: ImageUrl.frontendThumbnails.html5.path,
    alt: "HTML5 기술을 나타내는 로고",
    readMore: "HTML5 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/html5-developer",
    features: [
        {
            title: "HTML5 웹 디자인",
            description: "HTML5는 최신 하이퍼텍스트 마크업 언어(HTML) 버전으로, 더 풍부한 웹 경험을 위한 새로운 요소와 API를 도입했습니다.",
            list: []
        },
        {
            title: "HTML5의 강점",
            description: "HTML5는 현대적인 기능과 강력한 성능으로 웹 개발을 향상시킵니다.",
            list: [
                "새로운 시맨틱 요소",
                "오디오 및 비디오 지원",
                "캔버스(Canvas) 요소",
                "향상된 폼 컨트롤",
                "오프라인 기능",
                "Geolocation API",
                "개선된 접근성"
            ]
        },
        {
            title: "도전 과제와 해결책",
            description: "HTML5는 보다 인터랙티브하고 미디어 중심적인 웹 경험을 위해 새로운 요소와 API를 제공합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "HTML5란 무엇인가요?",
            answer: "HTML5는 최신 하이퍼텍스트 마크업 언어(HTML) 버전으로, 새로운 기능과 요소를 제공합니다."
        },
        {
            question: "새로운 시맨틱 요소는 무엇인가요?",
            answer: "새로운 시맨틱 요소에는 <article>, <section>, <header>, <footer> 등이 있으며, 콘텐츠 구조를 개선하는 데 사용됩니다."
        },
        {
            question: "캔버스(Canvas) 요소란 무엇인가요?",
            answer: "캔버스 요소는 JavaScript를 사용하여 그래픽을 그릴 수 있는 공간을 제공합니다."
        }
    ],
}
