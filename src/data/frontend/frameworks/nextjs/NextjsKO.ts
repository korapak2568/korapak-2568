import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const NextjsKO: IFrontEndStack = {
    title: "NextJS",
    description: "서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 통해 React 애플리케이션의 성능을 극대화하세요.",
    image: ImageUrl.frontend.nextjs.path,
    alt: "Next.js 프레임워크를 나타내는 로고",
    readMore: "NextJS 프론트엔드 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "NextJS 개발",
            description: "Next.js는 서버 사이드 렌더링과 정적 사이트 생성을 제공하는 대표적인 React 프레임워크로, 최소한의 설정으로 고성능, SEO 최적화된 웹 애플리케이션을 구축할 수 있도록 지원합니다.",
            list: []
        },
        {
            title: "NextJS의 강점",
            description: "NextJS는 강력한 기능을 제공합니다.",
            list: [
                "서버 사이드 렌더링(SSR)",
                "정적 사이트 생성(SSG)",
                "자동 코드 분할",
                "API 라우트",
                "점진적 정적 재생성(ISR)",
                "내장된 CSS 및 Sass 지원",
                "우수한 개발자 경험"
            ]
        },
        {
            title: "도전 과제와 해결책",
            description: "Next.js는 성능, 확장성, SEO 최적화를 통해 웹 개발의 문제를 해결하여 최적의 애플리케이션 배포를 보장합니다.",
            list: []
        },
    ],
    faqs: [
        {
            question: "Next.js란 무엇인가요?",
            answer: "Next.js는 서버 사이드 렌더링과 정적 사이트 생성을 제공하는 React 프레임워크로, 최적화된 웹 애플리케이션 개발을 가능하게 합니다."
        },
        {
            question: "Next.js의 서버 사이드 렌더링(SSR)은 성능을 어떻게 향상시키나요?",
            answer: "서버 사이드 렌더링은 페이지를 서버에서 미리 렌더링하여 클라이언트 측 렌더링 시간을 줄여 성능을 향상시킵니다."
        },
        {
            question: "Next.js의 정적 사이트 생성(SSG)이란 무엇인가요?",
            answer: "정적 사이트 생성은 빌드 시 페이지를 미리 렌더링하여 빠른 로딩 속도와 향상된 SEO를 제공합니다."
        }
    ],
}
