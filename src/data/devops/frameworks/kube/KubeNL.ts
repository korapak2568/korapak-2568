import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeNL: IDevOpsStack = {
    title: "Kubernetes",
    description: "Automate your container orchestration with Kubernetes for scalable and resilient applications.",
    image: ImageUrl.devops.frameworks.kube.thumbnail,
    alt: "Logo representing Kubernetes technology experience",
    readMore: "Discover Kubernetes DevOps testing solutions",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes is a leading container orchestration platform that automates deployment, scaling, and management of containerized applications. Essential for large-scale, resilient systems.",
            list: []
        },
        {
            title: "Strong Points of Kubernetes",
            description: "Kubernetes stands out with its robust features",
            list: [
                "Automated deployment",
                "Scalability",
                "Self-healing",
                "services discovery",
                "Load balancing",
                "Storage orchestration",
                "Configuration management"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "Kubernetes addresses orchestration challenges by providing scalable and automated solutions for containerized applications.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Kubernetes?",
            answer: "Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications."
        },
        {
            question: "How does Kubernetes improve application scalability?",
            answer: "Kubernetes improves application scalability by automatically managing the scaling of containerized applications based on demand."
        },
        {
            question: "What are the benefits of using Kubernetes?",
            answer: "Benefits of using Kubernetes include automated deployment, scalability, self-healing, services discovery, load balancing, and storage orchestration."
        }
    ],
}