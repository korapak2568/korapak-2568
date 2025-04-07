import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DockerDA: IDevOpsStack = {
    title: "Docker",
    description: "Strømlin din applikationsimplementering med containerisering for konsistente og effektive miljøer.",
    image: ImageUrl.devopsThumbnails.docker.path,
    alt: "Logo der repræsenterer Docker-teknologierfaring",
    readMore: "Udforsk Docker for effektiv DevOps-testning",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker er en kraftfuld platform til udvikling, levering og kørsel af applikationer i containere, der sikrer konsistens på tværs af flere miljøer. Ideel til moderne DevOps-praksis.",
            list: []
        },
        {
            title: "Stærke sider ved Docker",
            description: "Docker udmærker sig med sine nøglefunktioner",
            list: [
                "Containerisering",
                "Miljøkonsistens",
                "Ressourceeffektivitet",
                "Skalerbarhed",
                "Isolering",
                "Hurtig implementering",
                "Forenklet konfiguration"
            ]
        },
        {
            title: "Udfordringer og løsninger",
            description: "Docker adresserer implementeringsudfordringer ved at levere containeriseringsløsninger, der forbedrer ydeevne, skalerbarhed og konsistens.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er Docker?",
            answer: "Docker er en platform, der bruger containerisering til at implementere applikationer i konsistente og isolerede miljøer."
        },
        {
            question: "Hvordan forbedrer Docker implementeringskonsistens?",
            answer: "Docker sikrer implementeringskonsistens ved at pakke applikationer og deres afhængigheder i containere, der kører ensartet på tværs af forskellige miljøer."
        },
        {
            question: "Hvad er fordelene ved at bruge Docker?",
            answer: "Fordelene ved at bruge Docker inkluderer miljøkonsistens, ressourceeffektivitet, skalerbarhed, isolering og hurtig implementering."
        }
    ]
}