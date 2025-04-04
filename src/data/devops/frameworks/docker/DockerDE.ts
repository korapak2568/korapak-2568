import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import { ImageUrl } from "@/data/image/ImageUrl";

export const DockerDE: IDevOpsStack = {
    title: "Docker",
    description: "Optimieren Sie Ihre Anwendungsbereitstellung mit Containerisierung für konsistente und effiziente Umgebungen.",
    image: ImageUrl.devopsThumbnails.docker.path,
    alt: "Logo, das Docker-Technologieerfahrung repräsentiert",
    readMore: "Entdecken Sie Docker für effizientes DevOps-Testing",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker ist eine leistungsstarke Plattform für die Entwicklung, Bereitstellung und Ausführung von Anwendungen in Containern, die Konsistenz über mehrere Umgebungen hinweg gewährleistet. Ideal für moderne DevOps-Praktiken.",
            list: []
        },
        {
            title: "Stärken von Docker",
            description: "Docker überzeugt mit seinen Schlüsselfunktionen",
            list: [
                "Containerisierung",
                "Umgebungskonsistenz",
                "Ressourceneffizienz",
                "Skalierbarkeit",
                "Isolation",
                "Schnelle Bereitstellung",
                "Vereinfachte Konfiguration"
            ]
        },
        {
            title: "Herausforderungen und Lösungen",
            description: "Docker adressiert Bereitstellungsherausforderungen durch Containerisierungslösungen, die Leistung, Skalierbarkeit und Konsistenz verbessern.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist Docker?",
            answer: "Docker ist eine Plattform, die Containerisierung nutzt, um Anwendungen in konsistenten und isolierten Umgebungen bereitzustellen."
        },
        {
            question: "Wie verbessert Docker die Konsistenz bei der Bereitstellung?",
            answer: "Docker gewährleistet Bereitstellungskonsistenz, indem es Anwendungen und ihre Abhängigkeiten in Containern verpackt, die in verschiedenen Umgebungen einheitlich ausgeführt werden."
        },
        {
            question: "Welche Vorteile bietet die Nutzung von Docker?",
            answer: "Zu den Vorteilen der Nutzung von Docker gehören Umgebungskonsistenz, Ressourceneffizienz, Skalierbarkeit, Isolation und schnelle Bereitstellung."
        }
    ]
}