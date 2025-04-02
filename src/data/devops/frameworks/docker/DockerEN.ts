import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const DockerEN: IDevOpsStack = {
    title: "Docker",
    description: "Streamline your application deployment with containerization for consistent and efficient environments.",
    image: ImageUrl.devops.docker.path,
    alt: "Logo representing Docker technology experience",
    readMore: "Explore Docker for efficient DevOps testing",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker is a powerful platform for developing, shipping, and running applications in containers, ensuring consistency across multiple environments. Ideal for modern DevOps practices.",
            list: []
        },
        {
            title: "Strong Points of Docker",
            description: "Docker excels with its key features",
            list: [
                "Containerization",
                "Environment consistency",
                "Resource efficiency",
                "Scalability",
                "Isolation",
                "Rapid deployment",
                "Simplified configuration"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "Docker addresses deployment challenges by providing containerization solutions that enhance performance, scalability, and consistency.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Docker?",
            answer: "Docker is a platform that uses containerization to deploy applications in consistent and isolated environments."
        },
        {
            question: "How does Docker improve deployment consistency?",
            answer: "Docker ensures deployment consistency by packaging applications and their dependencies into containers that run uniformly across different environments."
        },
        {
            question: "What are the benefits of using Docker?",
            answer: "Benefits of using Docker include environment consistency, resource efficiency, scalability, isolation, and rapid deployment."
        }
    ],
}