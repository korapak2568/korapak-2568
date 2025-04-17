import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaDA: IFullStackStack = {
    title: "Java-udvikling",
    description: "Java er et kraftfuldt og fleksibelt programmeringssprog, velegnet til moderne enterprise- og cloudbaserede applikationer. Med Spring Boot, gRPC og understøttelse af RMI er Java stadig en kernekomponent i skalerbare full-stack-løsninger.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java-, Spring Boot-, gRPC- og RMI-udvikling",
    readMore: "Udforsk Java og Spring Boot løsninger til full-stack udvikling",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Moderne Java-udvikling",
            description: "Java udvikler sig med moderne funktioner som records, pattern matching og virtuelle tråde, som giver øget produktivitet og ydeevne.",
            list: [
                "Support for Java 17+ LTS",
                "Virtuelle tråde forbedrer skalerbarhed",
                "Sikker typning og nem vedligeholdelse",
                "Velegnet til microservices og enterprise"
            ]
        },
        {
            title: "Spring Boot & cloud-native applikationer",
            description: "Spring Boot giver hurtig udvikling gennem automatisk konfiguration og cloudintegration – perfekt til REST APIs og microservices.",
            list: [
                "Automatisk konfiguration og afhængighedsstyring",
                "Microservice-arkitektur",
                "REST API- og WebSocket-support",
                "Integration med Spring Cloud"
            ]
        },
        {
            title: "Kommunikation med gRPC og RMI",
            description: "gRPC bruges til effektiv tjenestekommunikation, mens RMI muliggør integration med ældre systemer.",
            list: [
                "Højtydende binær kommunikation med gRPC",
                "RMI muliggør ældre systemintegration",
                "Sikker fjernadgang",
                "Sammenkobling af gamle og nye systemer"
            ]
        },
        {
            title: "Enterprise-løsninger og modernisering af J2EE",
            description: "Jakarta EE og Spring moderniserer J2EE med bedre modularitet og cloud-kompatibilitet, samtidig med at bagudkompatibilitet opretholdes.",
            list: [
                "Jakarta EE som efterfølger til J2EE",
                "Moderne deployment med Docker og Kubernetes",
                "Sikker enterprise-arkitektur",
                "Understøttelse af legacy gennem moderne APIs"
            ]
        }
    ],
    faqs: [
        {
            question: "Hvad er Spring Boot?",
            answer: "Spring Boot er et framework til at bygge selvstændige, produktionsklare Spring-applikationer med indbygget server."
        },
        {
            question: "Hvordan understøtter Java både nye og ældre systemer?",
            answer: "Java kombinerer moderne udvikling med Spring Boot og gRPC med legacy-support via RMI og J2EE."
        },
        {
            question: "Hvad er gRPC, og hvordan bruges det i Java?",
            answer: "gRPC er et effektivt RPC-framework, der bruger Protocol Buffers til kommunikation mellem Java microservices."
        }
    ]
}