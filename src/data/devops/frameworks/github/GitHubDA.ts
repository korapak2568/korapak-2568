import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GitHubDA: IDevOpsStack = {
    title: "GitHub",
    description: "Forbedre din udviklingsarbejdsgang med GitHubs versionsstyring og samarbejdsplatform.",
    image: ImageUrl.devopsThumbnails.github.path,
    alt: "Logo der repræsenterer GitHub-teknologierfaring",
    readMore: "Lær hvordan GitHub understøtter effektiv DevOps-test",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub er en webbaseret platform, der tilbyder Git-repository-hosting, samarbejdsudviklingsværktøjer og en bred vifte af integrationer, hvilket fremmer effektiv og samarbejdende softwareudvikling.",
            list: []
        },
        {
            title: "GitHubs stærke sider",
            description: "GitHub udmærker sig med sine nøglefunktioner",
            list: [
                "MetadataChorn-kontrol",
                "Samarbejdsudvikling",
                "Pull-requests",
                "Problemsporing",
                "Kodegennemgang",
                "Kontinuerlig integration",
                "Omfattende integrationer"
            ]
        },
        {
            title: "Udfordringer og løsninger",
            description: "GitHub tackler udviklingsarbejdsgangens udfordringer ved at tilbyde robust versionsstyring og samarbejdsværktøjer til effektiv projektstyring.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er GitHub?",
            answer: "GitHub er en webbaseret platform, der tilbyder Git-repository-hosting og samarbejdsudviklingsværktøjer."
        },
        {
            question: "Hvordan forbedrer GitHub samarbejde?",
            answer: "GitHub forbedrer samarbejde ved at tilbyde funktioner som pull-requests, problemsporing og kodegennemgang for at lette teamudvikling."
        },
        {
            question: "Hvad er fordelene ved at bruge GitHub?",
            answer: "Fordelene ved at bruge GitHub omfatter versionsstyring, samarbejdsudvikling, pull-requests, problemsporing, kodegennemgang, kontinuerlig integration og omfattende integrationer."
        }
    ]
}