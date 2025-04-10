import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const KubeDA: IDevOpsStack = {
    title: "Kubernetes",
    description: "Automatiser din containerorkestrering med Kubernetes for skalerbare og robuste applikationer.",
    image: ImageUrl.devops.frameworks.kube.thumbnail,
    alt: "Logo der repræsenterer Kubernetes teknologierfaring",
    readMore: "Udforsk Kubernetes DevOps testløsninger",
    link: "/technical-expertise/cloud-devops/kubernetes",
    features: [
        {
            title: "Kubernetes",
            description: "Kubernetes er en førende containerorkestreringsplatform, der automatiserer udrulning, skalering og administration af containeriserede applikationer. Essentiel for store, robuste systemer.",
            list: []
        },
        {
            title: "Stærke sider ved Kubernetes",
            description: "Kubernetes udmærker sig med sine robuste funktioner",
            list: [
                "Automatiseret udrulning",
                "Skalerbarhed",
                "Selvhelbredende",
                "Serviceopdagelse",
                "Belastningsbalancering",
                "Lagerorkestrering",
                "Konfigurationsstyring"
            ]
        },
        {
            title: "Udfordringer og Løsninger",
            description: "Kubernetes adresserer orkestreringsudfordringer ved at levere skalerbare og automatiserede løsninger til containeriserede applikationer.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er Kubernetes?",
            answer: "Kubernetes er en containerorkestreringsplatform, der automatiserer udrulning, skalering og administration af containeriserede applikationer."
        },
        {
            question: "Hvordan forbedrer Kubernetes applikationers skalerbarhed?",
            answer: "Kubernetes forbedrer applikationers skalerbarhed ved automatisk at styre skaleringen af containeriserede applikationer baseret på efterspørgsel."
        },
        {
            question: "Hvad er fordelene ved at bruge Kubernetes?",
            answer: "Fordelene ved at bruge Kubernetes omfatter automatiseret udrulning, skalerbarhed, selvhelbredende egenskaber, serviceopdagelse, belastningsbalancering og lagerorkestrering."
        }
    ]
}