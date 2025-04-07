import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GitHubKO: IDevOpsStack = {
    title: "GitHub",
    description: "GitHub의 버전 관리 및 협업 플랫폼을 활용하여 개발 워크플로우를 향상하세요.",
    image: ImageUrl.devopsThumbnails.github.path,
    alt: "GitHub 기술 경험을 나타내는 로고",
    readMore: "GitHub가 DevOps 테스트를 어떻게 지원하는지 알아보세요",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub는 Git 저장소 호스팅, 협업 개발 도구 및 다양한 통합 기능을 제공하는 웹 기반 플랫폼으로, 효율적이고 협력적인 소프트웨어 개발을 지원합니다.",
            list: []
        },
        {
            title: "GitHub의 강점",
            description: "GitHub는 다음과 같은 핵심 기능을 제공합니다.",
            list: [
                "버전 관리",
                "협업 개발",
                "풀 리퀘스트",
                "이슈 트래킹",
                "코드 리뷰",
                "지속적 통합",
                "광범위한 통합 기능"
            ]
        },
        {
            title: "문제 및 해결책",
            description: "GitHub는 강력한 버전 관리 및 협업 도구를 제공하여 프로젝트 관리를 효율적으로 수행할 수 있도록 합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "GitHub란 무엇인가요?",
            answer: "GitHub는 Git 저장소 호스팅 및 협업 개발 도구를 제공하는 웹 기반 플랫폼입니다."
        },
        {
            question: "GitHub는 협업을 어떻게 향상하나요?",
            answer: "GitHub는 풀 리퀘스트, 이슈 트래킹 및 코드 리뷰 기능을 제공하여 팀 개발을 보다 효율적으로 만듭니다."
        },
        {
            question: "GitHub를 사용하면 어떤 이점이 있나요?",
            answer: "GitHub의 주요 장점으로는 버전 관리, 협업 개발, 풀 리퀘스트, 이슈 트래킹, 코드 리뷰, 지속적 통합 및 광범위한 통합 기능이 있습니다."
        }
    ],
}
