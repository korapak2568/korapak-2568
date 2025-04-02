import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const KubeZH: IDevOpsStack ={
    title: "Kubernetes",
    description: "使用Kubernetes自动化容器编排，实现可扩展且弹性的应用程序。",
    image: ImageUrl.devops.kube.path,
    alt: "代表Kubernetes技术经验的标志",
    readMore: "探索Kubernetes DevOps测试解决方案",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes是领先的容器编排平台，可自动化部署、扩展和管理容器化应用程序。对于大规模、弹性系统至关重要。",
            list: []
        },
        {
            title: "Kubernetes的优势",
            description: "Kubernetes以其强大的功能脱颖而出",
            list: [
                "自动化部署",
                "可扩展性",
                "自我修复",
                "服务发现",
                "负载均衡",
                "存储编排",
                "配置管理"
            ]
        },
        {
            title: "挑战与解决方案",
            description: "Kubernetes通过为容器化应用程序提供可扩展和自动化的解决方案来解决编排挑战。",
            list: []
        }
    ],
    faqs: [
        {
            question: "什么是Kubernetes？",
            answer: "Kubernetes是一个容器编排平台，可自动化部署、扩展和管理容器化应用程序。"
        },
        {
            question: "Kubernetes如何提高应用程序的可扩展性？",
            answer: "Kubernetes通过根据需求自动管理容器化应用程序的扩展来提高应用程序的可扩展性。"
        },
        {
            question: "使用Kubernetes有哪些好处？",
            answer: "使用Kubernetes的好处包括自动化部署、可扩展性、自我修复、服务发现、负载均衡和存储编排。"
        }
    ]
}