import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const GitHubDE: IDevOpsStack = {
    title: "GitHub",
    description: "Verbessern Sie Ihren Entwicklungsworkflow mit GitHubs Versionskontrolle und Kollaborationsplattform.",
    image: ImageUrl.devops.github.path,
    alt: "Logo, das die GitHub-Technologieerfahrung repräsentiert",
    readMore: "Erfahren Sie, wie GitHub effektives DevOps-Testing unterstützt",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub ist eine webbasierte Plattform, die Git-Repository-Hosting, kollaborative Entwicklungstools und eine breite Palette von Integrationen bietet und so eine effiziente und kollaborative Softwareentwicklung fördert.",
            list: []
        },
        {
            title: "Stärken von GitHub",
            description: "GitHub überzeugt mit seinen Schlüsselfunktionen",
            list: [
                "MetadataChorn-Kontrolle",
                "Kollaborative Entwicklung",
                "Pull-Requests",
                "Issue-Tracking",
                "Code-Review",
                "Kontinuierliche Integration",
                "Umfangreiche Integrationen"
            ]
        },
        {
            title: "Herausforderungen und Lösungen",
            description: "GitHub bewältigt die Herausforderungen des Entwicklungsworkflows durch robuste Versionskontrolle und kollaborative Tools für ein effizientes Projektmanagement.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist GitHub?",
            answer: "GitHub ist eine webbasierte Plattform, die Git-Repository-Hosting und kollaborative Entwicklungstools bereitstellt."
        },
        {
            question: "Wie verbessert GitHub die Zusammenarbeit?",
            answer: "GitHub verbessert die Zusammenarbeit durch Funktionen wie Pull-Requests, Issue-Tracking und Code-Review, um die Teamentwicklung zu erleichtern."
        },
        {
            question: "Welche Vorteile bietet die Nutzung von GitHub?",
            answer: "Zu den Vorteilen der Nutzung von GitHub gehören Versionskontrolle, kollaborative Entwicklung, Pull-Requests, Issue-Tracking, Code-Review, kontinuierliche Integration und umfangreiche Integrationen."
        }
    ]
}