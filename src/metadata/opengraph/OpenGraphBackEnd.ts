import {IOpenGraphBackEnd} from "@/metadata/model/opengraph/IOpenGraphBackEnd";
import {MetadataImageVersion} from "../version/MetadataImageVersion";

export const OpenGraphBackEnd: IOpenGraphBackEnd = {
    main: {
        url: "/images/metadata/fullstack/fullstack-development-services.png" + MetadataImageVersion,
        alt: "CHORN's image of Back-End & API Development Banner"
    },
    dotnetcore: {
        url: "/images/metadata/fullstack/dotnet-core-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of .NET Core C# Development Banner"
    },
    go: {
        url: "/images/metadata/fullstack/go-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of Go Development Banner"
    },
    java: {
        url: "/images/metadata/fullstack/java-spring-boot-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of Java Spring Boot Development Banner"
    },
    nodejs: {
        url: "/images/metadata/fullstack/nodejs-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of Node.js Development Banner"
    },
    php: {
        url: "/images/metadata/fullstack/php-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of PHP Development Banner"
    },
    python: {
        url: "/images/metadata/fullstack/python-development-service.png" + MetadataImageVersion,
        alt: "CHORN's image of Python Development Banner"
    },
}