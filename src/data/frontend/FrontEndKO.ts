import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {VueKO} from "@/data/frontend/frameworks/vue/VueKO";
import {TypeScriptKO} from "@/data/frontend/frameworks/typescript/TypeScriptKO";
import {ReactKO} from "@/data/frontend/frameworks/react/ReactKO";
import {NextjsKO} from "@/data/frontend/frameworks/nextjs/NextjsKO";
import {JavaScriptKO} from "@/data/frontend/frameworks/javascript/JavaScriptKO";
import {Html5KO} from "@/data/frontend/frameworks/html5/Html5KO";
import {Css3KO} from "@/data/frontend/frameworks/css3/Css3KO";
import {AngularKO} from "@/data/frontend/frameworks/angular/AngularKO";

export const FrontEndKO: IFrontEnd = {
    title: "프론트엔드 개발",
    span: "프론트엔드 개발 경험",
    subTitle: "",

    angular: AngularKO,
    css3: Css3KO,
    html5: Html5KO,
    nextjs: NextjsKO,
    react: ReactKO,
    typescript: TypeScriptKO,
    vue: VueKO,
    javascript: JavaScriptKO,

    stacks: [],

    services: {
        title: "프론트엔드 개발",
        descriptions: [
            "프론트엔드 개발은 사용자와 디지털 서비스 간의 중요한 인터페이스로, 사용자 경험을 정의하는 시각적 요소와 상호작용 구성 요소를 만듭니다. 이 필수적인 계층은 복잡한 백엔드 시스템을 직관적이고 접근하기 쉬운 인터페이스로 변환하여 관객을 참여시키고 비즈니스 성장을 촉진합니다. Next.js, React, Angular, Vue.js와 같은 현대적인 프레임워크와 HTML5 및 CSS3와 같은 핵심 웹 기술을 통해 모든 기기에서 빠르게 로드되고 원활하게 응답하는 고성능 애플리케이션이 가능해집니다. 효과적인 프론트엔드 솔루션은 비즈니스 목표와 사용자 요구 사항을 모두 충족하는 일관되고 전문적인 디지털 경험을 통해 사용자 참여를 증가시키고, 전환율을 개선하며, 브랜드 인식을 강화합니다."
        ],
        items: [
            {
                title: "현대적 프레임워크 구현",
                description: "Next.js와 React와 같은 최첨단 프레임워크를 사용한 동적이고 대화형 웹 애플리케이션으로 최적의 성능, 응답성 및 향상된 사용자 경험을 제공합니다."
            },
            {
                title: "SEO 최적화",
                description: "최적화된 코드 구조, 빠른 로딩 시간 및 모바일 친화적 디자인을 통해 Google 및 기타 검색 엔진에서 웹사이트 가시성 향상, 유기적 트래픽 증가 및 획득 비용 감소."
            },
            {
                title: "개념 증명(PoC) 개발",
                description: "기능적 프로토타입을 통한 혁신적인 아이디어의 신속한 검증, 위험 감소 및 이해관계자가 전체 규모 투자 전에 개념을 시각화할 수 있도록 지원."
            },
            {
                title: "최소 실행 가능 제품(MVP) 생성",
                description: "초기 사용자를 유치하고, 귀중한 피드백을 생성하며, 시장 존재감을 확립하면서 잠재적 투자자에게 어필하는 기능 완비, 확장 가능한 초기 버전."
            },
            {
                title: "UI/UX 디자인",
                description: "사용자 중심 디자인 원칙과 접근성 표준을 통해 참여도를 높이고, 이탈률을 줄이며, 전환율을 높이는 직관적이고 아름다운 인터페이스."
            }
        ]
    }
}

FrontEndKO.stacks = [
    FrontEndEN.nextjs,
    FrontEndEN.react,
    FrontEndEN.angular,
    FrontEndEN.vue,
    FrontEndEN.javascript,
    FrontEndEN.typescript,
    FrontEndEN.html5,
    FrontEndEN.css3
]