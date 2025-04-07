import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const DockerNL: IDevOpsStack = {
    title: "Docker",
    description: "Stroomlijn uw applicatie-implementatie met containerisatie voor consistente en efficiënte omgevingen.",
    image: ImageUrl.devopsThumbnails.docker.path,
    alt: "Logo dat Docker technologie-ervaring vertegenwoordigt",
    readMore: "Verken Docker voor efficiënte DevOps-tests",
    link: "/technical-expertise/cloud-devops/docker",
    features: [
        {
            title: "Docker",
            description: "Docker is een krachtig platform voor het ontwikkelen, leveren en uitvoeren van applicaties in containers, wat zorgt voor consistentie in meerdere omgevingen. Ideaal voor moderne DevOps-praktijken.",
            list: []
        },
        {
            title: "Sterke punten van Docker",
            description: "Docker blinkt uit met zijn belangrijkste functies",
            list: [
                "Containerisatie",
                "Omgevingsconsistentie",
                "Bronefficiëntie",
                "Schaalbaarheid",
                "Isolatie",
                "Snelle implementatie",
                "Vereenvoudigde configuratie"
            ]
        },
        {
            title: "Uitdagingen en Oplossingen",
            description: "Docker pakt implementatie-uitdagingen aan door containerisatie-oplossingen te bieden die prestaties, schaalbaarheid en consistentie verbeteren.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is Docker?",
            answer: "Docker is een platform dat containerisatie gebruikt om applicaties in consistente en geïsoleerde omgevingen te implementeren."
        },
        {
            question: "Hoe verbetert Docker de implementatieconsistentie?",
            answer: "Docker zorgt voor implementatieconsistentie door applicaties en hun afhankelijkheden te verpakken in containers die uniform werken in verschillende omgevingen."
        },
        {
            question: "Wat zijn de voordelen van het gebruik van Docker?",
            answer: "Voordelen van het gebruik van Docker zijn onder andere omgevingsconsistentie, bronefficiëntie, schaalbaarheid, isolatie en snelle implementatie."
        }
    ]
}