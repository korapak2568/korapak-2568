import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaNL: IFullStackStack = {
    title: "Java-ontwikkeling",
    description: "Java is een krachtige en flexibele programmeertaal die ideaal is voor moderne enterprise- en cloudapplicaties. Met Spring Boot, gRPC en ondersteuning voor RMI blijft Java essentieel voor schaalbare full-stack oplossingen.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java, Spring Boot, gRPC en RMI ontwikkeling",
    readMore: "Ontdek Java en Spring Boot oplossingen voor full-stack ontwikkeling",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Moderne Java-ontwikkeling",
            description: "Java blijft zich ontwikkelen met functies zoals records, pattern matching en virtual threads, wat resulteert in hogere productiviteit en prestaties.",
            list: [
                "Ondersteuning voor Java 17+ LTS",
                "Virtual threads voor betere schaalbaarheid",
                "Sterke typeveiligheid en onderhoudbaarheid",
                "Geschikt voor microservices en enterprise"
            ]
        },
        {
            title: "Spring Boot & cloud-native toepassingen",
            description: "Spring Boot vereenvoudigt het bouwen van REST API’s, microservices en cloudapplicaties door automatische configuratie en cloudintegratie.",
            list: [
                "Automatische configuratie en dependency management",
                "Microservice-architectuur",
                "REST API’s en WebSocket support",
                "Spring Cloud integratie"
            ]
        },
        {
            title: "Servicecommunicatie met gRPC en RMI",
            description: "Java gebruikt gRPC voor snelle communicatie tussen services en RMI om compatibiliteit met oudere systemen te behouden.",
            list: [
                "Hoge prestaties met binaire gRPC communicatie",
                "Legacy ondersteuning via RMI",
                "Beveiligde toegang op afstand",
                "Integratie van oude en nieuwe systemen"
            ]
        },
        {
            title: "Enterprise-oplossingen & J2EE-modernisering",
            description: "Jakarta EE en Spring moderniseren J2EE voor betere modulariteit en clouddeployment, met behoud van compatibiliteit.",
            list: [
                "Jakarta EE als opvolger van J2EE",
                "Deployment via Docker & Kubernetes",
                "Veilige enterprise architectuur",
                "Ondersteuning van legacy via moderne API's"
            ]
        }
    ],
    faqs: [
        {
            question: "Wat is Spring Boot?",
            answer: "Spring Boot is een framework om standalone Spring-applicaties te bouwen met ingebouwde server en automatische configuratie."
        },
        {
            question: "Hoe ondersteunt Java zowel nieuwe als oude systemen?",
            answer: "Java maakt gebruik van moderne frameworks zoals Spring Boot en gRPC, terwijl het via RMI en J2EE ook oude systemen ondersteunt."
        },
        {
            question: "Wat is gRPC en hoe werkt het in Java?",
            answer: "gRPC is een efficiënt RPC-framework dat gebruikt maakt van Protocol Buffers en wordt gebruikt voor communicatie tussen Java microservices."
        }
    ]
}