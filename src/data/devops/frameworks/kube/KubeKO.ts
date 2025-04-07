import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeKO: IDevOpsStack = {
    title: "Kubernetes",
    description: "Kubernetes를 사용하여 컨테이너 오케스트레이션을 자동화하고 확장 가능하며 복원력이 뛰어난 애플리케이션을 구축하세요.",
    image: ImageUrl.devopsThumbnails.kube.path,
    alt: "Kubernetes 기술 경험을 나타내는 로고",
    readMore: "Kubernetes DevOps 테스트 솔루션을 알아보세요",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes는 컨테이너화된 애플리케이션의 배포, 확장 및 관리를 자동화하는 선도적인 컨테이너 오케스트레이션 플랫폼입니다. 대규모 및 복원력이 뛰어난 시스템에 필수적입니다.",
            list: []
        },
        {
            title: "Kubernetes의 강점",
            description: "Kubernetes는 강력한 기능을 제공합니다.",
            list: [
                "자동 배포",
                "확장성",
                "자가 복구",
                "서비스 검색",
                "로드 밸런싱",
                "스토리지 오케스트레이션",
                "설정 관리"
            ]
        },
        {
            title: "문제 및 해결책",
            description: "Kubernetes는 컨테이너화된 애플리케이션을 위한 확장 가능하고 자동화된 솔루션을 제공하여 오케스트레이션 문제를 해결합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Kubernetes란 무엇인가요?",
            answer: "Kubernetes는 컨테이너화된 애플리케이션의 배포, 확장 및 관리를 자동화하는 컨테이너 오케스트레이션 플랫폼입니다."
        },
        {
            question: "Kubernetes는 애플리케이션 확장성을 어떻게 개선하나요?",
            answer: "Kubernetes는 애플리케이션의 수요에 따라 컨테이너를 자동으로 관리하여 확장성을 향상시킵니다."
        },
        {
            question: "Kubernetes를 사용하면 어떤 이점이 있나요?",
            answer: "Kubernetes의 주요 이점은 자동 배포, 확장성, 자가 복구, 서비스 검색, 로드 밸런싱 및 스토리지 오케스트레이션입니다."
        }
    ],
}
