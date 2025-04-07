import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DockerKO: IDevOpsStack = {
    title: "Docker",
    description: "컨테이너화를 통해 애플리케이션 배포를 간소화하여 일관되고 효율적인 환경을 제공합니다.",
    image: ImageUrl.devopsThumbnails.docker.path,
    alt: "Docker 기술 경험을 나타내는 로고",
    readMore: "효율적인 DevOps 테스트를 위한 Docker 탐색",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker는 컨테이너 내에서 애플리케이션을 개발, 배포 및 실행할 수 있는 강력한 플랫폼으로, 여러 환경에서 일관성을 유지할 수 있습니다. 최신 DevOps 환경에 이상적인 솔루션입니다.",
            list: []
        },
        {
            title: "Docker의 강점",
            description: "Docker는 다음과 같은 핵심 기능을 제공합니다.",
            list: [
                "컨테이너화",
                "환경 일관성",
                "리소스 효율성",
                "확장성",
                "격리",
                "빠른 배포",
                "간소화된 구성"
            ]
        },
        {
            title: "문제 및 해결책",
            description: "Docker는 컨테이너화 솔루션을 제공하여 성능, 확장성 및 일관성을 향상함으로써 배포 문제를 해결합니다.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Docker란 무엇인가요?",
            answer: "Docker는 컨테이너화를 활용하여 애플리케이션을 일관되고 격리된 환경에서 배포할 수 있도록 하는 플랫폼입니다."
        },
        {
            question: "Docker가 배포 일관성을 어떻게 향상하나요?",
            answer: "Docker는 애플리케이션과 종속성을 컨테이너에 패키징하여 서로 다른 환경에서도 동일하게 실행되도록 보장합니다."
        },
        {
            question: "Docker를 사용하면 어떤 이점이 있나요?",
            answer: "Docker의 주요 장점으로는 환경 일관성, 리소스 효율성, 확장성, 격리 및 빠른 배포가 있습니다."
        }
    ],
}
