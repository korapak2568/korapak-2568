import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {ImageUrl} from "@/image/ImageUrl";

export const GitHubNL: IDevOpsStack = {
    title: "GitHub",
    description: "Verbeter uw ontwikkelingsworkflow met GitHubs versiebeheersysteem en samenwerkingsplatform.",
    image: ImageUrl.devops.frameworks.github.thumbnail,
    alt: "Logo dat GitHub technologie-ervaring vertegenwoordigt",
    readMore: "Ontdek hoe GitHub effectieve DevOps-tests mogelijk maakt",
    link: "/technical-expertise/cloud-devops/github",
    features: [
        {
            title: "GitHub",
            description: "GitHub is een webgebaseerd platform dat Git-repository hosting, samenwerkingstools voor ontwikkeling en een breed scala aan integraties biedt, waardoor efficiënte en gezamenlijke softwareontwikkeling wordt bevorderd.",
            list: []
        },
        {
            title: "Sterke punten van GitHub",
            description: "GitHub blinkt uit met zijn belangrijkste functies",
            list: [
                "MetadataChorn-beheer",
                "Gezamenlijke ontwikkeling",
                "Pull requests",
                "Issue tracking",
                "Code review",
                "Continue integratie",
                "Uitgebreide integraties"
            ]
        },
        {
            title: "Uitdagingen en oplossingen",
            description: "GitHub pakt uitdagingen in de ontwikkelingsworkflow aan door robuust versiebeheer en samenwerkingstools te bieden voor efficiënt projectmanagement.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Wat is GitHub?",
            answer: "GitHub is een webgebaseerd platform dat Git-repository hosting en samenwerkingstools voor ontwikkeling biedt."
        },
        {
            question: "Hoe verbetert GitHub de samenwerking?",
            answer: "GitHub verbetert de samenwerking door functies zoals pull requests, issue tracking en code review aan te bieden om teamontwikkeling te vergemakkelijken."
        },
        {
            question: "Wat zijn de voordelen van het gebruik van GitHub?",
            answer: "De voordelen van het gebruik van GitHub zijn onder andere versiebeheer, gezamenlijke ontwikkeling, pull requests, issue tracking, code review, continue integratie en uitgebreide integraties."
        }
    ]
}