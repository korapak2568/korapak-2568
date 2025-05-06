import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {ImageUrl} from "@/image/ImageUrl";

export const JavaDE: IFullStackStack = {
    title: "Java-Entwicklung",
    description: "Java ist eine leistungsstarke und flexible Programmiersprache, ideal für moderne Unternehmens- und Cloud-Anwendungen. Mit Spring Boot, gRPC und Unterstützung für RMI bleibt Java ein zentraler Bestandteil skalierbarer Full-Stack-Lösungen.",
    image: ImageUrl.backend.frameworks.java.thumbnail,
    alt: "Java-, Spring Boot-, gRPC- und RMI-Entwicklung",
    readMore: "Entdecken Sie umfassende Java- und Spring Boot-Lösungen für die Full-Stack-Entwicklung",
    link: "/technical-expertise/full-stack-developer/java-spring-boot-developer",
    features: [
        {
            title: "Moderne Java-Entwicklung",
            description: "Java entwickelt sich mit Features wie Records, Pattern Matching und Virtual Threads weiter und bietet höhere Produktivität und Leistung.",
            list: [
                "Unterstützung für Java 17+ LTS",
                "Virtual Threads für effizientes Multithreading",
                "Typsicherheit und Wartbarkeit",
                "Geeignet für Microservices und Unternehmenslösungen"
            ]
        },
        {
            title: "Spring Boot & Cloud-native Anwendungen",
            description: "Spring Boot bietet automatische Konfiguration und Cloud-Integration für die schnelle Entwicklung von REST-APIs, Microservices und modernen Full-Stack-Anwendungen.",
            list: [
                "Automatische Konfiguration und Abhängigkeitsmanagement",
                "Microservices-Architektur",
                "RESTful APIs & WebSocket-Unterstützung",
                "Spring Cloud-Integration"
            ]
        },
        {
            title: "gRPC & RMI zur Dienstkommunikation",
            description: "Java nutzt gRPC für leistungsstarke Interprozesskommunikation und RMI zur Anbindung an bestehende Systeme.",
            list: [
                "Effiziente binäre Kommunikation mit gRPC",
                "Abwärtskompatibilität mit RMI",
                "Sichere Fernzugriffe",
                "Integration alter und neuer Systeme"
            ]
        },
        {
            title: "Enterprise-Systeme & Modernisierung von Java EE",
            description: "Während Java EE eine Grundlage für Unternehmensanwendungen bot, modernisieren moderne Java-Frameworks wie Jakarta EE und Spring diese Systeme mit besserer Modularität, Geschwindigkeit und Cloud-Unterstützung – ohne die Kompatibilität mit Altsystemen zu verlieren.",
            list: [
                "Jakarta EE als Weiterentwicklung von Java EE",
                "Modernisierte Bereitstellung mit Docker und Kubernetes",
                "Sichere Unternehmensarchitekturen",
                "Unterstützung vorhandener Systeme mit modernen APIs"
            ]
        }
    ],
    faqs: [
        {
            question: "Was ist Spring Boot?",
            answer: "Spring Boot ist ein Framework zum schnellen Aufbau eigenständiger, produktionsbereiter Spring-Anwendungen mit eingebettetem Server."
        },
        {
            question: "Wie unterstützt Java neue und alte Systeme?",
            answer: "Java kombiniert moderne Tools wie Spring Boot und gRPC mit Legacy-Unterstützung über RMI und J2EE."
        },
        {
            question: "Was ist gRPC und wie wird es in Java verwendet?",
            answer: "gRPC ist ein leistungsfähiges RPC-Framework mit Protocol Buffers. Es wird in Java für die Kommunikation zwischen Microservices verwendet."
        }
    ]
}
