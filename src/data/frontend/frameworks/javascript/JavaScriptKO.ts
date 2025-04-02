import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const JavaScriptKO: IFrontEndStack = {
    title: "JavaScript",
    description: "JavaScript는 인터랙티브하고 반응형 웹 애플리케이션을 구축하는 데 널리 사용되는 다재다능하고 동적인 프로그래밍 언어입니다. 유연성과 광범위한 생태계를 갖춘 JavaScript는 현대적인 웹 개발에서 필수적인 도구입니다.",
    image: ImageUrl.frontend.javascript.path,
    alt: "JavaScript 프로그래밍 언어를 나타내는 로고",
    readMore: "JavaScript 풀스택 개발 솔루션 더 알아보기",
    link: "/technical-expertise/front-end-developer/javascript-developer",
    features: [
        {
            title: "JavaScript 개발",
            description: "JavaScript는 웹사이트와 웹 애플리케이션의 동적 동작을 가능하게 하며, 뛰어난 유연성과 브라우저 및 프레임워크와의 호환성을 제공합니다.",
            list: []
        },
        {
            title: "풍부한 인터랙티브 경험",
            description: "JavaScript는 개발자가 인터랙티브한 UI, 애니메이션, 실시간 기능(예: 채팅 애플리케이션)을 만들 수 있도록 지원하여 몰입감 있는 사용자 경험을 제공합니다.",
            list: [
                "동적 콘텐츠 업데이트",
                "인터랙티브한 웹 인터페이스",
                "애니메이션 및 전환 효과",
                "실시간 기능 (예: 채팅, 알림)",
                "크로스 플랫폼 호환성"
            ]
        },
        {
            title: "광범위한 생태계와 도구",
            description: "JavaScript는 React, Angular, Vue.js와 같은 다양한 라이브러리 및 프레임워크를 갖추고 있어 개발자가 강력한 웹 애플리케이션을 효율적으로 구축할 수 있도록 지원합니다.",
            list: []
        },
        {
            title: "Node.js를 이용한 백엔드 개발",
            description: "JavaScript는 Node.js를 통해 백엔드 개발로 확장되며, 서버 사이드 로직부터 클라이언트 사이드 인터랙션까지 단일 언어로 풀스택 개발을 가능하게 합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "JavaScript란 무엇인가요?",
            answer: "JavaScript는 인터랙티브한 웹 애플리케이션을 만들기 위해 널리 사용되는 동적 프로그래밍 언어입니다."
        },
        {
            question: "웹 개발에서 JavaScript를 사용하는 이유는 무엇인가요?",
            answer: "JavaScript는 뛰어난 유연성, 방대한 라이브러리, 그리고 브라우저 간 호환성을 제공하여 웹 개발자들에게 필수적인 언어입니다."
        },
        {
            question: "JavaScript 기반 프레임워크는 무엇이 있나요?",
            answer: "대표적인 JavaScript 프레임워크로는 React, Angular, Vue.js가 있습니다."
        }
    ],
}
