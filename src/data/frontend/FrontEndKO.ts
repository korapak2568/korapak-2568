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
    title: "프론트엔드 경험",
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
        title: "프론트엔드 개발 서비스",
        descriptions: [
            "전문적인 프론트엔드 개발 서비스로 웹 비전을 현실로 만드세요. CHORN은 사용자 친화적이고 시각적으로 뛰어나며 완전히 반응형인 웹사이트를 제공하여 방문자를 효과적으로 참여시킵니다. Next.js, React, Angular, Vue.js와 같은 최신 프레임워크는 물론 HTML5 및 CSS3과 같은 핵심 웹 기술을 활용합니다. 검색 엔진 최적화(SEO)가 적용된 고성능 단일 페이지 애플리케이션(SPA)부터 복잡한 다중 페이지 플랫폼까지, CHORN은 기한 내에 고품질 결과를 제공합니다. CHORN과 협력하여 방문자를 사로잡고 비즈니스 성장을 촉진하는 강력한 디지털 경험을 만들어 보세요."
        ],
        items: [
            {
                title: "최신 프레임워크 구현",
                description: "Next.js 및 React와 같은 최신 프레임워크를 사용하여 동적이고 상호작용적인 웹 애플리케이션을 구축하고 최적의 성능과 사용자 경험을 제공합니다."
            },
            {
                title: "SEO 최적화",
                description: "최적화된 코드 구조, 빠른 로딩 속도, 모바일 친화적 디자인을 통해 Google 및 기타 검색 엔진에서 웹사이트의 가시성을 향상하세요."
            },
            {
                title: "개념 증명(PoC) 개발",
                description: "대규모 개발을 시작하기 전에 기능적인 프로토타입을 사용하여 혁신적인 아이디어를 신속하게 테스트하고 검증하세요."
            },
            {
                title: "최소 기능 제품(MVP) 개발",
                description: "초기 사용자 확보, 피드백 수집 및 투자자 유치를 위해 기능이 완전하고 확장 가능한 초기 제품을 출시하세요."
            },
            {
                title: "UI/UX 디자인 최적화",
                description: "직관적이고 아름다운 인터페이스를 제공하여 사용자 만족도를 높이고 이탈률을 줄이며 전환율을 향상시키세요."
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